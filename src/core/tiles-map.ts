import { TileCore } from "./tile";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";
import { LandForm, SeaLevel } from "../shared";

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
        const tile = this.tiles[x][y];
        tile.neighbours = getTileNeighbours(this.tiles, x, y);
        tile.fullNeighbours = getTileFullNeighbours(this.tiles, x, y);
        tile.isMapEdge = tile.neighbours.length !== 6;
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
    this.precomputePassableAreas();
  }

  private precomputePassableAreas() {
    const visited = new Set<TileCore>();
    let areaId = 1;
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        if (visited.has(tile)) {
          continue;
        }

        if (tile.landForm === LandForm.mountains) {
          tile.passableArea = -1;
          continue;
        }

        this.computePassableArea(tile, areaId++, visited);
      }
    }
  }

  private computePassableArea(
    startTile: TileCore,
    areaId: number,
    visited: Set<TileCore>,
  ) {
    // Cannot use recursion here because it fails with too many recursion levels on bigger maps. Using queue instead.
    const queue: TileCore[] = [startTile];
    visited.add(startTile);

    while (queue.length) {
      const tile = queue.shift()!;
      tile.passableArea = areaId;

      for (const neighbour of tile.neighbours) {
        if (visited.has(neighbour)) {
          continue;
        }

        const isMountains = neighbour.landForm === LandForm.mountains;

        const areBothLand =
          tile.seaLevel === SeaLevel.none &&
          neighbour.seaLevel === SeaLevel.none;

        const areBothWater =
          tile.seaLevel !== SeaLevel.none &&
          neighbour.seaLevel !== SeaLevel.none;

        if (!isMountains && (areBothLand || areBothWater)) {
          visited.add(neighbour);
          queue.push(neighbour);
        }
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
