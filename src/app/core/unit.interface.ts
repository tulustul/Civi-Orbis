import { UnitAction } from "./unit-actions";
import { ProductDefinition } from "./product";

export type UnitType = "military" | "civilian";

export interface UnitDefinition extends ProductDefinition {
  actionPoints: number;
  power: number;
  actions: UnitAction[];
  type: UnitType;
}
