import { Tile, SeaLevel, Landform, TileSerialized } from './tile.interface';
import { getTileDirection, getTileNeighbours } from './hex-math';
import { makeEmptyTile } from '../map-generators/utils';

export interface MapSerialized {
  width: number;
  height: number;
  tiles: TileSerialized[];
}

export class TilesMap {
  tiles: Tile[][] = [];

  constructor(public width: number, public height: number) {
    for (let x = 0; x < width; x++) {
      const row: Tile[] = [];
      this.tiles.push(row);
      for (let y = 0; y < height; y++) {
        row.push(makeEmptyTile(x, y));
      }
    }

    for (let x = 0; x < width; x++) {
      for (let y = 0; y < height; y++) {
        this.tiles[x][y].neighbours = getTileNeighbours(this.tiles, x, y);
      }
    }
  }

  precomputeMovementCosts() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        for (const neighbour of tile.neighbours) {
          const dir = getTileDirection(tile, neighbour);
          let cost = 1;
          if (neighbour.seaLevel !== SeaLevel.none) {
            cost = Infinity;
          } else if (neighbour.landForm === Landform.mountains) {
            cost = Infinity;
          } else if (neighbour.landForm === Landform.hills) {
            cost = 2;
          } else {
            if (tile.riverParts.includes(dir)) {
              cost = 3;
            } else if (tile.riverParts.length && neighbour.riverParts.length) {
              cost = 0.5;
            }
          }
          tile.neighboursCosts.set(neighbour, cost);
        }
      }
    }
  }

  get(x: number, y: number): Tile | null {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return null;
    }
    return this.tiles[x][y];
  }

  serialize(): MapSerialized {
    return {
      width: this.width,
      height: this.height,
      tiles: this.serializeTiles(),
    };
  }

  serializeTiles(): TileSerialized[] {
    // Store only changes from the last tile to keep save size minimal
    const result: Partial<Tile>[] = [];
    let lastTile: Partial<Tile> = {};
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        const diff: Partial<Tile> = {};

        if (tile.seaLevel !== lastTile.seaLevel) {
          diff.seaLevel = tile.seaLevel;
        }
        if (tile.climate !== lastTile.climate) {
          diff.climate = tile.climate;
        }
        if (tile.landForm !== lastTile.landForm) {
          diff.landForm = tile.landForm;
        }
        if (tile.forest !== lastTile.forest) {
          diff.forest = tile.forest;
        }

        // The rivers tends to not repeat in subsequent tiles so instead of using diff let's just ignore empty rivers.
        if (tile.riverParts.length) {
          diff.riverParts = tile.riverParts;
        }

        result.push(diff);
        lastTile = tile;
      }
    }
    return result;
  }

  static deserialize(mapData: MapSerialized) {
    const map = new TilesMap(mapData.width, mapData.height);
    let lastTile: Tile = map.tiles[0][0];
    let index = 0;

    for (let x = 0; x < mapData.width; x++) {
      for (let y = 0; y < mapData.height; y++) {
        const tileData = mapData.tiles[index];
        const tile = map.tiles[x][y];

        tile.climate =
          tileData.climate !== undefined ? tileData.climate! : lastTile.climate;

        tile.seaLevel =
          tileData.seaLevel !== undefined
            ? tileData.seaLevel!
            : lastTile.seaLevel;

        tile.landForm =
          tileData.landForm !== undefined
            ? tileData.landForm!
            : lastTile.landForm;

        tile.riverParts = tileData.riverParts || [];

        tile.forest =
          tileData.forest !== undefined ? tileData.forest! : lastTile.forest;

        lastTile = tile;
        index++;
      }
    }

    map.precomputeMovementCosts();

    return map;
  }
}
