import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  HostBinding,
} from "@angular/core";

import { Subject, merge } from "rxjs";

import { City } from "src/app/game/city";
import { Game } from "src/app/game/game";
import { filter, takeUntil } from "rxjs/operators";
import { getTileCoords } from "src/app/renderer/utils";
import { UIState } from "../../ui-state";

@Component({
  selector: "app-city-info",
  templateUrl: "./city-info.component.html",
  styleUrls: ["./city-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CityInfoComponent implements OnInit, OnDestroy {
  private _city: City;

  ngUnsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    public game: Game,
    private ui: UIState,
  ) {}

  ngOnInit(): void {
    const thisCity = this.game.citiesManager.updated$.pipe(
      filter((c) => c.id === this.city.id),
    );

    merge(this.game.turn$, thisCity)
      .pipe(takeUntil(this.ngUnsubscribe))
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

  selectCity() {
    this.ui.selectedCity$.next(this.city);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  get growthPercent() {
    return (this.city.totalFood / this.city.foodToGrow) * 100;
  }

  get nextGrowthPercent() {
    return (
      ((this.city.totalFood + this.city.yields.food) / this.city.foodToGrow) *
      100
    );
  }

  get productionPercent() {
    if (!this.city.inProduction) {
      return 0;
    }
    return (
      (this.city.totalProduction / this.city.inProduction?.productionCost) * 100
    );
  }

  get nextProductionPercent() {
    if (!this.city.inProduction) {
      return 0;
    }
    return (
      ((this.city.totalProduction + this.city.yields.production) /
        this.city.inProduction?.productionCost) *
      100
    );
  }
}
