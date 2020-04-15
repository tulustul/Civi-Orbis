import { Tile, Climate, Landform, SeaLevel } from './tile.interface';

export function makeEmptyTile(): Tile {
  return {
    climate: Climate.continental,
    landForm: Landform.plains,
    seaLevel: SeaLevel.deep,
    river: 0
  };
}

export class TilesMap {
  tiles: Tile[][] = [];

  constructor(public width: number, public height: number) {
    for (let x = 0; x < width; x++) {
      const row: Tile[] = [];
      this.tiles.push(row);
      for (let y = 0; y < height; y++) {
        row.push(makeEmptyTile());
      }
    }
  }
}
