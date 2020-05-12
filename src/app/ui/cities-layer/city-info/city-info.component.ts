import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  ChangeDetectorRef,
  OnDestroy,
  HostBinding,
  ElementRef,
} from "@angular/core";

import { Subject, merge } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { City } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { getTileCoords } from "src/app/renderer/utils";
import { Controls } from "src/app/controls";
import { MapUi } from "../../map-ui";
import { Camera } from "src/app/renderer/camera";

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
    private elementRef: ElementRef<HTMLElement>,
    private game: Game,
    private camera: Camera,
    public controls: Controls,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    const color = this.city.player.color.toString(16).padStart(6, "0");
    const el = this.elementRef.nativeElement;
    el.style.setProperty("--player-color", "#" + color);

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
    let scale = this.camera.transform$.value.scale;
    scale = Math.pow(scale / 70, 0.4);
    let [x, y] = getTileCoords(this.city.tile);
    [x, y] = this.camera.canvasToScreen(x + 0.5, y + 0.8);
    return `translate(${x}px, ${y}px) scale(${scale})`;
  }

  selectCity() {
    this.mapUi.selectCity(this.city);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }
}
