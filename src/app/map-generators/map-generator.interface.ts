import { TilesMap } from "../game/tiles-map";
import { Tile } from "../game/tile";

export interface MapGenerator {
  generate(width: number, height: number): TilesMap;
  getStartingLocations(): Tile[];
}
