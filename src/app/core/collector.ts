import { TileCore } from "./tile";
import { UnitCore } from "./unit";
import { CityCore } from "./city";

class Collector {
  tiles = new Set<TileCore>();
  units = new Set<UnitCore>();
  cities = new Set<CityCore>();

  unitsDestroyed = new Set<number>();
  citiesDestroyed = new Set<number>();

  flush() {
    const changes: any[] = [];
    for (const tile of this.tiles) {
      changes.push({ type: "tile.updated", data: tile.serializeToChannel() });
    }
    for (const unit of this.units) {
      changes.push({ type: "unit.updated", data: unit.serializeToChannel() });
    }
    for (const city of this.cities) {
      changes.push({ type: "city.updated", data: city.serializeToChannel() });
    }

    for (const id of this.unitsDestroyed) {
      changes.push({ type: "unit.destroyed", data: id });
    }
    for (const id of this.citiesDestroyed) {
      changes.push({ type: "city.destroyed", data: id });
    }

    this.tiles.clear();
    this.units.clear();
    this.cities.clear();
    this.unitsDestroyed.clear();
    this.citiesDestroyed.clear();

    return changes;
  }
}

export const collector = new Collector();
