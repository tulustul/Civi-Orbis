import * as SimplexNoise from 'simplex-noise';

import { MapGenerator } from './map-generator.interface';
import { TilesMap } from '../game/tiles-map';
import { fillWithEmptyTiles, getTilesAround } from './utils';
import { SeaLevel, Tile, Climate } from '../game/tile.interface';

export class SimplexMapGenerator implements MapGenerator {
  tiles: Tile[][];

  width: number;

  height: number;

  generate(width: number, height: number) {
    this.tiles = fillWithEmptyTiles(width, height);
    this.width = width;
    this.height = height;

    for (const [tile, threshold] of this.getNoisedTiles(
      [0.05, 0.01, 0.03, 0.08, 0.11],
      -0.4
    )) {
      tile.seaLevel = threshold > -0.2 ? SeaLevel.none : SeaLevel.shallow;
    }

    for (const [tile, _] of this.getNoisedTiles(
      [0.012, 0.07, 0.2, 0.05],
      0.4
    )) {
      tile.climate = Climate.oceanic;
    }

    for (const [tile, noise, longitude] of this.getNoisedTiles(
      [0.025, 0.2],
      0
    )) {
      if (longitude > 0.6) {
        tile.climate = Climate.tundra;
      } else {
        tile.climate = noise > 0.7 ? Climate.desert : Climate.savanna;
      }
    }

    this.fixShallowWater();

    return new TilesMap(width, height, this.tiles);
  }

  *getNoisedTiles(
    scales: number[],
    threshold
  ): Iterable<[Tile, number, number]> {
    const noises: [SimplexNoise, number][] = scales.map((scale) => [
      new SimplexNoise(),
      scale,
    ]);

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        let noiseValue = 0;
        for (const [noise, scale] of noises) {
          noiseValue += noise.noise2D(x * scale, y * scale);
        }
        if (noiseValue > threshold) {
          const halfHeight = Math.floor(this.height / 2);
          const longitude = Math.abs((y - halfHeight) / halfHeight);
          yield [this.tiles[x][y], noiseValue, longitude];
        }
      }
    }
  }

  fixShallowWater() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        if (tile.seaLevel === SeaLevel.none) {
          for (const neighbour of getTilesAround(this.tiles, x, y)) {
            if (neighbour.seaLevel === SeaLevel.deep) {
              neighbour.seaLevel = SeaLevel.shallow;
            }
          }
        }
      }
    }
  }
}
