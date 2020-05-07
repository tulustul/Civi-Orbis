import { Tile } from "./tile";
import { Player } from "./player";
import { getTileIndex } from "./serialization";
import { UnitDefinition } from "./unit.interface";
import { Building } from "./buildings";
import { ProductDefinition } from "./product";

export type ProductType = "unit" | "building" | "work";

export interface Product {
  type: ProductType;
  productDefinition: ProductDefinition;
}

export interface ProductSerialized {
  type: ProductType;
  id: string;
}

export interface CitySerialized {
  id: number;
  name: string;
  size: number;
  tile: number;
  player: number;
  totalFood: number;
  totalProduction: number;
  currentProduct: ProductSerialized | null;
  tiles: number[];
  workedTiles: number[];
  buildings: string[];
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
  foodConsumed = 1;

  yields: Yields = {
    food: 0,
    production: 0,
  };
  perTurn: Yields = {
    food: 0,
    production: 0,
  };

  currentProduct: Product | null = null;
  totalProduction = 0;

  buildings: Building[] = [];
  buildingsIds = new Set<string>();

  tiles = new Set<Tile>();

  workedTiles = new Set<Tile>();

  notWorkedTiles = new Set<Tile>();

  constructor(public tile: Tile, public player: Player) {
    this.addTile(tile);
  }

  serialize(): CitySerialized {
    return {
      id: this.id,
      name: this.name,
      size: this.size,
      player: this.player.id,
      tile: getTileIndex(this.player.game.map, this.tile),
      totalFood: this.totalFood,
      totalProduction: this.totalProduction,
      currentProduct: this.currentProduct
        ? {
            type: this.currentProduct.type,
            id: this.currentProduct.productDefinition.id,
          }
        : null,
      tiles: Array.from(this.tiles).map((tile) =>
        getTileIndex(this.player.game.map, tile),
      ),
      workedTiles: Array.from(this.workedTiles).map((tile) =>
        getTileIndex(this.player.game.map, tile),
      ),
      buildings: this.buildings.map((b) => b.id),
    };
  }

  nextTurn() {
    this.progressProduction();
    this.progressGrowth();
    this.updateYields();
  }

  progressProduction() {
    if (!this.currentProduct) {
      return;
    }

    this.totalProduction += this.yields.production;

    if (
      this.totalProduction >=
      this.currentProduct.productDefinition.productionCost
    ) {
      if (this.currentProduct.type === "unit") {
        this.player.game.unitsManager.spawn(
          this.currentProduct.productDefinition.id,
          this.tile,
          this.player,
        );
      } else if (this.currentProduct.type === "building") {
        this.buildings.push(this.currentProduct.productDefinition as Building);
        this.buildingsIds.add(this.currentProduct.productDefinition.id);
      }
      this.totalProduction = 0;
      this.currentProduct = null;
    }
  }

  progressGrowth() {
    this.totalFood += this.yields.food - this.foodConsumed;
    if (this.totalFood >= this.foodToGrow) {
      this.size++;
      const bestWorkableTile = this.pickBestTile(this.notWorkedTiles);
      if (bestWorkableTile) {
        this.workTile(bestWorkableTile);
      }
      if (this.size % 2 === 0) {
        const tile = this.pickBestTile(this.getAvailableTiles());
        if (tile) {
          this.addTile(tile);
        }
      }
      this.totalFood -= this.foodToGrow;
    } else if (this.totalFood < 0) {
      if (this.size > 1) {
        this.size--;
        this.totalFood += this.foodToGrow;
      } else {
        this.totalFood = 0;
      }
    }
  }

  produceUnit(unit: UnitDefinition) {
    this.startProducing({
      type: "unit",
      productDefinition: unit,
    });
  }

  produceBuilding(building: Building) {
    if (this.canConstruct(building)) {
      this.startProducing({
        type: "building",
        productDefinition: building,
      });
    }
  }

  startProducing(product: Product) {
    if (!this.canProduce(product.productDefinition)) {
      return;
    }

    this.currentProduct = product;
    this.totalProduction = 0;
    this.player.game.citiesManager.update(this);
  }

  get turnsToGrow() {
    if (this.perTurn.food >= 0) {
      const remainingFood = this.foodToGrow - this.totalFood;
      return Math.ceil(remainingFood / this.perTurn.food);
    } else {
      return Math.ceil(this.totalFood / this.perTurn.food) - 1;
    }
  }

  get turnsToProductionEnd() {
    if (!this.currentProduct) {
      return null;
    }
    const remainingProduction =
      this.currentProduct.productDefinition.productionCost -
      this.totalProduction;

    return Math.ceil(remainingProduction / this.yields.production);
  }

  getTurnsToProduce(unit: UnitDefinition) {
    return Math.ceil(unit.productionCost / this.yields.production);
  }

  updateYields() {
    this.yields.food = 2;
    this.yields.production = 1;
    for (const tile of this.workedTiles) {
      this.yields.food += tile.yields.food;
      this.yields.production += tile.yields.production;
    }

    this.yields.production += this.freeTileWorkers;

    for (const building of this.buildings) {
      this.yields.food += building.bonuses.yieldValue?.food || 0;
      this.yields.production += building.bonuses.yieldValue?.production || 0;

      this.yields.food *= building.bonuses.yieldFactor?.food || 1;
      this.yields.production *= building.bonuses.yieldFactor?.production || 1;
    }

    this.yields.food = Math.ceil(this.yields.food);
    this.yields.production = Math.ceil(this.yields.production);

    this.foodConsumed = this.size;
    this.perTurn.food = this.yields.food - this.foodConsumed;
    this.perTurn.production = this.yields.production;
  }

  addTile(tile: Tile, emitEvent = true) {
    if (!tile.areaOf) {
      this.tiles.add(tile);
      this.notWorkedTiles.add(tile);
      tile.areaOf = this;
      this.player.area.add(tile, emitEvent);
      const newTiles = [tile, ...tile.neighbours].filter(
        (t) => !this.player.exploredTiles.has(t),
      );
      for (const newTile of newTiles) {
        this.player.exploredTiles.add(newTile);
      }
      this.player.game.tilesManager.reveal(newTiles);
    }
  }

  removeTile(tile: Tile, emitEvent = true) {
    if (this.tiles.has(tile)) {
      this.tiles.delete(tile);
      tile.areaOf = null;
      this.player.area.remove(tile, emitEvent);
    }
  }

  workTile(tile: Tile, updateYields = true) {
    if (this.freeTileWorkers && this.tiles.has(tile)) {
      this.workedTiles.add(tile);
      this.notWorkedTiles.delete(tile);
      if (updateYields) {
        this.updateYields();
      }
    }
  }

  unworkTile(tile: Tile, updateYields = true) {
    this.workedTiles.delete(tile);
    this.notWorkedTiles.add(tile);
    if (updateYields) {
      this.updateYields();
    }
  }

  getAvailableTiles(): Set<Tile> {
    const availableTiles = new Set<Tile>();
    for (const tile of this.tiles) {
      for (const neighbour of tile.neighbours) {
        if (!neighbour.areaOf) {
          availableTiles.add(neighbour);
        }
      }
    }
    return availableTiles;
  }

  pickBestTile(tiles: Set<Tile>): Tile | null {
    let bestTile: Tile | null = null;
    let bestYields = 0;

    for (const tile of tiles) {
      const yields = tile.totalYields;
      if (yields > bestYields) {
        bestYields = yields;
        bestTile = tile;
      }
    }

    return bestTile;
  }

  get freeTileWorkers() {
    return this.size - this.workedTiles.size;
  }

  optimizeYields() {
    while (this.freeTileWorkers && this.notWorkedTiles.size) {
      const tile = this.pickBestTile(this.notWorkedTiles);
      if (!tile) {
        break;
      }
      this.workTile(tile, false);
    }
    this.updateYields();
  }

  canConstruct(building: Building) {
    return !this.buildings.includes(building);
  }

  canProduce(product: ProductDefinition): boolean {
    for (const r of product.requirements) {
      if (!r.check(this)) {
        return false;
      }
    }

    for (const r of product.weakRequirements) {
      if (!r.check(this)) {
        return false;
      }
    }

    return true;
  }
}
