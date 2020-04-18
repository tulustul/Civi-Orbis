import { Unit } from './unit';

export enum Climate {
  tropical,
  oceanic,
  continental,
  desert,
  savanna,
  tundra,
}

export enum Landform {
  plains,
  hills,
  mountains,
}

export enum SeaLevel {
  none,
  flood,
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
  riverSource: boolean;
  riverMouth: boolean;
  height: number;
  neighbours: Tile[];
  units: Unit[];
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
