import { Renderer } from '../renderer';
import { Camera } from '../renderer/camera';
import { Controls } from '../controls';
import { Player } from './player';
import { TilesMap } from './tiles-map';
import { BehaviorSubject } from 'rxjs';
import { UnitsManager } from './unit-manager';
import { TilesManager } from './tiles-manager';

export class Game {
  map: TilesMap;

  camera: Camera;

  renderer = new Renderer(this);

  controls = new Controls(this);

  players: Player[] = [];

  activePlayerIndex = -1;

  activePlayer$ = new BehaviorSubject<Player | null>(null);

  turn$ = new BehaviorSubject<number>(0);

  unitsManager = new UnitsManager();

  tilesManager = new TilesManager();

  start(map: TilesMap) {
    this.map = map;
    this.nextPlayer();
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
    this.turn$.next(this.turn$.value + 1);
  }
}
