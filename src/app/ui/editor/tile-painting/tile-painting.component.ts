import { Component, OnInit, Input } from "@angular/core";

import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  LAND_FORM_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
} from "../constants";
import { Option } from "../../widgets/option.interface";
import { SeaLevel, LandForm, Climate } from "src/app/game/tile";
import { Game } from "src/app/game/game";
import { Observable } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";
import { getTilesInRange } from "src/app/game/hex-math";
import { isTileForestable, areWetlandsPossible } from "../utils";

const IGNORE_OPTION: Option = { label: "ignore", value: null };

interface PaintData {
  size: number;
  climate: Climate | null;
  forest: boolean | null;
  wetlands: boolean | null;
  landForm: LandForm | null;
  seaLevel: SeaLevel | null;
}

@Component({
  selector: "app-tile-painting",
  templateUrl: "./tile-painting.component.html",
  styleUrls: ["./tile-painting.component.scss"],
})
export class TilePaintingComponent implements OnInit {
  SIZE_OPTIONS: Option[] = [
    { label: "1x1", value: 1 },
    { label: "2x2", value: 2 },
    { label: "3x3", value: 3 },
    { label: "5x5", value: 5 },
    { label: "7x7", value: 7 },
    { label: "10x10", value: 10 },
    { label: "15x15", value: 15 },
  ];

  SEA_LEVEL_OPTIONS: Option[] = [IGNORE_OPTION, ...SEA_LEVEL_OPTIONS];
  LAND_FORM_OPTIONS: Option[] = [IGNORE_OPTION, ...LAND_FORM_OPTIONS];
  CLIMATE_OPTIONS: Option[] = [IGNORE_OPTION, ...CLIMATE_OPTIONS];
  FOREST_OPTIONS: Option[] = [IGNORE_OPTION, ...FOREST_OPTIONS];
  WETLANDS_OPTIONS: Option[] = [IGNORE_OPTION, ...WETLANDS_OPTIONS];

  DEFAULT_PAINT_DATA: PaintData = {
    size: 1,
    climate: null,
    forest: null,
    landForm: null,
    seaLevel: null,
    wetlands: null,
  };

  @Input() isVisible$: Observable<boolean>;

  paintData = { ...this.DEFAULT_PAINT_DATA };

  constructor(private game: Game) {}

  ngOnInit(): void {
    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.game.controls.mouseButton$
        .pipe(takeUntil(hidden))
        .subscribe((button) => {
          if (button === 0) {
            this.paint();
          }
        });

      this.game.mapUi.hoveredTile$.pipe(takeUntil(hidden)).subscribe((tile) => {
        if (tile) {
          const tiles = getTilesInRange(tile, this.paintData.size - 1);
          this.game.mapUi.highlightTiles(tiles);
          if (this.game.controls.mouseButton === 0) {
            this.paint();
          }
        } else {
          this.game.mapUi.highlightTiles(null);
        }
      });
    });

    hidden.subscribe(() => this.game.mapUi.highlightTiles(null));
  }

  private paint() {
    const pivotTile = this.game.mapUi.hoveredTile;
    if (!pivotTile) {
      return;
    }

    const tiles = getTilesInRange(pivotTile, this.paintData.size - 1);
    for (const tile of tiles) {
      if (this.paintData.seaLevel !== null) {
        tile.seaLevel = this.paintData.seaLevel;
      }
      if (this.paintData.landForm !== null) {
        tile.landForm = this.paintData.landForm;
      }
      if (this.paintData.climate !== null) {
        tile.climate = this.paintData.climate;
      }
      if (this.paintData.forest !== null) {
        tile.forest = this.paintData.forest;
      }
      if (this.paintData.wetlands !== null) {
        tile.wetlands = this.paintData.wetlands;
      }

      tile.forest = tile.forest && isTileForestable(tile);
      tile.wetlands = tile.wetlands && areWetlandsPossible(tile);

      this.game.tilesManager.updateTile(tile);
    }
  }

  reset() {
    this.paintData = { ...this.DEFAULT_PAINT_DATA };
  }
}
