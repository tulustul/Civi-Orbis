import { Yields } from "./yields";

export type Bonuses = {
  yieldValue?: Partial<Yields>;
  yieldFactor?: Partial<Yields>;

  transferProductionToFood?: number;
  transferProductionToCulture?: number;
  transferProductionToPublicWorks?: number;
};
