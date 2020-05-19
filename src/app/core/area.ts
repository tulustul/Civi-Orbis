import { TileCore } from "./tile";
import { collector } from "./collector";

export class AreaCore {
  id = 0;

  tiles = new Set<TileCore>();

  backgroundOpacity = 1;

  constructor(public color: number) {}

  add(tile: TileCore) {
    this.tiles.add(tile);
    collector.areas.add(this);
  }

  remove(tile: TileCore) {
    this.tiles.delete(tile);
    collector.areas.add(this);
  }

  destroy() {
    collector.areasDestroyed.add(this.id);
  }
}
