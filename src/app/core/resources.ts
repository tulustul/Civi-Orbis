import { ResourceDefinition } from "../core/data.interface";
import { Bonuses } from "../core/bonus";

export class Resource {
  definition: ResourceDefinition;
  quantity: number;
  bonuses: Bonuses;
}
