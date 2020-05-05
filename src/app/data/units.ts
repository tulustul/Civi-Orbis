import { UnitDefinition } from "../core/unit.interface";
import { UnitAction } from "../core/unit-actions";

export const UNITS_DEFINITIONS: UnitDefinition[] = [
  {
    id: "scout",
    name: "scout",
    actionPoints: 2,
    power: 2,
    actions: [],
    productionCost: 10,
  },
  {
    id: "settler",
    name: "settler",
    actionPoints: 2,
    power: 0,
    actions: [UnitAction.foundCity],
    productionCost: 50,
  },
];
