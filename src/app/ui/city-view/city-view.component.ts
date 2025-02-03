import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
  effect,
  input,
} from "@angular/core";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { CityDetails } from "src/app/api/city-details";
import {
  Building,
  IdleProduct,
  UnitDefinition,
} from "src/app/core/data.interface";
import { Camera } from "src/app/renderer/camera";
import { MapUi } from "../map-ui";
import { UIState } from "../ui-state";
import { UiView } from "../ui-view";
import { WorkTilesComponent } from "./work-tiles/work-tiles.component";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CityViewComponent implements OnInit, OnDestroy, UiView {
  city = input.required<CityDetails>();

  private onCity = effect(() => {
    const city = this.city();
    this.camera.moveToTileWithEasing(city.tile);
    const [x, y] = this.camera.canvasToScreen(city.tile.x, city.tile.y);
    this.camera.scaleToWithEasing(130, x, y);

    this.mapUi.clickedTile$.pipe(takeUntil(this.quit$)).subscribe((tile) => {
      if (!city.tiles.has(tile)) {
        this.quit();
      }
    });
  });

  @ViewChild("workTiles") workTilesComponent!: WorkTilesComponent;

  private quit$ = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private camera: Camera,
    private mapUi: MapUi,
    private uiState: UIState,
  ) {}

  ngOnInit(): void {
    this.uiState.activeView = this;
    this.mapUi.hoverCity(this.city().citySimple);
  }

  ngOnDestroy() {
    this.uiState.activeView = null;
  }

  async produceBuilding(building: Building) {
    await this.city().produceBuilding(building);
    this.cdr.markForCheck();
  }

  async produceUnit(unit: UnitDefinition) {
    await this.city().produceUnit(unit);
    this.cdr.markForCheck();
  }

  async workOnIdleProduct(idleProduct: IdleProduct) {
    await this.city().workOnIdleProduct(idleProduct);
    this.cdr.markForCheck();
  }

  async optimizeYields() {
    await this.city().optimizeYields();
    this.workTilesComponent.updateWorkedTilesArea();
    this.cdr.markForCheck();
  }

  quit() {
    this.mapUi.selectCity(null);
    this.mapUi.unhoverCity();
    this.quit$.next();
  }
}
