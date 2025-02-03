import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
  input,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { CityDetails } from "src/app/api/city-details";
import { Tile } from "src/app/api/tile.interface";
import { Camera } from "src/app/renderer/camera";
import { MapUi } from "../../map-ui";

@Component({
  selector: "app-work-tiles",
  templateUrl: "./work-tiles.component.html",
  styleUrls: ["./work-tiles.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: false,
})
export class WorkTilesComponent implements OnInit, OnDestroy {
  city = input.required<CityDetails>();

  workedTiles = input.required<Set<Tile>>();

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private cdr: ChangeDetectorRef,
    private domSanitizer: DomSanitizer,
    private camera: Camera,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    this.mapUi.clickedTile$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((tile) => this.toggle(tile));

    this.camera.transform$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe(() => this.cdr.markForCheck());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  async toggle(tile: Tile) {
    if (this.workedTiles().has(tile)) {
      await this.city().unworkTile(tile);
    } else {
      await this.city().workTile(tile);
    }

    if (!this.ngUnsubscribe.isStopped) {
      this.updateWorkedTilesArea();
      this.cdr.markForCheck();
    }
  }

  updateWorkedTilesArea() {
    this.mapUi.cityWorkedTilesArea.setTiles(
      Array.from(this.city().workedTiles),
    );
    this.mapUi.cityNotWorkedTilesArea.setTiles(this.city().getNotWorkedTiles());
  }

  getTransform(tile: Tile) {
    const [x, y] = [tile.x + 0.5, tile.y + 0.1];
    const [screenX, screenY] = this.camera.gameToScreen(x, y);
    const scale = this.camera.transform.scale / 100;
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translate(${screenX}px, ${screenY}px) scale(${scale})`,
    );
  }
}
