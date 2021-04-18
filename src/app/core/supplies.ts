import { CityCore } from "./city";
import { UnitTrait } from "./data.interface";
import { PlayerCore } from "./player";
import { TileCore } from "./tile";
import { UnitCore } from "./unit";

export function suppliesPrecompute(player: PlayerCore) {
  player.suppliedTiles.clear();

  for (const city of player.cities) {
    suppliesAddCity(city);
  }

  const supplyUnits = player.units.filter(
    (u) => u.definition.trait === UnitTrait.supply,
  );
  for (const unit of supplyUnits) {
    suppliesAddUnit(unit);
  }
}

export function suppliesForgetCity(city: CityCore) {
  for (const tile of city.canSupplyTiles) {
    tile.canBeSuppliedByCities.delete(city);
    if (!tile.isSuppliedByPlayerFullCheck(city.player)) {
      city.player.suppliedTiles.delete(tile);
    }
  }
  city.canSupplyTiles.clear();
}

export function suppliesAddCity(city: CityCore) {
  city.canSupplyTiles = getPotentialTilesRange(
    city.player,
    city.tile,
    city.supplyRange,
  );
  for (const tile of city.canSupplyTiles) {
    tile.canBeSuppliedByCities.add(city);
  }
}

export function suppliesForgetUnit(unit: UnitCore) {
  if (unit.definition.trait === UnitTrait.military) {
    recalcForMilitaryUnit(unit);
  }
  if (unit.definition.supplyRange) {
    forgetSupplyUnit(unit);
  }
}

export function forgetSupplyUnit(unit: UnitCore) {
  for (const tile of unit.suppliesTiles) {
    tile.suppliedByUnits.delete(unit);
    if (!tile.isSuppliedByPlayer(unit.player)) {
      unit.player.suppliedTiles.delete(tile);
    }
  }
  unit.suppliesTiles.clear();
}

export function suppliesAddUnit(unit: UnitCore) {
  if (unit.definition.supplyRange) {
    addSupplyUnit(unit);
  }
  if (unit.definition.trait === UnitTrait.military) {
    recalcForMilitaryUnit(unit);
  }
}

function addSupplyUnit(unit: UnitCore) {
  unit.suppliesPotentialTiles = getPotentialTilesRange(
    unit.player,
    unit.tile,
    unit.definition.supplyRange,
  );
  unit.suppliesTiles = getActualTilesRange(
    unit.player,
    unit.tile,
    unit.definition.supplyRange,
  );

  for (const tile of unit.suppliesPotentialTiles) {
    tile.suppliedByUnits.add(unit);
  }
}

function recalcForMilitaryUnit(unit: UnitCore) {
  const cities = [...unit.tile.canBeSuppliedByCities];
  for (const city of cities) {
    if (city.player !== unit.player) {
      suppliesForgetCity(city);
      suppliesAddCity(city);
    }
  }

  const units = [...unit.tile.suppliedByUnits];
  for (const supplyUnit of units) {
    if (supplyUnit.player !== unit.player) {
      suppliesForgetUnit(supplyUnit);
      addSupplyUnit(supplyUnit);
    }
  }
}

function getPotentialTilesRange(
  player: PlayerCore,
  tile: TileCore,
  range: number,
): Set<TileCore> {
  const result = new Set<TileCore>();
  const actionPointsAtTile = new Map<TileCore, number>();
  _getPotentialRange(player, tile, range, result, actionPointsAtTile);
  return result;
}

function getActualTilesRange(
  player: PlayerCore,
  tile: TileCore,
  range: number,
): Set<TileCore> {
  const result = new Set<TileCore>();
  const actionPointsAtTile = new Map<TileCore, number>();
  _getActualRange(player, tile, range, result, actionPointsAtTile);
  return result;
}

function _getPotentialRange(
  player: PlayerCore,
  tile: TileCore,
  actionPointsLeft: number,
  result: Set<TileCore>,
  actionPointsLeftAtTile: Map<TileCore, number>,
) {
  result.add(tile);
  player.poterntialSuppliedTiles.add(tile);

  if (actionPointsLeft <= 0) {
    return result;
  }

  for (const neighbour of tile.neighbours) {
    const cost = tile.neighboursCosts.get(neighbour)!;

    const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);
    const newActionPointsLeft = actionPointsLeft - cost;

    if (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) {
      actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);
      _getPotentialRange(
        player,
        neighbour,
        newActionPointsLeft,
        result,
        actionPointsLeftAtTile,
      );
    }
  }
}

function _getActualRange(
  player: PlayerCore,
  tile: TileCore,
  actionPointsLeft: number,
  result: Set<TileCore>,
  actionPointsLeftAtTile: Map<TileCore, number>,
) {
  result.add(tile);
  player.suppliedTiles.add(tile);

  if (actionPointsLeft <= 0) {
    return result;
  }

  for (const neighbour of tile.neighbours) {
    const cost = tile.neighboursCosts.get(neighbour)!;

    const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);
    const newActionPointsLeft = actionPointsLeft - cost;

    if (
      (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) &&
      (!neighbour.zocPlayer || neighbour.zocPlayer === player)
    ) {
      actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);
      _getActualRange(
        player,
        neighbour,
        newActionPointsLeft,
        result,
        actionPointsLeftAtTile,
      );
    }
  }
}

// TODO add forts/supply points?
