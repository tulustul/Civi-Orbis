import { Player } from "../core/player";
import { IDLE_PRODUCTS_MAP } from "../core/idle-product";
import { Unit, UNITS_MAP } from "../core/unit";
import { TileCore } from "../core/tile";
import { findPath } from "../core/pathfinding";
import { City } from "../core/city";

export class AIPlayer {
  constructor(private player: Player) {}

  nextTurn() {
    for (const unit of this.player.unitsWithoutOrders) {
      if (unit.order) {
        continue;
      }

      if (unit.definition.actions.includes("foundCity")) {
        this.processSettler(unit);
      }
    }

    for (const city of this.player.cityWithoutProduction) {
      city.updateProductsList();

      if (!city.product) {
        this.produceNext(city);
      }
    }
  }

  processSettler(unit: Unit) {
    const bestCityLocation = this.findCityLocation(unit.tile);
    if (!bestCityLocation) {
      unit.order = "sleep";
      return;
    }
    if (unit.tile === bestCityLocation) {
      unit.doAction("foundCity");
    } else {
      unit.path = findPath(unit, bestCityLocation);
      if (unit.path) {
        this.player.game.unitsManager.moveAlongPath(unit);
      } else if (unit.canDoAction("foundCity")) {
        unit.doAction("foundCity");
      }
    }
  }

  produceNext(city: City) {
    const settler = UNITS_MAP.get("settler")!;
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
      city.workOnIdleProduct(IDLE_PRODUCTS_MAP.get("culture")!);
    }
  }

  findCityLocation(startTile: TileCore): TileCore | null {
    const tiles = startTile.getTilesInRange(5);

    let bestSweetSpotValue = 0;
    let bestTile: TileCore | null = null;
    for (const tile of tiles) {
      tile.computeSweetSpotValue();

      if (tile.sweetSpotValue > bestSweetSpotValue) {
        bestSweetSpotValue = tile.sweetSpotValue;
        bestTile = tile;
      }
    }
    return bestTile;
  }
}
