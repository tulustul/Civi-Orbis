import { Game } from "../game";
import { ProductType, CityCore } from "../city";
import { Yields } from "../yields";
import { PlayerCore } from "../player";
import { AIPlayer } from "src/app/ai/ai-player";
import { Climate, LandForm, SeaLevel, TileDirection } from "src/app/shared";
import { TileImprovement, TileRoad } from "../tile-improvements";
import { TileCore } from "../tile";
import { TilesMapCore } from "../tiles-map";
import { UnitCore, UnitOrder } from "../unit";
import { ProductDefinition } from "../data.interface";
import {
  getUnitById,
  getBuildingById,
  getIdleProductById,
} from "../data-manager";

export interface GameSerialized {
  turn: number;
  map: MapSerialized;
  players: PlayerSerialized[];
  activePlayerIndex: number;
  trackedPlayerId: number;
  units: UnitSerialized[];
  cities: CitySerialized[];
}

interface MapSerialized {
  width: number;
  height: number;
  tiles: TileSerialized[];
}

interface TileSerialized {
  climate?: Climate;
  landForm?: LandForm;
  seaLevel?: SeaLevel;
  improvement?: TileImprovement | null;
  road?: TileRoad | null;
  riverParts?: TileDirection[];
  forest?: boolean;
  wetlands?: boolean;
}

interface ProductSerialized {
  type: ProductType;
  id: string;
}

interface CitySerialized {
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

interface PlayerSerialized {
  id: number;
  ai: boolean;
  color: number;
  exploredTiles: number[];
  yieldsTotal: Yields;
}

interface UnitSerialized {
  id: number;
  tile: number;
  definition: string;
  actionPointsLeft: number;
  health: number;
  player: number;
  order: UnitOrder;
  path: number[][] | null;
}

export function dumpGame(game: Game): GameSerialized {
  return {
    turn: game.turn,
    trackedPlayerId: game.trackedPlayer.id,
    activePlayerIndex: game.activePlayerIndex,
    map: dumpMap(game.map),
    players: game.players.map((p) => dumpPlayer(p)),
    units: game.unitsManager.units.map((u) => dumpUnit(u)),
    cities: game.citiesManager.cities.map((c) => dumpCity(c)),
  };
}

export function loadGame(data: GameSerialized) {
  const game = new Game();

  game.turn = data.turn;

  // First deserialize map as other entities depend on it.
  game.map = loadMap(data.map);

  // Then players as unit deserialization needs them.
  for (const playerData of data.players) {
    const player = loadPlayer(game, playerData);
    game.addPlayer(player);
  }
  game.activePlayerIndex = data.activePlayerIndex;

  for (const unit of data.units) {
    loadUnit(game, unit);
  }

  for (const city of data.cities) {
    loadCity(game, city);
  }

  for (const player of game.players) {
    player.updateCitiesWithoutProduction();
    player.updateUnitsWithoutOrders();
    player.updateYields();
  }

  return game;
}

function dumpMap(map: TilesMapCore): MapSerialized {
  return {
    width: map.width,
    height: map.height,
    tiles: dumpTiles(map),
  };
}

function dumpTiles(map: TilesMapCore): TileSerialized[] {
  // Store only changes from the last tile to keep save size minimal
  const result: Partial<TileCore>[] = [];
  let lastTile: Partial<TileCore> = {};
  for (let x = 0; x < map.width; x++) {
    for (let y = 0; y < map.height; y++) {
      const tile = map.tiles[x][y];
      const diff: Partial<TileCore> = {};

      if (tile.seaLevel !== lastTile.seaLevel) {
        diff.seaLevel = tile.seaLevel;
      }
      if (tile.climate !== lastTile.climate) {
        diff.climate = tile.climate;
      }
      if (tile.landForm !== lastTile.landForm) {
        diff.landForm = tile.landForm;
      }
      if (tile.forest !== lastTile.forest) {
        diff.forest = tile.forest;
      }
      if (tile.wetlands !== lastTile.wetlands) {
        diff.wetlands = tile.wetlands;
      }
      if (tile.improvement !== lastTile.improvement) {
        diff.improvement = tile.improvement;
      }
      if (tile.road !== lastTile.road) {
        diff.road = tile.road;
      }

      // The rivers tends to not repeat in subsequent tiles so instead of using diff let's just ignore empty rivers.
      if (tile.riverParts.length) {
        diff.riverParts = tile.riverParts;
      }

      result.push(diff);
      lastTile = tile;
    }
  }
  return result;
}

function loadMap(mapData: MapSerialized) {
  const map = new TilesMapCore(mapData.width, mapData.height);
  let lastTile: TileCore = map.tiles[0][0];
  let index = 0;

  for (let x = 0; x < mapData.width; x++) {
    for (let y = 0; y < mapData.height; y++) {
      const tileData = mapData.tiles[index];
      const tile = map.tiles[x][y];

      tile.climate =
        tileData.climate !== undefined ? tileData.climate! : lastTile.climate;

      tile.seaLevel =
        tileData.seaLevel !== undefined
          ? tileData.seaLevel!
          : lastTile.seaLevel;

      tile.landForm =
        tileData.landForm !== undefined
          ? tileData.landForm!
          : lastTile.landForm;

      tile.improvement =
        tileData.improvement !== undefined
          ? tileData.improvement!
          : lastTile.improvement;

      tile.road = tileData.road !== undefined ? tileData.road! : lastTile.road;

      tile.riverParts = tileData.riverParts || [];

      tile.forest =
        tileData.forest !== undefined ? tileData.forest! : lastTile.forest;

      lastTile = tile;
      index++;
    }
  }

  map.precompute();

  return map;
}

function dumpPlayer(player: PlayerCore): PlayerSerialized {
  return {
    id: player.id,
    ai: !!player.ai,
    color: player.color,
    exploredTiles: Array.from(player.exploredTiles).map((t) => t.id),
    yieldsTotal: player.yields.total,
  };
}

function loadPlayer(game: Game, data: PlayerSerialized) {
  const player = new PlayerCore(game, data.color || 0);

  if (data.ai) {
    player.ai = new AIPlayer(player);
  }

  for (const tileId of data.exploredTiles) {
    player.exploredTiles.add(game.map.tilesMap.get(tileId)!);
  }
  player.yields.total = data.yieldsTotal;
  player.updateYields();
  return player;
}

function loadCity(game: Game, cityData: CitySerialized) {
  const tile = game.map.tilesMap.get(cityData.tile)!;
  const player = game.players[cityData.player];
  const city = game.citiesManager.spawn(tile, player, false);

  if (!city) {
    return;
  }

  city.name = cityData.name;
  city.size = cityData.size;
  city.totalFood = cityData.totalFood;
  city.totalProduction = cityData.totalProduction;
  city.totalCulture = cityData.totalCulture;

  for (const tileIndex of cityData.tiles) {
    city.addTile(game.map.tilesMap.get(tileIndex)!);
  }

  for (const tileIndex of cityData.workedTiles) {
    city.workTile(game.map.tilesMap.get(tileIndex)!);
  }

  if (cityData.product) {
    let productDefinition: ProductDefinition;

    if (cityData.product.type === "unit") {
      productDefinition = getUnitById(cityData.product.id);
    } else if (cityData.product.type === "building") {
      productDefinition = getBuildingById(cityData.product.id)!;
    } else {
      productDefinition = getIdleProductById(cityData.product.id)!;
    }

    city.product = {
      type: cityData.product.type,
      productDefinition,
    };
  }

  city.buildings = cityData.buildings.map((b) => getBuildingById(b)!);
  city.buildingsIds = new Set(city.buildings.map((b) => b.id));
  city.updateYields();
}

function dumpCity(city: CityCore): CitySerialized {
  return {
    id: city.id,
    name: city.name,
    size: city.size,
    player: city.player.id,
    tile: city.tile.id,
    totalFood: city.totalFood,
    totalProduction: city.totalProduction,
    totalCulture: city.totalCulture,
    product: city.product
      ? {
          type: city.product.type,
          id: city.product.productDefinition.id,
        }
      : null,
    tiles: Array.from(city.tiles).map((tile) => tile.id),
    workedTiles: Array.from(city.workedTiles).map((tile) => tile.id),
    buildings: city.buildings.map((b) => b.id),
  };
}

function dumpUnit(unit: UnitCore): UnitSerialized {
  return {
    id: unit.id,
    tile: unit.tile.id,
    definition: unit.definition.id,
    actionPointsLeft: unit.actionPointsLeft,
    health: unit.health,
    player: unit.player.id,
    order: unit.order,
    path: unit.path?.map((row) => row.map((tile) => tile.id)) || null,
  };
}

function loadUnit(game: Game, unitData: UnitSerialized) {
  const tile = game.map.tilesMap.get(unitData.tile)!;
  const player = game.players[unitData.player];
  const unit = game.unitsManager.spawn(unitData.definition, tile, player);
  unit.actionPointsLeft = unitData.actionPointsLeft;
  unit.health = unitData.health;
  unit.order = unitData.order;

  unit.path =
    unitData.path?.map((row) =>
      row.map((tileId) => game.map.tilesMap.get(tileId)!),
    ) || null;
}
