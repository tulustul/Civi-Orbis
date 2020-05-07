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
  {
    id: "culture",
    name: "Culture",
    productionCost: Infinity,
    requirements: [],
    weakRequirements: [],
    bonuses: { transferProductionToCulture: 0.25 },
  },
];
