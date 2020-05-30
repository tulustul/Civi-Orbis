import { UnitDefinition } from "src/app/core/data.interface";
import {
  CityHaveBuildingRequirement,
  CitySizeRequirement,
} from "src/app/core/requirements";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "unit_settler",
    name: "Settler",
    type: "civilian",
    actionPoints: 2,
    strength: 0,
    actions: ["foundCity"],
    productionCost: 50,
    strongRequirements: [],
    weakRequirements: [
      new CityHaveBuildingRequirement("building_granary"),
      new CitySizeRequirement(3),
    ],
  },
  {
    id: "unit_worker",
    name: "Worker",
    type: "civilian",
    actionPoints: 2,
    strength: 0,
    actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
    productionCost: 20,
    strongRequirements: [],
    weakRequirements: [new CitySizeRequirement(2)],
  },
  {
    id: "unit_scout",
    name: "Scout",
    type: "military",
    actionPoints: 2,
    strength: 2,
    actions: [],
    productionCost: 10,
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "unit_warrior",
    name: "Warrior",
    type: "military",
    actionPoints: 2,
    strength: 5,
    actions: [],
    productionCost: 30,
    strongRequirements: [],
    weakRequirements: [],
  },
];
