import { OPPOSITE_DIRECTIONS } from "src/app/map-generators/utils";
import { TileDirection } from "src/app/shared";
import { TileCore } from "../tile";
import { TilesMapCore } from "../tiles-map";

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
