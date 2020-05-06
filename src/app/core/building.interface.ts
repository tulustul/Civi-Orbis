import { Bonuses } from "./bonus";

export interface BuildingDefinition {
  id: string;
  name: string;
  productionCost: number;
  bonuses: Bonuses;
}
