import { Injectable } from "@angular/core";

import { BehaviorSubject, Subject } from "rxjs";
import { distinctUntilChanged } from "rxjs/operators";
7;
import { UIState } from "./ui-state";
import { Camera } from "../renderer/camera";
import { City } from "../api/city";
import { Unit } from "../api/unit";
import { GameApi } from "../api";
import { UnitDetails } from "../api/unit-details";
import { CityDetails } from "../api/city-details";
import { Area } from "../renderer/area";
import { Tile } from "../api/tile.interface";

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

  private _selectedUnit$ = new BehaviorSubject<UnitDetails | null>(null);
  selectedUnit$ = this._selectedUnit$.asObservable();

  private _hoveredUnit$ = new BehaviorSubject<Unit | null>(null);
  hoveredUnit$ = this._hoveredUnit$.pipe(distinctUntilChanged());

  private selectingTileEnabled = false;

  private _cityLabelsVisible$ = new BehaviorSubject<boolean>(true);
  cityLabelsVisible$ = this._cityLabelsVisible$.pipe(distinctUntilChanged());

  allowMapPanning = true;

  hoveredCity: City | null;

  unitRangeArea: Area;

  cityRangeArea: Area;
  cityBordersOnlyArea: Area;
  cityWorkedTilesArea: Area;
  cityNotWorkedTilesArea: Area;

  editorArea: Area;

  constructor(
    private game: GameApi,
    private camera: Camera,
    private uiState: UIState,
  ) {
    this.clickedTile$.subscribe((tile) => {
      if (this.selectingTileEnabled) {
        this._selectedTile$.next(tile);
      } else if (tile.units.length) {
        if (this.selectedUnit?.tile !== tile) {
          this.selectFirstUnitFromTile(tile);
        }
      } else if (tile?.city) {
        this.selectCity(tile.city);
      } else {
        this.selectUnit(null);
        this.setPath(null);
      }
    });

    this.hoveredTile$.subscribe((tile) => {
      if (!this.uiState.selectedCity$.value) {
        if (tile?.city) {
          this.hoverCity(tile.city);
        } else if (this.hoveredCity) {
          this.unhoverCity();
        }

        if (tile?.units.length) {
          this._hoveredUnit$.next(tile.units[0]);
        } else {
          this._hoveredUnit$.next(null);
        }
      }
    });

    this.game.state?.trackedPlayer$.subscribe((player) => {
      this._selectedUnit$.next(null);
      const tileOfInterest = player?.units[0]?.tile || player?.cities[0]?.tile;
      if (tileOfInterest) {
        this.camera.moveToTile(tileOfInterest);
      }
      this.setPath(null);
    });

    this.game.init$.subscribe(() => {
      this.game.state!.citySpawned$.subscribe((city) => {
        const trackedPlayer = this.game.state!.trackedPlayer;
        if (city.player.id === trackedPlayer.id && !trackedPlayer.isAi) {
          this.selectCity(city);
        }
      });

      this.game.state!.turn$.subscribe(() => this.setPath(null));

      const areasContainer = this.camera["renderer"].overlays.tilesContainer;

      this.unitRangeArea = new Area(this.game.state!, {
        color: 0xffffff,
        container: areasContainer,
        backgroundOpacity: 0.15,
        borderShadow: 0.4,
        borderSize: 0.0,
        borderShadowStrength: 2,
        visibleOnWater: true,
      });

      this.cityRangeArea = new Area(this.game.state!, {
        color: 0xffffff,
        container: areasContainer,
        backgroundOpacity: 0.2,
        borderShadow: 0.3,
        borderSize: 0.1,
        borderShadowStrength: 1.2,
        visibleOnWater: false,
      });

      this.cityBordersOnlyArea = new Area(this.game.state!, {
        color: 0xffffff,
        container: areasContainer,
        backgroundOpacity: 0,
        borderShadow: 0.3,
        borderSize: 0.1,
        borderShadowStrength: 1.2,
        visibleOnWater: false,
      });

      this.cityWorkedTilesArea = new Area(this.game.state!, {
        color: 0xffa001,
        container: areasContainer,
        backgroundOpacity: 0.2,
        borderShadow: 0.8,
        borderSize: 0,
        borderShadowStrength: 1,
        visibleOnWater: true,
      });

      this.cityNotWorkedTilesArea = new Area(this.game.state!, {
        color: 0xffffff,
        container: areasContainer,
        backgroundOpacity: 0.2,
        borderShadow: 0.3,
        borderSize: 0,
        borderShadowStrength: 1.5,
        visibleOnWater: false,
      });

      this.editorArea = new Area(this.game.state!, {
        color: 0xffffff,
        container: areasContainer,
        backgroundOpacity: 0.25,
        borderShadow: 0.5,
        borderSize: 0.05,
        borderShadowStrength: 1,
        visibleOnWater: true,
      });
    });

    this.game.stop$.subscribe(() => this.clear());
  }

  update() {
    this._yieldsVisible$.next(this.camera.transform.scale > 40);
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

  hoverTile(tile: Tile | null) {
    this._hoveredTile$.next(tile);
  }

  setPath(path: Tile[][] | null) {
    this._activePath$.next(path);
  }

  selectCity(city: City | null) {
    if (!city) {
      this.uiState.selectedCity$.next(null);
      this.allowMapPanning = true;
      return;
    }

    if (city.player.id === this.game.state?.trackedPlayer.id) {
      this.game.state.getCityDetails(city.id).then((data) => {
        const cityDetails = new CityDetails(this.game.state!, data);
        this.uiState.selectedCity$.next(cityDetails);
        this.cityRangeArea.setTiles(Array.from(cityDetails.tiles));
        this.allowMapPanning = false;
      });
    }
  }

  hoverCity(city: City) {
    this.hoveredCity = city;

    if (city.player.id === this.game.state?.trackedPlayer.id) {
      city.getWorkTiles().then((data) => {
        this.cityWorkedTilesArea.setTiles(data.workedTiles);
        this.cityNotWorkedTilesArea.setTiles(data.notWorkedTiles);
        this.cityBordersOnlyArea.setTiles(
          data.notWorkedTiles.concat(data.workedTiles),
        );
      });
    } else {
      city.getRange().then((tiles) => {
        this.cityRangeArea.setTiles(tiles);
      });
    }
  }

  unhoverCity() {
    this.cityWorkedTilesArea.clear();
    this.cityNotWorkedTilesArea.clear();
    this.cityBordersOnlyArea.clear();
    this.cityRangeArea.clear();
    this.hoveredCity = null;
  }

  async selectUnit(unit: Unit | null) {
    if (unit?.id === this.selectedUnit?.id) {
      return;
    }

    if (!unit) {
      this.clearSelectedUnit(!unit);
      return;
    }

    if (unit.player.id === this.game.state?.trackedPlayer.id) {
      const data = await this.game.state.getUnitDetails(unit.id);
      if (data) {
        const unitDetails = new UnitDetails(this.game.state!, data);
        this._selectedUnit$.next(unitDetails);
        this.game.state!.updateUnit(unitDetails.id);
        unitDetails
          .getRange()
          .then((tiles) => this.unitRangeArea.setTiles(tiles));
      }
      this.setPath(this._selectedUnit$.value?.path || null);
    }
  }

  private clearSelectedUnit(clearRange = true) {
    const previousUnit = this.selectedUnit;
    this._selectedUnit$.next(null);
    if (clearRange) {
      this.unitRangeArea.clear();
    }
    if (previousUnit) {
      this.game.state!.updateUnit(previousUnit.id);
    }
  }

  private selectFirstUnitFromTile(tile: Tile) {
    const trackedPlayerId = this.game.state!.trackedPlayer.id;
    for (const unit of tile.units) {
      if (!unit.parent && unit.player.id === trackedPlayerId) {
        this.selectUnit(unit);
        return;
      }
    }
  }

  get selectedUnit() {
    return this._selectedUnit$.value;
  }

  clear() {
    this.selectingTileEnabled = false;
    this._hoveredTile$.next(null);
    this._selectedTile$.next(null);
    this._highlightedTiles$.next(new Set());

    this.editorArea.clear();
    this.cityRangeArea.clear();
    this.unitRangeArea.clear();
    this.cityBordersOnlyArea.clear();
    this.cityWorkedTilesArea.clear();
    this.cityNotWorkedTilesArea.clear();
  }
}
