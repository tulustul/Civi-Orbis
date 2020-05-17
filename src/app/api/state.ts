import { TilesMap } from "./map";
import { TrackedPlayerChanneled } from "../core/player";
import { Unit } from "./unit";
import { City } from "./city";
import { GameChanneled } from "../core/game";
import { UnitChanneled, UnitDetailsChanneled } from "../core/unit";
import { TrackedPlayer } from "./tracked-player";
import { changeHandler, makeCommand } from "./commander";
import { Subject, BehaviorSubject } from "rxjs";
import { CityChanneled, CityDetailsChanneled } from "../core/city";
import { Area } from "./area";
import { AreaChanneled } from "../core/area";
import { Tile, BaseTile, TileChanneled } from "../shared";
import { Player } from "./player";

export class GameState {
  private _turn$ = new BehaviorSubject<number>(0);
  turn$ = this._turn$.asObservable();

  map: TilesMap;
  players: Player[] = [];
  trackedPlayer: TrackedPlayer;
  units: Unit[] = [];
  cities: City[] = [];
  areas: Area[] = [];

  unitsMap = new Map<number, Unit>();
  citiesMap = new Map<number, City>();
  areasMap = new Map<number, Area>();

  playersMap = new Map<number, Player>();

  private _tileUpdated$ = new Subject<Tile>();
  tileUpdated$ = this._tileUpdated$.asObservable();

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
    this.areas = this.restoreAreas(game);

    this.trackedPlayer = new TrackedPlayer(this, game.trackedPlayer);
  }

  private restorePlayers(game: GameChanneled): Player[] {
    return game.players.map((player) => new Player(player));
  }

  private restoreUnits(game: GameChanneled): Unit[] {
    return game.units.map((unit) => new Unit(this, unit));
  }

  private restoreCities(game: GameChanneled): City[] {
    return game.cities.map((city) => new City(this, city));
  }

  private restoreAreas(game: GameChanneled): Area[] {
    return game.areas.map((area) => new Area(this, area));
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

  @changeHandler("unit.updated")
  onUnitUpdate(unitChanneled: UnitChanneled) {
    const unit = this.unitsMap.get(unitChanneled.id);
    if (unit) {
      unit.update(this, unitChanneled);
      this._unitUpdated$.next(unit);
    } else {
      const newUnit = new Unit(this, unitChanneled);
      this.units.push(newUnit);
      this._unitSpawned$.next(newUnit);
    }
  }

  @changeHandler("unit.destroyed")
  onUnitDestroyed(id: number) {
    const unit = this.unitsMap.get(id);
    if (unit) {
      unit.destroy(this);
      this._unitDestroyed$.next(unit);
    }
  }

  @changeHandler("city.updated")
  onCityUpdate(cityChanneled: CityChanneled) {
    const city = this.citiesMap.get(cityChanneled.id);
    if (city) {
      city.update(cityChanneled);
      this._cityUpdated$.next(city);
    } else {
      const newCity = new City(this, cityChanneled);
      this.cities.push(newCity);
      this._citySpawned$.next(newCity);
    }
  }

  @changeHandler("game.turn")
  onTurn(turn: number) {
    this._turn$.next(turn);
  }

  @changeHandler("area.updated")
  onAreaUpdate(areaChanneled: AreaChanneled) {
    const area = this.areasMap.get(areaChanneled.id);
    if (area) {
      area.update(this, areaChanneled);
      this._areaUpdated$.next(area);
    } else {
      const newArea = new Area(this, areaChanneled);
      this.areas.push(newArea);
      this._areaSpawned$.next(newArea);
    }
  }

  @changeHandler("area.destroyed")
  onAreaDestroyed(turn: number) {
    this._turn$.next(turn);
  }

  @changeHandler("trackedPlayer.tilesExplored")
  onTilesExplored(tilesIds: number[]) {
    const tiles = tilesIds.map((id) => this.map.tilesMap.get(id)!);
    this.trackedPlayer.exploreTiles(tiles);
    this._tilesExplored$.next(tiles);
  }

  @changeHandler("trackedPlayer.set")
  onTrackedPlayerSet(trackedPlayer: TrackedPlayerChanneled) {
    this.trackedPlayer = new TrackedPlayer(this, trackedPlayer);
    this._trackedPlayer$.next(this.trackedPlayer);
  }

  @changeHandler("tile.updated")
  onTileUpdate(tileChanneled: TileChanneled) {
    const tile = this.map.tilesMap.get(tileChanneled.id)!;
    Object.assign(tile, tileChanneled);
    this._tileUpdated$.next(tile);
  }
}
