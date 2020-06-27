import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { UnitCore } from "../core/unit";
import { AISystem } from "./ai-system";
import { findPath } from "../core/pathfinding";
import { UnitTrait } from "../core/data.interface";
import { getMoveResult, MoveResult } from "../core/movement";

export class ExploreOperation extends AiOperation {
  constructor(public unit: UnitCore, public target: TileCore) {
    super();
  }

  perform() {
    if (!this.unit.path) {
      this.unit.path = findPath(this.unit, this.target);
    }
  }
}

export class ExploringAI extends AISystem {
  explorers: UnitCore[] = [];

  plan() {
    const edgeOfUnknown = this.getEdgeOfUnknown();

    for (const unit of this.ai.player.units) {
      if (unit.definition.trait === UnitTrait.explorer && !unit.path) {
        const target = this.findTargetTile(edgeOfUnknown, unit);
        if (target) {
          // this.operations.push(new ExploreOperation(unit, target));
          unit.path = findPath(unit, target);
        }
      }
    }
    return this.operations;
  }

  private findTargetTile(
    edgeOfUnknown: Set<TileCore>,
    unit: UnitCore,
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
        if (!this.ai.player.exploredTiles.has(neighbour)) {
          edge.add(exploredTile);
        }
      }
    }
    return edge;
  }
}
