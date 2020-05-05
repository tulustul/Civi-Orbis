import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";

import { Game } from "src/app/core/game";
import { Tile, TileDirection } from "src/app/core/tile";
import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  LAND_FORM_OPTIONS,
  RIVER_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
} from "../constants";
import { OPPOSITE_DIRECTIONS } from "src/app/map-generators/utils";
import { isTileForestable, areWetlandsPossible } from "../utils";

@Component({
  selector: "app-tile-editor",
  templateUrl: "./tile-editor.component.html",
  styleUrls: ["./tile-editor.component.scss"],
})
export class TileEditorComponent implements OnInit {
  @Input() isVisible$: Observable<boolean>;

  tile: Tile | null = null;

  SEA_LEVEL_OPTIONS = SEA_LEVEL_OPTIONS;
  LAND_FORM_OPTIONS = LAND_FORM_OPTIONS;
  CLIMATE_OPTIONS = CLIMATE_OPTIONS;
  FOREST_OPTIONS = FOREST_OPTIONS;
  RIVER_OPTIONS = RIVER_OPTIONS;
  WETLANDS_OPTIONS = WETLANDS_OPTIONS;

  constructor(private game: Game) {}

  ngOnInit(): void {
    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.game.mapUi.enableSelectingTile(true);
      this.game.mapUi.selectedTile$
        .pipe(takeUntil(hidden))
        .subscribe((tile) => (this.tile = tile));
    });

    hidden.subscribe(() => this.game.mapUi.enableSelectingTile(false));
  }

  update() {
    if (this.tile) {
      this.game.tilesManager.updateTile(this.tile);
    }
  }

  updateForest(forest: boolean) {
    if (this.tile) {
      this.tile.forest = forest && isTileForestable(this.tile);
      this.update();
    }
  }

  updateWetlands(wetlands: boolean) {
    if (this.tile) {
      this.tile.wetlands = wetlands && areWetlandsPossible(this.tile);
      this.update();
    }
  }

  updateRiver(riverParts: TileDirection[]) {
    if (!this.tile) {
      return;
    }

    this.tile.riverParts = riverParts;
    for (const neighbour of this.tile.neighbours) {
      const dir = this.tile.getDirectionTo(neighbour);
      const hasRiver = riverParts.includes(dir);
      const oppositeDir = OPPOSITE_DIRECTIONS[dir];
      const neighbourRiverParts = new Set(neighbour.riverParts);
      if (hasRiver) {
        neighbourRiverParts.add(oppositeDir);
      } else {
        neighbourRiverParts.delete(oppositeDir);
      }
      neighbour.riverParts = Array.from(neighbourRiverParts);
      this.game.tilesManager.updateTile(neighbour);
    }
    this.update();
  }
}
