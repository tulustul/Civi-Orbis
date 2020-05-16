import { UnitDefinition } from "./unit.interface";
import { UnitCore, UnitSerialized } from "./unit";
import { BehaviorSubject, Subject } from "rxjs";
import { UNITS_DEFINITIONS } from "../data/units";
import { Player } from "./player";
import { TileCore } from "./tile";
import { Game } from "./game";
import { getTileFromIndex } from "./serialization";

export class UnitsManager {
  definitions = new Map<string, UnitDefinition>();

  units: UnitCore[] = [];

  activeUnit$ = new BehaviorSubject<UnitCore | null>(null);

  private _updated$ = new Subject<UnitCore>();
  updated$ = this._updated$.asObservable();

  private _spawned$ = new Subject<UnitCore>();
  spawned$ = this._spawned$.asObservable();

  private _destroyed$ = new Subject<UnitCore>();
  destroyed$ = this._destroyed$.asObservable();

  private lastId = 0;

  constructor(private game: Game) {
    for (const definition of UNITS_DEFINITIONS) {
      this.definitions.set(definition.id, definition);
    }
  }

  get activeUnit() {
    return this.activeUnit$.value;
  }

  spawn(id: string, tile: TileCore, player: Player) {
    const definition = this.definitions.get(id);
    if (!definition) {
      throw Error(`UnitsManager: No unit with id "${id}"`);
    }

    const unit = new UnitCore(tile, definition, player);
    unit.id = this.lastId++;

    this.units.push(unit);
    player.units.push(unit);
    tile.units.push(unit);

    for (const tile of unit.tile.getTilesInRange(2)) {
      unit.player.exploredTiles.add(tile);
    }

    this._spawned$.next(unit);

    unit.player.unitsWithoutOrders.push(unit);

    return unit;
  }

  destroy(unit: UnitCore) {
    // TODO rewrite to sets for better performance?
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

    this._destroyed$.next(unit);

    if (unit === this.activeUnit) {
      this.activeUnit$.next(null);
    }

    unit.player.updateUnitsWithoutOrders();
  }

  move(unit: UnitCore, tile: TileCore) {
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

    const visibleTiles = tile.getTilesInRange(2);
    const exploredTiles: TileCore[] = [];
    for (const exploredTile of visibleTiles) {
      if (!unit.player.exploredTiles.has(exploredTile)) {
        unit.player.exploredTiles.add(exploredTile);
        exploredTiles.push(exploredTile);
      }
    }

    if (unit.player === this.game.activePlayer$.value) {
      this.game.tilesManager.reveal(exploredTiles);
    }

    this._updated$.next(unit);
  }

  moveAlongPath(unit: UnitCore) {
    if (!unit.path) {
      unit.setOrder(null);
      return;
    }

    unit.setOrder(unit.path.length ? "go" : null);

    while (unit.actionPointsLeft && unit.path.length) {
      this.move(unit, unit.path[0][0]);
      unit.path[0].shift();
      if (!unit.path[0].length) {
        unit.path.shift();
      }
      if (!unit.path.length) {
        unit.path = null;
        unit.setOrder(null);
        return;
      }
    }
  }

  getMovementCost(unit: UnitCore, target: TileCore) {
    return unit.tile.neighboursCosts.get(target) || Infinity;
  }

  clear() {
    this.activeUnit$.next(null);
    this.units = [];
  }

  nextTurn() {
    for (const unit of this.units) {
      if (unit.path) {
        this.moveAlongPath(unit);
      }
      if (unit.order === "skip") {
        unit.setOrder(null);
      }
      unit.actionPointsLeft = unit.definition.actionPoints;
    }
  }

  serialize() {
    return this.units.map((u) => u.serialize());
  }

  serializeToChannel() {
    return this.units.map((u) => u.serializeToChannel());
  }

  deserialize(data: UnitSerialized[]) {
    for (const unitData of data) {
      const tile = getTileFromIndex(this.game.map, unitData.tile);
      const player = this.game.players[unitData.player];
      const unit = this.spawn(unitData.definition, tile, player);
      unit.actionPointsLeft = unitData.actionPointsLeft;

      // TODO path deserialization
      // unit.path = unitData.path;
    }
  }
}
