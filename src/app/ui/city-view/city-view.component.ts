import {
  Component,
  OnInit,
  Input,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChild,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Building } from "src/app/core/buildings";
import { UnitDefinition } from "src/app/core/unit.interface";
import { IdleProduct } from "src/app/core/idle-product";
import { MapUi } from "../map-ui";
import { Camera } from "src/app/renderer/camera";
import { CityDetails } from "src/app/api/city-details";
import { WorkTilesComponent } from "./work-tiles/work-tiles.component";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityViewComponent implements OnInit {
  @ViewChild("workTiles") workTilesComponent: WorkTilesComponent;

  private quit$ = new Subject<void>();

  private _city: CityDetails;

  constructor(
    private cdr: ChangeDetectorRef,
    private camera: Camera,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    // this.city.updateProductsList();
    this.mapUi.hoverCity(this.city.citySimple);
  }

  @Input() set city(city: CityDetails) {
    this._city = city;

    this.camera.moveToTileWithEasing(this.city.tile);
    const [x, y] = this.camera.canvasToScreen(
      this.city.tile.x,
      this.city.tile.y,
    );
    this.camera.scaleToWithEasing(130, x, y);

    this.mapUi.clickedTile$.pipe(takeUntil(this.quit$)).subscribe((tile) => {
      if (!this.city.tiles.has(tile)) {
        this.quit();
      }
    });
  }

  async produceBuilding(building: Building) {
    await this.city.produceBuilding(building);
    this.cdr.markForCheck();
  }

  async produceUnit(unit: UnitDefinition) {
    await this.city.produceUnit(unit);
    this.cdr.markForCheck();
  }

  async workOnIdleProduct(idleProduct: IdleProduct) {
    await this.city.workOnIdleProduct(idleProduct);
    this.cdr.markForCheck();
  }

  async optimizeYields() {
    await this.city.optimizeYields();
    this.workTilesComponent.updateWorkedTilesArea();
    this.cdr.markForCheck();
  }

  get city() {
    return this._city;
  }

  quit() {
    this.mapUi.selectCity(null);
    this.mapUi.unhoverCity();
    this.quit$.next();
  }
}
