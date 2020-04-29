import { BehaviorSubject, Subject } from "rxjs";

import { distinctUntilChanged } from "rxjs/operators";

import { Tile } from "./tile";
import { Game } from "./game";

export class TilesManager {
  private _hoveredTile$ = new BehaviorSubject<Tile | null>(null);
  hoveredTile$ = this._hoveredTile$.asObservable().pipe(distinctUntilChanged());

  private _selectedTile$ = new BehaviorSubject<Tile | null>(null);
  selectedTile$ = this._selectedTile$.asObservable();

  private _highlightedTiles$ = new BehaviorSubject<Set<Tile>>(new Set());
  highlightedTiles$ = this._highlightedTiles$.asObservable();

  private _updatedTile$ = new Subject<Tile>();
  updatedTile$ = this._updatedTile$.asObservable();

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

  updateTile(tile: Tile) {
    this._updatedTile$.next(tile);
  }

  get hoveredTile() {
    return this._hoveredTile$.value;
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

  highlightTiles(tiles: Set<Tile>) {
    this._highlightedTiles$.next(tiles);
  }

  hoverTile(tile: Tile | null) {
    this._hoveredTile$.next(tile);
  }

  clear() {
    this.selectingTileEnabled = false;
    this._hoveredTile$.next(null);
    this._selectedTile$.next(null);
    this._highlightedTiles$.next(new Set());
  }
}
