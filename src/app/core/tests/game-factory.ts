import { SeaLevel } from "src/app/shared";
import { Game } from "../game";
import { PlayerCore } from "../player";
import { TileCore } from "../tile";
import { TilesMapCore } from "../tiles-map";

export type SymbolCallbacks = {
  [key: string]: (game: Game, tile: TileCore) => void;
};

export type GameFactoryOptions = {
  playersCount: number;
  symbolCallbacks: SymbolCallbacks;
};

const defaultOptions: GameFactoryOptions = {
  playersCount: 1,
  symbolCallbacks: {},
};

function makeMap(
  mapData: string[],
  game: Game,
  symbolCallbacks: SymbolCallbacks,
) {
  const symbols = tokenizeMapSymbols(mapData);

  const height = symbols.length;
  const width = symbols[0].length;

  game.map = new TilesMapCore(width, height);
  game.map.precompute();

  alterMap(mapData, game, symbolCallbacks);
}

function alterMap(
  mapData: string[],
  game: Game,
  symbolCallbacks: SymbolCallbacks,
) {
  const symbols = tokenizeMapSymbols(mapData);
  for (const row of game.map.tiles) {
    if (row.length !== game.map.width) {
      throw "makeMap: each row must have the same number of symbols";
    }
    for (const tile of row) {
      tile.seaLevel = SeaLevel.none;
      const symbol = symbols[tile.y][tile.x];
      if (symbol !== ".") {
        const callback = symbolCallbacks[symbol];
        if (!callback) {
          throw `makeMap: I don't know what to do with the symbol "${symbol}"`;
        }
        callback(game, tile);
      }
    }
  }

  game.map.precompute();
}

function tokenizeMapSymbols(mapData: string[]) {
  return mapData
    .map((line) => line.trim())
    .filter((line) => !!line)
    .map((line) => line.split(" "));
}

export function makeGame(
  mapData: string[],
  userOptions: Partial<GameFactoryOptions>,
): Game {
  const options = { ...defaultOptions, ...userOptions };

  const game = new Game();

  for (let i = 0; i < options.playersCount; i++) {
    game.addPlayer(new PlayerCore(game, 0));
  }

  makeMap(mapData, game, options.symbolCallbacks);

  game.start();

  return game;
}

export function alterGame(
  game: Game,
  mapData: string[],
  userOptions: Partial<GameFactoryOptions>,
) {
  const options = { ...defaultOptions, ...userOptions };
  alterMap(mapData, game, options.symbolCallbacks);
}
