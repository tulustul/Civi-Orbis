import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { takeUntil, filter } from "rxjs/operators";

import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  LAND_FORM_OPTIONS,
  RIVER_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
  IMPROVEMENT_OPTIONS,
  ROAD_OPTIONS,
} from "../constants";
import { OPPOSITE_DIRECTIONS } from "src/app/map-generators/utils";
import { MapUi } from "../../map-ui";
import { TileImprovement, TileRoad } from "src/app/core/tile-improvements";
import {
  TileDirection,
  isForestable,
  areWetlandsPossible,
  isImprovementPossible,
  isRoadPossible,
  isResourcePossible,
} from "src/app/shared";
import { GameApi } from "src/app/api";
import { getDirectionTo } from "src/app/shared/hex-math";
import { Tile, Resource } from "src/app/api/tile.interface";
import { RESOURCES_DEFINITIONS } from "src/app/data/resources";
import { Option } from "../../widgets/option.interface";
import { ResourceDefinition } from "src/app/core/data.interface";
import { getResourceDefinitionById } from "src/app/core/data-manager";

@Component({
    selector: "app-tile-editor",
    templateUrl: "./tile-editor.component.html",
    styleUrls: ["./tile-editor.component.scss"],
    standalone: false
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
  IMPROVEMENT_OPTIONS = IMPROVEMENT_OPTIONS;
  ROAD_OPTIONS = ROAD_OPTIONS;

  RESOURCE_OPTIONS = [{ label: "None", value: null }].concat(
    RESOURCES_DEFINITIONS.map((r) => {
      return { label: r.name, value: r.id } as Option;
    }),
  );

  constructor(private game: GameApi, private mapUi: MapUi) {}

  ngOnInit(): void {
    const shown = this.isVisible$.pipe(filter((v) => v));
    const hidden = this.isVisible$.pipe(filter((v) => !v));

    shown.subscribe(() => {
      this.mapUi.enableSelectingTile(true);
      this.mapUi.selectedTile$
        .pipe(takeUntil(hidden))
        .subscribe((tile) => (this.tile = tile));
    });

    hidden.subscribe(() => this.mapUi.enableSelectingTile(false));
  }

  update() {
    if (this.tile) {
      this.game.state!.updateTile(this.tile);
    }
  }

  updateForest(forest: boolean) {
    if (this.tile) {
      this.tile.forest = forest && isForestable(this.tile);
      this.update();
    }
  }

  updateWetlands(wetlands: boolean) {
    if (this.tile) {
      this.tile.wetlands = wetlands && areWetlandsPossible(this.tile);
      this.update();
    }
  }

  updateImprovement(improvement: TileImprovement) {
    if (this.tile) {
      if (isImprovementPossible(this.tile, improvement)) {
        this.tile.improvement = improvement;
        this.update();
      }
    }
  }

  updateRoad(road: TileRoad) {
    if (this.tile && isRoadPossible(this.tile)) {
      this.tile.road = road;
      this.update();
      for (const neighbour of this.tile.neighbours) {
        this.game.state!.updateTile(neighbour);
      }
    }
  }

  async updateResource(resourceId: string | null) {
    if (!this.tile) {
      return;
    }

    let resourceDef: ResourceDefinition | null = null;
    if (resourceId) {
      resourceDef = getResourceDefinitionById(resourceId);
    }

    if (isResourcePossible(this.tile, resourceDef)) {
      if (resourceDef) {
        this.tile.resource = {
          id: resourceDef.id,
          name: resourceDef.name,
          quantity: 1,
        };
      } else {
        this.tile.resource = null;
      }
      await this.game.state!.setTileResource(this.tile, this.tile.resource);
    }
  }

  updateRiver(riverParts: TileDirection[]) {
    if (!this.tile) {
      return;
    }

    this.tile.riverParts = riverParts;
    for (const neighbour of this.tile.neighbours) {
      const dir = getDirectionTo(this.tile, neighbour);
      const hasRiver = riverParts.includes(dir);
      const oppositeDir = OPPOSITE_DIRECTIONS[dir];
      const neighbourRiverParts = new Set(neighbour.riverParts);
      if (hasRiver) {
        neighbourRiverParts.add(oppositeDir);
      } else {
        neighbourRiverParts.delete(oppositeDir);
      }
      neighbour.riverParts = Array.from(neighbourRiverParts);
      this.game.state!.updateTile(neighbour);
    }
    this.update();
  }
}
