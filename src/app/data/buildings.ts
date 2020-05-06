import { Building } from "../core/buildings";

export const BUILDINGS: Building[] = [
  {
    id: "granary",
    name: "granary",
    productionCost: 40,
    bonuses: { yieldValue: { food: 3 } },
  },
  {
    id: "well",
    name: "well",
    productionCost: 20,
    bonuses: { yieldValue: { food: 1 } },
  },
  {
    id: "bigGranary",
    name: "grand granary",
    productionCost: 100,
    bonuses: { yieldFactor: { food: 1.2 } },
  },
  {
    id: "workshop",
    name: "workshop",
    productionCost: 80,
    bonuses: { yieldValue: { production: 5 } },
  },
  {
    id: "bigWorkshop",
    name: "grand workshop",
    productionCost: 200,
    bonuses: { yieldFactor: { production: 1.2 } },
  },
  {
    id: "allDoingBuilding",
    name: "all doing building",
    productionCost: 500,
    bonuses: {
      yieldValue: { food: 1, production: 1 },
      yieldFactor: { food: 1.1, production: 1.1 },
    },
  },
];
