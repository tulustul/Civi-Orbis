import { Tile, TileDirection } from '../game/tile.interface';
import { getTileNeighbours, getTileDirection } from '../game/hex-math';
import { fillWithEmptyTiles, makeEmptyTile } from '../map-generators/utils';

describe('hex-math:utils', () => {
  it('#getTileNeighbours', () => {
    function toCoords(tiles: Iterable<Tile>) {
      return Array.from(tiles).map((tile) => [tile.x, tile.y]);
    }

    const tiles = fillWithEmptyTiles(5, 5);

    // top left
    expect(toCoords(getTileNeighbours(tiles, 0, 0))).toEqual([
      [1, 0],
      [0, 1],
    ]);

    // top
    expect(toCoords(getTileNeighbours(tiles, 2, 0))).toEqual([
      [3, 0],
      [2, 1],
      [1, 1],
      [1, 0],
    ]);

    // top right
    console.log(toCoords(getTileNeighbours(tiles, 4, 0)));
    expect(toCoords(getTileNeighbours(tiles, 4, 0))).toEqual([
      [4, 1],
      [3, 1],
      [3, 0],
    ]);

    // right even
    expect(toCoords(getTileNeighbours(tiles, 4, 2))).toEqual([
      [3, 1],
      [4, 1],
      [4, 3],
      [3, 3],
      [3, 2],
    ]);

    // right odd
    expect(toCoords(getTileNeighbours(tiles, 4, 3))).toEqual([
      [4, 2],
      [4, 4],
      [3, 3],
    ]);

    // bottom right
    expect(toCoords(getTileNeighbours(tiles, 4, 4))).toEqual([
      [3, 3],
      [4, 3],
      [3, 4],
    ]);

    // bottom
    expect(toCoords(getTileNeighbours(tiles, 2, 4))).toEqual([
      [1, 3],
      [2, 3],
      [3, 4],
      [1, 4],
    ]);

    // bottom left
    expect(toCoords(getTileNeighbours(tiles, 0, 4))).toEqual([
      [0, 3],
      [1, 4],
    ]);

    // left even
    expect(toCoords(getTileNeighbours(tiles, 0, 2))).toEqual([
      [0, 1],
      [1, 2],
      [0, 3],
    ]);

    // left odd
    expect(toCoords(getTileNeighbours(tiles, 0, 3))).toEqual([
      [0, 2],
      [1, 2],
      [1, 3],
      [1, 4],
      [0, 4],
    ]);

    // middle even
    expect(toCoords(getTileNeighbours(tiles, 2, 2))).toEqual([
      [1, 1],
      [2, 1],
      [3, 2],
      [2, 3],
      [1, 3],
      [1, 2],
    ]);

    // middle odd
    expect(toCoords(getTileNeighbours(tiles, 2, 3))).toEqual([
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
      TileDirection.NW
    );

    expect(getTileDirection(startEven, makeEmptyTile(2, 1))).toBe(
      TileDirection.NE
    );

    expect(getTileDirection(startEven, makeEmptyTile(3, 2))).toBe(
      TileDirection.E
    );

    expect(getTileDirection(startEven, makeEmptyTile(2, 3))).toBe(
      TileDirection.SE
    );

    expect(getTileDirection(startEven, makeEmptyTile(1, 3))).toBe(
      TileDirection.SW
    );

    expect(getTileDirection(startEven, makeEmptyTile(1, 2))).toBe(
      TileDirection.W
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
      TileDirection.NW
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 2))).toBe(
      TileDirection.NE
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 3))).toBe(
      TileDirection.E
    );

    expect(getTileDirection(startOdd, makeEmptyTile(3, 4))).toBe(
      TileDirection.SE
    );

    expect(getTileDirection(startOdd, makeEmptyTile(2, 4))).toBe(
      TileDirection.SW
    );

    expect(getTileDirection(startOdd, makeEmptyTile(1, 3))).toBe(
      TileDirection.W
    );

    expect(getTileDirection(startOdd, makeEmptyTile(2, 3))).toBe(
      TileDirection.NONE
    );

    expect(getTileDirection(startOdd, makeEmptyTile(1, 2))).toBe(
      TileDirection.NONE
    );
  });
});
