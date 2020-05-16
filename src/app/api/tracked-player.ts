import { TrackedPlayerChanneled } from "../core/player";
import { GameState } from "./state";
import { Tile } from "../shared";
import { Yields } from "../core/yields";

export class TrackedPlayer {
  id: number;
  color: number;
  exploredTiles = new Set<Tile>();

  yieldsPerTurn: Yields;
  yieldsIncome: Yields;
  yieldsCosts: Yields;
  yieldsTotal: Yields;

  constructor(game: GameState, player: TrackedPlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.exploredTiles = new Set(
      player.exploredTiles.map((id) => game.map.tilesMap.get(id)!),
    );

    this.yieldsPerTurn = player.yieldsPerTurn;
    this.yieldsIncome = player.yieldsIncome;
    this.yieldsCosts = player.yieldsCosts;
    this.yieldsTotal = player.yieldsTotal;
  }
}
