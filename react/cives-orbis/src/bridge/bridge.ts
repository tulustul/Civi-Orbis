import {
  AreaChanneled,
  CityChanneled,
  CityDetailsChanneled,
  TileChanneled,
  TileCoords,
  TileDetailsChanneled,
  UnitChanneled,
  UnitMoveChanneled,
} from "@/core/serialization/channel";
import { makeCommand } from "../api/internal/commander";
import { makeObservable } from "@/api/internal/changes";
import { PlayerYields } from "@/shared";

export const bridge = {
  game: {
    turn$: makeObservable<number>("game.turn"),
  },
  player: {
    tracked$: makeObservable<number>("trackedPlayer.set"),
    yields$: makeObservable<PlayerYields>("trackedPlayer.yields"),
  },
  tiles: {
    updated$: makeObservable<TileChanneled[]>("tiles.updated"),
    explored$: makeObservable<TileChanneled[]>("trackedPlayer.tilesExplored"),
    showed$: makeObservable<TileChanneled[]>("trackedPlayer.tilesShowed"),
    showedAdded$: makeObservable<TileChanneled[]>(
      "trackedPlayer.tilesShowedAdded",
    ),
    getAll: () => makeCommand<TileChanneled[]>("tile.getAll"),
    getAllVisible: () => makeCommand<TileCoords[]>("tile.getAllVisible"),
    getDetails: (tileId: number, playerId: number) =>
      makeCommand<TileDetailsChanneled>("tile.getDetails", {
        tileId,
        playerId,
      }),
  },
  units: {
    updated$: makeObservable<UnitChanneled>("unit.updated"),
    destroyed$: makeObservable<number>("unit.destroyed"),
    moved$: makeObservable<UnitMoveChanneled>("unit.moved"),
    getAll: () => makeCommand<UnitChanneled[]>("unit.getAll"),
  },
  cities: {
    spawned$: makeObservable<CityChanneled>("city.spawned"),
    revealed$: makeObservable<CityChanneled>("city.revealed"),
    updated$: makeObservable<CityChanneled>("city.updated"),
    destroyed$: makeObservable<number>("city.destroyed"),
    getAllRevealed: () => makeCommand<CityChanneled[]>("city.getAllRevealed"),
    getDetails: (cityId: number) =>
      makeCommand<CityDetailsChanneled>("city.getDetails", { cityId }),
  },
  areas: {
    tilesAdded$: makeObservable<AreaChanneled>("area.tilesAdded"),
    tilesRemoved$: makeObservable<AreaChanneled>("area.tilesRemoved"),
    destroyed$: makeObservable<number>("area.destroyed"),
  },
};
