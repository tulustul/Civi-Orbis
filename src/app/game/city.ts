import { Tile } from "./tile";
import { Player } from "./player";
import { getTileIndex } from "./serialization";

export interface CitySerialized {
  id: number;
  name: string;
  size: number;
  tile: number;
  player: number;
}

export class City {
  id: number;
  name: string;
  size: number;

  constructor(public tile: Tile, public player: Player) {}

  serialize() {
    return {
      id: this.id,
      name: this.name,
      size: this.size,
      player: this.player.id,
      tile: getTileIndex(this.player.game.map, this.tile),
    };
  }
}
