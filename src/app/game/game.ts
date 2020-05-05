import { Renderer } from "../renderer";
import { Camera, Transform } from "../renderer/camera";
import { Controls } from "../controls";
import { Player, PlayerType, PlayerSerialized } from "./player";
import { TilesMap, MapSerialized } from "./tiles-map";
import { BehaviorSubject } from "rxjs";
import { UnitsManager } from "./unit-manager";
import { TilesManager } from "./tiles-manager";
import { Debug } from "./debug";
import { UIState } from "../ui/ui-state";
import { UnitSerialized } from "./unit";
import { filter, distinctUntilChanged } from "rxjs/operators";
import { CitiesManager } from "./cities-manager";
import { CitySerialized } from "./city";
import { MapUi } from "./map-ui";
import { AreasManager } from "./areas-manager";

interface GameSerialized {
  turn: number;
  map: MapSerialized;
  players: PlayerSerialized[];
  activePlayerIndex: number;
  units: UnitSerialized[];
  cities: CitySerialized[];
  camera: Transform;
}

export class Game {
  debug = new Debug();

  map: TilesMap;

  mapUi = new MapUi(this);

  camera: Camera;

  renderer = new Renderer(this);

  controls = new Controls(this);

  areasManager = new AreasManager();

  players: Player[] = [];

  activePlayerIndex = -1;

  activePlayer$ = new BehaviorSubject<Player | null>(null);

  humanPlayer$ = this.activePlayer$.pipe(
    filter((p) => p?.type === PlayerType.human),
    distinctUntilChanged(),
  );

  humanPlayer: Player | null = null;

  turn$ = new BehaviorSubject<number>(1);

  unitsManager = new UnitsManager(this);

  tilesManager = new TilesManager(this);

  citiesManager = new CitiesManager(this);

  private _isStarted$ = new BehaviorSubject<boolean>(false);
  isStarted$ = this._isStarted$.asObservable();

  started$ = this.isStarted$.pipe(filter((s) => s));

  uiState: UIState;

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
  }

  nextTurn() {
    this.unitsManager.nextTurn();
    this.citiesManager.nextTurn();
    this.turn$.next(this.turn$.value + 1);
    this.controls.nextTurn();
  }

  clear() {
    this.players = [];
    this.activePlayerIndex = -1;
    this.activePlayer$.next(null);
    this.turn$.next(1);
    this.renderer.clear();
    this.unitsManager.clear();
    this.mapUi.clear();
    this.citiesManager.clear();
    this.areasManager.clear();
  }

  serialize(): GameSerialized {
    return {
      turn: this.turn$.value,
      map: this.map.serialize(),
      players: this.players.map((p) => p.serialize()),
      activePlayerIndex: this.activePlayerIndex,
      units: this.unitsManager.serialize(),
      cities: this.citiesManager.serialize(),
      camera: this.camera.serialize(),
    };
  }

  deserialize(data: GameSerialized) {
    this.turn$.next(data.turn);

    // First deserialize map as other entities depend on it.
    this.map = TilesMap.deserialize(data.map);

    // Then players as unit deserialization needs them.
    for (const playerData of data.players) {
      const player = Player.deserialize(this, playerData);
      this.addPlayer(player);
    }

    this.camera.transform$.next(data.camera);

    this.unitsManager.deserialize(data.units || []);
    this.citiesManager.deserialize(data.cities || []);

    this.activePlayerIndex = data.activePlayerIndex;
    this.activePlayer$.next(this.players[this.activePlayerIndex]);

    for (const player of this.players) {
      player.area.computeBorders();
    }

    return this;
  }
}
