import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { UnitCore } from "../core/unit";
import { AIPlayer } from "./ai-player";
import { AISystem } from "./ai-system";

export class FoundCityOperation extends AiOperation {
  target: TileCore | null = null;
  settler: UnitCore | null = null;

  perform() {}
}

export class SettlingAI extends AISystem {
  citySpots: TileCore[] = [];

  plan() {
    return [];
  }

  private findCityLocation(startTile: TileCore): TileCore | null {
    const tiles = startTile.getTilesInRange(5);

    let bestSweetSpotValue = 0;
    let bestTile: TileCore | null = null;
    for (const tile of tiles) {
      if (startTile.passableArea !== tile.passableArea) {
        continue;
      }

      if (tile.sweetSpotValue > bestSweetSpotValue) {
        bestSweetSpotValue = tile.sweetSpotValue;
        bestTile = tile;
      }
    }
    return bestTile;
  }
}
