import {
  CityGetWorkTilesResult,
  CityProduceOptions,
  CityWorkTileOptions,
  MapGeneratorOptions,
  TileGetInRangeOptions,
  TileSetResourceOptions,
  TileUpdateOptions,
  UnitDoActionOptions,
  UnitFindPathOptions,
  UnitGetFailedActionRequirementsOptions,
  UnitSetOrderOptions,
  UnitSimulateCombatOptions,
  UnitSpawnOptions,
} from "@/core.worker";
import { CombatSimulation } from "@/core/combat";
import {
  AreaChanneled,
  CityChanneled,
  CityDetailsChanneled,
  GameInfo,
  GameStartInfo,
  TileChanneled,
  TileCoords,
  TileDetailsChanneled,
  TilesCoordsWithNeighbours,
  UnitChanneled,
  UnitDetailsChanneled,
  UnitMoveChanneled,
} from "@/core/serialization/channel";
import { PlayerTask, PlayerYields } from "@/shared";
import { makeCommand, makeObservable } from "./worker";
import { CityRevealedResult } from "@/core/collector";
import { shareReplay } from "rxjs";

export const bridge = {
  nextTask$: makeObservable<PlayerTask | null>("nextTask"),
  game: {
    start$: makeObservable<GameStartInfo>("game.start").pipe(shareReplay(1)),
    turn$: makeObservable<number>("game.turn"),
    new: (options: MapGeneratorOptions) =>
      makeCommand<GameInfo>("game.new", options),
    dump: () => makeCommand<string>("game.dump"),
    load: (data: string) => makeCommand<GameInfo>("game.load", data),
    nextPlayer: () => makeCommand<void>("game.nextPlayer"),
    getInfo: () => makeCommand<GameStartInfo>("game.getInfo"),
  },
  player: {
    tracked$: makeObservable<number>("trackedPlayer.set"),
    yields$: makeObservable<PlayerYields>("trackedPlayer.yields"),
    getSuppliedTiles: (playerId: number) =>
      makeCommand<TilesCoordsWithNeighbours[]>(
        "player.getSuppliedTiles",
        playerId,
      ),
  },
  tiles: {
    updated$: makeObservable<TileChanneled[]>("tiles.updated"),
    explored$: makeObservable<TileCoords[]>("trackedPlayer.tilesExplored"),
    showed$: makeObservable<TileCoords[]>("trackedPlayer.tilesShowed"),
    showedAdded$: makeObservable<TileCoords[]>(
      "trackedPlayer.tilesShowedAdded",
    ),
    getAll: () => makeCommand<TileChanneled[]>("tile.getAll"),
    getAllExplored: () => makeCommand<TileCoords[]>("tile.getAllExplored"),
    getAllVisible: () => makeCommand<TileCoords[]>("tile.getAllVisible"),
    getDetails: (tileId: number) =>
      makeCommand<TileDetailsChanneled>("tile.getDetails", tileId),
    getInRange: (options: TileGetInRangeOptions) =>
      makeCommand<TilesCoordsWithNeighbours[]>("tile.getInRange", options),
    update: (options: TileUpdateOptions) =>
      makeCommand<void>("tile.update", options),
    bulkUpdate: (options: TileUpdateOptions[]) =>
      makeCommand<void>("tile.bulkUpdate", options),
    setResource: (options: TileSetResourceOptions) =>
      makeCommand<void>("tile.setResource", options),
  },
  units: {
    updated$: makeObservable<UnitChanneled>("unit.updated"),
    destroyed$: makeObservable<number>("unit.destroyed"),
    moved$: makeObservable<UnitMoveChanneled>("unit.moved"),
    getAll: () => makeCommand<UnitChanneled[]>("unit.getAll"),
    getDetails: (unitId: number) =>
      makeCommand<UnitDetailsChanneled | null>("unit.getDetails", unitId),
    getRange: (unitId: number) =>
      makeCommand<TilesCoordsWithNeighbours[]>("unit.getRange", unitId),
    spawn: (options: UnitSpawnOptions) =>
      makeCommand<void>("unit.spawn", options),
    doAction: (options: UnitDoActionOptions) =>
      makeCommand<UnitDetailsChanneled | null>("unit.doAction", options),
    setOrder: (options: UnitSetOrderOptions) =>
      makeCommand<UnitDetailsChanneled | null>("unit.setOrder", options),
    findPath: (options: UnitFindPathOptions) =>
      makeCommand<UnitDetailsChanneled | null>("unit.findPath", options),
    disband: (unitId: number) => makeCommand<void>("unit.disband", unitId),
    moveAlongPath: (unitId: number) =>
      makeCommand<UnitDetailsChanneled | null>("unit.moveAlongPath", unitId),
    getFailedActionRequirements: (
      options: UnitGetFailedActionRequirementsOptions,
    ) => makeCommand<string[]>("unit.getFailedActionRequirements", options),
    simulateCombat: (options: UnitSimulateCombatOptions) =>
      makeCommand<CombatSimulation | null>("unit.simulateCombat", options),
  },
  cities: {
    spawned$: makeObservable<CityChanneled>("city.spawned"),
    revealed$: makeObservable<CityRevealedResult>("city.revealed"),
    updated$: makeObservable<CityChanneled>("city.updated"),
    destroyed$: makeObservable<number>("city.destroyed"),
    getAllRevealed: () => makeCommand<CityChanneled[]>("city.getAllRevealed"),
    getDetails: (cityId: number) =>
      makeCommand<CityDetailsChanneled | null>("city.getDetails", cityId),
    produce: (options: CityProduceOptions) =>
      makeCommand<CityDetailsChanneled>("city.produce", options),
    getRange: (cityId: number) =>
      makeCommand<TilesCoordsWithNeighbours[] | null>("city.getRange", cityId),
    getWorkTiles: (cityId: number) =>
      makeCommand<CityGetWorkTilesResult | null>("city.getWorkTiles", cityId),
    workTile: (options: CityWorkTileOptions) =>
      makeCommand<CityDetailsChanneled | null>("city.workTile", options),
    unworkTile: (options: CityWorkTileOptions) =>
      makeCommand<CityDetailsChanneled | null>("city.unworkTile", options),
    optimizeYields: (cityId: number) =>
      makeCommand<CityDetailsChanneled | null>("city.optimizeYields", cityId),
  },
  areas: {
    tilesAdded$: makeObservable<AreaChanneled>("area.tilesAdded"),
    tilesRemoved$: makeObservable<AreaChanneled>("area.tilesRemoved"),
    destroyed$: makeObservable<number>("area.destroyed"),
    getAll: () => makeCommand<AreaChanneled[]>("area.getAll"),
    getTiles: (areaId: number) =>
      makeCommand<TilesCoordsWithNeighbours[]>("area.getTiles", areaId),
  },
};
