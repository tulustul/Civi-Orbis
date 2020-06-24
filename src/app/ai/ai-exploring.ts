import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { UnitCore } from "../core/unit";
import { AISystem } from "./ai-system";
import { findPath } from "../core/pathfinding";

export class ExploreOperation extends AiOperation {
  constructor(public explorer: UnitCore, public target: TileCore) {
    super();
  }

  perform() {
    if (!this.explorer.path) {
      this.explorer.path = findPath(this.explorer, this.target);
    }
  }
}

export class ExploringAI extends AISystem {
  explorers: UnitCore[] = [];

  plan() {
    for (const unit of this.ai.player.units) {
      if (unit.definition.id === "unit_explorer" && !unit.path) {
        const target = this.findTargetTile(unit);
        if (target) {
          this.operations.push(new ExploreOperation(unit, target));
        }
      }
    }
    return this.operations;
  }

  private findTargetTile(unit: UnitCore): TileCore | null {
    return null;
  }
}
