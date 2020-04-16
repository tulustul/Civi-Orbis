import * as SimplexNoise from 'simplex-noise';

import { MapGenerator } from './map-generator.interface';
import { TilesMap } from '../game/tiles-map';
import { fillWithEmptyTiles, getTilesAround, getTileDirection } from './utils';
import { SeaLevel, Tile, Climate } from '../game/tile.interface';

export class SimplexMapGenerator implements MapGenerator {
  tiles: Tile[][];

  width: number;

  height: number;

  generate(width: number, height: number) {
    this.tiles = fillWithEmptyTiles(width, height);
    this.width = width;
    this.height = height;

    const riversSources: Tile[] = [];

    const heightmapNoise = new ComplexNoise([0.05, 0.01, 0.03, 0.08, 0.11]);

    for (const [tile, threshold] of this.getNoisedTiles(heightmapNoise, -1)) {
      tile.height = threshold;
    }

    for (const [tile, threshold, _] of this.getNoisedTiles(
      heightmapNoise,
      -0.4
    )) {
      tile.seaLevel = threshold > -0.2 ? SeaLevel.none : SeaLevel.shallow;
      if (threshold > 0.05 && Math.random() > 0.94) {
        riversSources.push(tile);
      }
    }

    for (const [tile, _] of this.getNoisedTiles(
      new ComplexNoise([0.012, 0.07, 0.2, 0.05]),
      0.4
    )) {
      tile.climate = Climate.oceanic;
    }

    for (const [tile, noise, longitude] of this.getNoisedTiles(
      new ComplexNoise([0.025, 0.2]),
      0
    )) {
      if (longitude > 0.6) {
        tile.climate = Climate.tundra;
      } else {
        tile.climate = noise > 0.7 ? Climate.desert : Climate.savanna;
      }
    }

    this.fixShallowWater();

    this.placeRivers(heightmapNoise, riversSources);

    return new TilesMap(width, height, this.tiles);
  }

  *getNoisedTiles(
    noise: ComplexNoise,
    threshold: number
  ): Iterable<[Tile, number, number]> {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const noiseValue = noise.at(x, y);
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

  placeRivers(noise: ComplexNoise, sources: Tile[]) {
    for (const tile of sources) {
      tile.riverSource = true;
      this.buildRiverPath(noise, tile, null);
    }
  }

  buildRiverPath(noise: ComplexNoise, tile: Tile, previousTile: Tile | null) {
    let nextTile: Tile | null = null;
    let minHeight = noise.at(tile.x, tile.y);

    // tile.river = previousTile ? DIR_TOP_LEFT : DIR_LEFT;

    for (const neighbour of getTilesAround(this.tiles, tile.x, tile.y)) {
      if (neighbour.river) {
        continue;
      }
      const noiseValue = noise.at(neighbour.x, neighbour.y);
      if (noiseValue < minHeight) {
        minHeight = noiseValue;
        nextTile = neighbour;
      }
    }

    if (!nextTile && tile.seaLevel === SeaLevel.none) {
      tile.seaLevel = SeaLevel.shallow;
      if (previousTile) {
        const direction = getTileDirection(previousTile, tile);
        previousTile.river |= direction;
      }
    }

    if (nextTile && nextTile.seaLevel === SeaLevel.none) {
      // console.log('next tile');
      const direction = getTileDirection(tile, nextTile);
      tile.river |= direction;
      this.buildRiverPath(noise, nextTile, tile);
    }

    // console.log(nextTile, tile);
  }
}

class ComplexNoise {
  private noises: SimplexNoise[];

  constructor(private scales: number[]) {
    this.noises = scales.map(() => new SimplexNoise());
  }

  at(x: number, y: number) {
    let noiseValue = 0;
    for (let i = 0; i < this.noises.length; i++) {
      noiseValue += this.noises[i].noise2D(
        x * this.scales[i],
        y * this.scales[i]
      );
    }
    return noiseValue;
  }
}
