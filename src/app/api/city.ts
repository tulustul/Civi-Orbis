import { Tile } from "../shared";
import { PlayerChanneled } from "../core/player";
import { CityChanneled } from "../core/city";
import { GameState } from "./state";

export class City {
  id: number;
  player: PlayerChanneled;
  tile: Tile;

  name: string;
  size: number;

  totalFood = 0;
  foodToGrow = 20;

  totalProduction = 0;
  productionRequired: number | null;
  productName: string | null;

  constructor(game: GameState, city: CityChanneled) {
    this.id = city.id;
    this.player = game.playersMap.get(city.playerId)!;
    this.tile = game.map.tilesMap.get(city.tileId)!;

    this.tile.city = this;

    this.name = city.name;
    this.size = city.size;

    this.totalFood = city.totalFood;
    this.foodToGrow = city.foodToGrow;

    this.totalProduction = city.totalProduction;
    this.productionRequired = city.productionRequired;
    this.productName = city.productName;
  }
}
