import { Unit } from "./unit";
import { City, Yields } from "./city";

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
  [Climate.arctic]: {
    food: 0,
    production: 0,
  },
  [Climate.continental]: {
    food: 1,
    production: 1,
  },
  [Climate.desert]: {
    food: 0,
    production: 0,
  },
  [Climate.oceanic]: {
    food: 2,
    production: 1,
  },
  [Climate.savanna]: {
    food: 1,
    production: 1,
  },
  [Climate.tropical]: {
    food: 1,
    production: 0,
  },
  [Climate.tundra]: {
    food: 0,
    production: 1,
  },
};

const BASE_LAND_FORM_YIELDS: Record<LandForm, Yields> = {
  [LandForm.plains]: {
    food: 0,
    production: 0,
  },
  [LandForm.hills]: {
    food: -1,
    production: 0,
  },
  [LandForm.mountains]: {
    food: -Infinity,
    production: -5,
  },
};

export class Tile {
  climate = Climate.continental;
  landForm = LandForm.plains;
  seaLevel = SeaLevel.deep;
  riverParts: TileDirection[] = [];
  forest = false;
  wetlands = false;

  units: Unit[] = [];
  city: City | null = null;

  // cached data
  neighbours: Tile[] = [];
  neighboursCosts = new Map<Tile, number>();

  yields: Yields = {
    food: 0,
    production: 0,
  };

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

      this.yields.food = Math.max(0, this.yields.food);
      this.yields.production = Math.max(0, this.yields.production);
    }
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
  riverParts?: TileDirection[];
  forest?: boolean;
}
