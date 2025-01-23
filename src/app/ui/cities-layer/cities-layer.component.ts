import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ViewChildren,
  AfterViewInit,
  ElementRef,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Camera } from "src/app/renderer/camera";
import { GameApi } from "src/app/api";
import { City } from "src/app/api/city";
import { CityInfoComponent } from "./city-info/city-info.component";
import { getTileCoords } from "src/app/renderer/utils";

@Component({
    selector: "app-cities-layer",
    templateUrl: "./cities-layer.component.html",
    styleUrls: ["./cities-layer.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class CitiesLayerComponent implements OnInit, AfterViewInit {
  ngUnsubscribe = new Subject<void>();

  @ViewChildren(CityInfoComponent) citiesComponents: CityInfoComponent[];

  cities: City[];

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef<HTMLElement>,
    private game: GameApi,
    private camera: Camera,
  ) {}

  ngOnInit(): void {
    if (!this.game.state) {
      return;
    }

    merge(
      this.game.state.citySpawned$,
      this.game.state.cityDestroyed$,
      this.game.state.tilesExplored$,
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateCities();
      });

    this.game.stop$.subscribe(() => {
      this.cities = [];
      this.cdr.markForCheck();
    });

    this.updateCities();
  }

  ngAfterViewInit() {
    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.updateTransforms());
  }

  updateTransforms() {
    const el = this.elementRef.nativeElement;
    let scale = this.camera.transform.scale;
    const box = this.camera.tileBoundingBox;

    let opacity = 1;
    if (scale < 30) {
      opacity = Math.max(0, 1 - (30 - scale) / 8);
    }
    el.style.opacity = opacity.toString();

    if (opacity === 0) {
      return;
    }

    for (const cityComponent of this.citiesComponents) {
      const tile = cityComponent.city.tile;
      const cityEl = cityComponent.elementRef.nativeElement;
      if (
        tile.x >= box.xStart &&
        tile.x <= box.xEnd &&
        tile.y >= box.yStart &&
        tile.y <= box.yEnd
      ) {
        cityEl.style.display = "flex";
      } else {
        cityEl.style.display = "none";
        continue;
      }

      const cityScale = Math.pow(scale / 70, 0.4);
      let [x, y] = getTileCoords(cityComponent.city.tile);
      [x, y] = this.camera.canvasToScreen(x + 0.5, y + 0.8);
      cityEl.style.transform = `translate(${x}px, ${y}px) scale(${cityScale})`;
    }
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateCities() {
    const player = this.game.state!.trackedPlayer;
    this.cities = this.game.state!.cities.filter((city) =>
      player.exploredTiles.has(city.tile),
    );
    this.cdr.markForCheck();

    setTimeout(() => this.updateTransforms());
  }

  trackByCityId(index: number, city: City) {
    return city.id;
  }
}
