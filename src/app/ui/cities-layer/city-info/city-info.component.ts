import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  ElementRef,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { Controls } from "src/app/controls";
import { MapUi } from "../../map-ui";
import { GameApi } from "src/app/api";
import { City } from "src/app/api/city";

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
    public elementRef: ElementRef<HTMLElement>,
    private game: GameApi,
    public controls: Controls,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    const el = this.elementRef.nativeElement;
    el.style.setProperty("--player-color", this.city.player.cssColor);

    const thisCity = this.game.state!.cityUpdated$.pipe(
      filter((c) => c.id === this.city.id),
    );

    merge(this.game.state!.turn$, thisCity)
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

  selectCity() {
    this.mapUi.selectCity(this.city);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }
}
