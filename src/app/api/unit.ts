import { UnitDefinition } from "../core/unit.interface";
import { GameState } from "./state";
import { UNITS_MAP } from "../core/unit";
import { Player } from "./player";
import { UnitChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";

export class Unit {
  id: number;
  definition: UnitDefinition;
  player: Player;
  tile: Tile;

  constructor(game: GameState, unit: UnitChanneled) {
    this.id = unit.id;
    this.tile = game.map.tilesMap.get(unit.tileId)!;
    this.player = game.playersMap.get(unit.playerId)!;
    this.definition = UNITS_MAP.get(unit.definitionId)!;

    this.tile.units.push(this);
    game.unitsMap.set(this.id, this);
  }

  update(game: GameState, unit: UnitChanneled) {
    const index = this.tile.units.indexOf(this);
    if (index !== -1) {
      this.tile.units.splice(index, 1);
    }

    this.tile = game.map.tilesMap.get(unit.tileId)!;
    this.tile.units.push(this);
  }

  destroy(game: GameState) {
    const index = this.tile.units.indexOf(this);
    if (index !== -1) {
      this.tile.units.splice(index, 1);
    }

    game.unitsMap.delete(this.id);
  }
}
