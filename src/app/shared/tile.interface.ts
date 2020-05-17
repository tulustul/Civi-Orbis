import { TileImprovement, TileRoad } from "../core/tile-improvements";
import { Yields } from "../core/yields";
import { City } from "../api/city";
import { Unit } from "../api/unit";

export enum TileDirection {
  NW,
  NE,
  E,
  SE,
  SW,
  W,
  NONE,
}

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

export interface BaseTile {
  id: number;

  x: number;
  y: number;

  climate: Climate;
  landForm: LandForm;
  seaLevel: SeaLevel;
  riverParts: TileDirection[];
  forest: boolean;
  wetlands: boolean;
  improvement: TileImprovement | null;
  road: TileRoad | null;

  yields: Yields;
}

export interface Tile extends BaseTile {
  areaOf: City | null;

  neighbours: Tile[];
  fullNeighbours: (Tile | null)[]; // keeps neighbours in all directions, null if map border, can be indexed with TileDirection

  city: City | null;
  units: Unit[];
}

export interface TileChanneled extends BaseTile {
  areaOf: number | null;
  cityId: number | null;
  unitsIds: number[];
}

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

export function isForestable(tile: BaseTile): boolean {
  return (
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === LandForm.plains &&
    FORESTABLE_CLIMATES.has(tile.climate)
  );
}

export function areWetlandsPossible(tile: BaseTile): boolean {
  return !!(
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === LandForm.plains &&
    tile.riverParts.length &&
    WETLANDS_CLIMATES.has(tile.climate)
  );
}

export function isImprovementPossible(
  tile: BaseTile,
  improvement: TileImprovement | null,
): boolean {
  if (improvement === null) {
    return true;
  } else if (improvement === TileImprovement.farm) {
    return (
      tile.seaLevel === SeaLevel.none &&
      tile.landForm === LandForm.plains &&
      tile.climate !== Climate.arctic &&
      !tile.forest &&
      !tile.wetlands
    );
  } else if (improvement === TileImprovement.mine) {
    return tile.landForm === LandForm.hills;
  } else if (improvement === TileImprovement.sawmill) {
    return tile.forest && !tile.wetlands;
  } else {
    return false;
  }
}

export function isRoadPossible(tile: BaseTile) {
  return (
    tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains
  );
}
