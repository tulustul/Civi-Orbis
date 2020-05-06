import { Bonuses } from "./bonus";
import { BUILDINGS } from "../data/buildings";

export interface Building {
  id: string;
  name: string;
  productionCost: number;
  bonuses: Bonuses;
}

export const BUILDINGS_MAP = new Map<string, Building>();

for (const definition of BUILDINGS) {
  BUILDINGS_MAP.set(definition.id, definition);
}
