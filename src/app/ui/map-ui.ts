import { Injectable } from "@angular/core";

import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
7;
import { Tile } from "../core/tile";
import { Game } from "../core/game";
import { UIState } from "./ui-state";
import { City } from "../core/city";
import { Unit } from "../core/unit";

@Injectable()
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

  private _yieldsVisible$ = new BehaviorSubject<boolean>(true);
  yieldsVisible$ = this._yieldsVisible$.pipe(distinctUntilChanged());

  private selectingTileEnabled = false;

  cityLabelsVisible = true;

  allowMapPanning = true;

  constructor(private game: Game, private uiState: UIState) {
    this.clickedTile$.subscribe((tile) => {
      if (this.selectingTileEnabled) {
        this._selectedTile$.next(tile);
      } else if (tile.units.length) {
        this.selectUnit(tile.units[0]);
      } else if (tile?.city) {
        this.selectCity(tile.city);
      } else {
        this.game.unitsManager.activeUnit$.next(null);
        this.setPath(null);
      }
    });

    this.hoveredTile$.subscribe((tile) => {
      if (!this.uiState.selectedCity$.value) {
        if (tile?.city) {
          this.highlightTiles(tile.city.tiles);
        } else {
          this.highlightTiles(null);
        }
      }
    });

    this.game.citiesManager.spawned$.subscribe((city) => {
      if (city.player === this.game.humanPlayer) {
        this.selectCity(city);
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

    this.game.turn$.subscribe(() => this.setPath(null));

    this.game.stopped$.subscribe(() => this.clear());
  }

  update() {
    this._yieldsVisible$.next(this.game.camera.transform$.value.scale > 40);
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

  selectCity(city: City | null) {
    if (!city) {
      this.uiState.selectedCity$.next(city);
      this.highlightTiles(null);
      this.cityLabelsVisible = true;
      this.allowMapPanning = true;
      return;
    }

    if (city.player === this.game.humanPlayer) {
      this.uiState.selectedCity$.next(city);
      if (city) {
        this.highlightTiles(city.tiles);
        this.cityLabelsVisible = false;
        this.allowMapPanning = false;
      }
    }
  }

  selectUnit(unit: Unit) {
    if (unit.player === this.game.humanPlayer) {
      this.game.unitsManager.activeUnit$.next(unit);
      this.setPath(unit.path || null);
    }
  }

  clear() {
    this.selectingTileEnabled = false;
    this._hoveredTile$.next(null);
    this._selectedTile$.next(null);
    this._highlightedTiles$.next(new Set());
  }
}
