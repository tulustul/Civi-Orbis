import { CityCore, CityVisibility, ProductType } from "@/core/city";
import { Game } from "@/core/game";
import { PlayerCore } from "@/core/player";
import { ResourceCore } from "@/core/resources";
import { TileCore } from "@/core/tile";
import { TilesMapCore } from "@/core/tiles-map";
import { UnitCore, UnitOrder } from "@/core/unit";
import { Yields } from "@/core/yields";
import { BaseTile, PlayerYields } from "@/shared";
import { UnitMoveCore } from "../collector";
import { UnitDefinition, UnitTrait } from "../data.interface";

export interface GameChanneled {
  turn: number;
  map: MapChanneled;
  players: PlayerChanneled[];
  trackedPlayer: TrackedPlayerChanneled;
  units: UnitChanneled[];
  cities: CityChanneled[];
}

export type GameInfo = {
  mapWidth: number;
  mapHeight: number;
  aiOnly: boolean;
  turn: number;
};

export type GameStartInfo = {
  gameInfo: GameInfo;
  tileToGo: TileCoords | null;
  unitIdToSelect: number | null;
};

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
  roads: string;
  playerColor: number | null;
}

export interface TileDetailsChanneled extends TileChanneled {
  zocPlayerId: number | null;
  zocNoMansLand: boolean;
  isSupplied: boolean;
}

export interface CityChanneled {
  id: number;
  visibilityLevel: CityVisibility;
  name: string;
  size: number;
  tile: TileCoords;
  playerId: number;
  cssColor: string;

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
  visibilityLevel: CityVisibility;
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
  exploredTiles: TileCoords[];
  visibleTiles: TileCoords[];
  units: number[];
  cities: number[];

  yields: PlayerYields;
  isAi: boolean;
}

export interface UnitChanneled {
  id: number;
  tile: TileCoordsWithUnits;
  definitionId: string;
  type: "military" | "civilian";
  actions: "all" | "some" | "none";
  cssColor: string;
  parentId: number | null;
  childrenIds: number[];
  actionPointsLeft: number;
  health: number;
  supplies: number;
  playerId: number;
}

export type UnitDetailsChanneled = {
  id: number;
  tile: TileCoords;
  definition: UnitDefinition;
  type: "military" | "civilian";
  trait: UnitTrait;
  cssColor: string;
  parentId: number | null;
  childrenIds: number[];
  actionPointsLeft: number;
  health: number;
  supplies: number;
  order: UnitOrder;
  path: TileCoords[][] | null;
  isSupplied: boolean;
  playerId: number;
  canControl: boolean;
};

export type TileCoordsWithUnits = TileCoords & { units: number[] };

export type TilesCoordsWithNeighbours = TileCoords & {
  fullNeighbours: (number | null)[];
};

export interface UnitMoveChanneled {
  unitId: number;
  tiles: TileCoordsWithUnits[];
}

export interface ResourceChanneled {
  id: string;
  name: string;
  quantity: number;
}

export type AreaChanneled = {
  id: number;
  color: number;
  tiles: TilesCoordsWithNeighbours[];
};

export type TileCoords = {
  id: number;
  x: number;
  y: number;
};

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

export function gameToGameStartInfo(game: Game): GameStartInfo {
  const unitToSelect = game.trackedPlayer.unitsWithoutOrders[0];
  const city = game.trackedPlayer.cities[0];
  let tileToGo = unitToSelect ? unitToSelect.tile : city ? city.tile : null;
  if (!tileToGo) {
    tileToGo = game.trackedPlayer.units[0]?.tile ?? null;
  }

  return {
    gameInfo: {
      mapWidth: game.map.width,
      mapHeight: game.map.height,
      aiOnly: game.players.every((p) => p.ai),
      turn: game.turn,
    },
    tileToGo: tileToGo ? tileToTileCoords(tileToGo) : null,
    unitIdToSelect: unitToSelect?.id ?? null,
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
    roads: tile.fullNeighbours
      .map((n) => (!n || n.road === null ? "0" : "1"))
      .join(""),
    playerColor: tile.areaOf?.player.color ?? null,
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
    visibilityLevel: city.getVisibilityFor(city.player.game.trackedPlayer),
    name: city.name,
    size: city.size,
    playerId: city.player.id,
    cssColor: city.player.cssColor,
    tile: tileToTileCoords(city.tile),

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
    visibilityLevel: city.getVisibilityFor(city.player.game.trackedPlayer),
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
    exploredTiles: Array.from(player.exploredTiles).map(tileToTileCoords),
    visibleTiles: Array.from(player.visibleTiles).map(tileToTileCoords),
    units: player.units.map((u) => u.id),
    cities: player.cities.map((c) => c.id),
    yields: player.yields,
    isAi: !!player.ai,
  };
}

export function unitToChannel(unit: UnitCore): UnitChanneled {
  return {
    id: unit.id,
    type: unit.definition.strength > 0 ? "military" : "civilian",
    tile: tileToTileCoordsWithUnits(unit.tile),
    definitionId: unit.definition.id,
    cssColor: unit.player.cssColor,
    parentId: unit.parent?.id || null,
    childrenIds: unit.children.map((c) => c.id),
    health: unit.health,
    supplies: unit.supplies,
    actionPointsLeft: unit.actionPointsLeft,
    playerId: unit.player.id,
    actions:
      unit.actionPointsLeft === unit.definition.actionPoints
        ? "all"
        : unit.actionPointsLeft > 0
          ? "some"
          : "none",
  };
}

export function unitDetailsToChannel(unit: UnitCore): UnitDetailsChanneled {
  return {
    id: unit.id,
    type: unit.definition.strength > 0 ? "military" : "civilian",
    tile: tileToTileCoords(unit.tile),
    definition: unit.definition,
    trait: unit.definition.trait,
    cssColor: unit.player.cssColor,
    parentId: unit.parent?.id || null,
    childrenIds: unit.children.map((c) => c.id),
    actionPointsLeft: unit.actionPointsLeft,
    health: unit.health,
    supplies: unit.supplies,
    order: unit.order,
    path: unit.path?.map((row) => row.map(tileToTileCoords)) || null,
    isSupplied: unit.isSupplied,
    playerId: unit.player.id,
    canControl: unit.player === unit.player.game.trackedPlayer,
  };
}

export function unitMoveToChannel(move: UnitMoveCore): UnitMoveChanneled {
  return {
    unitId: move.unit.id,
    tiles: move.tiles.map(tileToTileCoordsWithUnits),
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

export function tileToTileCoords(tile: TileCore): TileCoords {
  return { id: tile.id, x: tile.x, y: tile.y };
}

export function tileToTileCoordsWithUnits(tile: TileCore): TileCoordsWithUnits {
  return {
    ...tileToTileCoords(tile),
    units: tile.units.map((u) => u.id),
  };
}

export function tilesToTileCoordsWithNeighbours(
  tile: TileCore,
): TilesCoordsWithNeighbours {
  return {
    ...tileToTileCoords(tile),
    fullNeighbours: tile.fullNeighbours.map((t) => t?.id ?? null),
  };
}
