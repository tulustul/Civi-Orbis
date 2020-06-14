/// <reference lib="webworker" />

import { RealisticMapGenerator } from "./map-generators/realistic";
import { MapGeneratorOptions } from "./api/game.interface";
import { Game } from "./core/game";
import { PlayerCore, PLAYER_COLORS } from "./core/player";
import { AIPlayer } from "./ai/ai-player";
import { collector } from "./core/collector";
import { UnitAction } from "./core/unit-actions";
import { UnitOrder } from "./core/unit";
import { findPath } from "./core/pathfinding";
import { BaseTile, PlayerTask } from "./shared";
import { CombatSimulation, simulateCombat } from "./core/combat";
import {
  gameToChannel,
  trackedPlayerToChannel,
  unitDetailsToChannel,
  cityDetailsToChannel,
  GameChanneled,
} from "./core/serialization/channel";
import { dumpGame, loadGame } from "./core/serialization/dump";
import {
  getEntityById,
  getBuildingById,
  getUnitById,
  getIdleProductById,
} from "./core/data-manager";
import { CityCore } from "./core/city";
import { getFailedWeakRequirements } from "./core/requirements";
import { moveAlongPath } from "./core/movement";

let game: Game;

const HANDLERS = {
  "game.new": newGameHandler,
  "game.saveDump": saveDumpHandler,
  "game.loadDump": loadDumpHandler,
  "game.nextPlayer": nextPlayerHandler,

  "trackedPlayer.revealWorld": revealWorld,
  "trackedPlayer.set": setTrackedPlayer,

  "unit.spawn": unitSpawn,
  "unit.getDetails": getUnitDetails,
  "unit.doAction": unitDoAction,
  "unit.setOrder": unitSetOrder,
  "unit.findPath": unitFindPath,
  "unit.disband": unitDisband,
  "unit.moveAlongPath": unitMoveAlongPath,
  "unit.getRange": unitGetRange,
  "unit.getFailedActionRequirements": unitGetFailedActionRequirements,
  "unit.simulateCombat": unitSimulateCombat,

  "tile.update": tileUpdate,
  "tile.bulkUpdate": tileBulkUpdate,

  "city.getDetails": getCityDetails,
  "city.produce": cityProduce,
  "city.getRange": cityGetRange,
  "city.getWorkTiles": cityGetWorkTiles,
  "city.workTile": cityWorkTile,
  "city.unworkTile": cityUnworkTile,
  "city.optimizeYields": cityOptimizeYields,

  "area.getTiles": getAreaTiles,

  "entity.getFailedWeakRequirements": entityGetFailedWeakRequirements,
};

addEventListener("message", ({ data }) => {
  const handler = HANDLERS[data.command];
  if (!handler) {
    console.error(`No handler for command "${data.command}".`);
    return;
  }

  const result = handler(data.data);

  const changes = collector.flush();

  game.trackedPlayer.updateCitiesWithoutProduction();
  game.trackedPlayer.updateUnitsWithoutOrders();
  const nextTask = getNextTask();

  postMessage({ result, changes, nextTask });
});

function getNextTask(): PlayerTask | null {
  const p = game.trackedPlayer;

  if (p.ai) {
    // Don't force the player to do anything if we are just observing AI playing.
    return null;
  }

  if (p.citiesWithoutProduction.length) {
    return {
      task: "city",
      id: p.citiesWithoutProduction[0].id,
    };
  }

  if (p.unitsWithoutOrders.length) {
    return {
      task: "unit",
      id: p.unitsWithoutOrders[0].id,
    };
  }

  return null;
}

function newGameHandler(data: MapGeneratorOptions): GameChanneled {
  game = new Game();

  for (let i = 0; i < data.humanPlayersCount + data.aiPlayersCount; i++) {
    const player = new PlayerCore(game, PLAYER_COLORS[i]);

    if (i >= data.humanPlayersCount) {
      player.ai = new AIPlayer(player);
    }

    game.addPlayer(player);
  }

  const generator = new RealisticMapGenerator(game.players.length);
  game.map = generator.generate(
    data.width,
    data.height,
    data.seed,
    data.uniformity,
    data.seaLevel,
  );
  game.map.precompute();

  for (let i = 0; i < game.players.length; i++) {
    const startTile = generator.getStartingLocations()[i];
    game.unitsManager.spawn("unit_settler", startTile, game.players[i]);
    game.unitsManager.spawn("unit_scout", startTile, game.players[i]);
    game.unitsManager.spawn("unit_warrior", startTile, game.players[i]);
  }

  game.start();

  return gameToChannel(game);
}

function saveDumpHandler(): string {
  // TODO we might compress the save
  return JSON.stringify(dumpGame(game));
}

function loadDumpHandler(data: string) {
  game = loadGame(JSON.parse(data));
  return gameToChannel(game);
}

function nextPlayerHandler() {
  game.nextPlayer();
}

function revealWorld() {
  for (let x = 0; x < game.map.width; x++) {
    game.trackedPlayer.exploreTiles(game.map.tiles[x]);
  }
}

function setTrackedPlayer(playerId: number) {
  const player = game.players.find((p) => p.id === playerId);

  if (!player) {
    return;
  }

  game.trackedPlayer = player;

  return trackedPlayerToChannel(game.trackedPlayer);
}

function unitSpawn(data) {
  const tile = game.map.tilesMap.get(data.tileId);
  const player = game.playersMap.get(data.playerId);

  if (!tile || !player) {
    return;
  }

  game.unitsManager.spawn(data.definitionId, tile, player);
}

function getUnitDetails(unitId: number) {
  const unit = game.unitsManager.unitsMap.get(unitId);
  if (!unit) {
    return null;
  }

  return unitDetailsToChannel(unit);
}

function unitDoAction(data: { unitId: number; action: UnitAction }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  if (!unit) {
    return null;
  }

  unit.doAction(data.action);

  return unitDetailsToChannel(unit);
}

function unitSetOrder(data: { unitId: number; order: UnitOrder }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  if (!unit) {
    return null;
  }

  unit.setOrder(data.order);

  return unitDetailsToChannel(unit);
}

function unitFindPath(data: { unitId: number; destinationId: number }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  const tile = game.map.tilesMap.get(data.destinationId);
  if (!unit || !tile) {
    return null;
  }

  unit.path = findPath(unit, tile);

  return unitDetailsToChannel(unit);
}

function unitDisband(unitId: number) {
  const unit = game.unitsManager.unitsMap.get(unitId);
  if (!unit) {
    return null;
  }

  game.unitsManager.destroy(unit);
}

function unitMoveAlongPath(unitId: number) {
  const unit = game.unitsManager.unitsMap.get(unitId);
  if (!unit) {
    return null;
  }

  moveAlongPath(unit);

  return unitDetailsToChannel(unit);
}

function unitGetRange(unitId: number): number[] {
  const unit = game.unitsManager.unitsMap.get(unitId);
  if (!unit) {
    return [];
  }

  const tiles = unit.getRange();

  return Array.from(tiles).map((tile) => tile.id);
}

function unitGetFailedActionRequirements(data): string[] {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  if (!unit) {
    return [];
  }

  return unit.getFailedActionRequirements(data.action);
}

function unitSimulateCombat(data): CombatSimulation | null {
  const attacker = game.unitsManager.unitsMap.get(data.attackerId);
  const defender = game.unitsManager.unitsMap.get(data.defenderId);
  if (!attacker || !defender) {
    return null;
  }

  return simulateCombat(attacker, defender);
}

export function tileUpdate(tile: Partial<BaseTile>) {
  const tileCore = game.map.tilesMap.get(tile.id!);
  if (!tileCore) {
    return;
  }

  Object.assign(tileCore, tile);
  tileCore.update();
}

export function tileBulkUpdate(tiles: Partial<BaseTile>[]) {
  for (const tile of tiles) {
    tileUpdate(tile);
  }
}

export function getCityDetails(cityId: number) {
  const city = game.citiesManager.citiesMap.get(cityId);
  if (!city) {
    return;
  }

  return cityDetailsToChannel(city);
}

export function cityProduce(data) {
  const city = game.citiesManager.citiesMap.get(data.cityId);

  if (!city) {
    return;
  }

  if (data.type === "building") {
    city.produceBuilding(getBuildingById(data.productId)!);
  } else if (data.type === "unit") {
    city.produceUnit(getUnitById(data.productId)!);
  } else {
    city.workOnIdleProduct(getIdleProductById(data.productId)!);
  }

  return cityDetailsToChannel(city);
}

export function cityGetRange(cityId: number) {
  const city = game.citiesManager.citiesMap.get(cityId);

  if (!city) {
    return;
  }

  return Array.from(city.tiles).map((tile) => tile.id);
}

export function cityGetWorkTiles(cityId: number) {
  const city = game.citiesManager.citiesMap.get(cityId);

  if (!city) {
    return {};
  }

  return {
    workedTiles: Array.from(city.workedTiles).map((tile) => tile.id),
    notWorkedTiles: Array.from(city.notWorkedTiles).map((tile) => tile.id),
  };
}

export function cityWorkTile(data) {
  const city = game.citiesManager.citiesMap.get(data.cityId);
  const tile = game.map.tilesMap.get(data.tileId);

  if (!city || !tile) {
    return null;
  }

  city.workTile(tile);

  return cityDetailsToChannel(city);
}

export function cityUnworkTile(data) {
  const city = game.citiesManager.citiesMap.get(data.cityId);
  const tile = game.map.tilesMap.get(data.tileId);

  if (!city || !tile) {
    return null;
  }

  city.unworkTile(tile);

  return cityDetailsToChannel(city);
}

export function cityOptimizeYields(cityId: number) {
  const city = game.citiesManager.citiesMap.get(cityId);

  if (!city) {
    return null;
  }

  city.optimizeYields();

  return cityDetailsToChannel(city);
}

export function getAreaTiles(areaId: number): number[] {
  const area = game.areasManager.areasMap.get(areaId);
  if (!area) {
    return [];
  }

  return Array.from(area.tiles).map((tile) => tile.id);
}

export function entityGetFailedWeakRequirements(data): [string, any][] {
  const entityId: string = data.entityId;
  const cityId: number | null = data.cityId;

  const entity = getEntityById(entityId);
  if (!entity) {
    return [];
  }

  let city: CityCore | null = null;
  if (cityId) {
    city = game.citiesManager.citiesMap.get(cityId)!;
  }

  return getFailedWeakRequirements(entity, game.trackedPlayer, city);
}
