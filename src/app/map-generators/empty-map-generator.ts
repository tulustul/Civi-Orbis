import { MapGenerator } from "./map-generator.interface";
import { TilesMap } from "../core/tiles-map";

export class BaseMapGenerator implements MapGenerator {
  generate(width: number, height: number) {
    return new TilesMap(width, height);
  }

  getStartingLocations() {
    return [];
  }
}
