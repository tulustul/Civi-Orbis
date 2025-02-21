import { bridge } from "@/bridge";
import {
  CityDetailsChanneled,
  TileChanneled,
  TileCoords,
  TileDetailsChanneled,
  TileHoverDetails,
  UnitChanneled,
  UnitDetailsChanneled,
} from "@/core/serialization/channel";
import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilChanged, map } from "rxjs/operators";

export class MapUi {
  private _hoveredTile$ = new BehaviorSubject<TileCoords | null>(null);
  hoveredTile$ = this._hoveredTile$.asObservable().pipe(distinctUntilChanged());

  private _tileHoverDetails$ = new BehaviorSubject<TileHoverDetails | null>(
    null,
  );
  tileHoverDetails$ = this._tileHoverDetails$
    .asObservable()
    .pipe(distinctUntilChanged());

  combatSimulation$ = this.tileHoverDetails$.pipe(
    map((d) => d?.combatSimulation),
    distinctUntilChanged(),
  );

  private _clickedTile$ = new Subject<TileCoords>();
  clickedTile$ = this._clickedTile$.asObservable();

  private _selectedTile$ = new BehaviorSubject<TileDetailsChanneled | null>(
    null,
  );
  selectedTile$ = this._selectedTile$.asObservable();

  private _highlightedTiles$ = new BehaviorSubject<Set<TileChanneled>>(
    new Set(),
  );
  highlightedTiles$ = this._highlightedTiles$.asObservable();

  private _activePath$ = new BehaviorSubject<TileCoords[][] | null>(null);
  activePath$ = this._activePath$.asObservable();

  private _yieldsVisible$ = new BehaviorSubject<boolean>(true);
  yieldsVisible$ = this._yieldsVisible$.pipe(distinctUntilChanged());

  private _selectedUnit$ = new BehaviorSubject<UnitDetailsChanneled | null>(
    null,
  );
  selectedUnit$ = this._selectedUnit$.asObservable();

  private _hoveredUnit$ = new BehaviorSubject<UnitChanneled | null>(null);
  hoveredUnit$ = this._hoveredUnit$.pipe(distinctUntilChanged());

  private _hoveredCity$ = new BehaviorSubject<number | null>(null);
  hoveredCity$ = this._hoveredCity$.pipe(distinctUntilChanged());

  private _selectedCity$ = new BehaviorSubject<CityDetailsChanneled | null>(
    null,
  );
  selectedCity$ = this._selectedCity$.pipe(distinctUntilChanged());

  private selectingTileEnabled = false;

  private _cityLabelsVisible$ = new BehaviorSubject<boolean>(true);
  cityLabelsVisible$ = this._cityLabelsVisible$.pipe(distinctUntilChanged());

  private _fogOfWarEnabled$ = new BehaviorSubject<boolean>(true);
  fogOfWarEnabled$ = this._fogOfWarEnabled$.pipe(distinctUntilChanged());

  private _gridEnabled$ = new BehaviorSubject<boolean>(true);
  gridEnabled$ = this._gridEnabled$.pipe(distinctUntilChanged());

  private _yieldsEnabled$ = new BehaviorSubject<boolean>(true);
  yieldsEnabled$ = this._yieldsEnabled$.pipe(distinctUntilChanged());

  allowMapPanning = true;

  constructor() {
    bridge.tiles.updated$.subscribe(async (tiles) => {
      const selectedTile = this._selectedTile$.value;
      if (selectedTile) {
        const newSelectedTile = tiles.find(
          (tile) => tile.id === selectedTile.id,
        );
        if (newSelectedTile) {
          const tileDetails = await bridge.tiles.getDetails(newSelectedTile.id);
          this._selectedTile$.next(tileDetails);
        }
      }
    });

    this.clickedTile$.subscribe(async (tile) => {
      const tileDetails = await bridge.tiles.getDetails(tile.id);
      if (!tileDetails) {
        return;
      }
      if (this.selectingTileEnabled) {
        this._selectedTile$.next(tileDetails);
      } else if (tileDetails.unitsIds.length) {
        if (this.selectedUnit?.tile.id !== tile.id) {
          this.selectFirstUnitFromTile(tileDetails);
        }
      } else if (tileDetails.cityId) {
        this.selectCity(tileDetails.cityId);
      } else {
        this.selectUnit(null);
        this.selectCity(null);
        this.setPath(null);
      }
    });

    this.hoveredTile$.subscribe(async (tile) => {
      if (!tile) {
        this._tileHoverDetails$.next(null);
        return;
      }
      const tileHoverDetails = await bridge.tiles.getHoverDetails({
        tileId: tile.id,
        selectedUnitId: this.selectedUnit?.id ?? null,
      });
      this._tileHoverDetails$.next(tileHoverDetails);
      if (!tileHoverDetails) {
        return;
      }
      if (!this._selectedCity$.value) {
        this.hoverCity(tileHoverDetails.tile.cityId ?? null);
      }
    });

    bridge.player.tracked$.subscribe(() => {
      this._selectedUnit$.next(null);
      // const tileOfInterest = player?.units[0]?.tile || player?.cities[0]?.tile;
      // if (tileOfInterest) {
      //   camera.moveToTile(tileOfInterest);
      // }
      this.setPath(null);
    });

    bridge.cities.revealed$.subscribe((data) => {
      if (data.action === "center") {
        this.selectCity(data.city.id);
      }
    });

    bridge.game.turn$.subscribe(() => this.setPath(null));

    // game.stop$.subscribe(() => this.clear());
  }

  // update() {
  // this._yieldsVisible$.next(camera.transform.scale > 40);
  // }

  get hoveredTile() {
    return this._hoveredTile$.value;
  }

  enableSelectingTile(enable: boolean) {
    this.selectingTileEnabled = enable;
    if (!enable) {
      this._selectedTile$.next(null);
    }
  }

  clickTile(tile: TileCoords) {
    this._clickedTile$.next(tile);
  }

  hoverTile(tile: TileCoords | null) {
    this._hoveredTile$.next(tile);
  }

  setPath(path: TileCoords[][] | null) {
    this._activePath$.next(path);
  }

  async selectCity(cityId: number | null) {
    if (cityId === null) {
      this._selectedCity$.next(null);
      this.allowMapPanning = true;
      return;
    }

    const city = await bridge.cities.getDetails(cityId);
    if (city?.visibilityLevel === "all") {
      this._selectedCity$.next(city);
      this.allowMapPanning = false;
    }
  }

  hoverCity(cityId: number | null) {
    this._hoveredCity$.next(cityId);
  }

  async selectUnit(unitId: number | null) {
    if (unitId === this.selectedUnit?.id) {
      return;
    }

    if (unitId === null) {
      this.clearSelectedUnit();
      return;
    }

    const unit = await bridge.units.getDetails(unitId);
    if (unit?.canControl) {
      if (unit) {
        // const unitDetails = new UnitDetails(game.state!, data);
        this._selectedUnit$.next(unit);
        this.setPath(unit.path);
      } else {
        this.setPath(null);
      }
    }
  }

  private clearSelectedUnit() {
    this._selectedUnit$.next(null);
  }

  private async selectFirstUnitFromTile(tile: TileChanneled) {
    if (tile.unitsIds.length) {
      this.selectUnit(tile.unitsIds[0]);
    }
  }

  get selectedUnit() {
    return this._selectedUnit$.value;
  }

  get selectedCity() {
    return this._selectedCity$.value;
  }

  get fogOfWarEnabled() {
    return this._fogOfWarEnabled$.value;
  }
  set fogOfWarEnabled(enabled: boolean) {
    this._fogOfWarEnabled$.next(enabled);
  }

  get gridEnabled() {
    return this._gridEnabled$.value;
  }
  set gridEnabled(enabled: boolean) {
    this._gridEnabled$.next(enabled);
  }

  get yieldsEnabled() {
    return this._yieldsEnabled$.value;
  }
  set yieldsEnabled(enabled: boolean) {
    this._yieldsEnabled$.next(enabled);
  }

  clear() {
    this.selectingTileEnabled = false;
    this._hoveredTile$.next(null);
    this._selectedTile$.next(null);
    this._highlightedTiles$.next(new Set());
  }
}

export const mapUi = new MapUi();
