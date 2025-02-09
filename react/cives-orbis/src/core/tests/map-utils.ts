import { OPPOSITE_DIRECTIONS } from "@/map-generators/utils";
import { TileDirection } from "@/shared";
import { TileCore } from "@/core/tile";
import { TilesMapCore } from "@/core/tiles-map";

export function dumpMap(
  map: TilesMapCore,
  tileCallback: (tile: TileCore) => string,
): string[] {
  const result: string[] = [];
  for (let y = 0; y < map.height; y++) {
    const row: string[] = [];
    for (let x = 0; x < map.width; x++) {
      const tile = map.tiles[x][y];
      row.push(tileCallback(tile));
    }
    let formattedRow = row.join(" ");
    if (y % 2 == 1) {
      formattedRow = " " + formattedRow;
    }
    result.push(formattedRow);
  }

  return result;
}

export function putRiver(tile: TileCore, dir: TileDirection) {
  tile.riverParts.push(dir);
  const neighbour = tile.fullNeighbours[dir];
  if (neighbour) {
    neighbour.riverParts.push(OPPOSITE_DIRECTIONS[dir]);
  }
}
