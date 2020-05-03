import { Component, OnInit, Input, OnDestroy } from "@angular/core";

import { City } from "src/app/game/city";
import { Tile } from "src/app/game/tile";
import { Game } from "src/app/game/game";
import { DomSanitizer } from "@angular/platform-browser";
import { takeUntil } from "rxjs/operators";
import { Subject } from "rxjs";

@Component({
  selector: "app-work-tiles",
  templateUrl: "./work-tiles.component.html",
  styleUrls: ["./work-tiles.component.scss"],
})
export class WorkTilesComponent implements OnInit, OnDestroy {
  @Input() city: City;

  private ngUnsubscribe = new Subject<void>();

  constructor(private domSanitizer: DomSanitizer, private game: Game) {}

  ngOnInit(): void {
    this.game.mapUi.clickedTile$
      .pipe(takeUntil(this.ngUnsubscribe))
      .subscribe((tile) => this.toggle(tile));
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }

  toggle(tile: Tile) {
    if (this.city.workedTiles.has(tile)) {
      this.city.unworkTile(tile);
    } else {
      this.city.workTile(tile);
    }
  }

  getTransform(tile: Tile) {
    const [x, y] = [tile.x + 0.5, tile.y + 0.1];
    const [screenX, screenY] = this.game.camera.gameToScreen(x, y);
    const scale = this.game.camera.transform$.value.scale / 100;
    return this.domSanitizer.bypassSecurityTrustStyle(
      `translate(${screenX}px, ${screenY}px) scale(${scale})`,
    );
  }
}
