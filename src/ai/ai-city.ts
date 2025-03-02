import { getIdleProductById } from "@/core/data-manager";
import { CityCore } from "@/core/city";
import { AISystem } from "./ai-system";

export class CityAI extends AISystem {
  plan() {
    this.operations = [];
    for (const city of this.player.citiesWithoutProduction) {
      this.processCityProduct(city);
    }
    return this.operations;
  }

  private processCityProduct(city: CityCore) {
    const buildings = city.availableBuildings.filter(
      (b) => !city.disabledProducts.has(b)
    );

    let perform: () => void;

    if (buildings.length) {
      perform = () => city.produceBuilding(buildings[0]);
    } else {
      perform = () =>
        city.workOnIdleProduct(getIdleProductById("idle_product_culture")!);
    }

    this.operations.push({
      group: "city-produce",
      entityId: city.id,
      focus: "economy",
      priority: 100,
      perform,
    });
  }
}
