import { UnitTrait } from "@/core/data.interface";
import { getMoveResult, MoveResult } from "@/core/movement";
import { findPath } from "@/core/pathfinding";
import { TileCore } from "@/core/tile";
import { UnitCore } from "@/core/unit";
import { AISystem } from "./ai-system";
import { getUnitById } from "@/core/data-manager";

const TILES_PER_EXPLORER = 300;
const MIN_EXPLORER_AREA = 10;

export class ExploringAI extends AISystem {
  plan() {
    this.operations = [];

    const edgeOfUnknown = this.getEdgeOfUnknown();

    const explorels = new Map<number, UnitCore[]>();
    for (const unit of this.ai.player.units) {
      if (
        unit.definition.trait === UnitTrait.explorer &&
        unit.tile.passableArea
      ) {
        if (!explorels.has(unit.tile.passableArea.id)) {
          explorels.set(unit.tile.passableArea.id, []);
        }
        explorels.get(unit.tile.passableArea.id)!.push(unit);
      }
    }

    for (const passableArea of this.ai.player.knownPassableAreas.values()) {
      if (passableArea.area < MIN_EXPLORER_AREA) {
        continue;
      }
      const explorersNeeded = Math.floor(
        passableArea.area / TILES_PER_EXPLORER
      );
      const haveExplorers = explorels.get(passableArea.id)?.length ?? 0;
      if (haveExplorers < explorersNeeded) {
        const product = getUnitById(
          passableArea.type === "land" ? "unit_scout" : "unit_scout_ship"
        )!;
        this.ai.productionAi.request({
          focus: "expansion",
          priority: 100,
          product,
          passableArea,
        });
      }
    }

    for (const explorers of explorels.values()) {
      for (const explorer of explorers) {
        const target = this.findTargetTile(edgeOfUnknown, explorer);
        if (target) {
          this.operations.push({
            group: "unit",
            entityId: explorer.id,
            focus: "expansion",
            priority: 100,
            perform: () => {
              explorer.path = findPath(explorer, target);
            },
          });
        }
      }
    }
    return this.operations;
  }

  private findTargetTile(
    edgeOfUnknown: Set<TileCore>,
    unit: UnitCore
  ): TileCore | null {
    let closestTile: TileCore | null = null;
    let closestDistance = Infinity;

    for (const tile of edgeOfUnknown) {
      const distance = unit.tile.getDistanceTo(tile);
      if (
        distance < closestDistance &&
        getMoveResult(unit, unit.tile, tile) === MoveResult.move
      ) {
        closestDistance = distance;
        closestTile = tile;
      }
    }

    return closestTile;
  }

  private getEdgeOfUnknown() {
    const edge = new Set<TileCore>();
    for (const exploredTile of this.ai.player.exploredTiles) {
      for (const neighbour of exploredTile.neighbours) {
        if (
          !neighbour.isMapEdge &&
          !this.ai.player.exploredTiles.has(neighbour)
        ) {
          edge.add(exploredTile);
        }
      }
    }
    return edge;
  }
}
