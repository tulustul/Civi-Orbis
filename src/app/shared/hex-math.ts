import { Tile, TileDirection } from "../shared";

export function getTileFullNeighbours<T extends Tile>(
  tiles: T[][],
  x: number,
  y: number,
): (T | null)[] {
  return [
    getTileInDirection(tiles, tiles[x][y], TileDirection.NW),
    getTileInDirection(tiles, tiles[x][y], TileDirection.NE),
    getTileInDirection(tiles, tiles[x][y], TileDirection.E),
    getTileInDirection(tiles, tiles[x][y], TileDirection.SE),
    getTileInDirection(tiles, tiles[x][y], TileDirection.SW),
    getTileInDirection(tiles, tiles[x][y], TileDirection.W),
  ];
}

export function getTileNeighbours<T extends Tile>(
  tiles: T[][],
  x: number,
  y: number,
): T[] {
  return getTileFullNeighbours(tiles, x, y).filter((t) => !!t) as T[];
}

export function getTileInDirection<T extends Tile>(
  tiles: T[][],
  tile: T,
  direction: TileDirection,
): T | null {
  switch (direction) {
    case TileDirection.NW:
      if ((tile.y % 2 === 0 && tile.x === 0) || tile.y === 0) {
        return null;
      }
      return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y - 1];

    case TileDirection.NE:
      if ((tile.y % 2 && tile.x === tiles.length - 1) || tile.y === 0) {
        return null;
      }
      return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y - 1];

    case TileDirection.E:
      if (tile.x === tiles.length - 1) {
        return null;
      }
      return tiles[tile.x + 1][tile.y];

    case TileDirection.SE:
      if (
        (tile.y % 2 && tile.x === tiles.length - 1) ||
        tile.y === tiles[tile.x].length - 1
      ) {
        return null;
      }
      return tiles[tile.x + (tile.y % 2 ? 1 : 0)][tile.y + 1];

    case TileDirection.SW:
      if (
        (tile.y % 2 === 0 && tile.x === 0) ||
        tile.y === tiles[tile.x].length - 1
      ) {
        return null;
      }
      return tiles[tile.x - (tile.y % 2 ? 0 : 1)][tile.y + 1];

    case TileDirection.W:
      if (tile.x === 0) {
        return null;
      }
      return tiles[tile.x - 1][tile.y];
  }
  return null;
}

export function getDistance(start: Tile, end: Tile): number {
  return 0;
}
