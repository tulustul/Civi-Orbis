import { UnitAction } from "../core/unit-actions";
import { UnitOrder } from "../core/unit";
import { GameState } from "./state";
import { UnitDefinition } from "../core/data.interface";
import { Player } from "./player";
import { makeCommand } from "./internal/commander";
import { UnitDetailsChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";
import { CombatSimulation } from "../core/combat";
import { Unit } from "./unit";
import { getUnitById } from "../core/data-manager";

export class UnitDetails {
  id: number;
  tile: Tile;
  definition: UnitDefinition;
  player: Player;
  parent: Unit | null;
  children: Unit[] = [];
  actionPointsLeft: number;
  health: number;
  supplies: number;
  path: Tile[][] | null = null;
  order: UnitOrder;
  isSupplied: boolean;

  constructor(private game: GameState, unit: UnitDetailsChanneled) {
    this.id = unit.id;
    this.definition = getUnitById(unit.definitionId)!;
    this.update(unit);
  }

  private update(unit: UnitDetailsChanneled) {
    this.tile = this.game.map.tilesMap.get(unit.tileId)!;
    this.player = this.game.playersMap.get(unit.playerId)!;
    this.actionPointsLeft = unit.actionPointsLeft;
    this.health = unit.health;
    this.supplies = unit.supplies;
    this.order = unit.order;
    this.isSupplied = unit.isSupplied;

    this.path = null;
    if (unit.path) {
      this.path = unit.path.map((turn) =>
        turn.map((id) => this.game.map.tilesMap.get(id)!),
      );
    }

    this.parent = null;
    if (unit.parentId) {
      this.parent = this.game.unitsMap.get(unit.parentId) || null;
    }
    this.children = [];
    if (unit.childrenIds) {
      this.children = unit.childrenIds.map((id) => this.game.unitsMap.get(id)!);
    }
  }

  async doAction(action: UnitAction) {
    const data = await makeCommand<UnitDetailsChanneled>("unit.doAction", {
      unitId: this.id,
      action,
    });
    this.update(data);
  }

  canDoAction(action: UnitAction): boolean {
    return true;
  }

  async setOrder(order: UnitOrder) {
    const data = await makeCommand<UnitDetailsChanneled>("unit.setOrder", {
      unitId: this.id,
      order,
    });
    this.update(data);
  }

  disband() {
    return makeCommand("unit.disband", this.id);
  }

  async findPath(destination: Tile) {
    const data = await makeCommand<UnitDetailsChanneled>("unit.findPath", {
      unitId: this.id,
      destinationId: destination.id,
    });
    this.update(data);
  }

  async moveAlongPath() {
    const data = await makeCommand<UnitDetailsChanneled>(
      "unit.moveAlongPath",
      this.id,
    );
    this.update(data);
  }

  async getRange(): Promise<Tile[]> {
    const ids = await makeCommand<number[]>("unit.getRange", this.id);
    return ids.map((tileId) => this.game.map.tilesMap.get(tileId)!);
  }

  getFailedActionRequirements(action: UnitAction) {
    // Returns failed requirements.
    return makeCommand<UnitAction[]>("unit.getFailedActionRequirements", {
      unitId: this.id,
      action,
    });
  }

  async refresh() {
    const data = await makeCommand<UnitDetailsChanneled>(
      "unit.getDetails",
      this.id,
    );
    this.update(data);
  }

  simulateCombat(unit: Unit) {
    return makeCommand<CombatSimulation>("unit.simulateCombat", {
      attackerId: this.id,
      defenderId: unit.id,
    });
  }
}
