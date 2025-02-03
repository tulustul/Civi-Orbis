import { UnitDefinition } from "../core/data.interface";
import { GameState } from "./state";
import { Player } from "./player";
import { UnitChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";
import { getUnitById } from "../core/data-manager";

export class Unit {
  id: number;
  definition: UnitDefinition;
  player: Player;
  tile: Tile;
  parent!: Unit | null;
  children: Unit[] = [];
  health: number;
  supplies: number;
  actionPointsLeft: number;

  constructor(
    private game: GameState,
    unit: UnitChanneled,
  ) {
    this.id = unit.id;
    this.tile = game.map.tilesMap.get(unit.tileId)!;
    this.player = game.playersMap.get(unit.playerId)!;
    this.definition = getUnitById(unit.definitionId)!;
    this.health = unit.health;
    this.supplies = unit.supplies;
    this.actionPointsLeft = unit.actionPointsLeft;

    this.tile.units.push(this);
    game.unitsMap.set(this.id, this);
  }

  update(game: GameState, unit: UnitChanneled) {
    this.health = unit.health;
    this.supplies = unit.supplies;
    this.actionPointsLeft = unit.actionPointsLeft;

    if (this.tile.id !== unit.tileId) {
      const index = this.tile.units.indexOf(this);
      if (index !== -1) {
        this.tile.units.splice(index, 1);
      }

      this.tile = game.map.tilesMap.get(unit.tileId)!;
      this.tile.units.push(this);
    }

    this.updateParentAndChildren(unit);
  }

  updateParentAndChildren(unit: UnitChanneled) {
    this.parent = null;
    if (unit.parentId) {
      this.parent = this.game.unitsMap.get(unit.parentId) || null;
    }
    this.children = [];
    if (unit.childrenIds) {
      this.children = unit.childrenIds.map((id) => this.game.unitsMap.get(id)!);
    }
  }

  destroy(game: GameState) {
    const index = this.tile.units.indexOf(this);
    if (index !== -1) {
      this.tile.units.splice(index, 1);
    }

    game.unitsMap.delete(this.id);
  }
}
