import { Component, OnInit, Input } from "@angular/core";

import { City } from "src/app/game/city";
import { UNITS_DEFINITIONS } from "src/app/data/units";
import { UIState } from "../ui-state";
import { Game } from "src/app/game/game";

@Component({
  selector: "app-city-view",
  templateUrl: "./city-view.component.html",
  styleUrls: ["./city-view.component.scss"],
})
export class CityViewComponent implements OnInit {
  UNITS = UNITS_DEFINITIONS;

  @Input() city: City;

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {
    this.game.camera.moveToTileWithEasing(this.city.tile);
    const [x, y] = this.game.camera.canvasToScreen(
      this.city.tile.x,
      this.city.tile.y,
    );
    this.game.camera.scaleToWithEasing(130, x, y);
  }

  quit() {
    this.uiState.selectedCity$.next(null);
  }
}
