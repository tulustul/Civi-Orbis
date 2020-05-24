import { UnitAction } from "../core/unit-actions";
import { UnitOrder, UNITS_MAP } from "../core/unit";
import { GameState } from "./state";
import { UnitDefinition } from "../core/unit.interface";
import { Player } from "./player";
import { makeCommand } from "./internal/commander";
import { UnitDetailsChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";

export class UnitDetails {
  id: number;
  tile: Tile;
  definition: UnitDefinition;
  player: Player;
  actionPointsLeft: number;
  path: Tile[][] | null = null;
  order: UnitOrder;

  constructor(private game: GameState, unit: UnitDetailsChanneled) {
    this.id = unit.id;
    this.definition = UNITS_MAP.get(unit.definitionId)!;
    this.update(unit);
  }

  private update(unit: UnitDetailsChanneled) {
    this.tile = this.game.map.tilesMap.get(unit.tileId)!;
    this.player = this.game.playersMap.get(unit.playerId)!;
    this.actionPointsLeft = unit.actionPointsLeft;
    this.order = unit.order;

    this.path = null;
    if (unit.path) {
      this.path = unit.path.map((turn) =>
        turn.map((id) => this.game.map.tilesMap.get(id)!),
      );
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
}
