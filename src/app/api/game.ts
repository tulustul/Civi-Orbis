import { Subject } from "rxjs";

import { MapGeneratorOptions } from "./game.interface";
import { makeCommand } from "./commander";
import { GameChanneled } from "../core/game";
import { MapChanneled } from "../core/tiles-map";
import { PlayerSerialized } from "../core/player";
import { UnitChanneled } from "../core/unit";
import { CityChanneled } from "../core/city";
import { Tile } from "../shared";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";

export interface TilesMap extends MapChanneled {
  tiles;
}

export interface GameState {
  turn: number;
  map: TilesMap;
  players: PlayerSerialized[];
  activePlayerIndex: number;
  units: UnitChanneled[];
  cities: CityChanneled[];
}

export class GameApi {
  private _init$ = new Subject<GameState>();
  init$ = this._init$.asObservable();

  async newGame(mapGeneratorOptions: MapGeneratorOptions): Promise<GameState> {
    const gameState: GameChanneled = await makeCommand<GameChanneled>(
      "game.new",
      mapGeneratorOptions,
    );

    this.preprocessTiles(gameState.map.tiles as Tile[][]);

    this._init$.next(gameState);
    return gameState;
  }

  async loadGame(saveData: string): Promise<GameState> {
    const gameState: GameChanneled = await makeCommand("game.load", saveData);
    this.preprocessTiles(gameState.map.tiles as Tile[][]);
    return gameState;
  }

  saveGame(): Promise<string> {
    return makeCommand("game.save");
  }

  async nextPlayer() {
    const gameState: GameChanneled = await makeCommand("game.nextPlayer");
    this.preprocessTiles(gameState.map.tiles as Tile[][]);
    return gameState;
  }

  private preprocessTiles(tiles: Tile[][]) {
    for (let x = 0; x < tiles.length; x++) {
      for (let y = 0; y < tiles[x].length; y++) {
        tiles[x][y].neighbours = getTileNeighbours(tiles, x, y);
        tiles[x][y].fullNeighbours = getTileFullNeighbours(tiles, x, y);
      }
    }
  }
}
