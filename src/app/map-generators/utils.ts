import { Tile, Climate, Landform, SeaLevel } from '../game/tile.interface';

export function makeEmptyTile(): Tile {
  return {
    climate: Climate.continental,
    landForm: Landform.plains,
    seaLevel: SeaLevel.deep,
    river: 0,
  };
}

export function fillWithEmptyTiles(width: number, height: number): Tile[][] {
  const tiles: Tile[][] = [];

  for (let x = 0; x < width; x++) {
    const row: Tile[] = [];
    tiles.push(row);
    for (let y = 0; y < height; y++) {
      row.push(makeEmptyTile());
    }
  }

  return tiles;
}

export function* getTilesAround(tiles: Tile[][], x: number, y: number) {
  if (x > 0) {
    yield tiles[x - 1][y];
  }
  if (x < tiles.length - 1) {
    yield tiles[x + 1][y];
  }
  if (y > 0) {
    yield tiles[x][y - 1];
    if (y % 2) {
      if (x < tiles.length - 1) {
        yield tiles[x + 1][y - 1];
      }
    } else {
      if (x > 0) {
        yield tiles[x - 1][y - 1];
      }
    }
  }
  if (y < tiles[x].length - 1) {
    yield tiles[x][y + 1];
    if (y % 2) {
      if (x < tiles.length - 1) {
        yield tiles[x + 1][y + 1];
      }
    } else {
      if (x > 0) {
        yield tiles[x - 1][y + 1];
      }
    }
  }
}
