import { Subject } from "rxjs";

import { City, CitySerialized } from "./city";
import { getTileFromIndex } from "./serialization";
import { Game } from "./game";
import { Player } from "./player";
import { Tile, LandForm, SeaLevel, TileRoad } from "./tile";
import { BUILDINGS_MAP } from "./buildings";
import { ProductDefinition } from "./product";
import { IDLE_PRODUCTS_MAP } from "./idle-product";

export class CitiesManager {
  private _spawned$ = new Subject<City>();
  spawned$ = this._spawned$.asObservable();

  private _updated$ = new Subject<City>();
  updated$ = this._updated$.asObservable();

  private _destroyed$ = new Subject<City>();
  destroyed$ = this._destroyed$.asObservable();

  cities: City[] = [];

  constructor(private game: Game) {}

  spawn(tile: Tile, player: Player, isNew = true) {
    if (tile.city) {
      return null;
    }

    if (
      tile.landForm === LandForm.mountains ||
      tile.seaLevel !== SeaLevel.none
    ) {
      return null;
    }

    const city = new City(tile, player);
    city.id = this.cities.length;
    city.size = 1;
    city.name = `City ${this.cities.length + 1}`;
    city.tile = tile;
    this.cities.push(city);

    for (const neighbour of tile.neighbours) {
      city.addTile(neighbour);
    }

    player.addCity(city);

    tile.city = city;
    tile.forest = false;
    tile.wetlands = false;
    tile.road = TileRoad.road;
    this.game.tilesManager.updateTile(tile);

    if (isNew) {
      city.optimizeYields();
    }

    this._spawned$.next(city);
    city.sizeChange$.subscribe(() => this.update(city));

    return city;
  }

  destroy(city: City) {
    // TODO rewrite to sets for better performance?
    let index = this.cities.indexOf(city);
    if (index !== -1) {
      this.cities.splice(index, 1);
    }

    index = city.player.cities.indexOf(city);
    if (index !== -1) {
      city.player.cities.splice(index, 1);
    }

    city.tile.city = null;

    for (const tile of city.tiles) {
      city.removeTile(tile);
    }

    city.destroy();
    this._destroyed$.next(city);
  }

  update(city: City) {
    this._updated$.next(city);
  }

  clear() {
    this.cities = [];
  }

  serialize() {
    return this.cities.map((u) => u.serialize());
  }

  deserialize(data: CitySerialized[]) {
    for (const cityData of data) {
      const tile = getTileFromIndex(this.game.map, cityData.tile);
      const player = this.game.players[cityData.player];
      const city = this.spawn(tile, player, false);
      if (city) {
        city.name = cityData.name;
        city.size = cityData.size;
        city.totalFood = cityData.totalFood;
        city.totalProduction = cityData.totalProduction;
        city.totalCulture = cityData.totalCulture;
        for (const tileIndex of cityData.tiles) {
          city.addTile(getTileFromIndex(this.game.map, tileIndex));
        }
        for (const tileIndex of cityData.workedTiles) {
          city.workTile(getTileFromIndex(this.game.map, tileIndex));
        }
        if (cityData.product) {
          let productDefinition: ProductDefinition;

          if (cityData.product.type === "unit") {
            productDefinition = this.game.unitsManager.definitions.get(
              cityData.product.id,
            )!;
          } else if (cityData.product.type === "building") {
            productDefinition = BUILDINGS_MAP.get(cityData.product.id)!;
          } else {
            productDefinition = IDLE_PRODUCTS_MAP.get(cityData.product.id)!;
          }

          city.product = {
            type: cityData.product.type,
            productDefinition,
          };
        }
        city.buildings = cityData.buildings.map((b) => BUILDINGS_MAP.get(b)!);
        city.buildingsIds = new Set(city.buildings.map((b) => b.id));
        city.updateYields();
      }
    }
  }

  nextTurn() {
    for (const city of this.cities) {
      city.nextTurn();
    }
  }
}
