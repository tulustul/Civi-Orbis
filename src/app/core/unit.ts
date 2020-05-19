import { TileCore } from "./tile";
import { UnitDefinition } from "./unit.interface";
import { PlayerCore } from "./player";
import { UnitAction, ACTIONS } from "./unit-actions";
import { UNITS_DEFINITIONS } from "../data/units";
import { collector } from "./collector";

export type UnitOrder = "go" | "skip" | "sleep" | null;

export const UNITS_MAP = new Map<string, UnitDefinition>();

for (const definition of UNITS_DEFINITIONS) {
  UNITS_MAP.set(definition.id, definition);
}

export class UnitCore {
  id: number;
  actionPointsLeft: number;
  path: TileCore[][] | null;

  order: UnitOrder = null;

  constructor(
    public tile: TileCore,
    public definition: UnitDefinition,
    public player: PlayerCore,
  ) {
    this.actionPointsLeft = definition.actionPoints;
  }

  doAction(action: UnitAction) {
    if (!this.canDoAction(action)) {
      return;
    }

    ACTIONS[action].fn(this.player.game, this);
    collector.units.add(this);
  }

  canDoAction(action: UnitAction): boolean {
    if (!this.actionPointsLeft) {
      return false;
    }

    if (!this.definition.actions.includes(action)) {
      return false;
    }

    for (const r of ACTIONS[action].requirements) {
      if (!r.check(this, action)) {
        return false;
      }
    }

    return true;
  }

  setOrder(order: UnitOrder) {
    this.order = order;
    this.player.updateUnitsWithoutOrders();
  }
}
