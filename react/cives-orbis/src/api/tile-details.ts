import { TileDetailsChanneled } from "@/core/serialization/channel";
import { Player } from "./player";
import { GameState } from "./state";
import { Tile } from "./tile.interface";

export class TileDetails {
  tileSimple: Tile;
  zocPlayer: Player | null = null;
  zocNoMansLand: boolean;
  isSupplied: boolean;

  constructor(game: GameState, tile: TileDetailsChanneled) {
    this.tileSimple = game.map.tilesMap.get(tile.id)!;
    if (tile.zocPlayerId !== null) {
      this.zocPlayer = game.playersMap.get(tile.zocPlayerId)!;
    }
    this.zocNoMansLand = tile.zocNoMansLand;
    this.isSupplied = tile.isSupplied;
  }
}
