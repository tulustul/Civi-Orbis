import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { UnitCore } from "../core/unit";
import { AISystem } from "./ai-system";
import { findPath } from "../core/pathfinding";
import { UnitTrait, UnitType } from "../core/data.interface";
import { getMoveResult, MoveResult } from "../core/movement";

export class ExploreOperation extends AiOperation {
  constructor(
    public unit: UnitCore,
    public target: TileCore,
  ) {
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

    const passableAreas = new Set<number>();
    const areasType = new Map<number, UnitType>();
    for (const tile of edgeOfUnknown) {
      if (!areasType.has(tile.passableArea)) {
        passableAreas.add(tile.passableArea);
        const type = tile.isWater ? UnitType.naval : UnitType.land;
        areasType.set(tile.passableArea, type);
      }
    }

    const areaExplorers = new Map<number, UnitCore[]>();
    for (const unit of this.ai.player.units) {
      if (unit.definition.trait === UnitTrait.explorer) {
        if (!areaExplorers.has(unit.tile.passableArea)) {
          areaExplorers.set(unit.tile.passableArea, []);
        }
        areaExplorers.get(unit.tile.passableArea)!.push(unit);
      }
    }

    for (const area of passableAreas) {
      if (!areaExplorers.has(area)) {
        // const type = areasType.get(area)!;
        // TODO make explorer
      }
    }

    for (const explorers of areaExplorers.values()) {
      for (const explorer of explorers) {
        const target = this.findTargetTile(edgeOfUnknown, explorer);
        if (target) {
          // this.operations.push(new ExploreOperation(unit, target));
          explorer.path = findPath(explorer, target);
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
