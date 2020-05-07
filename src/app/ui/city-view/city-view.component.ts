import { Component, OnInit, Input } from "@angular/core";

import { City } from "src/app/core/city";
import { UNITS_DEFINITIONS } from "src/app/data/units";
import { BUILDINGS } from "src/app/data/buildings";
import { UIState } from "../ui-state";
import { Game } from "src/app/core/game";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Building } from "src/app/core/buildings";
import { UnitDefinition } from "src/app/core/unit.interface";
import {
  ProductDefinition,
  getAvailableProducts,
  getDisabledProducts,
} from "src/app/core/product";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
})
export class CityViewComponent implements OnInit {
  units: UnitDefinition[] = [];

  buildings: Building[] = [];

  disabledUnits = new Set<UnitDefinition>();

  disabledBuildings = new Set<Building>();

  private quit$ = new Subject<void>();

  private _city: City;

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {
    this.game.mapUi.cityLabelsVisible = false;
    this.game.mapUi.allowMapPanning = false;

    this.buildBuildingsList();

    this.units = getAvailableProducts<UnitDefinition>(
      UNITS_DEFINITIONS,
      this.city,
    );
    this.disabledUnits = getDisabledProducts<UnitDefinition>(
      this.units,
      this.city,
    );
  }

  @Input() set city(city: City) {
    this._city = city;

    this.game.camera.moveToTileWithEasing(this.city.tile);
    const [x, y] = this.game.camera.canvasToScreen(
      this.city.tile.x,
      this.city.tile.y,
    );
    this.game.camera.scaleToWithEasing(130, x, y);
    this.game.mapUi.highlightTiles(this.city.tiles);

    this.game.mapUi.clickedTile$
      .pipe(takeUntil(this.quit$))
      .subscribe((tile) => {
        if (!this.city.tiles.has(tile)) {
          this.quit();
        }
      });
  }

  private buildBuildingsList() {
    const notBuildBuildings = BUILDINGS.filter(
      (b) =>
        this.city.currentProduct?.productDefinition !== b &&
        !this.city.buildings.includes(b),
    );

    this.buildings = getAvailableProducts<Building>(
      notBuildBuildings,
      this.city,
    );
    this.disabledBuildings = getDisabledProducts<Building>(
      this.buildings,
      this.city,
    );
  }

  produceBuilding(building: Building) {
    this.city.produceBuilding(building);
    this.buildBuildingsList();
  }

  produceUnit(unit: UnitDefinition) {
    this.city.produceUnit(unit);
    this.buildBuildingsList();
  }

  get city() {
    return this._city;
  }

  quit() {
    this.uiState.selectedCity$.next(null);
    this.game.mapUi.highlightTiles(null);
    this.game.mapUi.cityLabelsVisible = true;
    this.game.mapUi.allowMapPanning = true;
    this.quit$.next();
  }
}
