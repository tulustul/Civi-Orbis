import { TilesMap } from "./map";
import { PlayerChanneled } from "../core/player";
import { Unit } from "./unit";
import { City } from "./city";
import { GameChanneled } from "../core/game";
import { UNITS_MAP } from "../core/unit";
import { TrackedPlayer } from "./tracked-player";

export class GameState {
  turn = 0;
  map: TilesMap;
  players: PlayerChanneled[] = [];
  trackedPlayer: TrackedPlayer;
  units: Unit[] = [];
  cities: City[] = [];

  playersMap = new Map<number, PlayerChanneled>();

  constructor(game: GameChanneled) {
    for (const player of game.players) {
      this.playersMap.set(player.id, player);
    }

    this.turn = game.turn;
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
}
