import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  HostBinding,
} from "@angular/core";

import { Subject } from "rxjs";

import { City } from "src/app/game/city";
import { Game } from "src/app/game/game";
import { filter, takeUntil } from "rxjs/operators";
import { getTileCoords } from "src/app/renderer/utils";

@Component({
  selector: "app-city-info",
  templateUrl: "./city-info.component.html",
  styleUrls: ["./city-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityInfoComponent implements OnInit, OnDestroy {
  private _city: City;

  ngUnsubscribe = new Subject<void>();

  constructor(private cdr: ChangeDetectorRef, private game: Game) {}

  ngOnInit(): void {
    this.game.citiesManager.updated$
      .pipe(
        filter((c) => c.id === this.city.id),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  @Input() set city(city: City) {
    this._city = city;
  }
  get city() {
    return this._city;
  }

  @HostBinding("style.transform")
  get transform() {
    // FIXME: This migth lead to performance issues. It is calculated for every city every time camera transform changes.
    let [x, y] = getTileCoords(this.city.tile);
    [x, y] = this.game.camera.canvasToScreen(x + 0.5, y + 0.8);
    return `translate(${x}px, ${y}px) scale(1)`;
  }
}
