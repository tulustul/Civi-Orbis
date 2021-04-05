// Zone of control

import { UnitTrait } from "./data.interface";
import { PlayerCore } from "./player";
import { UnitCore } from "./unit";

export function zocPrecompute(units: UnitCore[]) {
  for (const unit of units) {
    zocAddUnit(unit);
  }
}

export function zocForgetUnit(unit: UnitCore) {
  for (const tile of unit.zoc) {
    tile.zocUnits.delete(unit);
    if (tile.zocUnits.size === 0) {
      tile.zocPlayer = null;
      console.log("zoc reset");
    } else if (tile.zocNoMansLand) {
      let zocPlayer: PlayerCore | null = null;
      let samePlayer = true;
      for (const unit of tile.zocUnits) {
        if (!zocPlayer) {
          zocPlayer = unit.player;
        } else if (zocPlayer !== unit.player) {
          samePlayer = false;
          break;
        }
      }
      if (samePlayer) {
        tile.zocNoMansLand = false;
      }
    }
  }
  unit.zoc = [];
}

export function zocAddUnit(unit: UnitCore) {
  if (unit.definition.trait !== UnitTrait.military || unit.parent) {
    return;
  }

  if (unit.tile.zocPlayer && unit.tile.zocPlayer !== unit.player) {
    return;
  }

  unit.tile.zocPlayer = unit.player;
  unit.tile.zocUnits.add(unit);
  unit.zoc.push(unit.tile);

  for (const tile of unit.tile.neighbours) {
    if (tile.passableArea !== unit.tile.passableArea) {
      continue;
    }
    if (!tile.getFirstEnemyMilitaryUnit(unit)) {
      if (tile.units.length) {
        tile.zocPlayer = null;
        tile.zocNoMansLand = true;
      }
      tile.zocPlayer = unit.player;
      tile.zocUnits.add(unit);
      unit.zoc.push(unit.tile);
    }
  }
}
