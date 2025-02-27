import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { AISystem } from "./ai-system";

export class MilitartOperation extends AiOperation {
  perform() {}
}

export class MilitaryAI extends AISystem {
  plan() {
    // const militaryUnits = this.player.units.filter;
    return [];
  }

  public findCityLocation(startTile: TileCore): TileCore | null {
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
