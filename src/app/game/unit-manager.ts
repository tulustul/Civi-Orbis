import { UnitDefinition } from './unit.interface';
import { Unit } from './unit';
import { BehaviorSubject } from 'rxjs';
import { UNITS_DEFINITIONS } from '../data/units';
import { Player } from './player';
import { Tile } from './tile.interface';

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
  }

  move(unit: Unit, tile: Tile) {
    if (!unit.actionPointsLeft) {
      return;
    }

    const index = unit.tile.units.indexOf(unit);
    if (index !== -1) {
      unit.tile.units.splice(index, 1);
    }
    tile.units.push(unit);
    unit.tile = tile;

    const cost = this.getMovementCost(unit, tile);
    unit.actionPointsLeft = Math.max(unit.actionPointsLeft - cost, 0);
  }

  getMovementCost(unit: Unit, target: Tile) {
    return 1;
  }

  nextTurn() {
    for (const unit of this.units) {
      unit.actionPointsLeft = unit.definition.actionPoints;
      if (unit.path.length) {
      }
    }
  }
}
