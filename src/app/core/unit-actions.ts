import { Game } from "./game";
import { UnitCore } from "./unit";
import {
  TileImprovement,
  TileRoad,
  IMPROVEMENT_PUBLIC_WORKS_COSTS,
  IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN,
  ROAD_PUBLIC_WORKS_COSTS,
  ROAD_PUBLIC_WORKS_COSTS_PER_TURN,
} from "./tile-improvements";

export type UnitAction =
  | "foundCity"
  | "buildRoad"
  | "buildFarm"
  | "buildMine"
  | "buildSawmill";

const ACTION_TO_IMPROVEMENT: Partial<Record<UnitAction, TileImprovement>> = {
  buildFarm: TileImprovement.farm,
  buildMine: TileImprovement.mine,
  buildSawmill: TileImprovement.sawmill,
};

export function getPublicWorksRequired(action: UnitAction) {
  if (action === "buildRoad") {
    return ROAD_PUBLIC_WORKS_COSTS[TileRoad.road];
  }
  const improvement = ACTION_TO_IMPROVEMENT[action];
  if (improvement !== undefined) {
    return IMPROVEMENT_PUBLIC_WORKS_COSTS[improvement];
  }
  return 0;
}

export function getPublicWorksPerTurn(action: UnitAction) {
  if (action === "buildRoad") {
    return ROAD_PUBLIC_WORKS_COSTS_PER_TURN[TileRoad.road];
  }
  const improvement = ACTION_TO_IMPROVEMENT[action];
  if (improvement !== undefined) {
    return IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN[improvement];
  }
  return 0;
}

export abstract class ActionRequirement {
  static id: string;
  abstract check(unit: UnitCore, action: UnitAction): boolean;
}

export class OwnTileRequirement extends ActionRequirement {
  id = "ownTile";

  check(unit: UnitCore) {
    return unit.tile.areaOf?.player === unit.player;
  }
}

export class NotForeignTileRequirement extends ActionRequirement {
  id = "notForeignTile";

  check(unit: UnitCore) {
    return !unit.tile.areaOf || unit.tile.areaOf?.player === unit.player;
  }
}

export class ImprovementNotYetBuiltRequirement extends ActionRequirement {
  id = "sameImprovement";

  constructor(public improvement: TileImprovement) {
    super();
  }

  check(unit: UnitCore) {
    return unit.tile.improvement !== this.improvement;
  }
}
export class IsImprovementPossibleRequirement extends ActionRequirement {
  id = "improvementPossible";

  constructor(public improvement: TileImprovement) {
    super();
  }

  check(unit: UnitCore) {
    return unit.tile.isImprovementPossible(this.improvement);
  }
}

export class NoRoadRequirement extends ActionRequirement {
  id = "noRoad";

  check(unit: UnitCore) {
    return unit.tile.road === null;
  }
}

export class isRoadPossibleRequirement extends ActionRequirement {
  id = "roadPossible";

  check(unit: UnitCore) {
    return unit.tile.isRoadPossible();
  }
}

export class PublicWorksPointsRequirement extends ActionRequirement {
  id = "publicWorks";

  check(unit: UnitCore, action: UnitAction) {
    return (
      unit.player.yieldsTotal.publicWorks >= getPublicWorksRequired(action)
    );
  }
}

interface ActionDefinition {
  action: UnitAction;
  name: string;
  fn: (game: Game, unit: UnitCore) => void;
  requirements: ActionRequirement[];
}

function foundCity(game: Game, unit: UnitCore) {
  const city = game.citiesManager.spawn(unit.tile, unit.player);
  if (city) {
    game.unitsManager.destroy(unit);
  }
}

function buildImprovement(
  game: Game,
  unit: UnitCore,
  improvement: TileImprovement,
) {
  unit.actionPointsLeft = 0;
  unit.tile.improvement = improvement;
  game.tilesManager.updateTile(unit.tile);
  unit.player.updateUnitsWithoutOrders();

  unit.player.yieldsTotal.publicWorks -=
    IMPROVEMENT_PUBLIC_WORKS_COSTS[improvement];

  unit.player.yieldsCosts.publicWorks +=
    IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN[improvement];

  unit.player.yieldsPerTurn.publicWorks -=
    IMPROVEMENT_PUBLIC_WORKS_COSTS_PER_TURN[improvement];
}

function buildRoad(game: Game, unit: UnitCore) {
  unit.actionPointsLeft = 0;
  unit.tile.road = TileRoad.road;
  game.tilesManager.updateTile(unit.tile);
  for (const neighbour of unit.tile.neighbours) {
    game.tilesManager.updateTile(neighbour);
  }
  unit.player.updateUnitsWithoutOrders();

  unit.player.yieldsTotal.publicWorks -= ROAD_PUBLIC_WORKS_COSTS[TileRoad.road];

  unit.player.yieldsCosts.publicWorks +=
    ROAD_PUBLIC_WORKS_COSTS_PER_TURN[TileRoad.road];

  unit.player.yieldsPerTurn.publicWorks -=
    ROAD_PUBLIC_WORKS_COSTS_PER_TURN[TileRoad.road];
}

export const ACTIONS: Record<UnitAction, ActionDefinition> = {
  foundCity: {
    action: "foundCity",
    name: "Found a city",
    fn: foundCity,
    requirements: [new NotForeignTileRequirement()], // TODO add minimal distance to other city
  },
  buildFarm: {
    action: "buildFarm",
    name: "Build a farm",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.farm),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.farm),
      new IsImprovementPossibleRequirement(TileImprovement.farm),
      new PublicWorksPointsRequirement(),
    ],
  },
  buildMine: {
    action: "buildMine",
    name: "Build a mine",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.mine),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.mine),
      new IsImprovementPossibleRequirement(TileImprovement.mine),
      new PublicWorksPointsRequirement(),
    ],
  },
  buildSawmill: {
    action: "buildSawmill",
    name: "Build a sawmill",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.sawmill),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.sawmill),
      new IsImprovementPossibleRequirement(TileImprovement.sawmill),
      new PublicWorksPointsRequirement(),
    ],
  },
  buildRoad: {
    action: "buildRoad",
    name: "Build a road",
    fn: (game, unit) => buildRoad(game, unit),
    requirements: [
      new NoRoadRequirement(),
      new isRoadPossibleRequirement(),
      new PublicWorksPointsRequirement(),
    ],
  },
};
