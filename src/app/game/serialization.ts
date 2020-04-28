import { TilesMap } from "./tiles-map";
import { Tile } from "./tile.interface";

export function getTileIndex(map: TilesMap, tile: Tile) {
  return tile.y * map.width + tile.x;
}

export function getTileFromIndex(map: TilesMap, index: number) {
  const x = index % map.width;
  const y = Math.floor(index / map.width);
  return map.tiles[x][y];
}
