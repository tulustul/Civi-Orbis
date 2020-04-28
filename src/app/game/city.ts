import { Tile } from "./tile.interface";
import { Player } from "./player";
import { getTileIndex } from "./serialization";

export interface CitySerialized {
  name: string;
  size: number;
  tile: number;
  player: number;
}

export class City {
  name: string;
  size: number;

  constructor(public tile: Tile, public player: Player) {}

  serialize() {
    return {
      name: this.name,
      size: this.size,
      player: this.player.id,
      tile: getTileIndex(this.player.game.map, this.tile),
    };
  }
}
