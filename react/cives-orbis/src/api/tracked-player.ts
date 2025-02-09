import { GameState } from "./state";
import { makeCommand } from "./internal/commander";
import { Unit } from "./unit";
import { City } from "./city";
import { TrackedPlayerChanneled } from "@/core/serialization/channel";
import { Tile } from "./tile.interface";
import { PlayerYields } from "@/shared";

export class TrackedPlayer {
  id: number;
  color: number;
  exploredTiles = new Set<Tile>();
  visibleTiles = new Set<Tile>();

  units: Unit[] = [];
  cities: City[] = [];

  yields: PlayerYields;
  isAi: boolean;

  constructor(game: GameState, player: TrackedPlayerChanneled) {
    this.id = player.id;
    this.color = player.color;
    this.exploredTiles = new Set(
      player.exploredTiles.map((id) => game.map.tilesMap.get(id)!),
    );
    this.visibleTiles = new Set(
      player.visibleTiles.map((id) => game.map.tilesMap.get(id)!),
    );

    this.units = player.units.map((id) => game.unitsMap.get(id)!);
    this.cities = player.cities.map((id) => game.citiesMap.get(id)!);

    this.yields = player.yields;
    this.isAi = player.isAi;
  }

  exploreTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.exploredTiles.add(tile);
    }
  }

  showTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.visibleTiles.add(tile);
    }
  }

  clearShowedTiles() {
    this.visibleTiles.clear();
  }

  revealWorld() {
    return makeCommand("trackedPlayer.revealWorld");
  }
}
