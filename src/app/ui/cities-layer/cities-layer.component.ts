import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  HostBinding,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Game } from "src/app/core/game";
import { City } from "src/app/core/city";

@Component({
  selector: "app-cities-layer",
  templateUrl: "./cities-layer.component.html",
  styleUrls: ["./cities-layer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesLayerComponent implements OnInit {
  ngUnsubscribe = new Subject<void>();

  cities: City[];

  constructor(private cdr: ChangeDetectorRef, private game: Game) {}

  ngOnInit(): void {
    merge(
      this.game.citiesManager.spawned$,
      this.game.citiesManager.destroyed$,
      this.game.humanPlayer$,
      this.game.tilesManager.revealedTiles$,
    )
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.updateCities();
      });

    this.game.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  updateCities() {
    const player = this.game.humanPlayer;
    this.cities = this.game.citiesManager.cities.filter((city) =>
      player?.exploredTiles.has(city.tile),
    );
    this.cdr.markForCheck();
  }

  trackByCityId(index: number, city: City) {
    return city.id;
  }

  @HostBinding("style.opacity")
  get opacity() {
    const scale = this.game.camera.transform$.value.scale;
    if (scale > 20) {
      return 1;
    }
    return Math.max(0, 1 - (20 - scale) / 8);
  }
}
