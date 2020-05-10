import { Tile, TileSerialized } from "./tile";
import { getTileNeighbours, getTileFullNeighbours } from "./hex-math";

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
        row.push(new Tile(x, y));
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
        this.tiles[x][y].computeYields();
        this.tiles[x][y].computeMovementCosts();
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
        if (tile.improvement !== lastTile.improvement) {
          diff.improvement = tile.improvement;
        }
        if (tile.road !== lastTile.road) {
          diff.road = tile.road;
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

        tile.improvement =
          tileData.improvement !== undefined
            ? tileData.improvement!
            : lastTile.improvement;

        tile.road =
          tileData.road !== undefined ? tileData.road! : lastTile.road;

        tile.riverParts = tileData.riverParts || [];

        tile.forest =
          tileData.forest !== undefined ? tileData.forest! : lastTile.forest;

        lastTile = tile;
        index++;
      }
    }

    map.precompute();

    return map;
  }
}
