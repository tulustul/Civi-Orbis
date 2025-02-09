import { ResourceDefinition } from "../core/data.interface";
import { Bonuses } from "../core/bonus";
import { Yields, EMPTY_YIELDS } from "./yields";
import { TileCore } from "./tile";

export class ResourceCore {
  yields!: Yields;
  bonuses!: Bonuses;

  constructor(
    public definition: ResourceDefinition,
    public tile: TileCore,
    public quantity: number,
  ) {}

  computeYields() {
    let resourceYields: Partial<Yields> | undefined;
    if (this.tile.improvement === this.definition.requiredImprovement) {
      resourceYields = this.definition.bonusesWhenWorked.yieldValue;
    } else {
      resourceYields = this.definition.bonuses.yieldValue;
    }
    this.yields = { ...EMPTY_YIELDS, ...resourceYields };
  }
}
