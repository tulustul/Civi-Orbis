import { Unit } from "./unit";
import { City } from "./city";
import { Area } from "./area";
import { TrackedPlayer } from "./tracked-player";
import { setChangesHandlers } from "./internal/changes";
import { GameState } from "./state";
import {
  UnitChanneled,
  CityChanneled,
  AreaChanneled,
  TrackedPlayerChanneled,
  TileChanneled,
} from "../core/serialization/channel";

const HANDLERS = {
  "tile.updated": onTileUpdate,
  "unit.updated": onUnitUpdate,
  "unit.destroyed": onUnitDestroyed,
  "city.updated": onCityUpdate,
  "game.turn": onTurn,
  "area.updated": onAreaUpdate,
  "area.destroyed": onAreaDestroyed,
  "trackedPlayer.tilesExplored": onTilesExplored,
  "trackedPlayer.set": onTrackedPlayerSet,
};

export function initChangeHandlers() {
  setChangesHandlers(HANDLERS);
}

function onUnitUpdate(state: GameState, unitChanneled: UnitChanneled) {
  const unit = state.unitsMap.get(unitChanneled.id);
  if (unit) {
    unit.update(state, unitChanneled);
    state["_unitUpdated$"].next(unit);
  } else {
    const newUnit = new Unit(state, unitChanneled);
    state.units.push(newUnit);
    state["_unitSpawned$"].next(newUnit);
  }
}

function onUnitDestroyed(state: GameState, id: number) {
  const unit = state.unitsMap.get(id);
  if (unit) {
    unit.destroy(state);
    state["_unitDestroyed$"].next(unit);
  }
}

function onCityUpdate(state: GameState, cityChanneled: CityChanneled) {
  const city = state.citiesMap.get(cityChanneled.id);
  if (city) {
    city.update(cityChanneled);
    state["_cityUpdated$"].next(city);
  } else {
    const newCity = new City(state, cityChanneled);
    state.cities.push(newCity);
    state["_citySpawned$"].next(newCity);
  }
}

function onTurn(state: GameState, turn: number) {
  state["_turn$"].next(turn);
}

function onAreaUpdate(state: GameState, areaChanneled: AreaChanneled) {
  const area = state.areasMap.get(areaChanneled.id);
  if (area) {
    area.update(state, areaChanneled);
    state["_areaUpdated$"].next(area);
  } else {
    const newArea = new Area(state, areaChanneled);
    state.areas.push(newArea);
    state["_areaSpawned$"].next(newArea);
  }
}

function onAreaDestroyed(state: GameState, turn: number) {
  state["_turn$"].next(turn);
}

function onTilesExplored(state: GameState, tilesIds: number[]) {
  const tiles = tilesIds.map((id) => state.map.tilesMap.get(id)!);
  state.trackedPlayer.exploreTiles(tiles);
  state["_tilesExplored$"].next(tiles);
}

function onTrackedPlayerSet(
  state: GameState,
  trackedPlayer: TrackedPlayerChanneled,
) {
  state.trackedPlayer = new TrackedPlayer(state, trackedPlayer);
  state["_trackedPlayer$"].next(state.trackedPlayer);
}

function onTileUpdate(state: GameState, tileChanneled: TileChanneled) {
  const tile = state.map.tilesMap.get(tileChanneled.id)!;
  Object.assign(tile, tileChanneled);
  if (tileChanneled.areaOf) {
    tile.areaOf = state.citiesMap.get(tileChanneled.areaOf)!;
  }
  state["_tileUpdated$"].next(tile);
}
