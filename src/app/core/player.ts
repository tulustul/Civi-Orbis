import { TileCore } from "./tile";
import { UnitCore } from "./unit";
import { Game } from "./game";
import { CityCore } from "./city";
import { AIPlayer } from "../ai/ai-player";
import {
  EMPTY_YIELDS,
  zeroYields,
  addYields,
  subtractYields,
  copyYields,
} from "./yields";
import { collector } from "./collector";
import { PlayerYields } from "../shared";
import { InternalPolitics } from "./internal-politics";

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

  yields: PlayerYields = {
    costs: { ...EMPTY_YIELDS },
    income: { ...EMPTY_YIELDS },
    total: { ...EMPTY_YIELDS },
    perTurn: { ...EMPTY_YIELDS },
  };

  area = this.game.areasManager.make();

  ai: AIPlayer | null = null;

  internalPolitics = new InternalPolitics();

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

  showTiles(tiles: Iterable<TileCore>) {
    for (const tile of tiles) {
      if (!this.visibleTiles.has(tile)) {
        this.visibleTiles.add(tile);
        if (this.id === this.game.trackedPlayer.id) {
          collector.tilesShowed.add(tile.id);
        }
      }
    }
  }

  updateYields() {
    zeroYields(this.yields.income);
    zeroYields(this.yields.costs);
    zeroYields(this.yields.perTurn);

    for (const city of this.cities) {
      for (const tile of city.tiles) {
        if (!tile.city) {
          if (tile.improvement !== null) {
            this.yields.costs.publicWorks++;
          }
          if (tile.road !== null) {
            this.yields.costs.publicWorks++;
          }
        }
      }
      addYields(this.yields.income, city.yields);
    }

    copyYields(this.yields.perTurn, this.yields.income);
    subtractYields(this.yields.perTurn, this.yields.costs);

    if (this === this.game.trackedPlayer) {
      collector.trackedPlayerYields = this.yields;
    }
  }

  nextTurn() {
    this.updateYields();
    addYields(this.yields.total, this.yields.perTurn);
    this.yields.total.publicWorks = Math.max(0, this.yields.total.publicWorks);

    this.updateCitiesWithoutProduction();
    this.updateUnitsWithoutOrders();
    this.updateVisibleTiles();
  }

  updateVisibleTiles() {
    this.visibleTiles.clear();
    for (const city of this.cities) {
      // TODO replace with city.visibleTiles
      for (const tile of city.tiles) {
        this.visibleTiles.add(tile);
      }
    }
    for (const unit of this.units) {
      for (const tile of unit.getVisibleTiles()) {
        this.visibleTiles.add(tile);
      }
    }
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
