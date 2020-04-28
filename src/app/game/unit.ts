import { Tile } from "./tile.interface";
import { UnitDefinition } from "./unit.interface";
import { Player } from "./player";
import { getTileIndex } from "./serialization";

export interface UnitSerialized {
  tile: number;
  definition: string;
  actionPointsLeft: number;
  player: number;
  path: number[][] | null;
}

export class Unit {
  actionPointsLeft: number;
  path: Tile[][] | null;

  constructor(
    public tile: Tile,
    public definition: UnitDefinition,
    public player: Player
  ) {
    this.actionPointsLeft = definition.actionPoints;
  }

  serialize(): UnitSerialized {
    return {
      tile: getTileIndex(this.player.game.map, this.tile),
      definition: this.definition.id,
      actionPointsLeft: this.actionPointsLeft,
      player: this.player.id,
      path:
        this.path?.map((row) =>
          row.map((tile) => getTileIndex(this.player.game.map, tile))
        ) || null,
    };
  }
}
