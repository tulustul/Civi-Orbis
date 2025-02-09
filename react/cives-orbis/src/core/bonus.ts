import { Yields } from "./yields";

export interface Bonuses {
  yieldValue?: Partial<Yields>;
  yieldFactor?: Partial<Yields>;

  transferProductionToFood?: number;
  transferProductionToCulture?: number;
  transferProductionToPublicWorks?: number;

  culturePerKilledEnemy?: number;
}
