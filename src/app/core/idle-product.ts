import { ProductDefinition } from "./product";
import { Bonuses } from "./bonus";
import { IDLE_PRODUCTS } from "../data/idle-products";

export interface IdleProduct extends ProductDefinition {
  bonuses: Bonuses;
}

export const IDLE_PRODUCTS_MAP = new Map<string, IdleProduct>();

for (const definition of IDLE_PRODUCTS) {
  IDLE_PRODUCTS_MAP.set(definition.id, definition);
}
