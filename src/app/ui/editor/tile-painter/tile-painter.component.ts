import { Component, OnInit, input } from "@angular/core";

import { Observable } from "rxjs";
import { filter, takeUntil } from "rxjs/operators";
import { GameApi } from "src/app/api";
import { Tile } from "src/app/api/tile.interface";
import { Controls } from "src/app/controls";
import { TileImprovement } from "src/app/core/tile-improvements";
import {
  Climate,
  LandForm,
  SeaLevel,
  areWetlandsPossible,
  isForestable,
  isImprovementPossible,
} from "src/app/shared";
import { getTilesInRange } from "src/app/shared/hex-math";
import { MapUi } from "../../map-ui";
import { Option } from "../../widgets/option.interface";
import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  IMPROVEMENT_OPTIONS,
  LAND_FORM_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
} from "../constants";

const IGNORE_OPTION: Option = { label: "ignore", value: undefined };

interface PaintData {
  size: number;
  climate: Climate | undefined;
  forest: boolean | undefined;
  wetlands: boolean | undefined;
  landForm: LandForm | undefined;
  seaLevel: SeaLevel | undefined;
  improvement: TileImprovement | undefined;
}

@Component({
  selector: "app-tile-painter",
  templateUrl: "./tile-painter.component.html",
  styleUrls: ["./tile-painter.component.scss"],
  standalone: false,
})
export class TilePainterComponent implements OnInit {
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
  IMPROVEMENT_OPTIONS: Option[] = [IGNORE_OPTION, ...IMPROVEMENT_OPTIONS];

  DEFAULT_PAINT_DATA: PaintData = {
    size: 1,
    climate: undefined,
    forest: undefined,
    landForm: undefined,
    seaLevel: undefined,
    wetlands: undefined,
    improvement: undefined,
  };

  isVisible$ = input.required<Observable<boolean>>();

  paintData = { ...this.DEFAULT_PAINT_DATA };

  constructor(
    private game: GameApi,
    private controls: Controls,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {
    const shown = this.isVisible$().pipe(filter((v) => v));
    const hidden = this.isVisible$().pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.controls.mouseButton$.pipe(takeUntil(hidden)).subscribe((button) => {
        if (button === 0) {
          this.paint();
        }
      });

      this.mapUi.hoveredTile$.pipe(takeUntil(hidden)).subscribe((tile) => {
        if (tile) {
          const tiles = getTilesInRange(tile, this.paintData.size - 1);
          this.mapUi.editorArea.clear();
          this.mapUi.editorArea.addTiles(Array.from(tiles as Set<Tile>));
          if (this.controls.mouseButton === 0) {
            this.paint();
          }
        } else {
          this.mapUi.editorArea.clear();
        }
      });
    });

    hidden.subscribe(() => this.mapUi.editorArea.clear());
  }

  private paint() {
    const pivotTile = this.mapUi.hoveredTile;
    if (!pivotTile) {
      return;
    }

    const tiles = getTilesInRange(pivotTile, this.paintData.size - 1);
    for (const tile of tiles) {
      if (this.paintData.seaLevel !== undefined) {
        tile.seaLevel = this.paintData.seaLevel;
      }
      if (this.paintData.landForm !== undefined) {
        tile.landForm = this.paintData.landForm;
      }
      if (this.paintData.climate !== undefined) {
        tile.climate = this.paintData.climate;
      }
      if (this.paintData.forest !== undefined) {
        tile.forest = this.paintData.forest;
      }
      if (this.paintData.wetlands !== undefined) {
        tile.wetlands = this.paintData.wetlands;
      }

      tile.forest = tile.forest && isForestable(tile);
      tile.wetlands = tile.wetlands && areWetlandsPossible(tile);

      if (this.paintData.improvement !== undefined) {
        if (isImprovementPossible(tile, this.paintData.improvement)) {
          tile.improvement = this.paintData.improvement;
        }
      }
    }
    this.game.state?.updateTiles(Array.from(tiles) as Tile[]);
  }

  reset() {
    this.paintData = { ...this.DEFAULT_PAINT_DATA };
  }
}
