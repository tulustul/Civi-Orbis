import { Tile, Climate, Landform, SeaLevel } from "src/app/game/tile.interface";

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
    tile.landForm === Landform.plains &&
    FORESTABLE_CLIMATES.has(tile.climate)
  );
}

export function areWetlandsPossible(tile: Tile): boolean {
  return !!(
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === Landform.plains &&
    tile.riverParts.length &&
    WETLANDS_CLIMATES.has(tile.climate)
  );
}
