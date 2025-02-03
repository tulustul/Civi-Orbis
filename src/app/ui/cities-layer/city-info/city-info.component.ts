import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  input,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { GameApi } from "src/app/api";
import { City } from "src/app/api/city";
import { Controls } from "src/app/controls";
import { MapUi } from "../../map-ui";

@Component({
  selector: "app-city-info",
  templateUrl: "./city-info.component.html",
  styleUrls: ["./city-info.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class CityInfoComponent implements OnInit, OnDestroy {
  city = input.required<City>();

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

    const thisCity = this.game.state!.cityUpdated$.pipe(
      filter((c) => c.id === this.city().id),
    );

    merge(this.game.state!.turn$, thisCity)
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => {
        el.style.setProperty("--player-color", this.city().player.cssColor);
        this.cdr.markForCheck();
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  selectCity() {
    this.mapUi.selectCity(this.city());
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  get areDetailsVisible() {
    return this.city().player.id === this.game.state!.trackedPlayer.id;
  }
}
