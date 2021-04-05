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
  for (const tile of city.suppliesTiles) {
    tile.suppliedByCities.delete(city);
    if (!tile.isSuppliedByPlayer(city.player)) {
      city.player.suppliedTiles.delete(tile);
    }
  }
  city.suppliesTiles.clear();
}

export function suppliesAddCity(city: CityCore) {
  const tiles = addTilesInRange(city.player, city.tile, city.supplyRange);
  city.suppliesTiles = tiles;
  for (const tile of tiles) {
    tile.suppliedByCities.add(city);
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
  const tiles = addTilesInRange(
    unit.player,
    unit.tile,
    unit.definition.supplyRange,
  );
  unit.suppliesTiles = tiles;
  for (const tile of tiles) {
    tile.suppliedByUnits.add(unit);
  }
}

function recalcForMilitaryUnit(unit: UnitCore) {
  for (const city of unit.tile.suppliedByCities) {
    if (city.player !== unit.player) {
      suppliesForgetCity(city);
      suppliesAddCity(city);
    }
  }

  for (const supplyUnit of unit.tile.suppliedByUnits) {
    if (supplyUnit.player !== unit.player) {
      suppliesForgetUnit(supplyUnit);
      addSupplyUnit(supplyUnit);
    }
  }
}

function addTilesInRange(
  player: PlayerCore,
  tile: TileCore,
  range: number,
): Set<TileCore> {
  const addedTiles = new Set<TileCore>();

  let toVisit = new Set<TileCore>([tile]);
  const visited = new Set<TileCore>();
  for (let i = 0; i < range; i++) {
    let neighbours = new Set<TileCore>();
    for (const tile of toVisit) {
      visited.add(tile);
      for (const neighbour of tile.neighbours) {
        if (
          !neighbour.zocPlayer ||
          (neighbour.zocPlayer === player && !visited.has(neighbour))
        ) {
          neighbours.add(neighbour);
          player.suppliedTiles.add(neighbour);
          addedTiles.add(neighbour);
        }
      }
    }
    toVisit = neighbours;
  }

  return addedTiles;
}

// TODO add forts/supply points?
