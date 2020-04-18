import * as SimplexNoise from 'simplex-noise';

import { MapGenerator } from './map-generator.interface';
import { TilesMap } from '../game/tiles-map';
import {
  fillWithEmptyTiles,
  findCoastline,
  placeRiverBetweenTiles,
  POSSIBLE_RIVER_PATHS,
} from './utils';
import { SeaLevel, Tile, Climate, TileDirection } from '../game/tile.interface';
import { getTileInDirection, getTileDirection } from '../game/hex-math';

export class SimplexMapGenerator implements MapGenerator {
  private tiles: Tile[][];

  private width: number;

  private height: number;

  private startingLocations: Tile[] = [];

  constructor(private startingLocationsCount: number) {}

  getStartingLocations() {
    return this.startingLocations;
  }

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
      if (threshold > 0.05 && Math.random() > 0.9) {
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

    this.adjustHeightmap();

    this.placeRivers(riversSources);

    this.findStartingPositions();

    return new TilesMap(width, height, this.tiles);
  }

  private *getNoisedTiles(
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

  private fixShallowWater() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.tiles[x][y];
        if (tile.seaLevel === SeaLevel.none) {
          for (const neighbour of tile.neighbours) {
            if (neighbour.seaLevel === SeaLevel.deep) {
              neighbour.seaLevel = SeaLevel.shallow;
            }
          }
        }
      }
    }
  }

  private adjustHeightmap() {
    // Make heighmap suitable for rivers placement - the deeper into land the higher.
    let currentTiles = findCoastline(this.tiles);
    const nextTiles = new Set<Tile>();
    const visitedTiles = new Set<Tile>(currentTiles);
    let offset = 0;
    while (currentTiles.length) {
      offset += 0.15;
      for (const tile of currentTiles) {
        for (const neighbour of tile.neighbours) {
          if (
            neighbour.seaLevel === SeaLevel.none &&
            !visitedTiles.has(neighbour)
          ) {
            visitedTiles.add(neighbour);
            nextTiles.add(neighbour);
            neighbour.height += offset;
          }
        }
      }
      currentTiles = Array.from(nextTiles);
      nextTiles.clear();
    }
  }

  private placeRivers(sources: Tile[]) {
    for (const tile of sources) {
      if (tile.riverParts.length) {
        continue;
      }

      let ok = true;
      for (const neighbour of tile.neighbours) {
        if (neighbour.seaLevel !== SeaLevel.none) {
          ok = false;
        }
      }

      if (ok) {
        tile.riverSource = true;
        this.buildRiverPath(tile, Math.round(Math.random() * 5));
      }
    }
  }

  private buildRiverPath(tile: Tile, direction: TileDirection) {
    if (direction === TileDirection.NONE) {
      return;
    }

    const possibleNeighboursDirections = POSSIBLE_RIVER_PATHS[direction];

    const pairs = possibleNeighboursDirections
      .map((pair) => {
        return pair.map((dir) => {
          if (dir === TileDirection.NONE) {
            return tile;
          }
          return getTileInDirection(this.tiles, tile, dir);
        });
      })
      .filter(
        (pair) =>
          pair[0] &&
          pair[1] &&
          pair[0].seaLevel === SeaLevel.none &&
          pair[1].seaLevel === SeaLevel.none &&
          pair[0].riverParts.length < 4 && // small loops prevention, big loops are still an issue
          pair[1].riverParts.length < 4
      ) as [Tile, Tile][];

    if (pairs.length === 0) {
      return;
    }

    let pairToPlace: [Tile, Tile];

    if (pairs.length === 1) {
      pairToPlace = pairs[0];
    } else {
      const [pairA, pairB] = pairs;

      const heightA = (pairA[0].height + pairA[1].height) / 2;
      const heightB = (pairB[0].height + pairB[1].height) / 2;

      pairToPlace = heightA < heightB ? pairA : pairB;
    }

    if (placeRiverBetweenTiles(...pairToPlace)) {
      this.buildRiverPath(
        pairToPlace[0],
        getTileDirection(pairToPlace[0], pairToPlace[1])
      );
    }
  }

  private findStartingPositions() {
    while (this.startingLocations.length < this.startingLocationsCount) {
      const x = Math.floor(Math.random() * this.width);
      const y = Math.floor(Math.random() * this.height);
      const tile = this.tiles[x][y];
      if (
        tile.seaLevel === SeaLevel.none &&
        !this.startingLocations.includes(tile)
      ) {
        this.startingLocations.push(tile);
      }
    }
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
