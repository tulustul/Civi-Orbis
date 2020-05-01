import { Tile } from "./tile";
import { Player } from "./player";
import { getTileIndex } from "./serialization";
import { UnitDefinition } from "./unit.interface";

export interface CitySerialized {
  id: number;
  name: string;
  size: number;
  tile: number;
  player: number;
  totalFood: number;
  totalProduction: number;
  inProduction: string | null;
}

export interface Yields {
  food: number;
  production: number;
}

export class City {
  id: number;
  name: string;
  size: number;
  totalFood = 0;
  foodToGrow = 20;
  yields: Yields = {
    food: 5,
    production: 5,
  };
  inProduction: UnitDefinition | null = null;
  totalProduction = 0;

  constructor(public tile: Tile, public player: Player) {}

  serialize(): CitySerialized {
    return {
      id: this.id,
      name: this.name,
      size: this.size,
      player: this.player.id,
      tile: getTileIndex(this.player.game.map, this.tile),
      totalFood: this.totalFood,
      totalProduction: this.totalProduction,
      inProduction: this.inProduction?.id || null,
    };
  }

  nextTurn() {
    this.progressProduction();
    this.progressGrowth();
  }

  progressProduction() {
    if (!this.inProduction) {
      return;
    }

    this.totalProduction += this.yields.production;

    if (this.totalProduction >= this.inProduction.productionCost) {
      this.player.game.unitsManager.spawn(
        this.inProduction.id,
        this.tile,
        this.player,
      );
      this.totalProduction = 0;
      this.inProduction = null;
    }
  }

  progressGrowth() {
    this.totalFood += this.yields.food;
    if (this.totalFood >= this.foodToGrow) {
      this.size++;
      this.totalFood -= this.foodToGrow;
    } else if (this.totalFood < 0) {
      this.size--;
      this.totalFood += this.foodToGrow;
    }
  }

  startProducing(unit: UnitDefinition) {
    this.inProduction = unit;
    this.totalProduction = 0;
    this.player.game.citiesManager.update(this);
  }

  get turnsToGrow() {
    const remainingFood = this.foodToGrow - this.totalFood;
    return Math.ceil(remainingFood / this.yields.food);
  }

  get turnsToProductionEnd() {
    if (!this.inProduction) {
      return null;
    }
    const remainingProduction =
      this.inProduction.productionCost - this.totalProduction;

    return Math.ceil(remainingProduction / this.yields.production);
  }

  getTurnsToProduce(unit: UnitDefinition) {
    return Math.ceil(unit.productionCost / this.yields.production);
  }
}
