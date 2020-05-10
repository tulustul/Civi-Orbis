import { Unit } from "./unit";
import { City } from "./city";
import { Yields, EMPTY_YIELDS } from "./yields";
import { TileImprovement, TileRoad } from "./tile-improvements";

export enum Climate {
  tropical,
  savanna,
  desert,
  continental,
  oceanic,
  tundra,
  arctic,
}

export enum LandForm {
  plains,
  hills,
  mountains,
}

export enum SeaLevel {
  none,
  shallow,
  deep,
}

const BASE_CLIMATE_YIELDS: Record<Climate, Yields> = {
  [Climate.arctic]: { ...EMPTY_YIELDS },
  [Climate.continental]: { ...EMPTY_YIELDS, food: 1, production: 1 },
  [Climate.desert]: {
    ...EMPTY_YIELDS,
  },
  [Climate.oceanic]: { ...EMPTY_YIELDS, food: 2, production: 1 },
  [Climate.savanna]: { ...EMPTY_YIELDS, food: 1, production: 1 },
  [Climate.tropical]: { ...EMPTY_YIELDS, food: 1 },
  [Climate.tundra]: { ...EMPTY_YIELDS, production: 1 },
};

const BASE_LAND_FORM_YIELDS: Record<LandForm, Yields> = {
  [LandForm.plains]: { ...EMPTY_YIELDS },
  [LandForm.hills]: { ...EMPTY_YIELDS, food: -1 },
  [LandForm.mountains]: { ...EMPTY_YIELDS, food: -Infinity, production: -5 },
};

export const FORESTABLE_CLIMATES = new Set<Climate>([
  Climate.continental,
  Climate.oceanic,
  Climate.tropical,
  Climate.tundra,
]);

export const WETLANDS_CLIMATES = new Set<Climate>([
  Climate.continental,
  Climate.oceanic,
  Climate.tropical,
]);

export class Tile {
  climate = Climate.continental;
  landForm = LandForm.plains;
  seaLevel = SeaLevel.deep;
  riverParts: TileDirection[] = [];
  forest = false;
  wetlands = false;
  improvement: TileImprovement | null = null;
  road: TileRoad | null = null;

  units: Unit[] = [];
  city: City | null = null;
  areaOf: City | null = null;

  // cached data
  neighbours: Tile[] = [];
  neighboursCosts = new Map<Tile, number>();

  yields: Yields = { ...EMPTY_YIELDS };

  constructor(public x: number, public y: number) {}

  computeMovementCosts() {
    for (const neighbour of this.neighbours) {
      const dir = this.getDirectionTo(neighbour);
      let cost = 1;
      if (neighbour.seaLevel !== SeaLevel.none) {
        cost = Infinity;
      } else if (neighbour.landForm === LandForm.mountains) {
        cost = Infinity;
      } else if (neighbour.landForm === LandForm.hills) {
        cost = 2;
      } else {
        if (this.riverParts.includes(dir)) {
          cost = 3;
        } else if (this.riverParts.length && neighbour.riverParts.length) {
          cost = 0.5;
        }
      }
      if (neighbour.road === TileRoad.road) {
        cost /= 3;
      }
      this.neighboursCosts.set(neighbour, cost);
    }
  }

  getDirectionTo(tile: Tile): TileDirection {
    if (tile.x === this.x - (this.y % 2 ? 0 : 1) && tile.y === this.y - 1) {
      return TileDirection.NW;
    }
    if (tile.x === this.x + (this.y % 2 ? 1 : 0) && tile.y === this.y - 1) {
      return TileDirection.NE;
    }
    if (tile.x === this.x + 1 && tile.y === this.y) {
      return TileDirection.E;
    }
    if (tile.x === this.x + (this.y % 2 ? 1 : 0) && tile.y === this.y + 1) {
      return TileDirection.SE;
    }
    if (tile.x === this.x - (this.y % 2 ? 0 : 1) && tile.y === this.y + 1) {
      return TileDirection.SW;
    }
    if (tile.x === this.x - 1 && tile.y === this.y) {
      return TileDirection.W;
    }
    return TileDirection.NONE;
  }

  computeYields() {
    if (this.seaLevel === SeaLevel.deep) {
      this.yields.food = 1;
      this.yields.production = 0;
    } else if (this.seaLevel === SeaLevel.shallow) {
      this.yields.food = 2;
      this.yields.production = 0;
    } else {
      const climateYields = BASE_CLIMATE_YIELDS[this.climate];
      const landFormYields = BASE_LAND_FORM_YIELDS[this.landForm];
      this.yields.food = climateYields.food + landFormYields.food;
      this.yields.production =
        climateYields.production + landFormYields.production;

      if (this.forest) {
        this.yields.food--;
        this.yields.production++;
      }

      if (this.wetlands) {
        this.yields.food--;
        this.yields.production--;
      }

      if (this.riverParts.length) {
        this.yields.food += this.climate === Climate.desert ? 3 : 1;
      }

      if (this.improvement === TileImprovement.farm) {
        this.yields.food++;
      } else if (this.improvement === TileImprovement.mine) {
        this.yields.production++;
      } else if (this.improvement === TileImprovement.sawmill) {
        this.yields.production++;
      }

      this.yields.food = Math.max(0, this.yields.food);
      this.yields.production = Math.max(0, this.yields.production);
    }
  }

  get totalYields(): number {
    return this.yields.food + this.yields.production;
  }

  isForestable(): boolean {
    return (
      this.seaLevel === SeaLevel.none &&
      this.landForm === LandForm.plains &&
      FORESTABLE_CLIMATES.has(this.climate)
    );
  }

  areWetlandsPossible(): boolean {
    return !!(
      this.seaLevel === SeaLevel.none &&
      this.landForm === LandForm.plains &&
      this.riverParts.length &&
      WETLANDS_CLIMATES.has(this.climate)
    );
  }

  isImprovementPossible(improvement: TileImprovement | null): boolean {
    if (improvement === null) {
      return true;
    } else if (improvement === TileImprovement.farm) {
      return (
        this.seaLevel === SeaLevel.none &&
        this.landForm === LandForm.plains &&
        this.climate !== Climate.arctic &&
        !this.forest &&
        !this.wetlands
      );
    } else if (improvement === TileImprovement.mine) {
      return this.landForm === LandForm.hills;
    } else if (improvement === TileImprovement.sawmill) {
      return this.forest && !this.wetlands;
    } else {
      return false;
    }
  }

  isRoadPossible() {
    return (
      this.seaLevel === SeaLevel.none && this.landForm !== LandForm.mountains
    );
  }
}

export enum TileDirection {
  NONE,
  NW,
  NE,
  E,
  SE,
  SW,
  W,
}

export interface TileSerialized {
  climate?: Climate;
  landForm?: LandForm;
  seaLevel?: SeaLevel;
  improvement?: TileImprovement | null;
  road?: TileRoad | null;
  riverParts?: TileDirection[];
  forest?: boolean;
}
