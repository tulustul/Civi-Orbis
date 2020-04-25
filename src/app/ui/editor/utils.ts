import { Tile, Climate, Landform, SeaLevel } from 'src/app/game/tile.interface';

export const FORESTABLE_CLIMATES = new Set<Climate>([
  Climate.continental,
  Climate.oceanic,
  Climate.tropical,
  Climate.tundra,
]);

export function isTileForestable(tile: Tile) {
  return (
    tile.seaLevel === SeaLevel.none &&
    tile.landForm === Landform.plains &&
    FORESTABLE_CLIMATES.has(tile.climate)
  );
}
