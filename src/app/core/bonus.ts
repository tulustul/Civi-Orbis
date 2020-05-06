import { Yields } from "./city";

export interface Bonuses {
  yieldValue?: Partial<Yields>;
  yieldFactor?: Partial<Yields>;
}
