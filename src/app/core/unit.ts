import { TileCore } from "./tile";
import { UnitDefinition } from "./unit.interface";
import { Player } from "./player";
import { getTileIndex } from "./serialization";
import { UnitAction, ACTIONS } from "./unit-actions";
import { UNITS_DEFINITIONS } from "../data/units";

export type UnitOrder = "go" | "skip" | "sleep" | null;

export const UNITS_MAP = new Map<string, UnitDefinition>();

for (const definition of UNITS_DEFINITIONS) {
  UNITS_MAP.set(definition.id, definition);
}

export interface UnitSerialized {
  id: number;
  tile: number;
  definition: string;
  actionPointsLeft: number;
  player: number;
  path: number[][] | null;
}

export interface UnitChanneled {
  id: number;
  tile: number;
  definitionId: string;
  player: number;
}

export interface UnitState {
  id: number;
  actionPointsLeft: number;
}

export class Unit {
  id: number;
  actionPointsLeft: number;
  path: TileCore[][] | null;

  order: UnitOrder = null;

  constructor(
    public tile: TileCore,
    public definition: UnitDefinition,
    public player: Player,
  ) {
    this.actionPointsLeft = definition.actionPoints;
  }

  serialize(): UnitSerialized {
    return {
      id: this.id,
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

  serializeToChannel(): UnitChanneled {
    return {
      id: this.id,
      tile: this.tile.id,
      definitionId: this.definition.id,
      player: this.player.id,
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
