import { UnitDefinition } from './unit.interface';
import { Unit } from './unit';
import { BehaviorSubject, Subject } from 'rxjs';
import { UNITS_DEFINITIONS } from '../data/units';
import { Player } from './player';
import { Tile } from './tile.interface';
import { getTilesInRange } from './hex-math';
import { Game } from './game';

export class UnitsManager {
  definitions = new Map<string, UnitDefinition>();

  units: Unit[] = [];

  activeUnit$ = new BehaviorSubject<Unit | null>(null);

  private _updated$ = new Subject<Unit>();
  updated$ = this._updated$.asObservable();

  private _spawned$ = new Subject<Unit>();
  spawned$ = this._spawned$.asObservable();

  private _destroyed$ = new Subject<Unit>();
  destroyed$ = this._destroyed$.asObservable();

  constructor(private game: Game) {
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
      path: []
    };
    this.units.push(unit);
    player.units.push(unit);
    tile.units.push(unit);

    unit.player.exploredTiles = getTilesInRange(unit.tile, 2);
    this.game;

    this._spawned$.next(unit);
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

    const visibleTiles = getTilesInRange(tile, 2);
    const exploredTiles: Tile[] = [];
    for (const exploredTile of visibleTiles) {
      if (!unit.player.exploredTiles.has(exploredTile)) {
        unit.player.exploredTiles.add(exploredTile);
        exploredTiles.push(exploredTile);
      }
    }

    // TODO temporary solution, doesn't support multiple players.
    this.game.tilesManager.reveal(exploredTiles);

    this._updated$.next(unit);
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
