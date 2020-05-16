import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { CityCore } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { TileCore } from "src/app/core/tile";
import { MapUi } from "../../map-ui";

@Component({
  selector: "app-city-editor",
  templateUrl: "./city-editor.component.html",
  styleUrls: ["./city-editor.component.scss"],
})
export class CityEditorComponent implements OnInit {
  @Input() isVisible$: Observable<boolean>;

  city: CityCore | null = null;

  constructor(private game: Game, private mapUi: MapUi) {}

  ngOnInit(): void {
    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.mapUi.enableSelectingTile(true);
      this.mapUi.selectedTile$.pipe(takeUntil(hidden)).subscribe((tile) => {
        if (!tile) {
          return;
        }
        if (tile.city) {
          this.city = tile.city;
        } else {
          this.spawn(tile);
        }
      });
    });

    hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
  }

  spawn(tile: TileCore) {
    this.city = this.game.citiesManager.spawn(tile, this.game.players[0]);
  }

  destroy() {
    if (this.city) {
      this.game.citiesManager.destroy(this.city);
      this.city = null;
    }
  }
}
