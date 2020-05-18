import { TrackedPlayerChanneled } from "../core/player";
import { GameState } from "./state";
import { Tile } from "../shared";
import { Yields } from "../core/yields";
import { makeCommand } from "./internal/commander";
import { Unit } from "./unit";
import { City } from "./city";

export class TrackedPlayer {
  id: number;
  color: number;
  exploredTiles = new Set<Tile>();

  units: Unit[] = [];
  cities: City[] = [];

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

    this.units = player.units.map((id) => game.unitsMap.get(id)!);
    this.cities = player.cities.map((id) => game.citiesMap.get(id)!);

    this.yieldsPerTurn = player.yieldsPerTurn;
    this.yieldsIncome = player.yieldsIncome;
    this.yieldsCosts = player.yieldsCosts;
    this.yieldsTotal = player.yieldsTotal;
  }

  exploreTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.exploredTiles.add(tile);
    }
  }

  revealWorld() {
    return makeCommand("trackedPlayer.revealWorld");
  }
}
