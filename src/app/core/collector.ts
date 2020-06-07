import { TileCore } from "./tile";
import { UnitCore } from "./unit";
import { CityCore } from "./city";
import { PlayerCore } from "./player";
import {
  tileToChannel,
  unitToChannel,
  cityToChannel,
  trackedPlayerToChannel,
} from "./serialization/channel";
import { PlayerYields } from "../shared";

class Collector {
  tiles = new Set<TileCore>();

  units = new Set<UnitCore>();
  unitsDestroyed = new Set<number>();

  cities = new Set<CityCore>();
  citiesDestroyed = new Set<number>();

  areaTilesAdded = new Map<number, TileCore[]>();
  areaTilesRemoved = new Map<number, TileCore[]>();

  trackedPlayer: PlayerCore | undefined;
  trackedPlayerYields: PlayerYields | undefined;
  tilesExplored = new Set<number>();
  tilesShowed = new Set<number>();
  tilesShowedAdded = new Set<number>();

  turn = 0;

  flush() {
    const changes: any[] = [];

    for (const unit of this.units) {
      changes.push({ type: "unit.updated", data: unitToChannel(unit) });
    }
    for (const id of this.unitsDestroyed) {
      changes.push({ type: "unit.destroyed", data: id });
    }

    for (const city of this.cities) {
      changes.push({ type: "city.updated", data: cityToChannel(city) });
    }
    for (const id of this.citiesDestroyed) {
      changes.push({ type: "city.destroyed", data: id });
    }

    if (this.tiles.size) {
      changes.push({
        type: "tiles.updated",
        data: Array.from(this.tiles).map((tile) => tileToChannel(tile)),
      });
    }

    for (const [id, tiles] of this.areaTilesAdded.entries()) {
      changes.push({
        type: "area.tilesAdded",
        data: { id, tiles: tiles.map((t) => t.id) },
      });
    }
    for (const [id, tiles] of this.areaTilesRemoved.entries()) {
      changes.push({
        type: "area.tilesRemoved",
        data: { id, tiles: tiles.map((t) => t.id) },
      });
    }

    if (this.turn) {
      changes.push({ type: "game.turn", data: this.turn });
    }

    if (this.trackedPlayer) {
      changes.push({
        type: "trackedPlayer.set",
        data: trackedPlayerToChannel(this.trackedPlayer),
      });
    }
    if (this.trackedPlayerYields) {
      changes.push({
        type: "trackedPlayer.yields",
        data: this.trackedPlayerYields,
      });
    }
    if (this.tilesExplored.size) {
      changes.push({
        type: "trackedPlayer.tilesExplored",
        data: Array.from(this.tilesExplored),
      });
    }
    if (this.tilesShowed.size) {
      changes.push({
        type: "trackedPlayer.tilesShowed",
        data: Array.from(this.tilesShowed),
      });
    }
    if (this.tilesShowedAdded.size) {
      changes.push({
        type: "trackedPlayer.tilesShowedAdded",
        data: Array.from(this.tilesShowedAdded),
      });
    }

    this.tiles.clear();

    this.unitsDestroyed.clear();
    this.units.clear();

    this.cities.clear();
    this.citiesDestroyed.clear();

    this.areaTilesAdded.clear();
    this.areaTilesRemoved.clear();

    this.trackedPlayer = undefined;
    this.tilesExplored.clear();
    this.tilesShowed.clear();
    this.tilesShowedAdded.clear();

    this.turn = 0;

    return changes;
  }

  addAreaTiles(areaId: number, tiles: TileCore[]) {
    if (!this.areaTilesAdded.has(areaId)) {
      this.areaTilesAdded.set(areaId, tiles);
    } else {
      this.areaTilesAdded.get(areaId)!.push(...tiles);
    }
  }

  removeAreaTiles(areaId: number, tiles: TileCore[]) {
    if (!this.areaTilesRemoved.has(areaId)) {
      this.areaTilesRemoved.set(areaId, tiles);
    } else {
      this.areaTilesRemoved.get(areaId)!.push(...tiles);
    }
  }

  setVisibleTiles(tiles: Set<TileCore>) {
    for (const tile of tiles) {
      this.tilesShowed.add(tile.id);
    }
  }

  addVisibleTiles(tiles: Set<TileCore>) {
    for (const tile of tiles) {
      this.tilesShowedAdded.add(tile.id);
    }
  }
}

export const collector = new Collector();
