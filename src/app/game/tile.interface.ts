import { Unit } from "./unit";
import { City } from "./city";

export enum Climate {
  tropical,
  savanna,
  desert,
  continental,
  oceanic,
  tundra,
  arctic,
}

export enum Landform {
  plains,
  hills,
  mountains,
}

export enum SeaLevel {
  none,
  shallow,
  deep,
}

export interface Tile {
  x: number;
  y: number;

  climate: Climate;
  landForm: Landform;
  seaLevel: SeaLevel;
  riverParts: TileDirection[];
  forest: boolean;
  wetlands: boolean;

  units: Unit[];
  city: City | null;

  // cached data
  neighbours: Tile[];
  neighboursCosts: Map<Tile, number>;

  // debug staff
  // height?: number;
  // temperature?: number;
  // humidity?: number;
  // riverSource?: boolean;
  // riverMouth?: boolean;
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
  landForm?: Landform;
  seaLevel?: SeaLevel;
  riverParts?: TileDirection[];
  forest?: boolean;
}
