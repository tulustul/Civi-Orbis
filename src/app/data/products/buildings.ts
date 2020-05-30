import { Building } from "src/app/core/data.interface";
import { CityHaveBuildingRequirement } from "src/app/core/requirements";

export const BUILDINGS: Building[] = [
  {
    id: "building_granary",
    name: "Granary",
    productionCost: 40,
    bonuses: { yieldValue: { food: 3 } },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "building_well",
    name: "Well",
    productionCost: 20,
    bonuses: { yieldValue: { food: 1 } },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "building_big_granary",
    name: "Grand granary",
    productionCost: 100,
    bonuses: { yieldFactor: { food: 0.2 } },
    strongRequirements: [new CityHaveBuildingRequirement("building_granary")],
    weakRequirements: [],
  },
  {
    id: "building_workshop",
    name: "Workshop",
    productionCost: 80,
    bonuses: { yieldValue: { production: 5 } },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "building_big_workshop",
    name: "Grand workshop",
    productionCost: 200,
    bonuses: { yieldFactor: { production: 0.2 } },
    strongRequirements: [new CityHaveBuildingRequirement("building_workshop")],
    weakRequirements: [],
  },
  {
    id: "building_slave_market",
    name: "Slave market",
    productionCost: 50,
    bonuses: { yieldValue: { publicWorks: 2 } },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "building_monument",
    name: "Monument",
    productionCost: 30,
    bonuses: { yieldValue: { culture: 2 } },
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "building_all_doing_building",
    name: "All doing building",
    productionCost: 500,
    bonuses: {
      yieldValue: { food: 1, production: 1 },
      yieldFactor: { food: 0.1, production: 0.1 },
    },
    strongRequirements: [
      new CityHaveBuildingRequirement("building_big_granary"),
      new CityHaveBuildingRequirement("building_big_workshop"),
    ],
    weakRequirements: [],
  },
];
