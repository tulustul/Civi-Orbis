import { BehaviorSubject, Subject } from 'rxjs';

import { Tile } from './tile.interface';
import { Game } from './game';

export class TilesManager {
  hoveredTile$ = new BehaviorSubject<Tile | null>(null);

  private _selectedTile$ = new BehaviorSubject<Tile | null>(null);
  selectedTile$ = this._selectedTile$.asObservable();

  updatedTile$ = new Subject<Tile>();

  private _revealedTiles$ = new Subject<Tile[]>();
  revealedTiles$ = this._revealedTiles$.asObservable();

  private selectingTileEnabled = false;

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

  enableSelectingTile(enable: boolean) {
    this.selectingTileEnabled = enable;
    if (!enable) {
      this._selectedTile$.next(null);
    }
  }

  selectTile(tile: Tile | null) {
    if (this.selectingTileEnabled) {
      this._selectedTile$.next(tile);
    }
  }
}
