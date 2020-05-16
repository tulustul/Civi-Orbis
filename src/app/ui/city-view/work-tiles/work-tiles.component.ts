import { Component, OnInit, Input, OnDestroy } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";

import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

import { CityCore } from "src/app/core/city";
import { TileCore } from "src/app/core/tile";
import { MapUi } from "../../map-ui";
import { Camera } from "src/app/renderer/camera";

@Component({
  selector: "app-work-tiles",
  templateUrl: "./work-tiles.component.html",
  styleUrls: ["./work-tiles.component.scss"],
})
export class WorkTilesComponent implements OnInit, OnDestroy {
  @Input() city: CityCore;

  private ngUnsubscribe = new Subject<void>();

  constructor(
    private domSanitizer: DomSanitizer,
    private camera: Camera,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    this.mapUi.clickedTile$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((tile) => this.toggle(tile));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggle(tile: TileCore) {
    if (this.city.workedTiles.has(tile)) {
      this.city.unworkTile(tile);
    } else {
      this.city.workTile(tile);
    }
  }

  getTransform(tile: TileCore) {
    const [x, y] = [tile.x + 0.5, tile.y + 0.1];
    const [screenX, screenY] = this.camera.gameToScreen(x, y);
    const scale = this.camera.transform$.value.scale / 100;
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translate(${screenX}px, ${screenY}px) scale(${scale})`,
    );
  }
}
