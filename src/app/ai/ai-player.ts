import { Player } from "../core/player";
import { IDLE_PRODUCTS_MAP } from "../core/idle-product";

export class AIPlayer {
  constructor(private player: Player) {}

  nextTurn() {
    for (const unit of this.player.unitsWithoutOrders) {
      if (unit.definition.actions.includes("foundCity")) {
        unit.doAction("foundCity");
      }
    }

    for (const city of this.player.cityWithoutProduction) {
      city.workOnIdleProduct(IDLE_PRODUCTS_MAP.get("culture")!);
    }
  }
}
