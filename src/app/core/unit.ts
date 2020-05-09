import { Tile } from "./tile";
import { UnitDefinition } from "./unit.interface";
import { Player } from "./player";
import { getTileIndex } from "./serialization";
import { UnitAction, ACTIONS } from "./unit-actions";

export type UnitOrder = "go" | "skip" | "sleep" | null;

export interface UnitSerialized {
  tile: number;
  definition: string;
  actionPointsLeft: number;
  player: number;
  path: number[][] | null;
}

export class Unit {
  actionPointsLeft: number;
  path: Tile[][] | null;

  order: UnitOrder = null;

  constructor(
    public tile: Tile,
    public definition: UnitDefinition,
    public player: Player,
  ) {
    this.actionPointsLeft = definition.actionPoints;
  }

  serialize(): UnitSerialized {
    return {
      tile: getTileIndex(this.player.game.map, this.tile),
      definition: this.definition.id,
      actionPointsLeft: this.actionPointsLeft,
      player: this.player.id,
      path:
        this.path?.map((row) =>
          row.map((tile) => getTileIndex(this.player.game.map, tile)),
        ) || null,
    };
  }

  doAction(action: UnitAction) {
    if (!this.canDoAction(action)) {
      return;
    }

    ACTIONS[action].fn(this.player.game, this);
  }

  canDoAction(action: UnitAction): boolean {
    if (!this.actionPointsLeft) {
      return false;
    }

    if (!this.definition.actions.includes(action)) {
      return false;
    }

    for (const r of ACTIONS[action].requirements) {
      if (!r.check(this)) {
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
