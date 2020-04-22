import { TileDirection, Tile } from './tile.interface';

export function getTileNeighbours(
  tiles: Tile[][],
  x: number,
  y: number
): Tile[] {
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

export function getDistance(start: Tile, end: Tile): number {
  return 0;
}

export function getTilesInRange(start: Tile, range: number): Set<Tile> {
  const result = new Set<Tile>([start]);
  for (let i = 0; i < range; i++) {
    let neighbours = new Set<Tile>();
    for (const tile of result) {
      for (const neighbour of tile.neighbours) {
        neighbours.add(neighbour);
      }
    }
    for (const tile of neighbours) {
      result.add(tile);
    }
  }
  return result;
}
