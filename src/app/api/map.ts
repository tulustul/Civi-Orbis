import { Tile } from "../shared";
import { MapChanneled } from "../core/tiles-map";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";

export class TilesMap {
  width = 0;
  height = 0;
  tiles: Tile[][] = [];
  tilesMap = new Map<number, Tile>();

  constructor(map: MapChanneled) {
    this.width = map.width;
    this.height = map.height;

    const tiles = (map.tiles as unknown) as Tile[][];
    this.tiles = tiles;

    for (let x = 0; x < map.width; x++) {
      for (let y = 0; y < map.height; y++) {
        const tile: Tile = tiles[x][y];
        tile.neighbours = getTileNeighbours(tiles, x, y);
        tile.fullNeighbours = getTileFullNeighbours(tiles, x, y);
        this.tilesMap.set(tile.id, tile);
        tile.areaOf = null;
        tile.city = null;
        tile.units = [];
      }
    }
  }
}
