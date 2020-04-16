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
  river: number;
  riverSource: boolean;
  height?: number;
}

export const DIR_TOP_LEFT = 1;
export const DIR_TOP_RIGHT = 1 << 1;
export const DIR_RIGHT = 1 << 2;
export const DIR_BOTTOM_RIGHT = 1 << 3;
export const DIR_BOTTOM_LEFT = 1 << 4;
export const DIR_LEFT = 1 << 5;

export enum TileDirection {
  NONE = 0,
  TOP_LEFT = 1,
  TOP_RIGHT = 1 << 1,
  RIGHT = 1 << 2,
  BOTTOM_RIGHT = 1 << 3,
  BOTTOM_LEFT = 1 << 4,
  LEFT = 1 << 5,
}
