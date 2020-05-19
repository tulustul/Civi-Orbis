import { TileCore } from "./tile";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";

export class TilesMapCore {
  tiles: TileCore[][] = [];
  tilesMap = new Map<number, TileCore>();

  constructor(public width: number, public height: number) {
    for (let x = 0; x < width; x++) {
      const row: TileCore[] = [];
      this.tiles.push(row);
      for (let y = 0; y < height; y++) {
        const tile = new TileCore(x * width + y, x, y);
        row.push(tile);
        this.tilesMap.set(tile.id, tile);
      }
    }

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.tiles[x][y].neighbours = getTileNeighbours(this.tiles, x, y);
        this.tiles[x][y].fullNeighbours = getTileFullNeighbours(
          this.tiles,
          x,
          y,
        );
      }
    }
  }

  precompute() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        tile.computeYields();
        tile.computeMovementCosts();
        tile.computeSweetSpotValue();
      }
    }
  }

  get(x: number, y: number): TileCore | null {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return null;
    }
    return this.tiles[x][y];
  }
}
