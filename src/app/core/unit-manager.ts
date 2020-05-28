import { UnitDefinition } from "./unit.interface";
import { UnitCore } from "./unit";
import { UNITS_DEFINITIONS } from "../data/units";
import { PlayerCore } from "./player";
import { TileCore } from "./tile";
import { collector } from "./collector";

export class UnitsManager {
  definitions = new Map<string, UnitDefinition>();

  units: UnitCore[] = [];

  unitsMap = new Map<number, UnitCore>();

  private lastId = 0;

  constructor() {
    for (const definition of UNITS_DEFINITIONS) {
      this.definitions.set(definition.id, definition);
    }
  }

  spawn(id: string, tile: TileCore, player: PlayerCore) {
    const definition = this.definitions.get(id);
    if (!definition) {
      throw Error(`UnitsManager: No unit with id "${id}"`);
    }

    const unit = new UnitCore(tile, definition, player, this);
    unit.id = this.lastId++;

    this.units.push(unit);
    this.unitsMap.set(unit.id, unit);
    player.units.push(unit);
    tile.units.push(unit);

    unit.player.exploreTiles(unit.tile.getTilesInRange(2));

    unit.player.unitsWithoutOrders.push(unit);

    collector.units.add(unit);

    return unit;
  }

  destroy(unit: UnitCore) {
    // TODO rewrite to sets for better performance?

    this.unitsMap.delete(unit.id);

    let index = this.units.indexOf(unit);
    if (index !== -1) {
      this.units.splice(index, 1);
    }

    index = unit.player.units.indexOf(unit);
    if (index !== -1) {
      unit.player.units.splice(index, 1);
    }

    index = unit.tile.units.indexOf(unit);
    if (index !== -1) {
      unit.tile.units.splice(index, 1);
    }

    unit.player.updateUnitsWithoutOrders();
    collector.unitsDestroyed.add(unit.id);
  }

  nextTurn() {
    for (const unit of this.units) {
      // Heal unit if on friendly territory
      if (unit.health < 100 && unit.tile.areaOf?.player === unit.player) {
        unit.health = Math.min(100, unit.health + 10);
        collector.units.add(unit);
      }

      if (unit.path) {
        unit.moveAlongPath();
      }
      if (unit.order === "skip") {
        unit.setOrder(null);
      }
      unit.actionPointsLeft = unit.definition.actionPoints;
    }
  }
}
