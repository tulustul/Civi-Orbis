import { Game } from "./game";
import { Unit } from "./unit";
import { TileImprovement } from "./tile";

export enum UnitAction {
  foundCity,
  buildFarm,
  buildMine,
  buildSawmill,
}

export abstract class ActionRequirement {
  static id: string;
  abstract check(unit: Unit): boolean;
}

export class OwnTileRequirement extends ActionRequirement {
  id = "ownTile";

  check(unit: Unit) {
    return unit.tile.areaOf?.player === unit.player;
  }
}

export class NotForeignTileRequirement extends ActionRequirement {
  id = "notForeignTile";

  check(unit: Unit) {
    return !unit.tile.areaOf || unit.tile.areaOf?.player === unit.player;
  }
}

export class ImprovementNotYetBuiltRequirement extends ActionRequirement {
  id = "sameImprovement";

  constructor(public improvement: TileImprovement) {
    super();
  }

  check(unit: Unit) {
    return unit.tile.improvement !== this.improvement;
  }
}

export class IsImprovementPossibleRequirement extends ActionRequirement {
  id = "improvementPossible";

  constructor(public improvement: TileImprovement) {
    super();
  }

  check(unit: Unit) {
    return unit.tile.isImprovementPossible(this.improvement);
  }
}

interface ActionDefinition {
  action: UnitAction;
  name: string;
  fn: (game: Game, unit: Unit) => void;
  requirements: ActionRequirement[];
}

function foundCity(game: Game, unit: Unit) {
  const city = game.citiesManager.spawn(unit.tile, unit.player);
  if (city) {
    game.unitsManager.destroy(unit);
  }
}

function buildImprovement(
  game: Game,
  unit: Unit,
  improvement: TileImprovement,
) {
  unit.actionPointsLeft = 0;
  unit.tile.improvement = improvement;
  game.tilesManager.updateTile(unit.tile);
  unit.player.updateUnitsWithoutOrders();
}

export const ACTIONS: Record<UnitAction, ActionDefinition> = {
  [UnitAction.foundCity]: {
    action: UnitAction.foundCity,
    name: "Found a city",
    fn: foundCity,
    requirements: [new NotForeignTileRequirement()], // TODO add minimal distance to other city
  },
  [UnitAction.buildFarm]: {
    action: UnitAction.buildFarm,
    name: "Build a farm",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.farm),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.farm),
      new IsImprovementPossibleRequirement(TileImprovement.farm),
    ],
  },
  [UnitAction.buildMine]: {
    action: UnitAction.buildMine,
    name: "Build a mine",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.mine),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.mine),
      new IsImprovementPossibleRequirement(TileImprovement.mine),
    ],
  },
  [UnitAction.buildSawmill]: {
    action: UnitAction.buildSawmill,
    name: "Build a sawmill",
    fn: (game, unit) => buildImprovement(game, unit, TileImprovement.sawmill),
    requirements: [
      new OwnTileRequirement(),
      new ImprovementNotYetBuiltRequirement(TileImprovement.sawmill),
      new IsImprovementPossibleRequirement(TileImprovement.sawmill),
    ],
  },
};
