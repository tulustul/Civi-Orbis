import { BehaviorSubject, Subject } from 'rxjs';

import { Tile } from './tile.interface';
import { Game } from './game';

export class TilesManager {
  hoveredTile$ = new BehaviorSubject<Tile | null>(null);

  selectedTile$ = new BehaviorSubject<Tile | null>(null);

  updatedTile$ = new Subject<Tile>();

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

  get hoveredTile() {
    return this.hoveredTile$.value;
  }
}
