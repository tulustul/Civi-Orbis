export enum Climate {
  tropical,
  oceanic,
  continental,
  desert,
  savanna,
  tundra
}

export enum Landform {
  plains,
  hills,
  mountains
}

export enum SeaLevel {
  none,
  flood,
  shallow,
  deep
}

export interface Tile {
  climate: Climate;
  landForm: Landform;
  seaLevel: SeaLevel;
  river: number;
}
