import { Yields } from "../yields";
import { ProductType, CityCore } from "../city";
import { Game } from "../game";
import { PlayerCore } from "../player";
import { BaseTile, PlayerYields } from "src/app/shared";
import { TilesMapCore } from "../tiles-map";
import { UnitOrder, UnitCore } from "../unit";
import { TileCore } from "../tile";
import { ResourceCore } from "../resources";

export interface GameChanneled {
  turn: number;
  map: MapChanneled;
  players: PlayerChanneled[];
  trackedPlayer: TrackedPlayerChanneled;
  units: UnitChanneled[];
  cities: CityChanneled[];
}

export interface MapChanneled {
  width: number;
  height: number;
  tiles: TileChanneled[][];
}

export interface TileChanneled extends BaseTile {
  areaOf: number | null;
  cityId: number | null;
  unitsIds: number[];
  resource: ResourceChanneled | null;
}

export interface TileDetailsChanneled extends TileChanneled {
  zocPlayerId: number | null;
  zocNoMansLand: boolean;
  isSupplied: boolean;
}

export interface CityChanneled {
  id: number;
  name: string;
  size: number;
  tileId: number;
  playerId: number;

  totalFood: number;
  foodToGrow: number;
  foodPerTurn: number;
  turnsToGrow: number;

  totalProduction: number;
  productionPerTurn: number;
  productionRequired: number | null;
  turnsToProductionEnd: number | null;
  productName: string | null;
}

export interface CityDetailsChanneled {
  id: number;
  name: string;
  size: number;
  tileId: number;
  playerId: number;

  totalFood: number;
  foodToGrow: number;
  turnsToGrow: number;

  totalProduction: number;
  turnsToProductionEnd: number | null;
  foodConsumed: number;

  totalCulture: number;
  cultureToExpand: number;

  tileYields: Yields;
  yields: Yields;
  perTurn: Yields;

  productId: string | null;
  productType: ProductType | null;

  buildingsIds: string[];

  tiles: number[];

  workedTiles: number[];

  availableBuildings: string[];

  disabledBuildings: string[];

  availableUnits: string[];
  disabledUnits: string[];

  availableIdleProducts: string[];
  disabledIdleProducts: string[];
}

export interface PlayerChanneled {
  id: number;
  color: number;
  areaId: number;
  isAi: boolean;
}

export interface TrackedPlayerChanneled {
  id: number;
  color: number;
  exploredTiles: number[];
  visibleTiles: number[];
  units: number[];
  cities: number[];

  yields: PlayerYields;
  isAi: boolean;
}

export interface UnitChanneled {
  id: number;
  tileId: number;
  definitionId: string;
  playerId: number;
  parentId: number | null;
  childrenIds: number[];
  actionPointsLeft: number;
  health: number;
  supplies: number;
}

export interface UnitDetailsChanneled extends UnitChanneled {
  order: UnitOrder;
  path: number[][] | null;
  isSupplied: boolean;
}

export interface ResourceChanneled {
  id: string;
  name: string;
  quantity: number;
}

export function gameToChannel(game: Game): GameChanneled {
  return {
    turn: game.turn,
    map: mapToChannel(game.map),
    players: game.players.map((p) => playerToChannel(p)),
    trackedPlayer: trackedPlayerToChannel(game.trackedPlayer),
    units: game.unitsManager.units.map((u) => unitToChannel(u)),
    cities: game.citiesManager.cities.map((c) => cityToChannel(c)),
  };
}

export function mapToChannel(map: TilesMapCore): MapChanneled {
  const tiles: TileChanneled[][] = [];
  for (let x = 0; x < map.width; x++) {
    const row: TileChanneled[] = [];
    tiles.push(row);
    for (let y = 0; y < map.height; y++) {
      row.push(tileToChannel(map.tiles[x][y]));
    }
  }

  return {
    width: map.width,
    height: map.height,
    tiles,
  };
}

export function tileToChannel(tile: TileCore): TileChanneled {
  return {
    id: tile.id,
    x: tile.x,
    y: tile.y,
    climate: tile.climate,
    forest: tile.forest,
    improvement: tile.improvement,
    landForm: tile.landForm,
    riverParts: tile.riverParts,
    road: tile.road,
    seaLevel: tile.seaLevel,
    wetlands: tile.wetlands,
    yields: tile.yields,
    areaOf: tile.areaOf ? tile.areaOf.id : null,
    unitsIds: tile.units.map((u) => u.id),
    cityId: tile.city ? tile.city.id : null,
    resource: tile.resource ? resourceToChannel(tile.resource) : null,
  };
}

export function resourceToChannel(resource: ResourceCore): ResourceChanneled {
  return {
    id: resource.definition.id,
    name: resource.definition.name,
    quantity: resource.quantity,
  };
}

export function cityToChannel(city: CityCore): CityChanneled {
  return {
    id: city.id,
    name: city.name,
    size: city.size,
    playerId: city.player.id,
    tileId: city.tile.id,

    totalFood: city.totalFood,
    foodToGrow: city.getFoodToGrow(),
    foodPerTurn: city.perTurn.food,
    turnsToGrow: city.turnsToGrow,

    totalProduction: city.totalProduction,
    productionPerTurn: city.yields.production,
    productionRequired: city.product
      ? city.product.productDefinition.productionCost
      : null,
    turnsToProductionEnd: city.turnsToProductionEnd,
    productName: city.product ? city.product.productDefinition.name : null,
  };
}

export function cityDetailsToChannel(city: CityCore): CityDetailsChanneled {
  city.updateProductsList();

  return {
    id: city.id,
    name: city.name,
    size: city.size,
    playerId: city.player.id,
    tileId: city.tile.id,

    totalFood: city.totalFood,
    foodToGrow: city.getFoodToGrow(),
    turnsToGrow: city.turnsToGrow,

    totalProduction: city.totalProduction,
    turnsToProductionEnd: city.turnsToProductionEnd,
    availableBuildings: city.availableBuildings.map((b) => b.id),
    availableIdleProducts: city.availableIdleProducts.map((p) => p.id),
    availableUnits: city.availableUnits.map((u) => u.id),
    buildingsIds: Array.from(city.buildingsIds),
    cultureToExpand: city.getCultureToExpand(),
    disabledBuildings: Array.from(city.disabledBuildings).map((b) => b.id),
    disabledIdleProducts: Array.from(city.disabledIdleProducts).map(
      (p) => p.id,
    ),
    disabledUnits: Array.from(city.disabledUnits).map((u) => u.id),
    foodConsumed: city.foodConsumed,
    perTurn: city.perTurn,
    productId: city.product?.productDefinition.id || null,
    productType: city.product?.type || null,
    tileYields: city.tileYields,
    tiles: Array.from(city.tiles).map((t) => t.id),
    totalCulture: city.totalCulture,
    workedTiles: Array.from(city.workedTiles).map((t) => t.id),
    yields: city.yields,
  };
}

export function playerToChannel(player: PlayerCore): PlayerChanneled {
  return {
    id: player.id,
    color: player.color,
    areaId: player.area.id,
    isAi: !!player.ai,
  };
}

export function trackedPlayerToChannel(
  player: PlayerCore,
): TrackedPlayerChanneled {
  return {
    id: player.id,
    color: player.color,
    exploredTiles: Array.from(player.exploredTiles).map((t) => t.id),
    visibleTiles: Array.from(player.visibleTiles).map((t) => t.id),
    units: player.units.map((u) => u.id),
    cities: player.cities.map((c) => c.id),
    yields: player.yields,
    isAi: !!player.ai,
  };
}

export function unitToChannel(unit: UnitCore): UnitChanneled {
  return {
    id: unit.id,
    tileId: unit.tile.id,
    definitionId: unit.definition.id,
    playerId: unit.player.id,
    parentId: unit.parent?.id || null,
    childrenIds: unit.children.map((c) => c.id),
    health: unit.health,
    supplies: unit.supplies,
    actionPointsLeft: unit.actionPointsLeft,
  };
}

export function unitDetailsToChannel(unit: UnitCore): UnitDetailsChanneled {
  return {
    id: unit.id,
    tileId: unit.tile.id,
    definitionId: unit.definition.id,
    playerId: unit.player.id,
    parentId: unit.parent?.id || null,
    childrenIds: unit.children.map((c) => c.id),
    actionPointsLeft: unit.actionPointsLeft,
    health: unit.health,
    supplies: unit.supplies,
    order: unit.order,
    path: unit.path?.map((row) => row.map((tile) => tile.id)) || null,
    isSupplied: unit.isSupplied,
  };
}

export function tileDetailsToChannel(
  tile: TileCore,
  forPlayer: PlayerCore,
): TileDetailsChanneled {
  return {
    ...tileToChannel(tile),
    zocPlayerId: tile.zocPlayer?.id ?? null,
    zocNoMansLand: tile.zocNoMansLand,
    isSupplied: tile.isSuppliedByPlayer(forPlayer),
  };
}
