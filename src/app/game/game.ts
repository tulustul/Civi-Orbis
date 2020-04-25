import { Renderer } from '../renderer';
import { Camera, Transform } from '../renderer/camera';
import { Controls } from '../controls';
import { Player, PlayerType, PlayerSerialized } from './player';
import { TilesMap, MapSerialized } from './tiles-map';
import { BehaviorSubject } from 'rxjs';
import { UnitsManager } from './unit-manager';
import { TilesManager } from './tiles-manager';
import { Debug } from './debug';
import { UIState } from '../ui/ui-state';
import { UnitSerialized } from './unit';

interface GameSerialized {
  turn: number;
  map: MapSerialized;
  players: PlayerSerialized[];
  activePlayerIndex: number;
  units: UnitSerialized[];
  camera: Transform;
}

export class Game {
  debug = new Debug();

  map: TilesMap;

  camera: Camera;

  renderer = new Renderer(this);

  controls = new Controls(this);

  players: Player[] = [];

  activeHumanPlayer: Player | null;

  activePlayerIndex = -1;

  activePlayer$ = new BehaviorSubject<Player | null>(null);

  turn$ = new BehaviorSubject<number>(1);

  unitsManager = new UnitsManager(this);

  tilesManager = new TilesManager(this);

  uiState: UIState;

  start(map: TilesMap) {
    this.map = map;
    this.nextPlayer();
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

    if (this.activePlayer$.value?.type === PlayerType.human) {
      this.activeHumanPlayer = this.activePlayer$.value;
    }
  }

  nextTurn() {
    this.unitsManager.nextTurn();
    this.turn$.next(this.turn$.value + 1);
    this.controls.nextTurn();
  }

  clear() {
    this.players = [];
    this.activeHumanPlayer = null;
    this.activePlayerIndex = -1;
    this.activePlayer$.next(null);
    this.turn$.next(0);
    this.renderer.clear();
    this.unitsManager = new UnitsManager(this);
    this.tilesManager = new TilesManager(this);
  }

  serialize(): GameSerialized {
    return {
      turn: this.turn$.value,
      map: this.map.serialize(),
      players: this.players.map((p) => p.serialize()),
      activePlayerIndex: this.activePlayerIndex,
      units: this.unitsManager.serialize(),
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

    this.unitsManager.deserialize(data.units);

    this.activePlayerIndex = data.activePlayerIndex;
    if (this.activePlayer$.value?.type === PlayerType.human) {
      this.activeHumanPlayer = this.activePlayer$.value;
    }

    return this;
  }
}
