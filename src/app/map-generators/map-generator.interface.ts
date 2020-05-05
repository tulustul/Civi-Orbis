import { TilesMap } from "../core/tiles-map";
import { Tile } from "../core/tile";

export interface MapGenerator {
  generate(width: number, height: number): TilesMap;
  getStartingLocations(): Tile[];
}
