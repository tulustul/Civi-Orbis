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

export function getAvailableProducts<T extends ProductDefinition>(
  products: T[],
  city: City,
): T[] {
  const results: T[] = [];
  for (const p of products) {
    let ok = true;
    for (const r of p.requirements) {
      if (!r.check(city)) {
        ok = false;
        break;
      }
    }
    if (ok) {
      results.push(p);
    }
  }
  return results;
}

export function getDisabledProducts<T extends ProductDefinition>(
  products: T[],
  city: City,
): Set<T> {
  const results = new Set<T>();
  for (const p of products) {
    for (const r of p.weakRequirements) {
      if (!r.check(city)) {
        results.add(p);
      }
    }
  }
  return results;
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
