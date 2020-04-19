import { Tile, SeaLevel } from './tile.interface';
import { getTileDirection } from './hex-math';

export class TilesMap {
  constructor(
    public width: number,
    public height: number,
    public tiles: Tile[][]
  ) {}

  precomputeMovementCosts() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        for (const neighbour of tile.neighbours) {
          const dir = getTileDirection(tile, neighbour);
          let cost = 1;
          if (neighbour.seaLevel !== SeaLevel.none) {
            cost = Infinity;
          }
          if (tile.riverParts.includes(dir)) {
            cost = 3;
          } else if (tile.riverParts.length && neighbour.riverParts.length) {
            cost = 0.5;
          }
          tile.neighboursCosts.set(neighbour, cost);
        }
      }
    }
  }
}
