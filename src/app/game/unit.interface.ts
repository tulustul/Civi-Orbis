import { UnitAction } from "./unit-actions";

export interface UnitDefinition {
  id: string;
  name: string;
  actionPoints: number;
  power: number;
  productionCost: number;
  actions: UnitAction[];
}
