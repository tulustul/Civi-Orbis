import {
  Component,
  OnInit,
  Input,
  OnDestroy,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { MapUi } from "../../map-ui";
import { Camera } from "src/app/renderer/camera";
import { Tile } from "src/app/shared";
import { CityDetails } from "src/app/api/city-details";

@Component({
  selector: "app-work-tiles",
  templateUrl: "./work-tiles.component.html",
  styleUrls: ["./work-tiles.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkTilesComponent implements OnInit, OnDestroy {
  @Input() city: CityDetails;

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

  toggle(tile: Tile) {
    if (this.city.workedTiles.has(tile)) {
      // this.city.unworkTile(tile);
    } else {
      // this.city.workTile(tile);
    }
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
