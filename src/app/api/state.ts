import { TilesMap } from "./map";
import { Unit } from "./unit";
import { City } from "./city";
import { TrackedPlayer } from "./tracked-player";
import { makeCommand } from "./internal/commander";
import { Subject, BehaviorSubject } from "rxjs";
import { Area } from "../renderer/area";
import { BaseTile } from "../shared";
import { Player } from "./player";
import {
  GameChanneled,
  TrackedPlayerChanneled,
  UnitDetailsChanneled,
  CityDetailsChanneled,
} from "../core/serialization/channel";
import { Tile } from "./tile.interface";

export class GameState {
  private _turn$ = new BehaviorSubject<number>(0);
  turn$ = this._turn$.asObservable();

  map: TilesMap;
  players: Player[] = [];
  trackedPlayer: TrackedPlayer;
  units: Unit[] = [];
  cities: City[] = [];

  unitsMap = new Map<number, Unit>();
  citiesMap = new Map<number, City>();
  areasMap = new Map<number, Area>();

  playersMap = new Map<number, Player>();

  private _tilesUpdated$ = new Subject<Tile[]>();
  tilesUpdated$ = this._tilesUpdated$.asObservable();

  private _unitSpawned$ = new Subject<Unit>();
  unitSpawned$ = this._unitSpawned$.asObservable();

  private _unitUpdated$ = new Subject<Unit>();
  unitUpdated$ = this._unitUpdated$.asObservable();

  private _unitDestroyed$ = new Subject<Unit>();
  unitDestroyed$ = this._unitDestroyed$.asObservable();

  private _citySpawned$ = new Subject<City>();
  citySpawned$ = this._citySpawned$.asObservable();

  private _cityUpdated$ = new Subject<City>();
  cityUpdated$ = this._cityUpdated$.asObservable();

  private _cityDestroyed$ = new Subject<City>();
  cityDestroyed$ = this._cityDestroyed$.asObservable();

  private _areaSpawned$ = new Subject<Area>();
  areaSpawned$ = this._areaSpawned$.asObservable();

  private _areaUpdated$ = new Subject<Area>();
  areaUpdated$ = this._areaUpdated$.asObservable();

  private _areaDestroyed$ = new Subject<Area>();
  areaDestroyed$ = this._areaDestroyed$.asObservable();

  private _tilesExplored$ = new Subject<Tile[]>();
  tilesExplored$ = this._tilesExplored$.asObservable();

  private _tilesShowed$ = new Subject<Tile[]>();
  tilesShowed$ = this._tilesShowed$.asObservable();

  private _tilesShowedAdded$ = new Subject<Tile[]>();
  tilesShowedAdded$ = this._tilesShowedAdded$.asObservable();

  private _trackedPlayer$ = new Subject<TrackedPlayer>();
  trackedPlayer$ = this._trackedPlayer$.asObservable();

  constructor(game: GameChanneled) {
    this._turn$.next(game.turn);
    this.map = new TilesMap(game.map);

    this.players = this.restorePlayers(game);
    for (const player of this.players) {
      this.playersMap.set(player.id, player);
    }

    this.units = this.restoreUnits(game);
    this.cities = this.restoreCities(game);

    this.trackedPlayer = new TrackedPlayer(this, game.trackedPlayer);

    this.map.preprocess(this);
  }

  private restorePlayers(game: GameChanneled): Player[] {
    return game.players.map((player) => new Player(player));
  }

  private restoreUnits(game: GameChanneled): Unit[] {
    const units = game.units.map((unitData) => new Unit(this, unitData));
    for (const unitData of game.units) {
      const unit = this.unitsMap.get(unitData.id);
      if (unit) {
        unit.updateParentAndChildren(unitData);
      }
    }
    return units;
  }

  private restoreCities(game: GameChanneled): City[] {
    return game.cities.map((city) => new City(this, city));
  }

  async setTrackedPlayer(playerId: number) {
    const data = await makeCommand<TrackedPlayerChanneled>(
      "trackedPlayer.set",
      playerId,
    );
    this.trackedPlayer = new TrackedPlayer(this, data);
    this._trackedPlayer$.next(this.trackedPlayer);
  }

  getUnitDetails(unitId: number): Promise<UnitDetailsChanneled | null> {
    return makeCommand<UnitDetailsChanneled | null>("unit.getDetails", unitId);
  }

  updateTile(tile: Tile) {
    return makeCommand("tile.update", this.serializeTileToUpdate(tile));
  }

  private serializeTileToUpdate(tile: Tile) {
    return {
      id: tile.id,
      climate: tile.climate,
      landForm: tile.landForm,
      seaLevel: tile.seaLevel,
      riverParts: tile.riverParts,
      forest: tile.forest,
      wetlands: tile.wetlands,
      improvement: tile.improvement,
      road: tile.road,
    } as Partial<BaseTile>;
  }

  updateTiles(tiles: Tile[]) {
    const data = tiles.map((t) => this.serializeTileToUpdate(t));
    return makeCommand("tile.bulkUpdate", data);
  }

  getCityDetails(cityId: number) {
    return makeCommand<CityDetailsChanneled>("city.getDetails", cityId);
  }

  async getAreaTiles(areaId: number) {
    const tileIds = await makeCommand<number[]>("area.getTiles", areaId);
    return tileIds.map((id) => this.map.tilesMap.get(id)!);
  }

  updateUnit(unitId: number) {
    const unit = this.unitsMap.get(unitId);
    if (unit) {
      this._unitUpdated$.next(unit);
    }
  }
}
