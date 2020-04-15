import { TilesMap } from '../game/tiles-map';

export interface MapGenerator {
  generate(width: number, height: number): TilesMap;
}
