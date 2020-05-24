import { TileCore } from "./tile";
import { UnitCore } from "./unit";
import { Game } from "./game";
import { CityCore } from "./city";
import { AIPlayer } from "../ai/ai-player";
import {
  Yields,
  EMPTY_YIELDS,
  zeroYields,
  addYields,
  subtractYields,
  copyYields,
} from "./yields";
import { collector } from "./collector";

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
  0xb6bce6,
];

export class PlayerCore {
  id: number;

  exploredTiles = new Set<TileCore>();

  visibleTiles = new Set<TileCore>();

  units: UnitCore[] = [];

  cities: CityCore[] = [];

  citiesWithoutProduction: CityCore[] = [];

  unitsWithoutOrders: UnitCore[] = [];

  yieldsPerTurn: Yields = { ...EMPTY_YIELDS };

  yieldsIncome: Yields = { ...EMPTY_YIELDS };

  yieldsCosts: Yields = { ...EMPTY_YIELDS };

  yieldsTotal: Yields = { ...EMPTY_YIELDS };

  area = this.game.areasManager.make();

  ai: AIPlayer | null = null;

  constructor(public game: Game, public color: number) {}

  exploreTiles(tiles: Iterable<TileCore>) {
    for (const tile of tiles) {
      if (!this.exploredTiles.has(tile)) {
        this.exploredTiles.add(tile);
        if (this.id === this.game.trackedPlayer.id) {
          collector.tilesExplored.add(tile.id);
        }
      }
    }
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
    this.citiesWithoutProduction = this.cities.filter((c) => !c.product);
  }

  updateUnitsWithoutOrders() {
    this.unitsWithoutOrders = this.units.filter(
      (c) => !c.order && c.actionPointsLeft,
    );
  }

  addCity(city: CityCore) {
    this.cities.push(city);
  }
}
