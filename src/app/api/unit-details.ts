import { UnitAction } from "../core/unit-actions";
import { UnitOrder, UnitDetailsChanneled, UNITS_MAP } from "../core/unit";
import { Tile } from "../shared";
import { GameState } from "./state";
import { UnitDefinition } from "../core/unit.interface";
import { Player } from "./player";
import { makeCommand } from "./commander";

export class UnitDetails {
  id: number;
  tile: Tile;
  definition: UnitDefinition;
  player: Player;
  actionPointsLeft: number;
  path: Tile[][] | null = null;

  constructor(private game: GameState, unit: UnitDetailsChanneled) {
    this.id = unit.id;
    this.definition = UNITS_MAP.get(unit.definitionId)!;
    this.update(unit);
  }

  private update(unit: UnitDetailsChanneled) {
    this.tile = this.game.map.tilesMap.get(unit.tileId)!;
    this.player = this.game.playersMap.get(unit.playerId)!;
    this.actionPointsLeft = unit.actionPointsLeft;

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
    makeCommand("unit.disband", this.id);
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
}
