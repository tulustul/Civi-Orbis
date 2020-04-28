import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  HostBinding,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Game } from "src/app/game/game";
import { City } from "src/app/game/city";

@Component({
  selector: "app-cities-layer",
  templateUrl: "./cities-layer.component.html",
  styleUrls: ["./cities-layer.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CitiesLayerComponent implements OnInit {
  ngUnsubscribe = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private game: Game) {}

  ngOnInit(): void {
    merge(this.game.citiesManager.spawned$, this.game.citiesManager.destroyed$)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        this.cdr.markForCheck();
      });

    this.game.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  trackBycityId(index: number, city: City) {
    return city.id;
  }

  @HostBinding("style.transform")
  get transform() {
    // const t = this.game.camera.transform$.value;
    // const [x, y] = this.game.camera.canvasToScreen(0, 0);
    // return `translate(${x}px, ${y}px) scale(1)`;
    return "";
  }

  get cities() {
    return this.game.citiesManager.cities;
  }
}
