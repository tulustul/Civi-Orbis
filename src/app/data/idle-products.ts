import { IdleProduct } from "../core/idle-product";

export const IDLE_PRODUCTS: IdleProduct[] = [
  {
    id: "growth",
    name: "Growth",
    productionCost: Infinity,
    requirements: [],
    weakRequirements: [],
    bonuses: { transferProductionToFood: 0.25 },
  },
];
