import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

import { Game } from "./game";
import { Tile } from "./tile";

export class MapUi {
  private _hoveredTile$ = new BehaviorSubject<Tile | null>(null);
  hoveredTile$ = this._hoveredTile$.asObservable().pipe(distinctUntilChanged());

  private _clickedTile$ = new Subject<Tile>();
  clickedTile$ = this._clickedTile$.asObservable();

  private _selectedTile$ = new BehaviorSubject<Tile | null>(null);
  selectedTile$ = this._selectedTile$.asObservable();

  private _highlightedTiles$ = new BehaviorSubject<Set<Tile>>(new Set());
  highlightedTiles$ = this._highlightedTiles$.asObservable();

  private selectingTileEnabled = false;

  cityLabelsVisible = true;

  allowMapPanning = true;

  constructor(private game: Game) {
    this.clickedTile$.subscribe((tile) => {
      if (this.selectingTileEnabled) {
        this._selectedTile$.next(tile);
      } else if (tile?.city && !tile.units.length) {
        this.game.uiState.selectedCity$.next(tile.city);
      }
    });

    this.hoveredTile$.subscribe((tile) => {
      if (tile?.city) {
        this.highlightTiles(tile.city.tiles);
      } else {
        this.highlightTiles(null);
      }
    });
  }

  update() {
    this.game.renderer.mapDrawer.yieldsContainer.visible =
      this.game.camera.transform$.value.scale > 40;
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

  clickTile(tile: Tile) {
    this._clickedTile$.next(tile);
  }

  highlightTiles(tiles: Set<Tile> | null) {
    tiles = tiles || new Set();
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
