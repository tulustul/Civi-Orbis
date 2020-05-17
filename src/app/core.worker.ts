/// <reference lib="webworker" />

import { SimplexMapGenerator } from "./map-generators/simplex";
import { MapGeneratorOptions } from "./api/game.interface";
import { Game, GameChanneled } from "./core/game";
import { PlayerCore, PLAYER_COLORS } from "./core/player";
import { AIPlayer } from "./ai/ai-player";
import { collector } from "./core/collector";
import { UnitAction } from "./core/unit-actions";
import { UnitOrder } from "./core/unit";
import { findPath } from "./core/pathfinding";
import { BaseTile } from "./shared";

let game: Game;

const HANDLERS = {
  "game.new": newGameHandler,
  "game.nextPlayer": nextPlayerHandler,
  "trackedPlayer.revealWorld": revealWorld,
  "trackedPlayer.set": setTrackedPlayer,
  "unit.getDetails": getUnitDetails,
  "unit.doAction": unitDoAction,
  "unit.setOrder": unitSetOrder,
  "unit.findPath": unitFindPath,
  "unit.disband": unitDisband,
  "unit.moveAlongPath": unitMoveAlongPath,
  "tile.update": tileUpdate,
  "tile.bulkUpdate": tileBulkUpdate,
};

addEventListener("message", ({ data }) => {
  const handler = HANDLERS[data.command];
  if (!handler) {
    console.error(`No handler for command "${data.command}".`);
    return;
  }

  const result = handler(data.data);

  const changes = collector.flush();

  postMessage({ result, changes });
});

function newGameHandler(data: MapGeneratorOptions): GameChanneled {
  game = new Game();

  for (let i = 0; i < data.humanPlayersCount + data.aiPlayersCount; i++) {
    const player = new PlayerCore(game, PLAYER_COLORS[i]);

    if (i >= data.humanPlayersCount) {
      player.ai = new AIPlayer(player);
    }

    game.addPlayer(player);
  }

  const generator = new SimplexMapGenerator(game.players.length);
  game.map = generator.generate(
    data.width,
    data.height,
    data.seed,
    data.uniformity,
    data.seaLevel,
  );
  game.map.precompute();

  for (let i = 0; i < game.players.length; i++) {
    game.unitsManager.spawn(
      "settler",
      generator.getStartingLocations()[i],
      game.players[i],
    );
  }

  return game.serializeToChannel();
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
    console.error(
      `trackedPlayer.set: cannot find player with id "${playerId}".`,
    );
    return;
  }

  game.trackedPlayer = player;

  return game.trackedPlayer.serializeToTrackedPlayer();
}

function getUnitDetails(unitId: number) {
  const unit = game.unitsManager.unitsMap.get(unitId);
  if (!unit) {
    return null;
  }

  return unit.serializeToDetailsChannel();
}

function unitDoAction(data: { unitId: number; action: UnitAction }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  if (!unit) {
    return null;
  }

  unit.doAction(data.action);

  return unit.serializeToDetailsChannel();
}

function unitSetOrder(data: { unitId: number; order: UnitOrder }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  if (!unit) {
    return null;
  }

  unit.setOrder(data.order);
  return unit.serializeToDetailsChannel();
}

function unitFindPath(data: { unitId: number; destinationId: number }) {
  const unit = game.unitsManager.unitsMap.get(data.unitId);
  const tile = game.map.tilesMap.get(data.destinationId);
  if (!unit || !tile) {
    return null;
  }

  unit.path = findPath(unit, tile);

  return unit.serializeToDetailsChannel();
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

  game.unitsManager.moveAlongPath(unit);

  return unit.serializeToDetailsChannel();
}

export function tileUpdate(tile: Partial<BaseTile>) {
  const tileCore = game.map.tilesMap.get(tile.id!);
  if (!tileCore) {
    return;
  }

  Object.assign(tileCore, tile);
  game.tilesManager.updateTile(tileCore);
}

export function tileBulkUpdate(tiles: Partial<BaseTile>[]) {
  for (const tile of tiles) {
    tileUpdate(tile);
  }
}
