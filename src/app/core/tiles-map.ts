import { TileCore, TileSerialized } from "./tile";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";
import { TileChanneled } from "../shared";

export interface MapSerialized {
  width: number;
  height: number;
  tiles: TileSerialized[];
}

export interface MapChanneled {
  width: number;
  height: number;
  tiles: TileChanneled[][];
}

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

  serialize(): MapSerialized {
    return {
      width: this.width,
      height: this.height,
      tiles: this.serializeTiles(),
    };
  }

  serializeToChannel(): MapChanneled {
    return {
      width: this.width,
      height: this.height,
      tiles: this.serializeTilesToChannel(),
    };
  }

  serializeTiles(): TileSerialized[] {
    // Store only changes from the last tile to keep save size minimal
    const result: Partial<TileCore>[] = [];
    let lastTile: Partial<TileCore> = {};
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        const diff: Partial<TileCore> = {};

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
        if (tile.wetlands !== lastTile.wetlands) {
          diff.wetlands = tile.wetlands;
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

  serializeTilesToChannel(): TileChanneled[][] {
    const result: TileChanneled[][] = [];
    for (let x = 0; x < this.width; x++) {
      const row: TileChanneled[] = [];
      result.push(row);
      for (let y = 0; y < this.height; y++) {
        row.push(this.tiles[x][y].serializeToChannel());
      }
    }
    return result;
  }

  static deserialize(mapData: MapSerialized) {
    const map = new TilesMapCore(mapData.width, mapData.height);
    let lastTile: TileCore = map.tiles[0][0];
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
