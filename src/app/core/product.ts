import { City } from "./city";

export abstract class ProductRequirement {
  static id: string;
  abstract check(city: City): boolean;
}

export interface ProductDefinition {
  id: string;
  name: string;
  productionCost: number;

  // product will be hidden from products list
  requirements: ProductRequirement[];

  // product will be disabled on the products list
  weakRequirements: ProductRequirement[];
}

export class BuildingRequirement extends ProductRequirement {
  id = "building";

  constructor(public buildingId: string) {
    super();
  }

  check(city: City) {
    return city.buildingsIds.has(this.buildingId);
  }
}

export class SizeRequirement extends ProductRequirement {
  id = "size";

  constructor(public size: number) {
    super();
  }

  check(city: City) {
    return city.size >= this.size;
  }
}
