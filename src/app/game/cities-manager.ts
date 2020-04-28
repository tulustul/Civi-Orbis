import { City, CitySerialized } from "./city";
import { getTileFromIndex } from "./serialization";
import { Game } from "./game";
import { Player } from "./player";
import { Tile } from "./tile.interface";
import { Subject } from "rxjs";

export class CitiesManager {
  private _spawned$ = new Subject<City>();
  spawned$ = this._spawned$.asObservable();

  private _updated$ = new Subject<City>();
  updated$ = this._updated$.asObservable();

  cities: City[] = [];

  constructor(private game: Game) {}

  spawn(tile: Tile, player: Player) {
    const city = new City(tile, player);
    city.size = 1;
    city.name = `City ${this.cities.length + 1}`;

    player.cities.push(city);
    tile.city = city;

    this._spawned$.next(city);

    return city;
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
      const city = this.spawn(tile, player);
      city.name = cityData.name;
      city.size = cityData.size;
    }
  }
}
