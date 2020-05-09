import {
  Tile,
  Climate,
  LandForm,
  SeaLevel,
  TileImprovement,
} from "src/app/core/tile";

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

export function isTileForestable(tile: Tile): boolean {
  return (
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === LandForm.plains &&
    FORESTABLE_CLIMATES.has(tile.climate)
  );
}

export function areWetlandsPossible(tile: Tile): boolean {
  return !!(
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === LandForm.plains &&
    tile.riverParts.length &&
    WETLANDS_CLIMATES.has(tile.climate)
  );
}

export function isImprovementPossible(
  tile: Tile,
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

export function isRoadPossible(tile: Tile) {
  return (
    tile.seaLevel === SeaLevel.none && tile.landForm !== LandForm.mountains
  );
}
