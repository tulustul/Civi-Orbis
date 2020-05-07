import { Building } from "../core/buildings";
import { BuildingRequirement } from "../core/product";

export const BUILDINGS: Building[] = [
  {
    id: "granary",
    name: "Granary",
    productionCost: 40,
    bonuses: { yieldValue: { food: 3 } },
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "well",
    name: "Well",
    productionCost: 20,
    bonuses: { yieldValue: { food: 1 } },
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "bigGranary",
    name: "Grand granary",
    productionCost: 100,
    bonuses: { yieldFactor: { food: 0.2 } },
    requirements: [new BuildingRequirement("granary")],
    weakRequirements: [],
  },
  {
    id: "workshop",
    name: "Workshop",
    productionCost: 80,
    bonuses: { yieldValue: { production: 5 } },
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "bigWorkshop",
    name: "Grand workshop",
    productionCost: 200,
    bonuses: { yieldFactor: { production: 0.2 } },
    requirements: [new BuildingRequirement("workshop")],
    weakRequirements: [],
  },
  {
    id: "monument",
    name: "Monument",
    productionCost: 30,
    bonuses: { yieldValue: { culture: 2 } },
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "allDoingBuilding",
    name: "All doing building",
    productionCost: 500,
    bonuses: {
      yieldValue: { food: 1, production: 1 },
      yieldFactor: { food: 0.1, production: 0.1 },
    },
    requirements: [
      new BuildingRequirement("bigGranary"),
      new BuildingRequirement("bigWorkshop"),
    ],
    weakRequirements: [],
  },
];
