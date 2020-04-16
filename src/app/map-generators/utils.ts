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
    river: 0,
    riverSource: false,
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

  return tiles;
}

export function* getTilesAround(tiles: Tile[][], x: number, y: number) {
  if (y > 0) {
    if (y % 2) {
      yield tiles[x][y - 1];
      if (x < tiles.length - 1) {
        yield tiles[x + 1][y - 1];
      }
    } else {
      if (x > 0) {
        yield tiles[x - 1][y - 1];
      }
      yield tiles[x][y - 1];
    }
  }

  if (x < tiles.length - 1) {
    yield tiles[x + 1][y];
  }

  if (y < tiles[x].length - 1) {
    if (y % 2) {
      if (x < tiles.length - 1) {
        yield tiles[x + 1][y + 1];
      }
      yield tiles[x][y + 1];
    } else {
      yield tiles[x][y + 1];
      if (x > 0) {
        yield tiles[x - 1][y + 1];
      }
    }
  }

  if (x > 0) {
    yield tiles[x - 1][y];
  }
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

// export const OPPOSITE_DIRECTIONS: Record<TileDirection, TileDirection> = {
//   [TileDirection.TOP_LEFT]: TileDirection.BOTTOM_RIGHT,
//   [TileDirection.TOP_RIGHT]: TileDirection.BOTTOM_LEFT,
//   [TileDirection.RIGHT]: TileDirection.LEFT,
//   [TileDirection.BOTTOM_RIGHT]: TileDirection.TOP_LEFT,
//   [TileDirection.BOTTOM_LEFT]: TileDirection.TOP_RIGHT,
//   [TileDirection.LEFT]: TileDirection.RIGHT,
// };
