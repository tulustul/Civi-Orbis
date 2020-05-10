import { TileDirection, Tile } from "./tile";

export function getTileFullNeighbours(
  tiles: Tile[][],
  x: number,
  y: number,
): (Tile | null)[] {
  return [
    getTileInDirection(tiles, tiles[x][y], TileDirection.NW),
    getTileInDirection(tiles, tiles[x][y], TileDirection.NE),
    getTileInDirection(tiles, tiles[x][y], TileDirection.E),
    getTileInDirection(tiles, tiles[x][y], TileDirection.SE),
    getTileInDirection(tiles, tiles[x][y], TileDirection.SW),
    getTileInDirection(tiles, tiles[x][y], TileDirection.W),
  ];
}

export function getTileNeighbours(
  tiles: Tile[][],
  x: number,
  y: number,
): Tile[] {
  return getTileFullNeighbours(tiles, x, y).filter((t) => !!t) as Tile[];
}

export function getTileInDirection(
  tiles: Tile[][],
  tile: Tile,
  direction: TileDirection,
): Tile | null {
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
