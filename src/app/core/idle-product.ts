import { ProductDefinition } from "./product";
import { Bonuses } from "./bonus";

export interface IdleProduct extends ProductDefinition {
  bonuses: Bonuses;
}
