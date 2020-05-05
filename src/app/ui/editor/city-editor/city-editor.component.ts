import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";

import { City } from "src/app/core/city";
import { Game } from "src/app/core/game";
import { Tile } from "src/app/core/tile";

@Component({
  selector: "app-city-editor",
  templateUrl: "./city-editor.component.html",
  styleUrls: ["./city-editor.component.scss"],
})
export class CityEditorComponent implements OnInit {
  @Input() isVisible$: Observable<boolean>;

  city: City | null = null;

  constructor(private game: Game) {}

  ngOnInit(): void {
    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.game.mapUi.enableSelectingTile(true);
      this.game.mapUi.selectedTile$
        .pipe(takeUntil(hidden))
        .subscribe((tile) => {
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

    hidden.subscribe(() => this.game.mapUi.enableSelectingTile(false));
  }

  spawn(tile: Tile) {
    this.city = this.game.citiesManager.spawn(tile, this.game.players[0]);
  }

  destroy() {
    if (this.city) {
      this.game.citiesManager.destroy(this.city);
      this.city = null;
    }
  }
}
