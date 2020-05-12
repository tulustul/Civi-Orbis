/// <reference lib="webworker" />

import { SimplexMapGenerator } from "./map-generators/simplex";
import { MapGeneratorOptions } from "./api/game.interface";
import { Game, GameChanneled } from "./core/game";
import { Player, PLAYER_COLORS } from "./core/player";
import { AIPlayer } from "./ai/ai-player";

addEventListener("message", ({ data }) => {
  const handler = HANDLERS[data.command];
  if (!handler) {
    console.error(`No handler for command "${data.command}".`);
    return;
  }

  const result = handler(data.data);

  postMessage(result);
});

const HANDLERS = {
  "game.new": newGameHandler,
};

function newGameHandler(data: MapGeneratorOptions): GameChanneled {
  const game = new Game();

  for (let i = 0; i < data.humanPlayersCount + data.aiPlayersCount; i++) {
    const player = new Player(game, PLAYER_COLORS[i]);

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
