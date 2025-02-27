import { IdleProduct } from "@/core/data.interface";

export const IDLE_PRODUCTS: IdleProduct[] = [
  {
    id: "idle_product_growth",
    productType: "idleProduct",
    name: "Growth",
    productionCost: Infinity,
    strongRequirements: [],
    weakRequirements: [],
    bonuses: { transferProductionToFood: 0.25 },
  },
  {
    id: "idle_product_culture",
    productType: "idleProduct",
    name: "Culture",
    productionCost: Infinity,
    strongRequirements: [],
    weakRequirements: [],
    bonuses: { transferProductionToCulture: 0.25 },
  },
  {
    id: "idle_product_public_works",
    productType: "idleProduct",
    name: "Public works",
    productionCost: Infinity,
    strongRequirements: [],
    weakRequirements: [],
    bonuses: { transferProductionToPublicWorks: 0.25 },
  },
];
