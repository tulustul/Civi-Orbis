import { TilesMap } from "./map";
import { PlayerChanneled } from "../core/player";
import { Unit } from "./unit";
import { City } from "./city";
import { GameChanneled } from "../core/game";
import { UNITS_MAP, UnitChanneled } from "../core/unit";
import { TrackedPlayer } from "./tracked-player";
import { changeHandler } from "./commander";
import { gameApi } from "./game";
import { Subject, BehaviorSubject } from "rxjs";
import { CityChanneled } from "../core/city";

export class GameState {
  private _turn$ = new BehaviorSubject<number>(0);
  turn$ = this._turn$.asObservable();

  map: TilesMap;
  players: PlayerChanneled[] = [];
  trackedPlayer: TrackedPlayer;
  units: Unit[] = [];
  cities: City[] = [];

  unitsMap = new Map<number, Unit>();
  citiesMap = new Map<number, City>();

  playersMap = new Map<number, PlayerChanneled>();

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

  constructor(game: GameChanneled) {
    for (const player of game.players) {
      this.playersMap.set(player.id, player);
    }

    this._turn$.next(game.turn);
    this.map = new TilesMap(game.map);
    this.players = game.players;
    this.trackedPlayer = new TrackedPlayer(this, game.trackedPlayer);

    this.units = this.restoreUnits(game);
    this.cities = this.restoreCities(game);
  }

  private restoreUnits(game: GameChanneled): Unit[] {
    return game.units.map((unit) => new Unit(this, unit));
  }

  private restoreCities(game: GameChanneled): City[] {
    return game.cities.map((city) => new City(this, city));
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
}
