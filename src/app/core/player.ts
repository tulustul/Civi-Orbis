import { Tile } from "./tile";
import { Unit } from "./unit";
import { getTileIndex, getTileFromIndex } from "./serialization";
import { Game } from "./game";
import { City } from "./city";
import {
  Yields,
  EMPTY_YIELDS,
  zeroYields,
  addYields,
  subtractYields,
  copyYields,
} from "./yields";

export const PLAYER_COLORS: number[] = [
  0xff0000,
  0x00ff00,
  0x0000ff,
  0xffff00,
  0x00ffff,
  0xff00ff,
  0x999999,
  0xdddddd,
  0xfbacac,
  0xe6b873,
  0x39862b,
  0x2e716e,
  0x7457bb,
  0xab57bb,
  0x79583c,
  0xb6bbe6,
];

export enum PlayerType {
  human,
  ai,
}

export interface PlayerSerialized {
  type: PlayerType;
  color: number;
  exploredTiles: number[];
  yieldsTotal: Yields;
}

export class Player {
  id: number;

  exploredTiles = new Set<Tile>();

  visibleTiles = new Set<Tile>();

  units: Unit[] = [];

  cities: City[] = [];

  cityWithoutProduction: City[] = [];

  unitsWithoutOrders: Unit[] = [];

  yieldsPerTurn: Yields = { ...EMPTY_YIELDS };

  yieldsIncome: Yields = { ...EMPTY_YIELDS };

  yieldsCosts: Yields = { ...EMPTY_YIELDS };

  yieldsTotal: Yields = { ...EMPTY_YIELDS };

  area = this.game.areasManager.make(this.color);

  constructor(
    public game: Game,
    public type: PlayerType,
    public color: number,
  ) {}

  serialize(): PlayerSerialized {
    return {
      type: this.type,
      color: this.color,
      exploredTiles: Array.from(this.exploredTiles).map((tile) =>
        getTileIndex(this.game.map, tile),
      ),
      yieldsTotal: this.yieldsTotal,
    };
  }

  static deserialize(game: Game, data: PlayerSerialized) {
    const player = new Player(game, data.type, data.color);
    for (const tileIndex of data.exploredTiles) {
      player.exploredTiles.add(getTileFromIndex(game.map, tileIndex));
    }
    player.yieldsTotal = data.yieldsTotal;
    player.updateYields();
    player.updateCitiesWithoutProduction();
    return player;
  }

  updateYields() {
    zeroYields(this.yieldsIncome);
    zeroYields(this.yieldsCosts);
    zeroYields(this.yieldsPerTurn);

    for (const city of this.cities) {
      for (const tile of city.tiles) {
        if (!tile.city) {
          if (tile.improvement !== null) {
            this.yieldsCosts.publicWorks++;
          }
          if (tile.road !== null) {
            this.yieldsCosts.publicWorks++;
          }
        }
      }
      addYields(this.yieldsIncome, city.yields);
    }

    copyYields(this.yieldsPerTurn, this.yieldsIncome);
    subtractYields(this.yieldsPerTurn, this.yieldsCosts);
  }

  nextTurn() {
    this.updateYields();
    addYields(this.yieldsTotal, this.yieldsPerTurn);
    this.yieldsTotal.publicWorks = Math.max(0, this.yieldsTotal.publicWorks);

    this.updateCitiesWithoutProduction();
    this.updateUnitsWithoutOrders();
  }

  updateCitiesWithoutProduction() {
    this.cityWithoutProduction = this.cities.filter((c) => !c.product);
  }

  updateUnitsWithoutOrders() {
    this.unitsWithoutOrders = this.units.filter(
      (c) => !c.order && c.actionPointsLeft,
    );
  }

  addCity(city: City) {
    this.cities.push(city);
    city.product$.subscribe(() => this.updateCitiesWithoutProduction());
  }
}
