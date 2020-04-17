import {
  Tile,
  Climate,
  Landform,
  SeaLevel,
  TileDirection,
} from '../game/tile.interface';

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
      tiles[x][y].neighbours = getTilesAround(tiles, x, y);
    }
  }

  return tiles;
}

export function getTilesAround(tiles: Tile[][], x: number, y: number): Tile[] {
  // if (y > 0) {
  //   if (y % 2) {
  //     yield tiles[x][y - 1];
  //     if (x < tiles.length - 1) {
  //       yield tiles[x + 1][y - 1];
  //     }
  //   } else {
  //     if (x > 0) {
  //       yield tiles[x - 1][y - 1];
  //     }
  //     yield tiles[x][y - 1];
  //   }
  // }

  // if (x < tiles.length - 1) {
  //   yield tiles[x + 1][y];
  // }

  // if (y < tiles[x].length - 1) {
  //   if (y % 2) {
  //     if (x < tiles.length - 1) {
  //       yield tiles[x + 1][y + 1];
  //     }
  //     yield tiles[x][y + 1];
  //   } else {
  //     yield tiles[x][y + 1];
  //     if (x > 0) {
  //       yield tiles[x - 1][y + 1];
  //     }
  //   }
  // }

  // if (x > 0) {
  //   yield tiles[x - 1][y];
  // }
  return [
    getTileInDirection(tiles, tiles[x][y], TileDirection.TOP_LEFT),
    getTileInDirection(tiles, tiles[x][y], TileDirection.TOP_RIGHT),
    getTileInDirection(tiles, tiles[x][y], TileDirection.RIGHT),
    getTileInDirection(tiles, tiles[x][y], TileDirection.BOTTOM_RIGHT),
    getTileInDirection(tiles, tiles[x][y], TileDirection.BOTTOM_LEFT),
    getTileInDirection(tiles, tiles[x][y], TileDirection.LEFT),
  ].filter((t) => !!t) as Tile[];
}

export function getTileInDirection(
  tiles: Tile[][],
  tile: Tile,
  direction: TileDirection
): Tile | null {
  switch (direction) {
    case TileDirection.TOP_LEFT:
      if ((tile.y % 2 === 0 && tile.x === 0) || tile.y === 0) {
        return null;
      }
      return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];

    case TileDirection.TOP_RIGHT:
      if ((tile.y % 2 && tile.x === tiles.length - 1) || tile.y === 0) {
        return null;
      }
      return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];

    case TileDirection.RIGHT:
      if (tile.x === tiles.length - 1) {
        return null;
      }
      return tiles[tile.x + 1][tile.y];

    case TileDirection.BOTTOM_RIGHT:
      if (
        (tile.y % 2 && tile.x === tiles.length - 1) ||
        tile.y === tiles[tile.x].length - 1
      ) {
        return null;
      }
      return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];

    case TileDirection.BOTTOM_LEFT:
      if (
        (tile.y % 2 === 0 && tile.x === 0) ||
        tile.y === tiles[tile.x].length - 1
      ) {
        return null;
      }
      return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y + 1];

    case TileDirection.LEFT:
      if (tile.x === 0) {
        return null;
      }
      return tiles[tile.x - 1][tile.y];
  }
  return null;
}

export function getTileDirection(start: Tile, end: Tile): TileDirection {
  if (end.x === start.x - (start.y % 2 ? 0 : 1) && end.y === start.y - 1) {
    return TileDirection.TOP_LEFT;
  }
  if (end.x === start.x + (start.y % 2 ? 1 : 0) && end.y === start.y - 1) {
    return TileDirection.TOP_RIGHT;
  }
  if (end.x === start.x + 1 && end.y === start.y) {
    return TileDirection.RIGHT;
  }
  if (end.x === start.x + (start.y % 2 ? 1 : 0) && end.y === start.y + 1) {
    return TileDirection.BOTTOM_RIGHT;
  }
  if (end.x === start.x - (start.y % 2 ? 0 : 1) && end.y === start.y + 1) {
    return TileDirection.BOTTOM_LEFT;
  }
  if (end.x === start.x - 1 && end.y === start.y) {
    return TileDirection.LEFT;
  }
  return TileDirection.NONE;
}

export function findCoastline(tiles: Tile[][]): Tile[] {
  const coastline: Tile[] = [];
  for (let x = 0; x < tiles.length; x++) {
    for (let y = 0; y < tiles[x].length; y++) {
      const tile = tiles[x][y];
      if (tile.seaLevel !== SeaLevel.none) {
        continue;
      }
      if (tile.neighbours.find((t) => t.seaLevel !== SeaLevel.none)) {
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
    TileDirection.RIGHT,
  ],
  [TileDirection.BOTTOM_LEFT]: [TileDirection.LEFT, TileDirection.BOTTOM_RIGHT],
  [TileDirection.LEFT]: [TileDirection.TOP_LEFT, TileDirection.BOTTOM_LEFT],
  [TileDirection.NONE]: [TileDirection.NONE, TileDirection.NONE],
};

// flow is clockwise for first tile
export const POSSIBLE_RIVER_PATHS_CLOCKWISE: Record<
  TileDirection,
  [[TileDirection, TileDirection], [TileDirection, TileDirection]]
> = {
  [TileDirection.TOP_LEFT]: [
    [TileDirection.TOP_RIGHT, TileDirection.TOP_LEFT],
    [TileDirection.NONE, TileDirection.TOP_RIGHT],
  ],
  [TileDirection.TOP_RIGHT]: [
    [TileDirection.RIGHT, TileDirection.TOP_RIGHT],
    [TileDirection.NONE, TileDirection.RIGHT],
  ],
  [TileDirection.RIGHT]: [
    [TileDirection.BOTTOM_RIGHT, TileDirection.RIGHT],
    [TileDirection.NONE, TileDirection.BOTTOM_RIGHT],
  ],
  [TileDirection.BOTTOM_RIGHT]: [
    [TileDirection.BOTTOM_LEFT, TileDirection.BOTTOM_RIGHT],
    [TileDirection.NONE, TileDirection.BOTTOM_LEFT],
  ],
  [TileDirection.BOTTOM_LEFT]: [
    [TileDirection.LEFT, TileDirection.BOTTOM_RIGHT],
    [TileDirection.NONE, TileDirection.LEFT],
  ],
  [TileDirection.LEFT]: [
    [TileDirection.TOP_LEFT, TileDirection.LEFT],
    [TileDirection.NONE, TileDirection.TOP_LEFT],
  ],
  [TileDirection.NONE]: [
    [TileDirection.NONE, TileDirection.NONE],
    [TileDirection.NONE, TileDirection.NONE],
  ],
};

// flow is clockwise for first tile
export const POSSIBLE_RIVER_PATHS_COUNTERCLOCKWISE: Record<
  TileDirection,
  [[TileDirection, TileDirection], [TileDirection, TileDirection]]
> = {
  [TileDirection.TOP_LEFT]: [
    [TileDirection.TOP_LEFT, TileDirection.LEFT],
    [TileDirection.LEFT, TileDirection.NONE],
  ],
  [TileDirection.TOP_RIGHT]: [
    [TileDirection.TOP_RIGHT, TileDirection.TOP_LEFT],
    [TileDirection.TOP_LEFT, TileDirection.NONE],
  ],
  [TileDirection.RIGHT]: [
    [TileDirection.RIGHT, TileDirection.TOP_RIGHT],
    [TileDirection.TOP_RIGHT, TileDirection.NONE],
  ],
  [TileDirection.BOTTOM_RIGHT]: [
    [TileDirection.BOTTOM_RIGHT, TileDirection.RIGHT],
    [TileDirection.BOTTOM_LEFT, TileDirection.NONE],
  ],
  [TileDirection.BOTTOM_LEFT]: [
    [TileDirection.BOTTOM_LEFT, TileDirection.BOTTOM_RIGHT],
    [TileDirection.BOTTOM_RIGHT, TileDirection.NONE],
  ],
  [TileDirection.LEFT]: [
    [TileDirection.LEFT, TileDirection.BOTTOM_LEFT],
    [TileDirection.BOTTOM_LEFT, TileDirection.NONE],
  ],
  [TileDirection.NONE]: [
    [TileDirection.NONE, TileDirection.NONE],
    [TileDirection.NONE, TileDirection.NONE],
  ],
};

export const OPPOSITE_DIRECTIONS: Record<TileDirection, TileDirection> = {
  [TileDirection.TOP_LEFT]: TileDirection.BOTTOM_RIGHT,
  [TileDirection.TOP_RIGHT]: TileDirection.BOTTOM_LEFT,
  [TileDirection.RIGHT]: TileDirection.LEFT,
  [TileDirection.BOTTOM_RIGHT]: TileDirection.TOP_LEFT,
  [TileDirection.BOTTOM_LEFT]: TileDirection.TOP_RIGHT,
  [TileDirection.LEFT]: TileDirection.RIGHT,
  [TileDirection.NONE]: TileDirection.NONE,
};
