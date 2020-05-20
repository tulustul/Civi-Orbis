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

  // @HostBinding("style.width.px")
  // width: number;

  // @HostBinding("style.height.px")
  // height: number;

  constructor(
    private cdr: ChangeDetectorRef,
    private game: GameApi,
    private camera: Camera,
  ) {}

  ngOnInit(): void {
    if (!this.game.state) {
      return;
    }

    // this.width = this.game.state.map.width;
    // this.height = this.game.state.map.height * 0.75;

    merge(this.game.state.citySpawned$, this.game.state.cityDestroyed$)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateCities();
      });

    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());

    this.game.stop$.subscribe(() => {
      this.cities = [];
      this.cdr.markForCheck();
    });

    this.updateCities();
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
  }

  trackByCityId(index: number, city: City) {
    return city.id;
  }

  @HostBinding("style.opacity")
  get opacity() {
    const scale = this.camera.transform.scale;
    if (scale > 20) {
      return 1;
    }
    return Math.max(0, 1 - (20 - scale) / 8);
  }

  // @HostBinding("style.transform")
  // get transform() {
  //   let scale = this.camera.transform.scale;
  //   // scale = Math.pow(scale / 70, 0.4);
  //   // let [x, y] = getTileCoords(this.city.tile);
  //   const [x, y] = this.camera.canvasToScreen(this.width / 2, this.height / 2);
  //   return `translate(${x}px, ${y}px) scale(${scale})`;
  // }
}
