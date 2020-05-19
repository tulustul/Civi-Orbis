import { CityCore } from "./city";
import { PlayerCore } from "./player";
import { TileRoad } from "./tile-improvements";
import { TileCore } from "./tile";
import { LandForm, SeaLevel } from "../shared";
import { collector } from "./collector";

export class CitiesManager {
  cities: CityCore[] = [];

  citiesMap = new Map<number, CityCore>();

  lastId = 0;

  spawn(tile: TileCore, player: PlayerCore, isNew = true) {
    if (tile.city) {
      return null;
    }

    if (
      tile.landForm === LandForm.mountains ||
      tile.seaLevel !== SeaLevel.none
    ) {
      return null;
    }

    const city = new CityCore(tile, player);
    city.id = this.lastId++;
    city.size = 1;
    city.name = `City ${city.id}`;
    city.tile = tile;
    this.cities.push(city);
    this.citiesMap.set(city.id, city);

    for (const neighbour of tile.neighbours) {
      // FIXME: this will recompute borders for each tile. Can be optimized.
      city.addTile(neighbour);
    }
    // city.player.area.computeBorders();
    // city.player.area.update();

    player.addCity(city);

    tile.city = city;
    tile.forest = false;
    tile.wetlands = false;
    tile.road = TileRoad.road;
    tile.update();

    if (isNew) {
      city.optimizeYields();
    }

    collector.cities.add(city);

    return city;
  }

  destroy(city: CityCore) {
    // TODO rewrite to sets for better performance?
    let index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }

    this.citiesMap.delete(city.id);

    index = city.player.cities.indexOf(city);
    if (index !== -1) {
      city.player.cities.splice(index, 1);
    }

    city.tile.city = null;

    for (const tile of city.tiles) {
      city.removeTile(tile);
    }

    collector.citiesDestroyed.add(city.id);
  }

  nextTurn() {
    for (const city of this.cities) {
      city.nextTurn();
    }
  }
}
