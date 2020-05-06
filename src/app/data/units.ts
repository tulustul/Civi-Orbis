import { UnitDefinition } from "../core/unit.interface";
import { UnitAction } from "../core/unit-actions";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "settler",
    name: "settler",
    actionPoints: 2,
    power: 0,
    actions: [UnitAction.foundCity],
    productionCost: 50,
  },
  {
    id: "scout",
    name: "scout",
    actionPoints: 2,
    power: 2,
    actions: [],
    productionCost: 10,
  },
  {
    id: "warrior",
    name: "warrior",
    actionPoints: 2,
    power: 5,
    actions: [],
    productionCost: 30,
  },
];
