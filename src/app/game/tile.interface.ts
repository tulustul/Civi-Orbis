import { Unit } from './unit';

export enum Climate {
  tropical,
  savanna,
  desert,
  continental,
  oceanic,
  tundra,
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
  units: Unit[];
  forest: boolean;

  // cached data
  neighbours: Tile[];
  neighboursCosts: Map<Tile, number>;

  // debug staff
  height: number;
  temperature: number;
  humidity: number;
  riverSource: boolean;
  riverMouth: boolean;
}

export enum TileDirection {
  NONE,
  TOP_LEFT,
  TOP_RIGHT,
  RIGHT,
  BOTTOM_RIGHT,
  BOTTOM_LEFT,
  LEFT,
}
