import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Camera } from "src/app/renderer/camera";
import { GameApi } from "src/app/api";
import { City } from "src/app/api/city";

@Component({
  selector: "app-cities-layer",
  templateUrl: "./cities-layer.component.html",
  styleUrls: ["./cities-layer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesLayerComponent implements OnInit {
  ngUnsubscribe = new Subject<void>();

  cities: City[];

  constructor(
    private cdr: ChangeDetectorRef,
    private game: GameApi,
    private camera: Camera,
  ) {}

  ngOnInit(): void {
    if (!this.game.state) {
      return;
    }
    merge(this.game.state.citySpawned$, this.game.state.cityDestroyed$)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateCities();
      });

    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateCities() {
    // const player = this.game.humanPlayer;
    // this.cities = this.game.citiesManager.cities.filter((city) =>
    //   player?.exploredTiles.has(city.tile),
    // );
    this.cities = this.game.state!.cities;
    this.cdr.markForCheck();
  }

  trackByCityId(index: number, city: City) {
    return city.id;
  }

  @HostBinding("style.opacity")
  get opacity() {
    const scale = this.camera.transform$.value.scale;
    if (scale > 20) {
      return 1;
    }
    return Math.max(0, 1 - (20 - scale) / 8);
  }
}
