import { AiOperation } from "./ai-operations";
import { TileCore } from "../core/tile";
import { AIPlayer } from "./ai-player";
import { Product, CityCore } from "../core/city";
import { AISystem } from "./ai-system";

export class ProduceOperation extends AiOperation {
  // product: Product;

  city: CityCore | null = null;

  // TODO
  locationPreference: TileCore | null = null;

  passableArea: number | null = null;

  perform() {}
}

export class CityAI extends AISystem {
  citySpots: TileCore[] = [];

  plan() {
    return [];
  }
}
