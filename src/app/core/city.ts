import { Tile } from "./tile";
import { Player } from "./player";
import { getTileIndex } from "./serialization";
import { UnitDefinition } from "./unit.interface";
import { Building } from "./buildings";
import { ProductDefinition } from "./product";
import { IdleProduct } from "./idle-product";
import { Bonuses } from "./bonus";
import {
  EMPTY_YIELDS,
  Yields,
  zeroYields,
  addYields,
  copyYields,
  roundYields,
} from "./yields";
import { BehaviorSubject, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

export type ProductType = "unit" | "building" | "idleProduct";

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
  totalCulture: number;
  totalProduction: number;
  product: ProductSerialized | null;
  tiles: number[];
  workedTiles: number[];
  buildings: string[];
}

export class City {
  id: number;
  name: string;
  size: number;

  totalFood = 0;
  foodToGrow = 20;
  foodConsumed = 1;

  totalCulture = 0;
  cultureToExpand = 20;

  tileYields: Yields = { ...EMPTY_YIELDS };
  yields: Yields = { ...EMPTY_YIELDS };
  perTurn: Yields = { ...EMPTY_YIELDS };

  product: Product | null = null;
  totalProduction = 0;

  buildings: Building[] = [];
  buildingsIds = new Set<string>();

  tiles = new Set<Tile>();

  workedTiles = new Set<Tile>();

  notWorkedTiles = new Set<Tile>();

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _product$ = new BehaviorSubject<Product | null>(null);
  product$ = this._product$.pipe(takeUntil(this.destroyed$));

  private _sizeChange$ = new Subject<number>();
  sizeChange$ = this._sizeChange$.pipe(takeUntil(this.destroyed$));

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
      totalCulture: this.totalCulture,
      product: this.product
        ? {
            type: this.product.type,
            id: this.product.productDefinition.id,
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
    this.progressExpansion();
    this.progressProduction();
    this.progressGrowth();
    this.updateYields();
  }

  progressProduction() {
    if (!this.product) {
      return;
    }

    this.totalProduction += this.yields.production;

    if (this.totalProduction >= this.product.productDefinition.productionCost) {
      if (this.product.type === "unit") {
        this.player.game.unitsManager.spawn(
          this.product.productDefinition.id,
          this.tile,
          this.player,
        );
      } else if (this.product.type === "building") {
        this.buildings.push(this.product.productDefinition as Building);
        this.buildingsIds.add(this.product.productDefinition.id);
      }
      this.totalProduction = 0;
      this.product = null;
    }
  }

  progressGrowth() {
    this.totalFood += this.yields.food - this.foodConsumed;
    if (this.totalFood >= this.foodToGrow) {
      this.size++;
      this._sizeChange$.next(this.size);
      const bestWorkableTile = this.pickBestTile(this.notWorkedTiles);
      if (bestWorkableTile) {
        this.workTile(bestWorkableTile);
      }
      this.totalFood -= this.foodToGrow;
    } else if (this.totalFood < 0) {
      if (this.size > 1) {
        this.size--;
        this._sizeChange$.next(this.size);
        this.totalFood += this.foodToGrow;
      } else {
        this.totalFood = 0;
      }
    }
    this.foodToGrow = 15 * Math.pow(1.2, this.size);
  }

  progressExpansion() {
    this.totalCulture += this.perTurn.culture;
    if (this.totalCulture >= this.cultureToExpand) {
      this.totalCulture -= this.cultureToExpand;
      this.cultureToExpand = 5 * Math.pow(1.2, this.tiles.size);

      const tile = this.pickBestTile(this.getAvailableTiles());
      if (tile) {
        this.addTile(tile);
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

  workOnIdleProduct(idleProduct: IdleProduct) {
    this.startProducing({
      type: "idleProduct",
      productDefinition: idleProduct,
    });
    this.updateYields();
    this.player.updateYields();
  }

  cancelProduction() {
    if (this.product) {
      const type = this.product.type;
      this.product = null;
      this._product$.next(null);
      if (type === "idleProduct") {
        this.updateYields();
        this.player.updateYields();
      }
    }
  }

  startProducing(product: Product) {
    if (!this.canProduce(product.productDefinition)) {
      return;
    }

    this.cancelProduction();

    this.product = product;
    this._product$.next(product);
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
    if (!this.product) {
      return null;
    }
    const remainingProduction =
      this.product.productDefinition.productionCost - this.totalProduction;

    return Math.ceil(remainingProduction / this.yields.production);
  }

  get turnsToExpand() {
    const remainingCulture = this.cultureToExpand - this.totalCulture;
    return Math.ceil(remainingCulture / this.perTurn.culture);
  }

  getTurnsToProduce(unit: UnitDefinition) {
    return Math.ceil(unit.productionCost / this.yields.production);
  }

  updateYields() {
    zeroYields(this.tileYields);

    this.tileYields.food = 2;
    this.tileYields.production = 1;

    for (const tile of this.workedTiles) {
      addYields(this.tileYields, tile.yields);
    }

    this.tileYields.production += this.freeTileWorkers;

    copyYields(this.yields, this.tileYields);

    for (const building of this.buildings) {
      this.applyBonuses(building.bonuses);
    }

    if (this.product?.type === "idleProduct") {
      const idleProduct = this.product.productDefinition as IdleProduct;
      this.applyBonuses(idleProduct.bonuses);
    }
    roundYields(this.yields);

    this.foodConsumed = this.size;

    copyYields(this.perTurn, this.yields);
    this.perTurn.food -= this.foodConsumed;
  }

  applyBonuses(bonuses: Bonuses) {
    this.yields.food += bonuses.yieldValue?.food || 0;
    this.yields.production += bonuses.yieldValue?.production || 0;
    this.yields.culture += bonuses.yieldValue?.culture || 0;
    this.yields.publicWorks += bonuses.yieldValue?.publicWorks || 0;

    if (bonuses.yieldFactor?.food) {
      this.yields.food += this.tileYields.food * bonuses.yieldFactor.food;
    }
    if (bonuses.yieldFactor?.production) {
      this.yields.production +=
        this.tileYields.production * bonuses.yieldFactor.production;
    }
    if (bonuses.yieldFactor?.culture) {
      this.yields.culture +=
        this.tileYields.culture * bonuses.yieldFactor.culture;
    }
    if (bonuses.yieldFactor?.publicWorks) {
      this.yields.publicWorks +=
        this.tileYields.publicWorks * bonuses.yieldFactor.publicWorks;
    }

    if (bonuses.transferProductionToFood) {
      this.yields.food +=
        this.yields.production * bonuses.transferProductionToFood;
    }

    if (bonuses.transferProductionToCulture) {
      this.yields.culture +=
        this.yields.production * bonuses.transferProductionToCulture;
    }

    if (bonuses.transferProductionToPublicWorks) {
      this.yields.publicWorks +=
        this.yields.production * bonuses.transferProductionToPublicWorks;
    }
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
    this.workedTiles.clear();
    this.notWorkedTiles = new Set(this.tiles);
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

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }
}
