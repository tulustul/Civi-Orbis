import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";

import { Game } from "./game";
import { Tile } from "./tile";
import { Unit } from "./unit";
import { City } from "./city";

export class MapUi {
  private _hoveredTile$ = new BehaviorSubject<Tile | null>(null);
  hoveredTile$ = this._hoveredTile$.asObservable().pipe(distinctUntilChanged());

  private _clickedTile$ = new Subject<Tile>();
  clickedTile$ = this._clickedTile$.asObservable();

  private _selectedTile$ = new BehaviorSubject<Tile | null>(null);
  selectedTile$ = this._selectedTile$.asObservable();

  private _highlightedTiles$ = new BehaviorSubject<Set<Tile>>(new Set());
  highlightedTiles$ = this._highlightedTiles$.asObservable();

  private _activePath$ = new BehaviorSubject<Tile[][] | null>(null);
  activePath$ = this._activePath$.asObservable();

  private selectingTileEnabled = false;

  cityLabelsVisible = true;

  allowMapPanning = true;

  constructor(private game: Game) {
    this.clickedTile$.subscribe((tile) => {
      if (this.selectingTileEnabled) {
        this._selectedTile$.next(tile);
      } else if (tile.units.length) {
        let unit: Unit | null = tile.units[0];
        if (unit.player !== this.game.humanPlayer) {
          unit = null;
        }
        this.game.unitsManager.activeUnit$.next(unit);
        this.setPath(unit?.path || null);
      } else if (tile?.city) {
        this.selectCity(tile.city);
      } else {
        this.game.unitsManager.activeUnit$.next(null);
        this.setPath(null);
      }
    });

    this.hoveredTile$.subscribe((tile) => {
      if (tile?.city) {
        this.highlightTiles(tile.city.tiles);
      } else {
        this.highlightTiles(null);
      }
    });

    this.game.activePlayer$.subscribe(() => {
      this.game.unitsManager.activeUnit$.next(null);
    });

    this.game.humanPlayer$.subscribe((player) => {
      const tileOfInterest = player?.units[0]?.tile || player?.cities[0]?.tile;
      if (tileOfInterest) {
        this.game.camera.moveToTile(tileOfInterest);
      }
      this.setPath(null);
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

  setPath(path: Tile[][] | null) {
    this._activePath$.next(path);
  }

  selectCity(city: City) {
    if (city.player === this.game.humanPlayer) {
      this.game.uiState.selectedCity$.next(city);
    }
  }

  clear() {
    this.selectingTileEnabled = false;
    this._hoveredTile$.next(null);
    this._selectedTile$.next(null);
    this._highlightedTiles$.next(new Set());
  }
}
