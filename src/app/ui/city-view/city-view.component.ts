import { Component, OnInit, Input } from "@angular/core";

import { City } from "src/app/core/city";
import { UNITS_DEFINITIONS } from "src/app/data/units";
import { BUILDINGS } from "src/app/data/buildings";
import { UIState } from "../ui-state";
import { Game } from "src/app/core/game";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Building } from "src/app/core/buildings";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
})
export class CityViewComponent implements OnInit {
  UNITS = UNITS_DEFINITIONS;

  buildings: Building[] = [];

  private quit$ = new Subject<void>();

  private _city: City;

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {
    this.game.mapUi.cityLabelsVisible = false;
    this.game.mapUi.allowMapPanning = false;

    this.buildings = BUILDINGS.filter((b) => !this.city.buildings.includes(b));
  }

  @Input() set city(city: City) {
    this._city = city;

    this.game.camera.moveToTileWithEasing(this.city.tile);
    const [x, y] = this.game.camera.canvasToScreen(
      this.city.tile.x,
      this.city.tile.y,
    );
    this.game.camera.scaleToWithEasing(130, x, y);
    this.game.mapUi.highlightTiles(this.city.tiles);

    this.game.mapUi.clickedTile$
      .pipe(takeUntil(this.quit$))
      .subscribe((tile) => {
        if (!this.city.tiles.has(tile)) {
          this.quit();
        }
      });
  }

  get city() {
    return this._city;
  }

  quit() {
    this.uiState.selectedCity$.next(null);
    this.game.mapUi.highlightTiles(null);
    this.game.mapUi.cityLabelsVisible = true;
    this.game.mapUi.allowMapPanning = true;
    this.quit$.next();
  }
}
