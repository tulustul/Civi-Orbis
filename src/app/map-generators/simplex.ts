import * as SimplexNoise from 'simplex-noise';

import { MapGenerator } from './map-generator.interface';
import { TilesMap } from '../game/tiles-map';
import {
  fillWithEmptyTiles,
  getTileDirection,
  findCoastline,
  POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE,
  getTileInDirection,
  placeRiverBetweenTiles,
  POSSIBLE_RIVER_PATHS_CLOCKWISE,
  POSSIBLE_RIVER_PATHS_COUNTERCLOCKWISE,
} from './utils';
import { SeaLevel, Tile, Climate, TileDirection } from '../game/tile.interface';

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
      if (threshold > 0.05 && Math.random() > 0.95) {
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
          for (const neighbour of tile.neighbours) {
            if (neighbour.seaLevel === SeaLevel.deep) {
              neighbour.seaLevel = SeaLevel.shallow;
            }
          }
        }
      }
    }
  }

  placeRivers(noise: ComplexNoise, sources: Tile[]) {
    // const coastline = findCoastline(this.tiles);
    // for (const tile of coastline) {
    //   if (Math.random() < 0.8) {
    //     continue;
    //   }
    //   const possibleRiverMouths = new Set<[Tile, Tile, boolean]>();
    //   for (const neighbour of tile.neighbours) {
    //     if (neighbour.seaLevel !== SeaLevel.none) {
    //       const dir = getTileDirection(tile, neighbour);
    //       const [dirA, dirB] = POSSIBLE_RIVER_DIRECTION_FROM_WATER_TILE[dir];
    //       const dirATile = getTileInDirection(this.tiles, tile, dirA);
    //       const dirBTile = getTileInDirection(this.tiles, tile, dirB);
    //       if (dirATile && dirATile.seaLevel === SeaLevel.none) {
    //         possibleRiverMouths.add([tile, dirATile, true]);
    //       }
    //       if (dirBTile && dirBTile.seaLevel === SeaLevel.none) {
    //         possibleRiverMouths.add([tile, dirBTile, false]);
    //       }
    //     }
    //   }
    //   if (possibleRiverMouths.size) {
    //     let items = Array.from(possibleRiverMouths);
    //     const [tileA, tileB, clockwise] = items[
    //       Math.floor(Math.random() * items.length)
    //     ];
    //     placeRiverBetweenTiles(tileA, tileB);
    //     this.buildRiverPath(
    //       noise,
    //       tileA,
    //       getTileDirection(tileA, tileB),
    //       clockwise
    //     );
    //   }
    // }

    for (const tile of sources) {
      tile.riverSource = true;
      console.log(tile);
      this.buildRiverPath(
        noise,
        tile,
        Math.round(Math.random() * 5),
        Math.random() > 0.5
      );
    }
  }

  buildRiverPath(
    noise: ComplexNoise,
    tile: Tile,
    direction: TileDirection,
    clockwise: boolean
  ) {
    if (direction === TileDirection.NONE) {
      return;
    }
    const possibleNeighboursDirections = clockwise
      ? POSSIBLE_RIVER_PATHS_CLOCKWISE[direction]
      : POSSIBLE_RIVER_PATHS_COUNTERCLOCKWISE[direction];

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
          pair[1].seaLevel === SeaLevel.none
      ) as [Tile, Tile][];

    if (pairs.length === 0) {
      // throw Error('buildRiverPath: no path candidates');
      // tile.seaLevel = SeaLevel.shallow;
      return;
    }

    let pairToPlace: [Tile, Tile];

    if (pairs.length === 1) {
      pairToPlace = pairs[0];
    } else {
      const [pairA, pairB] = pairs;

      const noiseAValue = noise.at(
        (pairA[0].x + pairA[1].x) / 2,
        (pairA[0].y + pairA[1].y) / 2
      );
      const noiseBValue = noise.at(
        (pairB[0].x + pairB[1].x) / 2,
        (pairB[0].y + pairB[1].y) / 2
      );

      pairToPlace = noiseAValue < noiseBValue ? pairA : pairB;
    }

    if (placeRiverBetweenTiles(...pairToPlace)) {
      this.buildRiverPath(
        noise,
        pairToPlace[0],
        getTileDirection(pairToPlace[0], pairToPlace[1]),
        true
      );
    }
  }
  // buildRiverPath(noise: ComplexNoise, tile: Tile, previousTile: Tile | null) {
  //   let nextTile: Tile | null = null;
  //   let minHeight = noise.at(tile.x, tile.y);

  //   for (const neighbour of tile.neighbours) {
  //     if (neighbour.riverParts.length) {
  //       continue;
  //     }
  //     const noiseValue = noise.at(neighbour.x, neighbour.y);
  //     if (noiseValue < minHeight) {
  //       minHeight = noiseValue;
  //       nextTile = neighbour;
  //     }
  //   }

  //   if (!nextTile && tile.seaLevel === SeaLevel.none) {
  //     tile.seaLevel = SeaLevel.shallow;
  //     if (previousTile) {
  //       const direction = getTileDirection(previousTile, tile);
  //       previousTile.riverParts.push(direction);
  //     }
  //   }

  //   if (nextTile && nextTile.seaLevel === SeaLevel.none) {
  //     // console.log('next tile');
  //     const direction = getTileDirection(tile, nextTile);
  //     tile.riverParts.push(direction);
  //     this.buildRiverPath(noise, nextTile, tile);
  //   }

  //   // console.log(nextTile, tile);
  // }
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
