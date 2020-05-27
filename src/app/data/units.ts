import { UnitDefinition } from "../core/unit.interface";
import { BuildingRequirement, SizeRequirement } from "../core/product";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "settler",
    name: "Settler",
    type: "civilian",
    actionPoints: 2,
    strength: 0,
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
    type: "civilian",
    actionPoints: 2,
    strength: 0,
    actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
    productionCost: 20,
    requirements: [],
    weakRequirements: [new SizeRequirement(2)],
  },
  {
    id: "scout",
    name: "Scout",
    type: "military",
    actionPoints: 2,
    strength: 2,
    actions: [],
    productionCost: 10,
    requirements: [],
    weakRequirements: [],
  },
  {
    id: "warrior",
    name: "Warrior",
    type: "military",
    actionPoints: 2,
    strength: 5,
    actions: [],
    productionCost: 30,
    requirements: [],
    weakRequirements: [],
  },
];
