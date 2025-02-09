import { MapGenerator } from "./map-generator.interface";
import { TilesMapCore } from "@/core/tiles-map";
import {
  findCoastline,
  placeRiverBetweenTiles,
  POSSIBLE_BORDER_PATHS,
} from "./utils";
import { TileCore } from "../core/tile";
import {
  LandForm,
  Climate,
  SeaLevel,
  TileDirection,
  areWetlandsPossible,
  isForestable,
  isResourcePossible,
} from "../shared";
import { getTileInDirection } from "../shared/hex-math";
import { RESOURCES_DEFINITIONS } from "../data/resources";
import { ResourceCore } from "../core/resources";
import { randomNormal } from "../core/random";
import SimplexNoise from "simplex-noise";

interface TileMetadata {
  height: number;
  humidity: number;
  temperature: number;
}

export class RealisticMapGenerator implements MapGenerator {
  private map!: TilesMapCore;

  private width!: number;

  private height!: number;

  private seed: string | undefined;

  private uniformity!: number;

  private seaLevel!: number;

  private resources!: number;

  private startingLocations: TileCore[] = [];

  private riversSources: TileCore[] = [];

  private metadata = new Map<TileCore, TileMetadata>();

  constructor(private startingLocationsCount: number) {}

  getStartingLocations() {
    return this.startingLocations;
  }

  generate(
    width: number,
    height: number,
    seed: string | undefined = undefined,
    uniformity: number = 0.5,
    seaLevel = 0,
    resources = 0.2,
  ) {
    this.map = new TilesMapCore(width, height);
    this.width = width;
    this.height = height;
    this.seed = seed;
    this.uniformity = uniformity;
    this.seaLevel = seaLevel;
    this.resources = resources;

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const metadata: TileMetadata = {
          height: 0,
          humidity: 0,
          temperature: 0,
        };
        this.metadata.set(this.map.tiles[x][y], metadata);
      }
    }

    this.generateHeightmap();

    this.generateMountainRanges();

    this.generateTemperature();

    this.generateHumidity();

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.map.tiles[x][y];
        const metadata = this.metadata.get(tile)!;
        if (metadata.height > 1.3) {
          tile.landForm = LandForm.mountains;
        } else if (metadata.height > 0.25) {
          tile.landForm = LandForm.hills;
        }

        if (metadata.temperature < 0.2) {
          if (metadata.temperature < 0.07) {
            tile.climate = Climate.arctic;
          } else {
            tile.climate = Climate.tundra;
          }
          continue;
        }

        if (metadata.humidity < 0.1) {
          tile.climate = Climate.desert;
        } else if (metadata.humidity < 0.3) {
          tile.climate = Climate.savanna;
        } else if (metadata.humidity < 0.7 && metadata.temperature < 0.5) {
          tile.climate = Climate.continental;
        } else {
          tile.climate =
            metadata.temperature > 0.5 ? Climate.tropical : Climate.oceanic;
        }
      }
    }

    for (const [tile, value, _] of this.getNoisedTiles(
      new ComplexNoise(
        [
          [0.015, 1],
          [0.06, 1],
          [0.3, 1],
        ],
        this.seed,
      ),
    )) {
      const bonus = tile.climate === Climate.tropical ? 0.3 : 0;
      if (value + bonus > -0.2 && isForestable(tile)) {
        tile.forest = true;
      }
    }

    this.fixShallowWater();

    this.adjustHeightmap();

    this.placeRivers();

    this.placeWetlands();

    this.placeResources();

    this.findStartingPositions();

    return this.map;
  }

  private generateHeightmap() {
    const size = Math.max(this.width, this.height);
    const noiseLayersCount = Math.floor(Math.pow(size, 0.4));

    const noiseScales: number[][] = [];
    for (let i = 0; i < noiseLayersCount; i++) {
      noiseScales.push([Math.pow(0.6, i + 4), 1 + this.uniformity * i]);
    }
    const maxValue = noiseScales.reduce(
      (total, scaleAndIntensity) => total + scaleAndIntensity[1],
      0,
    );
    const seaLevel = maxValue * this.seaLevel;

    const coastlineNoise = new ComplexNoise(noiseScales, this.seed);

    const heightmapNoise = new ComplexNoise(
      [
        [0.015, 1],
        [0.06, 1],
        [0.3, 1],
      ],
      this.seed,
    );

    for (let [tile, value, _] of this.getNoisedTiles(coastlineNoise)) {
      let height = 0;

      // Adjust horizontal map edges to be more likely sea.
      // const distanceToEdge = Math.min(tile.x, this.width - tile.x);
      // const edgeThrehold = this.width * 0.1;
      // if (distanceToEdge < edgeThrehold) {
      //   value -=
      //     (maxValue / 2) *
      //     Math.cos((Math.PI / 2 / edgeThrehold) * distanceToEdge);
      // }

      if (value > seaLevel) {
        height = value;
        tile.seaLevel = SeaLevel.none;
        if (value > 0.05 && Math.random() > 0.97) {
          this.riversSources.push(tile);
        }
        height = heightmapNoise.at(tile.x, tile.y);
      }

      this.metadata.get(tile)!.height = height;
    }
  }

  private generateTemperature() {
    for (const [tile, value, longitude] of this.getNoisedTiles(
      new ComplexNoise(
        [
          [0.012, 1],
          [0.07, 1],
        ],
        this.seed,
      ),
    )) {
      const base = (1 - longitude) / 2;
      const noise = ((value + 1) / 2) * (1 - longitude);
      const metadata = this.metadata.get(tile)!;
      metadata.temperature = Math.max(base, Math.min(1, base + noise));
    }
  }

  private generateHumidity() {
    for (const [tile, value, longitude] of this.getNoisedTiles(
      new ComplexNoise(
        [
          [0.025, 1],
          [0.2, 1],
        ],
        this.seed,
      ),
    )) {
      const x = longitude * 10;
      const base = x < Math.PI * 1.5 ? (Math.cos(x) + 1) / 2 - 0.5 : 0;
      const noise = (value + 1) / 2;
      const metadata = this.metadata.get(tile)!;
      metadata.humidity = Math.max(0, Math.min(1, base * 0.8 + noise));
    }
  }

  private generateMountainRanges() {}

  private *getNoisedTiles(
    noise: ComplexNoise,
  ): Iterable<[TileCore, number, number]> {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const noiseValue = noise.at(x, y);
        const halfHeight = Math.floor(this.height / 2);
        const longitude = Math.abs((y - halfHeight) / halfHeight);
        yield [this.map.tiles[x][y], noiseValue, longitude];
      }
    }
  }

  private fixShallowWater() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile = this.map.tiles[x][y];
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
    let currentTiles = findCoastline(this.map.tiles);
    const nextTiles = new Set<TileCore>();
    const visitedTiles = new Set<TileCore>(currentTiles);
    let offset = 0;
    while (currentTiles.length) {
      offset += 0.7;
      for (const tile of currentTiles) {
        for (const neighbour of tile.neighbours) {
          if (
            neighbour.seaLevel === SeaLevel.none &&
            !visitedTiles.has(neighbour)
          ) {
            visitedTiles.add(neighbour);
            nextTiles.add(neighbour);
            this.metadata.get(neighbour)!.height += offset;
          }
        }
      }
      currentTiles = Array.from(nextTiles);
      nextTiles.clear();
    }
  }

  private placeRivers() {
    for (const tile of this.riversSources) {
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
        this.buildRiverPath(tile, Math.round(Math.random() * 5));
      }
    }
  }

  private buildRiverPath(tile: TileCore, direction: TileDirection) {
    if (direction === TileDirection.NONE) {
      return;
    }

    const possibleNeighboursDirections = POSSIBLE_BORDER_PATHS[direction];

    const pairs = possibleNeighboursDirections
      .map((pair) => {
        return pair.map((dir) => {
          if (dir === TileDirection.NONE) {
            return tile;
          }
          return getTileInDirection(this.map.tiles, tile, dir);
        });
      })
      .filter(
        (pair) =>
          pair[0] &&
          pair[1] &&
          pair[0].seaLevel === SeaLevel.none &&
          pair[1].seaLevel === SeaLevel.none &&
          pair[0].riverParts.length < 4 && // small loops prevention, big loops are still an issue
          pair[1].riverParts.length < 4,
      ) as [TileCore, TileCore][];

    if (pairs.length === 0) {
      return;
    }

    let pairToPlace: [TileCore, TileCore];

    if (pairs.length === 1) {
      pairToPlace = pairs[0];
    } else {
      const [pairA, pairB] = pairs;

      const heightA =
        (this.metadata.get(pairA[0])!.height +
          this.metadata.get(pairA[1])!.height) /
        2;
      const heightB =
        (this.metadata.get(pairB[0])!.height +
          this.metadata.get(pairB[1])!.height) /
        2;

      pairToPlace = heightA < heightB ? pairA : pairB;
    }

    if (placeRiverBetweenTiles(...pairToPlace)) {
      this.buildRiverPath(
        pairToPlace[0],
        pairToPlace[0].getDirectionTo(pairToPlace[1]),
      );
    }
  }

  placeWetlands() {
    for (const [tile, value, _] of this.getNoisedTiles(
      new ComplexNoise(
        [
          [0.021, 1],
          [0.08, 1],
          [0.2, 1],
        ],
        this.seed,
      ),
    )) {
      if (value > 0 && areWetlandsPossible(tile)) {
        tile.wetlands = true;
      }
    }
  }

  private findStartingPositions() {
    const maxTries = 10000;
    let tries = 0;
    while (
      tries < maxTries &&
      this.startingLocations.length < this.startingLocationsCount
    ) {
      const x = Math.floor(Math.random() * this.width);
      const y = Math.floor(Math.random() * this.height);
      const tile = this.map.tiles[x][y];
      if (
        tile.seaLevel === SeaLevel.none &&
        tile.landForm !== LandForm.mountains &&
        !this.startingLocations.includes(tile)
      ) {
        this.startingLocations.push(tile);
      }
      tries++;
    }
  }

  placeResources() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        if (Math.random() > this.resources) {
          continue;
        }

        // TODO take more distributions settings into account
        const resourceIndex = Math.floor(
          Math.random() * RESOURCES_DEFINITIONS.length,
        );
        const resourceDef = RESOURCES_DEFINITIONS[resourceIndex];
        const tile = this.map.tiles[x][y];

        if (isResourcePossible(tile, resourceDef)) {
          const dis = resourceDef.distribution;
          const quantity = randomNormal(dis.quantityMedian, dis.quantityStddev);
          tile.resource = new ResourceCore(resourceDef, tile, quantity);
        }
      }
    }
  }
}

class ComplexNoise {
  private noises: SimplexNoise[];

  constructor(
    private scales: number[][],
    seed: string | undefined,
  ) {
    this.noises = scales.map(() => new SimplexNoise(seed));
  }

  at(x: number, y: number) {
    let noiseValue = 0;
    for (let i = 0; i < this.noises.length; i++) {
      const [scale, intensity] = this.scales[i];
      noiseValue += this.noises[i].noise2D(x * scale, y * scale) * intensity;
    }
    return noiseValue;
  }
}
