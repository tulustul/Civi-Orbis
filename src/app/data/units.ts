import { UnitDefinition } from "../core/unit.interface";
import { BuildingRequirement, SizeRequirement } from "../core/product";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "settler",
    name: "Settler",
    actionPoints: 2,
    power: 0,
    actions: ["foundCity"],
    productionCost: 50,
    requirements: [],
    weakRequirements: [
      new BuildingRequirement("granary"),
      new SizeRequirement(3),
    ],
  },
  {
    id: "worker",
    name: "Worker",
    actionPoints: 2,
    power: 0,
    actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
    productionCost: 20,
    requirements: [],
    weakRequirements: [new SizeRequirement(2)],
  },
  {
    id: "scout",
    name: "Scout",
    actionPoints: 2,
    power: 2,
    actions: [],
    productionCost: 10,
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "warrior",
    name: "Warrior",
    actionPoints: 2,
    power: 5,
    actions: [],
    productionCost: 30,
    requirements: [],
    weakRequirements: [],
  },
];
