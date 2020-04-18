import { TilesMap } from '../game/tiles-map';
import { Tile } from '../game/tile.interface';

export interface MapGenerator {
  generate(width: number, height: number): TilesMap;
  getStartingLocations(): Tile[];
}
