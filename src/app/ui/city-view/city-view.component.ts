import { Component, OnInit, Input } from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { CityCore } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { Building } from "src/app/core/buildings";
import { UnitDefinition } from "src/app/core/unit.interface";
import { IdleProduct } from "src/app/core/idle-product";
import { MapUi } from "../map-ui";
import { Camera } from "src/app/renderer/camera";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
})
export class CityViewComponent implements OnInit {
  private quit$ = new Subject<void>();

  private _city: CityCore;

  constructor(private camera: Camera, private mapUi: MapUi) {}

  ngOnInit(): void {
    this.city.updateProductsList();
  }

  @Input() set city(city: CityCore) {
    this._city = city;

    this.camera.moveToTileWithEasing(this.city.tile);
    const [x, y] = this.camera.canvasToScreen(
      this.city.tile.x,
      this.city.tile.y,
    );
    this.camera.scaleToWithEasing(130, x, y);
    this.mapUi.highlightTiles(this.city.tiles);

    this.mapUi.clickedTile$.pipe(takeUntil(this.quit$)).subscribe((tile) => {
      if (!this.city.tiles.has(tile)) {
        this.quit();
      }
    });
  }

  produceBuilding(building: Building) {
    this.city.produceBuilding(building);
    this.city.updateProductsList();
  }

  produceUnit(unit: UnitDefinition) {
    this.city.produceUnit(unit);
    this.city.updateProductsList();
  }

  workOnIdleProduct(idleProduct: IdleProduct) {
    this.city.workOnIdleProduct(idleProduct);
    this.city.updateProductsList();
  }

  get city() {
    return this._city;
  }

  quit() {
    this.mapUi.selectCity(null);
    this.quit$.next();
  }
}
