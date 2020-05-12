import { TilesMapCore } from "./tiles-map";
import { TileCore } from "./tile";

export function getTileIndex(map: TilesMapCore, tile: TileCore) {
  return tile.y * map.width + tile.x;
}

export function getTileFromIndex(map: TilesMapCore, index: number) {
  const x = index % map.width;
  const y = Math.floor(index / map.width);
  return map.tiles[x][y];
}
