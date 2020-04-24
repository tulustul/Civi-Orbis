import { BehaviorSubject, Subject } from 'rxjs';

import { Tile } from './tile.interface';
import { Game } from './game';

export class TilesManager {
  activeTile$ = new BehaviorSubject<Tile | null>(null);

  private _revealedTiles$ = new Subject<Tile[]>();
  revealedTiles$ = this._revealedTiles$.asObservable();

  constructor(private game: Game) {}

  reveal(tiles: Tile[]) {
    this._revealedTiles$.next(tiles);
  }

  revealAll() {
    const tiles: Tile[] = [];
    for (let x = 0; x < this.game.map.width; x++) {
      for (let y = 0; y < this.game.map.height; y++) {
        const tile = this.game.map.tiles[x][y];
        this.game.activeHumanPlayer?.exploredTiles.add(tile);
        tiles.push(tile);
      }
    }
    this.reveal(tiles);
  }

  get activeTile() {
    return this.activeTile$.value;
  }
}
