import { Unit } from "./unit";
import { City } from "./city";
import { Area } from "./area";
import { TrackedPlayer } from "./tracked-player";
import { setChangesHandlers } from "./internal/changes";
import { GameState } from "./state";
import {
  UnitChanneled,
  CityChanneled,
  AreaDetailsChanneled,
  TrackedPlayerChanneled,
  TileChanneled,
} from "../core/serialization/channel";
import { Tile } from "../shared";

const HANDLERS = {
  "tiles.updated": onTilesUpdate,

  "unit.updated": onUnitUpdate,
  "unit.destroyed": onUnitDestroyed,

  "city.updated": onCityUpdate,

  "game.turn": onTurn,

  "area.updated": onAreaUpdate,
  "area.destroyed": onAreaDestroyed,
  "area.tilesAdded": onAreaTilesAdded,
  "area.tilesRemoved": onAreaTilesRemoved,

  "trackedPlayer.set": onTrackedPlayerSet,
  "trackedPlayer.tilesExplored": onTilesExplored,
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

function onAreaUpdate(state: GameState, areaChanneled: AreaDetailsChanneled) {
  const area = state.areasMap.get(areaChanneled.id);
  if (area) {
    // TODO is update needed?
  } else {
    const newArea = Area.fromDetailsChanneled(state, areaChanneled);
    state.areas.push(newArea);
    state["_areaSpawned$"].next(newArea);
  }
}

function onAreaDestroyed(state: GameState, turn: number) {
  state["_turn$"].next(turn);
}

function onAreaTilesAdded(state: GameState, data) {
  const area = state.areasMap.get(data.id);
  if (!area) {
    return;
  }

  area.addTiles(state.map.getTilesFromIds(data.tiles));
}

function onAreaTilesRemoved(state: GameState, data) {
  const area = state.areasMap.get(data.id);
  if (!area) {
    return;
  }

  area.removeTiles(state.map.getTilesFromIds(data.tiles));
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

function onTilesUpdate(state: GameState, tilesChanneled: TileChanneled[]) {
  const tiles: Tile[] = [];
  for (const tileChanneled of tilesChanneled) {
    const tile = state.map.tilesMap.get(tileChanneled.id)!;
    Object.assign(tile, tileChanneled);
    if (tileChanneled.areaOf !== null) {
      tile.areaOf = state.citiesMap.get(tileChanneled.areaOf)!;
    }
    if (tileChanneled.cityId !== null) {
      tile.city = state.citiesMap.get(tileChanneled.cityId)!;
    }
    tiles.push(tile);
  }
  state["_tilesUpdated$"].next(tiles);
}
