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

  totalFood: number;
  foodToGrow: number;
  foodPerTurn: number;
  turnsToGrow: number;

  totalProduction: number;
  productionRequired: number | null;
  productionPerTurn: number;
  turnsToProductionEnd: number | null;
  productName: string | null;

  constructor(game: GameState, city: CityChanneled) {
    this.id = city.id;
    this.player = game.playersMap.get(city.playerId)!;
    this.tile = game.map.tilesMap.get(city.tileId)!;

    this.tile.city = this;

    this.update(city);

    game.citiesMap.set(this.id, this);
  }

  update(city: CityChanneled) {
    this.name = city.name;
    this.size = city.size;

    this.totalFood = city.totalFood;
    this.foodToGrow = city.foodToGrow;
    this.foodPerTurn = city.foodPerTurn;
    this.turnsToGrow = city.turnsToGrow;

    this.totalProduction = city.totalProduction;
    this.productionRequired = city.productionRequired;
    this.productionPerTurn = city.productionPerTurn;
    this.turnsToProductionEnd = city.turnsToProductionEnd;
    this.productName = city.productName;
  }
}
