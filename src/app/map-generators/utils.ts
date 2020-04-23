import {
  Tile,
  Climate,
  Landform,
  SeaLevel,
  TileDirection
} from '../game/tile.interface';
import { getTileDirection, getTileNeighbours } from '../game/hex-math';

export function makeEmptyTile(x: number, y: number): Tile {
  return {
    x,
    y,
    climate: Climate.continental,
    landForm: Landform.plains,
    seaLevel: SeaLevel.deep,
    riverParts: [],
    riverSource: false,
    riverMouth: false,
    neighbours: [],
    neighboursCosts: new Map(),
    units: [],
    height: 0,
    humidity: 0,
    temperature: 0
  };
}

export function fillWithEmptyTiles(width: number, height: number): Tile[][] {
  const tiles: Tile[][] = [];

  for (let x = 0; x < width; x++) {
    const row: Tile[] = [];
    tiles.push(row);
    for (let y = 0; y < height; y++) {
      row.push(makeEmptyTile(x, y));
    }
  }

  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      tiles[x][y].neighbours = getTileNeighbours(tiles, x, y);
    }
  }

  return tiles;
}

export function findCoastline(tiles: Tile[][]): Tile[] {
  const coastline: Tile[] = [];
  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      const tile = tiles[x][y];
      if (tile.seaLevel !== SeaLevel.none) {
        continue;
      }
      if (tile.neighbours.find(t => t.seaLevel !== SeaLevel.none)) {
        coastline.push(tile);
      }
    }
  }
  return coastline;
}

export function placeRiverBetweenTiles(tileA: Tile, tileB: Tile) {
  const direction = getTileDirection(tileA, tileB);
  if (tileA.riverParts.includes(direction)) {
    return false;
  }
  tileA.riverParts.push(direction);
  tileB.riverParts.push(OPPOSITE_DIRECTIONS[direction]);
  return true;
}

// first direction is clockwise, second is counterclockwise
export const POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE: Record<
  TileDirection,
  [TileDirection, TileDirection]
> = {
  [TileDirection.TOP_LEFT]: [TileDirection.TOP_RIGHT, TileDirection.LEFT],
  [TileDirection.TOP_RIGHT]: [TileDirection.RIGHT, TileDirection.TOP_LEFT],
  [TileDirection.RIGHT]: [TileDirection.BOTTOM_RIGHT, TileDirection.TOP_RIGHT],
  [TileDirection.BOTTOM_RIGHT]: [
    TileDirection.BOTTOM_LEFT,
    TileDirection.RIGHT
  ],
  [TileDirection.BOTTOM_LEFT]: [TileDirection.LEFT, TileDirection.BOTTOM_RIGHT],
  [TileDirection.LEFT]: [TileDirection.TOP_LEFT, TileDirection.BOTTOM_LEFT],
  [TileDirection.NONE]: [TileDirection.NONE, TileDirection.NONE]
};

// flow is clockwise for first tile
export const POSSIBLE_RIVER_PATHS: Record<
  TileDirection,
  [[TileDirection, TileDirection], [TileDirection, TileDirection]]
> = {
  [TileDirection.TOP_LEFT]: [
    [TileDirection.TOP_RIGHT, TileDirection.TOP_LEFT],
    [TileDirection.NONE, TileDirection.TOP_RIGHT]
  ],
  [TileDirection.TOP_RIGHT]: [
    [TileDirection.RIGHT, TileDirection.TOP_RIGHT],
    [TileDirection.NONE, TileDirection.RIGHT]
  ],
  [TileDirection.RIGHT]: [
    [TileDirection.BOTTOM_RIGHT, TileDirection.RIGHT],
    [TileDirection.NONE, TileDirection.BOTTOM_RIGHT]
  ],
  [TileDirection.BOTTOM_RIGHT]: [
    [TileDirection.BOTTOM_LEFT, TileDirection.BOTTOM_RIGHT],
    [TileDirection.NONE, TileDirection.BOTTOM_LEFT]
  ],
  [TileDirection.BOTTOM_LEFT]: [
    [TileDirection.LEFT, TileDirection.BOTTOM_LEFT],
    [TileDirection.NONE, TileDirection.LEFT]
  ],
  [TileDirection.LEFT]: [
    [TileDirection.TOP_LEFT, TileDirection.LEFT],
    [TileDirection.NONE, TileDirection.TOP_LEFT]
  ],
  [TileDirection.NONE]: [
    [TileDirection.NONE, TileDirection.NONE],
    [TileDirection.NONE, TileDirection.NONE]
  ]
};

export const OPPOSITE_DIRECTIONS: Record<TileDirection, TileDirection> = {
  [TileDirection.TOP_LEFT]: TileDirection.BOTTOM_RIGHT,
  [TileDirection.TOP_RIGHT]: TileDirection.BOTTOM_LEFT,
  [TileDirection.RIGHT]: TileDirection.LEFT,
  [TileDirection.BOTTOM_RIGHT]: TileDirection.TOP_LEFT,
  [TileDirection.BOTTOM_LEFT]: TileDirection.TOP_RIGHT,
  [TileDirection.LEFT]: TileDirection.RIGHT,
  [TileDirection.NONE]: TileDirection.NONE
};
