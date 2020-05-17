import { TileCore } from "./tile";
import { UnitCore } from "./unit";
import { CityCore } from "./city";
import { AreaCore } from "./area";
import { PlayerCore } from "./player";

class Collector {
  tiles = new Set<TileCore>();
  units = new Set<UnitCore>();
  cities = new Set<CityCore>();
  areas = new Set<AreaCore>();
  tilesExplored = new Set<number>();

  trackedPlayer: PlayerCore | undefined;

  unitsDestroyed = new Set<number>();
  citiesDestroyed = new Set<number>();
  areasDestroyed = new Set<number>();

  turn = 0;

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
    for (const area of this.areas) {
      changes.push({ type: "area.updated", data: area.serializeToChannel() });
    }

    for (const id of this.unitsDestroyed) {
      changes.push({ type: "unit.destroyed", data: id });
    }
    for (const id of this.citiesDestroyed) {
      changes.push({ type: "city.destroyed", data: id });
    }
    for (const id of this.areasDestroyed) {
      changes.push({ type: "area.destroyed", data: id });
    }

    if (this.turn) {
      changes.push({ type: "game.turn", data: this.turn });
    }

    if (this.tilesExplored.size) {
      changes.push({
        type: "trackedPlayer.tilesExplored",
        data: Array.from(this.tilesExplored),
      });
    }

    if (this.trackedPlayer) {
      changes.push({
        type: "trackedPlayer.set",
        data: this.trackedPlayer.serializeToTrackedPlayer(),
      });
    }

    this.tiles.clear();
    this.units.clear();
    this.cities.clear();
    this.areas.clear();

    this.unitsDestroyed.clear();
    this.citiesDestroyed.clear();
    this.areasDestroyed.clear();
    this.tilesExplored.clear();
    this.turn = 0;
    this.trackedPlayer = undefined;

    return changes;
  }
}

export const collector = new Collector();
