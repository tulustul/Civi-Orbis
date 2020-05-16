import { Subject } from "rxjs";

import { CitySerialized, CityCore } from "./city";
import { getTileFromIndex } from "./serialization";
import { Game } from "./game";
import { Player } from "./player";
import { BUILDINGS_MAP } from "./buildings";
import { ProductDefinition } from "./product";
import { IDLE_PRODUCTS_MAP } from "./idle-product";
import { TileRoad } from "./tile-improvements";
import { TileCore } from "./tile";
import { LandForm, SeaLevel } from "../shared";

export class CitiesManager {
  private _spawned$ = new Subject<CityCore>();
  spawned$ = this._spawned$.asObservable();

  private _updated$ = new Subject<CityCore>();
  updated$ = this._updated$.asObservable();

  private _destroyed$ = new Subject<CityCore>();
  destroyed$ = this._destroyed$.asObservable();

  cities: CityCore[] = [];

  lastId = 0;

  constructor(private game: Game) {}

  spawn(tile: TileCore, player: Player, isNew = true) {
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

    for (const neighbour of tile.neighbours) {
      // FIXME: this will recompute borders for each tile. Can be optimized.
      city.addTile(neighbour, false);
    }
    city.player.area.computeBorders();
    city.player.area.update();

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

  destroy(city: CityCore) {
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

  update(city: CityCore) {
    this._updated$.next(city);
  }

  clear() {
    this.cities = [];
  }

  serialize() {
    return this.cities.map((u) => u.serialize());
  }

  serializeToChannel() {
    return this.cities.map((u) => u.serializeToChannel());
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
          city.addTile(getTileFromIndex(this.game.map, tileIndex), false);
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
