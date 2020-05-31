import { PlayerCore } from "../core/player";
import { TileCore } from "../core/tile";
import { findPath } from "../core/pathfinding";
import { CityCore } from "../core/city";
import { UnitCore } from "../core/unit";
import { getUnitById, getIdleProductById } from "../core/data-manager";

export class AIPlayer {
  constructor(private player: PlayerCore) {}

  nextTurn() {
    for (const unit of this.player.unitsWithoutOrders) {
      if (unit.order) {
        continue;
      }

      if (unit.definition.actions.includes("foundCity")) {
        this.processSettler(unit);
      }
    }

    for (const city of this.player.citiesWithoutProduction) {
      city.updateProductsList();

      if (!city.product) {
        this.produceNext(city);
      }
    }
  }

  processSettler(unit: UnitCore) {
    const destination = unit.getPathDestination();
    if (!destination || destination.areaOf) {
      const bestCityLocation = this.findCityLocation(unit.tile);
      if (!bestCityLocation) {
        unit.order = "sleep";
        return;
      }

      if (unit.tile === bestCityLocation) {
        unit.doAction("foundCity");
      } else {
        unit.path = findPath(unit, bestCityLocation);
      }
    }

    if (unit.path) {
      unit.moveAlongPath();
    }
  }

  produceNext(city: CityCore) {
    const settler = getUnitById("unit_settler")!;
    if (Math.random() > 0.7 && city.canProduce(settler)) {
      const newCityLocation = this.findCityLocation(city.tile);
      if (newCityLocation) {
        city.produceUnit(settler);
        return;
      }
    }

    const buildings = city.availableBuildings.filter(
      (b) => !city.disabledBuildings.has(b),
    );
    if (buildings.length) {
      city.produceBuilding(buildings[0]);
    } else {
      city.workOnIdleProduct(getIdleProductById("idle_product_culture")!);
    }
  }

  findCityLocation(startTile: TileCore): TileCore | null {
    const tiles = startTile.getTilesInRange(5);

    let bestSweetSpotValue = 0;
    let bestTile: TileCore | null = null;
    for (const tile of tiles) {
      if (startTile.passableArea !== tile.passableArea) {
        continue;
      }

      if (tile.sweetSpotValue > bestSweetSpotValue) {
        bestSweetSpotValue = tile.sweetSpotValue;
        bestTile = tile;
      }
    }
    return bestTile;
  }
}
