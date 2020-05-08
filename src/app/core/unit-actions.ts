import { Game } from "./game";
import { Unit } from "./unit";

export enum UnitAction {
  foundCity,
}

interface ActionDefinition {
  action: UnitAction;
  name: string;
  fn: (game: Game, unit: Unit) => void;
}

function foundCity(game: Game, unit: Unit) {
  const city = game.citiesManager.spawn(unit.tile, unit.player);
  if (city) {
    game.unitsManager.destroy(unit);
    game.mapUi.selectCity(city);
  }
}

export const ACTIONS: Record<UnitAction, ActionDefinition> = {
  [UnitAction.foundCity]: {
    action: UnitAction.foundCity,
    name: "Found a city",
    fn: foundCity,
  },
};
