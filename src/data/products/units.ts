import { UnitDefinition, UnitType, UnitTrait } from "@/core/data.interface";
import {
  CityHaveBuildingRequirement,
  CitySizeRequirement,
  CoastlineCityRequirement,
} from "@/core/requirements";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "unit_settler",
    productType: "unit",
    name: "Settler",
    type: UnitType.land,
    trait: UnitTrait.settler,
    actionPoints: 2,
    strength: 0,
    actions: ["foundCity"],
    productionCost: 50,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [],
    weakRequirements: [
      new CityHaveBuildingRequirement("building_granary"),
      new CitySizeRequirement(3),
    ],
  },
  {
    id: "unit_worker",
    productType: "unit",
    name: "Worker",
    type: UnitType.land,
    trait: UnitTrait.worker,
    actionPoints: 2,
    strength: 0,
    actions: ["buildFarm", "buildMine", "buildSawmill", "buildRoad"],
    productionCost: 20,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [],
    weakRequirements: [new CitySizeRequirement(2)],
  },
  {
    id: "unit_scout",
    productType: "unit",
    name: "Scout",
    type: UnitType.land,
    trait: UnitTrait.explorer,
    actionPoints: 3,
    strength: 2,
    actions: [],
    productionCost: 10,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "unit_warrior",
    productType: "unit",
    name: "Warrior",
    type: UnitType.land,
    trait: UnitTrait.military,
    actionPoints: 2,
    strength: 5,
    actions: [],
    productionCost: 60,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [],
    weakRequirements: [],
  },
  {
    id: "unit_tireme",
    productType: "unit",
    name: "Tireme",
    type: UnitType.naval,
    trait: UnitTrait.military,
    actionPoints: 3,
    strength: 5,
    actions: [],
    productionCost: 50,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [new CoastlineCityRequirement()],
    weakRequirements: [],
  },
  {
    id: "unit_galley",
    productType: "unit",
    name: "Galley",
    type: UnitType.naval,
    trait: UnitTrait.military,
    actionPoints: 3,
    strength: 3,
    actions: [],
    productionCost: 50,
    capacity: 2,
    supplyRange: 0,
    strongRequirements: [new CoastlineCityRequirement()],
    weakRequirements: [],
  },
  {
    id: "unit_scout_ship",
    productType: "unit",
    name: "Scout vessel",
    type: UnitType.naval,
    trait: UnitTrait.explorer,
    actionPoints: 3,
    strength: 2,
    actions: [],
    productionCost: 30,
    capacity: 0,
    supplyRange: 0,
    strongRequirements: [new CoastlineCityRequirement()],
    weakRequirements: [],
  },
  {
    id: "unit_supply_wagon",
    productType: "unit",
    name: "Supply wagon",
    type: UnitType.land,
    trait: UnitTrait.supply,
    actionPoints: 1,
    strength: 0,
    actions: [],
    productionCost: 30,
    capacity: 0,
    supplyRange: 4,
    strongRequirements: [],
    weakRequirements: [],
  },
];
