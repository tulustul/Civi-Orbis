import { MapGenerator } from "./map-generator.interface";
import { TilesMap } from "../game/tiles-map";
import { fillWithEmptyTiles } from "./utils";

export class BaseMapGenerator implements MapGenerator {
  generate(width: number, height: number) {
    return new TilesMap(width, height, fillWithEmptyTiles(width, height));
  }
}
