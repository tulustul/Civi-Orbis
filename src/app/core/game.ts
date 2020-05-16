import { BehaviorSubject, ReplaySubject } from "rxjs";
import { filter, distinctUntilChanged } from "rxjs/operators";

import {
  Player,
  PlayerSerialized,
  TrackedPlayerChanneled,
  PlayerChanneled,
} from "./player";
import { TilesMapCore, MapSerialized, MapChanneled } from "./tiles-map";
import { UnitsManager } from "./unit-manager";
import { TilesManager } from "./tiles-manager";
import { Debug } from "./debug";
import { UnitSerialized, UnitChanneled } from "./unit";
import { CitiesManager } from "./cities-manager";
import { CitySerialized, CityChanneled } from "./city";
import { AreasManager } from "./areas-manager";

interface GameSerialized {
  turn: number;
  map: MapSerialized;
  players: PlayerSerialized[];
  activePlayerIndex: number;
  units: UnitSerialized[];
  cities: CitySerialized[];
}

export interface GameChanneled {
  turn: number;
  map: MapChanneled;
  players: PlayerChanneled[];
  trackedPlayer: TrackedPlayerChanneled;
  units: UnitChanneled[];
  cities: CityChanneled[];
}

export class Game {
  debug = new Debug();

  map: TilesMapCore;

  players: Player[] = [];

  activePlayerIndex = -1;

  activePlayer$ = new BehaviorSubject<Player | null>(null);

  humanPlayer$ = this.activePlayer$.pipe(
    filter((p) => !p?.ai),
    distinctUntilChanged(),
  );

  humanPlayer: Player | null = null;

  turn$ = new BehaviorSubject<number>(1);

  areasManager = new AreasManager();

  unitsManager = new UnitsManager(this);

  tilesManager = new TilesManager(this);

  citiesManager = new CitiesManager(this);

  private _isStarted$ = new ReplaySubject<boolean>(1);
  isStarted$ = this._isStarted$.pipe(distinctUntilChanged());

  started$ = this.isStarted$.pipe(filter((s) => s));

  stopped$ = this.isStarted$.pipe(filter((s) => !s));

  constructor() {
    this.humanPlayer$.subscribe((player) => (this.humanPlayer = player));
  }

  start() {
    this.activePlayerIndex = -1;
    this.nextPlayer();
    this._isStarted$.next(true);
  }

  addPlayer(player: Player) {
    player.id = this.players.length;
    this.players.push(player);
  }

  nextPlayer() {
    this.activePlayerIndex++;
    if (this.activePlayerIndex >= this.players.length) {
      this.nextTurn();
      this.activePlayerIndex = 0;
    }
    this.activePlayer$.next(this.players[this.activePlayerIndex]);

    if (this.activePlayer$.value?.ai) {
      this.activePlayer$.value.ai.nextTurn();
      this.nextPlayer();
    }
  }

  nextTurn() {
    this.unitsManager.nextTurn();
    this.citiesManager.nextTurn();
    for (const player of this.players) {
      player.nextTurn();
    }
    this.turn$.next(this.turn$.value + 1);
  }

  clear() {
    this.players = [];
    this.activePlayerIndex = -1;
    this.activePlayer$.next(null);
    this.turn$.next(1);
    this.unitsManager.clear();
    this.citiesManager.clear();
    this.areasManager.clear();

    this._isStarted$.next(false);
  }

  serialize(): GameSerialized {
    return {
      turn: this.turn$.value,
      map: this.map.serialize(),
      players: this.players.map((p) => p.serialize()),
      activePlayerIndex: this.activePlayerIndex,
      units: this.unitsManager.serialize(),
      cities: this.citiesManager.serialize(),
    };
  }

  serializeToChannel(): GameChanneled {
    const trackedPlayer = this.humanPlayer || this.players[0];
    return {
      turn: this.turn$.value,
      map: this.map.serializeToChannel(),
      players: this.players.map((p) => p.serializeToChannel()),
      trackedPlayer: trackedPlayer.serializeToTrackedPlayer(),
      units: this.unitsManager.serializeToChannel(),
      cities: this.citiesManager.serializeToChannel(),
    };
  }

  deserialize(data: GameSerialized) {
    this.turn$.next(data.turn);

    // First deserialize map as other entities depend on it.
    this.map = TilesMapCore.deserialize(data.map);

    // Then players as unit deserialization needs them.
    for (const playerData of data.players) {
      const player = Player.deserialize(this, playerData);
      this.addPlayer(player);
    }

    this.unitsManager.deserialize(data.units || []);
    this.citiesManager.deserialize(data.cities || []);

    this.activePlayerIndex = data.activePlayerIndex;
    this.activePlayer$.next(this.players[this.activePlayerIndex]);

    for (const player of this.players) {
      player.area.computeBorders();
      player.area.update();
      player.updateCitiesWithoutProduction();
      player.updateUnitsWithoutOrders();
      player.updateYields();
    }

    return this;
  }
}
