import { Player } from "./player";
import { Product, ProductType } from "../core/city";
import { Yields } from "../core/yields";
import { Building, BUILDINGS_MAP } from "../core/buildings";
import { UnitDefinition } from "../core/unit.interface";
import { IdleProduct, IDLE_PRODUCTS_MAP } from "../core/idle-product";
import { GameState } from "./state";
import { ProductDefinition } from "../core/product";
import { UNITS_MAP } from "../core/unit";
import { makeCommand } from "./internal/commander";
import { CityDetailsChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";

export class CityDetails {
  id: number;
  name: string;
  size: number;
  tile: Tile;
  player: Player;

  totalFood: number;
  foodToGrow: number;
  turnsToGrow: number;

  totalProduction: number;
  turnsToProductionEnd: number | null;

  product: Product | null;

  foodConsumed: number;

  totalCulture: number;
  cultureToExpand: number;

  tileYields: Yields;
  yields: Yields;
  perTurn: Yields;

  buildings: Building[];
  buildingsIds: Set<string>;

  tiles: Set<Tile>;

  workedTiles: Set<Tile>;

  availableBuildings: Building[];

  disabledBuildings: Set<Building>;

  availableUnits: UnitDefinition[];
  disabledUnits: Set<UnitDefinition>;

  availableIdleProducts: IdleProduct[];
  disabledIdleProducts: Set<IdleProduct>;

  constructor(private game: GameState, city: CityDetailsChanneled) {
    this.id = city.id;
    this.update(city);
  }

  private update(city: CityDetailsChanneled) {
    this.name = city.name;
    this.size = city.size;
    this.tile = this.game.map.tilesMap.get(city.tileId)!;
    this.player = this.game.playersMap.get(city.playerId)!;

    this.totalFood = city.totalFood;
    this.foodToGrow = city.foodToGrow;
    this.turnsToGrow = city.turnsToGrow;

    this.totalProduction = city.totalProduction;
    this.turnsToProductionEnd = city.turnsToProductionEnd;

    this.product = null;
    if (city.productId && city.productType) {
      let defition: ProductDefinition;
      if (city.productType === "building") {
        defition = BUILDINGS_MAP.get(city.productId)!;
      } else if (city.productType === "unit") {
        defition = UNITS_MAP.get(city.productId)!;
      } else {
        defition = IDLE_PRODUCTS_MAP.get(city.productId)!;
      }
      this.product = {
        type: city.productType,
        productDefinition: defition,
      };
    }

    this.foodConsumed = city.foodConsumed;

    this.totalCulture = city.totalCulture;
    this.cultureToExpand = city.cultureToExpand;

    this.tileYields = city.tileYields;
    this.yields = city.yields;
    this.perTurn = city.perTurn;

    this.buildings = city.buildingsIds.map((id) => BUILDINGS_MAP.get(id)!);
    this.buildingsIds = new Set(city.buildingsIds);

    this.tiles = new Set(
      city.tiles.map((id) => this.game.map.tilesMap.get(id)!),
    );
    this.workedTiles = new Set(
      city.workedTiles.map((id) => this.game.map.tilesMap.get(id)!),
    );

    this.availableBuildings = city.availableBuildings.map(
      (id) => BUILDINGS_MAP.get(id)!,
    );
    this.availableIdleProducts = city.availableIdleProducts.map(
      (id) => IDLE_PRODUCTS_MAP.get(id)!,
    );
    this.availableUnits = city.availableUnits.map((id) => UNITS_MAP.get(id)!);

    this.disabledBuildings = new Set(
      city.disabledBuildings.map((id) => BUILDINGS_MAP.get(id)!),
    );
    this.disabledUnits = new Set(
      city.disabledUnits.map((id) => UNITS_MAP.get(id)!),
    );
    this.disabledIdleProducts = new Set(
      city.disabledIdleProducts.map((id) => IDLE_PRODUCTS_MAP.get(id)!),
    );
  }

  getTurnsToProduce(product: ProductDefinition) {
    return Math.ceil(product.productionCost / this.yields.production);
  }

  get turnsToExpand() {
    const remainingCulture = this.cultureToExpand - this.totalCulture;
    return Math.ceil(remainingCulture / this.perTurn.culture);
  }

  optimizeYields() {}

  async produceBuilding(building: Building) {
    const cityData = await makeCommand<CityDetailsChanneled>("city.produce", {
      cityId: this.id,
      type: "building" as ProductType,
      productId: building.id,
    });
    this.update(cityData);
  }

  async produceUnit(unit: UnitDefinition) {
    const cityData = await makeCommand<CityDetailsChanneled>("city.produce", {
      cityId: this.id,
      type: "unit" as ProductType,
      productId: unit.id,
    });
    this.update(cityData);
  }

  async workOnIdleProduct(idleProduct: IdleProduct) {
    const cityData = await makeCommand<CityDetailsChanneled>("city.produce", {
      cityId: this.id,
      type: "idleProduct" as ProductType,
      productId: idleProduct.id,
    });
    this.update(cityData);
  }
}
