import { GameState } from "./state";
import { Player } from "./player";
import { CityChanneled } from "../core/serialization/channel";
import { makeCommand } from "./internal/commander";
import { Tile } from "./tile.interface";

export class City {
  id: number;
  player: Player;
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

  constructor(private game: GameState, city: CityChanneled) {
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

  async getRange() {
    const ids = await makeCommand<number[]>("city.getRange", this.id);
    return ids.map((id) => this.game.map.tilesMap.get(id)!);
  }

  async getWorkTiles() {
    const data = await makeCommand<{
      workedTiles: number[];
      notWorkedTiles: number[];
    }>("city.getWorkTiles", this.id);

    return {
      workedTiles: data.workedTiles.map(
        (id) => this.game.map.tilesMap.get(id)!,
      ),
      notWorkedTiles: data.notWorkedTiles.map(
        (id) => this.game.map.tilesMap.get(id)!,
      ),
    };
  }
}
