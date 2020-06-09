import { CityCore } from "./city";
import { PlayerCore } from "./player";
import { HaveRequirements } from "./data.interface";

export abstract class Requirement {
  static id: string;
  context: any = {};
  abstract check(player: PlayerCore, city: CityCore | null): boolean;
}

export function checkRequirements(
  entity: HaveRequirements,
  player: PlayerCore,
  city: CityCore | null,
): boolean {
  for (const r of entity.strongRequirements) {
    if (!r.check(player, city)) {
      return false;
    }
  }

  for (const r of entity.weakRequirements) {
    if (!r.check(player, city)) {
      return false;
    }
  }

  return true;
}

export function getFailedWeakRequirements(
  entity: HaveRequirements,
  player: PlayerCore,
  city: CityCore | null,
): [string, any][] {
  return entity.weakRequirements
    .filter((r) => !r.check(player, city))
    .map((r) => [r["id"], r.context]);
}

export class CityHaveBuildingRequirement extends Requirement {
  id = "building";

  constructor(buildingId: string) {
    super();
    this.context = { buildingId };
  }

  check(player: PlayerCore, city: CityCore | null) {
    if (!city) {
      return false;
    }
    return city.buildingsIds.has(this.context.buildingId);
  }
}

export class CitySizeRequirement extends Requirement {
  id = "size";

  constructor(size: number) {
    super();
    this.context = { size };
  }

  check(player: PlayerCore, city: CityCore | null) {
    if (!city) {
      return false;
    }
    return city.size >= this.context.size;
  }
}

export class CoastlineCityRequirement extends Requirement {
  id = "coastlineCity";

  check(player: PlayerCore, city: CityCore | null) {
    if (!city) {
      return false;
    }
    return city.isCoastline;
  }
}
