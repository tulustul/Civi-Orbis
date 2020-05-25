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

  getFailedActionRequirements(action: UnitAction): string[] {
    return ACTIONS[action].requirements
      .filter((r) => !r.check(this, action))
      .map((r) => r.id);
  }

  setOrder(order: UnitOrder) {
    this.order = order;
    this.player.updateUnitsWithoutOrders();
  }

  getPathDestination(): TileCore | null {
    if (!this.path) {
      return null;
    }

    const lastPathTurn = this.path[this.path.length - 1];
    return lastPathTurn[lastPathTurn.length - 1];
  }

  getRange(): Set<TileCore> {
    const result = new Set<TileCore>();
    const actionPointsLeftAtTile = new Map<TileCore, number>();

    this._getRange(
      this.tile,
      this.actionPointsLeft,
      result,
      actionPointsLeftAtTile,
    );

    if (result.size === 1) {
      result.delete(this.tile);
    }

    return result;
  }

  private _getRange(
    tile = this.tile,
    actionPointsLeft = this.actionPointsLeft,
    result: Set<TileCore>,
    actionPointsLeftAtTile: Map<TileCore, number>,
  ) {
    result.add(tile);

    if (actionPointsLeft <= 0) {
      return result;
    }

    for (const neighbour of tile.neighbours) {
      const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);

      const cost = tile.neighboursCosts.get(neighbour)!;
      if (cost === Infinity) {
        continue;
      }

      const newActionPointsLeft = actionPointsLeft - cost;

      if (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) {
        actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);

        this._getRange(
          neighbour,
          newActionPointsLeft,
          result,
          actionPointsLeftAtTile,
        );
      }
    }

    return result;
  }
}
