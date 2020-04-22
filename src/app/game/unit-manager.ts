import { UnitDefinition } from './unit.interface';
import { Unit } from './unit';
import { BehaviorSubject } from 'rxjs';
import { UNITS_DEFINITIONS } from '../data/units';
import { Player } from './player';
import { Tile } from './tile.interface';
import { findPath } from './pathfinding';
import { getTilesInRange } from './hex-math';

export class UnitsManager {
  definitions = new Map<string, UnitDefinition>();

  units: Unit[] = [];

  activeUnit$ = new BehaviorSubject<Unit | null>(null);

  constructor() {
    for (const definition of UNITS_DEFINITIONS) {
      this.definitions.set(definition.id, definition);
    }
  }

  get activeUnit() {
    return this.activeUnit$.value;
  }

  spawn(id: string, tile: Tile, player: Player) {
    const definition = this.definitions.get(id);
    if (!definition) {
      throw Error(`UnitsManager: No unit with id "${id}"`);
    }

    const unit: Unit = {
      tile,
      definition,
      player,
      actionPointsLeft: definition.actionPoints,
      path: [],
    };
    this.units.push(unit);
    player.units.push(unit);
    tile.units.push(unit);

    unit.player.exploredTiles = getTilesInRange(unit.tile, 2);
  }

  move(unit: Unit, tile: Tile) {
    if (!unit.actionPointsLeft) {
      return;
    }

    const cost = this.getMovementCost(unit, tile);
    if (cost === Infinity) {
      return;
    }

    const index = unit.tile.units.indexOf(unit);
    if (index !== -1) {
      unit.tile.units.splice(index, 1);
    }
    tile.units.push(unit);
    unit.tile = tile;

    unit.actionPointsLeft = Math.max(unit.actionPointsLeft - cost, 0);

    for (const exploredTile of getTilesInRange(tile, 2)) {
      unit.player.exploredTiles.add(exploredTile);
    }
  }

  moveAlongPath(unit: Unit) {
    if (!unit.path) {
      return;
    }

    while (unit.actionPointsLeft && unit.path.length) {
      this.move(unit, unit.path[0][0]);
      unit.path[0].shift();
      if (!unit.path[0].length) {
        unit.path.shift();
      }
      if (!unit.path.length) {
        unit.path = null;
        return;
      }
    }
  }

  getMovementCost(unit: Unit, target: Tile) {
    return unit.tile.neighboursCosts.get(target) || Infinity;
  }

  nextTurn() {
    for (const unit of this.units) {
      if (unit.path) {
        this.moveAlongPath(unit);
      }
      unit.actionPointsLeft = unit.definition.actionPoints;
    }
  }
}
