import { GameState } from "./state";
import { makeCommand } from "./internal/commander";
import { Unit } from "./unit";
import { City } from "./city";
import { TrackedPlayerChanneled } from "../core/serialization/channel";
import { Tile } from "./tile.interface";
import { PlayerYields } from "../shared";

export class TrackedPlayer {
  id: number;
  color: number;
  exploredTiles = new Set<Tile>();

  units: Unit[] = [];
  cities: City[] = [];

  yields: PlayerYields;

  constructor(game: GameState, player: TrackedPlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.exploredTiles = new Set(
      player.exploredTiles.map((id) => game.map.tilesMap.get(id)!),
    );

    this.units = player.units.map((id) => game.unitsMap.get(id)!);
    this.cities = player.cities.map((id) => game.citiesMap.get(id)!);

    this.yields = player.yields;
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
