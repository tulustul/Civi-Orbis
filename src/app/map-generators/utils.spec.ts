import { Tile, TileDirection } from '../game/tile.interface';
import {
  fillWithEmptyTiles,
  getTilesAround,
  makeEmptyTile,
  getTileDirection,
} from './utils';

describe('map-generators:utils', () => {
  it('#getTilesAround', () => {
    function toCoords(tiles: Iterable<Tile>) {
      return Array.from(tiles).map((tile) => [tile.x, tile.y]);
    }

    const tiles = fillWithEmptyTiles(5, 5);

    // top left
    expect(toCoords(getTilesAround(tiles, 0, 0))).toEqual([
      [1, 0],
      [0, 1],
    ]);

    // top
    expect(toCoords(getTilesAround(tiles, 2, 0))).toEqual([
      [3, 0],
      [2, 1],
      [1, 1],
      [1, 0],
    ]);

    // top right
    expect(toCoords(getTilesAround(tiles, 4, 0))).toEqual([
      [4, 1],
      [3, 1],
      [3, 0],
    ]);

    // right even
    expect(toCoords(getTilesAround(tiles, 4, 2))).toEqual([
      [3, 1],
      [4, 1],
      [4, 3],
      [3, 3],
      [3, 2],
    ]);

    // right odd
    expect(toCoords(getTilesAround(tiles, 4, 3))).toEqual([
      [4, 2],
      [4, 4],
      [3, 3],
    ]);

    // bottom right
    expect(toCoords(getTilesAround(tiles, 4, 4))).toEqual([
      [3, 3],
      [4, 3],
      [3, 4],
    ]);

    // bottom
    expect(toCoords(getTilesAround(tiles, 2, 4))).toEqual([
      [1, 3],
      [2, 3],
      [3, 4],
      [1, 4],
    ]);

    // bottom left
    expect(toCoords(getTilesAround(tiles, 0, 4))).toEqual([
      [0, 3],
      [1, 4],
    ]);

    // left even
    expect(toCoords(getTilesAround(tiles, 0, 2))).toEqual([
      [0, 1],
      [1, 2],
      [0, 3],
    ]);

    // left odd
    expect(toCoords(getTilesAround(tiles, 0, 3))).toEqual([
      [0, 2],
      [1, 2],
      [1, 3],
      [1, 4],
      [0, 4],
    ]);

    // middle even
    expect(toCoords(getTilesAround(tiles, 2, 2))).toEqual([
      [1, 1],
      [2, 1],
      [3, 2],
      [2, 3],
      [1, 3],
      [1, 2],
    ]);

    // middle odd
    expect(toCoords(getTilesAround(tiles, 2, 3))).toEqual([
      [2, 2],
      [3, 2],
      [3, 3],
      [3, 4],
      [2, 4],
      [1, 3],
    ]);
  });

  it('#getTileDirection', () => {
    // EVEN row
    const startEven = makeEmptyTile(2, 2);

    expect(getTileDirection(startEven, makeEmptyTile(1, 1))).toBe(
      TileDirection.TOP_LEFT
    );

    expect(getTileDirection(startEven, makeEmptyTile(2, 1))).toBe(
      TileDirection.TOP_RIGHT
    );

    expect(getTileDirection(startEven, makeEmptyTile(3, 2))).toBe(
      TileDirection.RIGHT
    );

    expect(getTileDirection(startEven, makeEmptyTile(2, 3))).toBe(
      TileDirection.BOTTOM_RIGHT
    );

    expect(getTileDirection(startEven, makeEmptyTile(1, 3))).toBe(
      TileDirection.BOTTOM_LEFT
    );

    expect(getTileDirection(startEven, makeEmptyTile(1, 2))).toBe(
      TileDirection.LEFT
    );

    expect(getTileDirection(startEven, makeEmptyTile(2, 2))).toBe(
      TileDirection.NONE
    );

    expect(getTileDirection(startEven, makeEmptyTile(3, 1))).toBe(
      TileDirection.NONE
    );

    // ODD ROW
    const startOdd = makeEmptyTile(2, 3);

    expect(getTileDirection(startOdd, makeEmptyTile(2, 2))).toBe(
      TileDirection.TOP_LEFT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 2))).toBe(
      TileDirection.TOP_RIGHT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 3))).toBe(
      TileDirection.RIGHT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 4))).toBe(
      TileDirection.BOTTOM_RIGHT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(2, 4))).toBe(
      TileDirection.BOTTOM_LEFT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(1, 3))).toBe(
      TileDirection.LEFT
    );

    expect(getTileDirection(startOdd, makeEmptyTile(2, 3))).toBe(
      TileDirection.NONE
    );

    expect(getTileDirection(startOdd, makeEmptyTile(1, 2))).toBe(
      TileDirection.NONE
    );
  });
});
