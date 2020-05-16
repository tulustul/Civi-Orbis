import { makeCommand } from "./commander";
import { Tile } from "../shared";
import { UnitDefinition } from "../core/unit.interface";
import { PlayerChanneled } from "../core/player";
import { GameState } from "./state";
import { UnitChanneled, UNITS_MAP } from "../core/unit";

export class Unit {
  id: number;
  definition: UnitDefinition;
  player: PlayerChanneled;
  tile: Tile;

  constructor(game: GameState, unit: UnitChanneled) {
    this.id = unit.id;
    this.tile = game.map.tilesMap.get(unit.tileId)!;
    this.player = game.playersMap.get(unit.playerId)!;
    this.definition = UNITS_MAP.get(unit.definitionId)!;

    this.tile.units.push(this);
  }

  findPath(destination: Tile): Promise<Tile[][]> {
    const data = { unitId: this.id, destinationId: destination.id };
    return makeCommand("pathfinding.findPath", data);
  }
}
