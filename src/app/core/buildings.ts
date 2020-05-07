import { Bonuses } from "./bonus";
import { BUILDINGS } from "../data/buildings";
import { ProductDefinition } from "./product";

export interface Building extends ProductDefinition {
  bonuses: Bonuses;
}

export const BUILDINGS_MAP = new Map<string, Building>();

for (const definition of BUILDINGS) {
  BUILDINGS_MAP.set(definition.id, definition);
}
