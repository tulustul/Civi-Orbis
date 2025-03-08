import { UnitTrait } from "@/core/data.interface";
import { findPath } from "@/core/pathfinding";
import { ResourceCore } from "@/core/resources";
import { TileCore } from "@/core/tile";
import { TileImprovement } from "@/core/tile-improvements";
import { UnitCore } from "@/core/unit";
import { isImprovementPossible } from "@/shared";
import { AISystem } from "./ai-system";
import { getUnitById } from "@/core/data-manager";
import { AiOperation } from "./types";
import { UnitAction } from "@/core/unit-actions";
import { CityCore } from "@/core/city";
import { PassableArea } from "@/core/tiles-map";

const CITIES_PER_WORKER = 0.5;
const MIN_WORKERS = 2;
const MAX_ROAD_DISTANCE = 15; // Increased from 10 to 15 as per new rules

export class WorkerAI extends AISystem {
  // Track assigned tasks to avoid duplicate work
  private assignedTiles = new Set<TileCore>();

  // Cache optimal paths between cities
  private cityRoadPaths = new Map<
    string,
    {
      path: TileCore[][] | null;
      lastComputedTurn: number;
      existingPathLength?: number;
    }
  >();

  plan(): AiOperation[] {
    this.operations = [];

    // Reset assigned tasks at the beginning of each turn
    this.assignedTiles.clear();

    // Track workers by their current passable area
    const workersByArea = new Map<PassableArea, UnitCore[]>();
    // Get all workers
    for (const unit of this.ai.player.units) {
      if (
        unit.definition.trait === UnitTrait.worker &&
        unit.tile.passableArea
      ) {
        if (!workersByArea.has(unit.tile.passableArea)) {
          workersByArea.set(unit.tile.passableArea, []);
        }
        workersByArea.get(unit.tile.passableArea)!.push(unit);
      }
    }

    // Calculate needed workers per passable area
    for (const passableArea of this.ai.player.knownPassableAreas.values()) {
      if (passableArea.type !== "land") {
        continue;
      }
      // Calculate how many cities are in this area
      const citiesInArea = this.player.cities.filter(
        (city) => city.tile.passableArea === passableArea
      );
      if (citiesInArea.length === 0) {
        continue;
      }
      // Calculate how many workers are needed
      // At least MIN_WORKERS per city
      const workersNeeded = Math.max(
        MIN_WORKERS,
        Math.floor(citiesInArea.length * CITIES_PER_WORKER)
      );
      const currentWorkers = workersByArea.get(passableArea)?.length ?? 0;
      // Request more workers if needed
      if (currentWorkers < workersNeeded) {
        this.ai.productionAi.request({
          focus: "economy",
          priority: 80,
          product: getUnitById("unit_worker")!,
          passableArea,
        });
      }
    }

    // Assign tasks to existing workers
    for (const workers of workersByArea.values()) {
      for (const worker of workers) {
        this.processWorker(worker);
      }
    }

    return this.operations;
  }

  private processWorker(worker: UnitCore) {
    // Skip workers that are already busy
    if (worker.actionPointsLeft === 0 || worker.order) {
      return;
    }
    // Priority order:
    // 1. Improve resources within city working radius
    // 2. Improve other worked tiles without improvements
    // 3. Build roads between cities
    // Try to find a resource to improve
    const resourceTarget = this.findResourceToImprove(worker);
    if (resourceTarget) {
      this.operations.push({
        group: "unit",
        entityId: worker.id,
        focus: "economy",
        priority: 100,
        perform: () => {
          if (worker.tile.id === resourceTarget.tile.id) {
            // We're on the target tile, build the improvement
            this.buildRequiredImprovement(worker, resourceTarget);
          } else {
            // Move to the target tile
            worker.path = findPath(worker, resourceTarget.tile);
          }
        },
      });
      return;
    }

    // Try to find a worked tile to improve
    const workedTile = this.findWorkedTileToImprove(worker);
    if (workedTile) {
      this.operations.push({
        group: "unit",
        entityId: worker.id,
        focus: "economy",
        priority: 90,
        perform: () => {
          if (worker.tile.id === workedTile.id) {
            // We're on the target tile, build improvement
            this.buildBestImprovement(worker, workedTile);
          } else {
            // Move to the target tile
            worker.path = findPath(worker, workedTile);
          }
        },
      });
      return;
    }

    // Try to build roads between cities
    const roadTarget = this.findRoadPathToBuild(worker);
    if (roadTarget) {
      this.operations.push({
        group: "unit",
        entityId: worker.id,
        focus: "economy",
        priority: 70,
        perform: () => {
          if (worker.tile === roadTarget) {
            // We're on the target tile, build road
            this.buildRoad(worker);
          } else {
            // Move to the target tile
            worker.path = findPath(worker, roadTarget);
          }
        },
      });
    }
  }

  /**
   * Find a resource that needs to be improved
   */
  private findResourceToImprove(worker: UnitCore): ResourceCore | null {
    const cities = this.player.cities.filter(
      (city) => city.tile.passableArea === worker.tile.passableArea
    );

    if (cities.length === 0) {
      return null;
    }

    // Collect all viable resources first to find the closest one
    const viableResources: ResourceCore[] = [];

    // Check all tiles within city radius for resources
    for (const city of cities) {
      for (const tile of city.tiles) {
        if (!tile.resource || tile.city) {
          continue;
        }

        if (this.assignedTiles.has(tile)) {
          continue;
        }

        const resource = tile.resource;
        const requiredImprovement = resource.definition.requiredImprovement;

        // If the tile doesn't have the required improvement
        if (
          requiredImprovement !== null &&
          tile.improvement !== requiredImprovement &&
          isImprovementPossible(tile, requiredImprovement)
        ) {
          viableResources.push(resource);
        }
      }
    }

    if (viableResources.length === 0) {
      return null;
    }

    // Find the closest viable resource
    let closestResource: ResourceCore | null = null;
    let shortestDistance = Infinity;

    for (const resource of viableResources) {
      const distance = worker.tile.getDistanceTo(resource.tile);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestResource = resource;
      }
    }

    // Mark this resource as assigned if we found one
    if (closestResource) {
      this.assignedTiles.add(closestResource.tile);
    }

    return closestResource;
  }

  /**
   * Find a worked tile that needs improvement
   */
  private findWorkedTileToImprove(worker: UnitCore): TileCore | null {
    const cities = this.player.cities.filter(
      (city) => city.tile.passableArea === worker.tile.passableArea
    );

    if (cities.length === 0) {
      return null;
    }

    // Collect all viable tiles first to find the closest one
    const viableTiles: TileCore[] = [];

    for (const city of cities) {
      for (const tile of city.workedTiles) {
        // Skip tiles that already have improvements
        if (tile.improvement !== null || tile.city) {
          continue;
        }

        // Skip tiles that are already assigned to another worker
        if (this.assignedTiles.has(tile)) {
          continue;
        }

        // Check if any improvement is possible on this tile
        if (
          isImprovementPossible(tile, TileImprovement.farm) ||
          isImprovementPossible(tile, TileImprovement.mine) ||
          isImprovementPossible(tile, TileImprovement.sawmill)
        ) {
          viableTiles.push(tile);
        }
      }
    }

    if (viableTiles.length === 0) {
      return null;
    }

    // Find the closest viable tile
    let closestTile: TileCore | null = null;
    let shortestDistance = Infinity;

    for (const tile of viableTiles) {
      const distance = worker.tile.getDistanceTo(tile);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestTile = tile;
      }
    }

    // Mark this tile as assigned if we found one
    if (closestTile) {
      this.assignedTiles.add(closestTile);
    }

    return closestTile;
  }

  /**
   * Generate a cache key for a pair of cities
   */
  private getCityPairKey(cityA: CityCore, cityB: CityCore): string {
    // Use city IDs sorted to ensure consistent key regardless of order
    const ids = [cityA.id, cityB.id].sort();
    return `${ids[0]}-${ids[1]}`;
  }

  /**
   * Check if a road already exists between two cities
   */
  private getExistingRoadPath(
    cityA: CityCore,
    cityB: CityCore
  ): TileCore[] | null {
    // Perform a breadth-first search to find a road path
    const visitedTiles = new Set<TileCore>();
    const queue: TileCore[] = [cityA.tile];
    const cameFrom = new Map<TileCore, TileCore>();

    visitedTiles.add(cityA.tile);

    while (queue.length > 0) {
      const current = queue.shift()!;

      if (current === cityB.tile) {
        // Found a path, reconstruct it
        const path: TileCore[] = [current];
        let tile = current;

        while (tile !== cityA.tile) {
          tile = cameFrom.get(tile)!;
          path.unshift(tile);
        }

        return path;
      }

      // Only follow road connections
      for (const neighbor of current.neighbours) {
        if (
          !visitedTiles.has(neighbor) &&
          (neighbor.road !== null || neighbor === cityB.tile) &&
          neighbor.passableArea === cityA.tile.passableArea
        ) {
          visitedTiles.add(neighbor);
          queue.push(neighbor);
          cameFrom.set(neighbor, current);
        }
      }
    }

    return null; // No road path exists
  }

  /**
   * Find a tile where a road should be built
   */
  private findRoadPathToBuild(worker: UnitCore): TileCore | null {
    const cities = this.player.cities.filter(
      (city) => city.tile.passableArea === worker.tile.passableArea
    );

    if (cities.length < 2) {
      return null;
    }

    // Collect all viable road tiles first to find the closest one
    const viableRoadTiles: TileCore[] = [];
    const currentTurn = this.player.game.turn;

    // Find pairs of cities that need roads
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        const cityA = cities[i];
        const cityB = cities[j];

        if (cityA.tile.getDistanceTo(cityB.tile) > MAX_ROAD_DISTANCE) {
          continue;
        }

        const pairKey = this.getCityPairKey(cityA, cityB);
        const cachedData = this.cityRoadPaths.get(pairKey);

        // Check if we need to update the cache
        let optimalPath: TileCore[][] | null = null;

        if (!cachedData || currentTurn - cachedData.lastComputedTurn > 20) {
          // Check if a road path already exists
          const existingPath = this.getExistingRoadPath(cityA, cityB);

          // Only compute optimal path if no existing path or it's time to refresh
          optimalPath = findPath(worker, cityB.tile, cityA.tile);

          // Cache the result
          this.cityRoadPaths.set(pairKey, {
            path: optimalPath,
            lastComputedTurn: currentTurn,
            existingPathLength: existingPath?.length,
          });
        } else {
          // Use cached result
          optimalPath = cachedData.path;
        }

        if (!optimalPath) {
          continue;
        }

        // Get the length of the optimal path
        let optimalPathLength = 0;
        for (const segment of optimalPath) {
          optimalPathLength += segment.length;
        }

        // Check if we should build a new road (no existing road or much better path available)
        const existingPathLength =
          this.cityRoadPaths.get(pairKey)?.existingPathLength;
        const shouldBuildNewRoad =
          !existingPathLength || existingPathLength > optimalPathLength * 2;

        if (shouldBuildNewRoad) {
          // Check if there are tiles on the path without roads
          for (const segment of optimalPath) {
            for (const tile of segment) {
              if (tile.road === null && !this.assignedTiles.has(tile)) {
                viableRoadTiles.push(tile);
              }
            }
          }
        }
      }
    }

    if (viableRoadTiles.length === 0) {
      return null;
    }

    // Find the closest viable road tile
    let closestTile: TileCore | null = null;
    let shortestDistance = Infinity;

    for (const tile of viableRoadTiles) {
      const distance = worker.tile.getDistanceTo(tile);
      if (distance < shortestDistance) {
        shortestDistance = distance;
        closestTile = tile;
      }
    }

    // Mark this tile as assigned if we found one
    if (closestTile) {
      this.assignedTiles.add(closestTile);
    }

    return closestTile;
  }

  /**
   * Build the best improvement for a tile
   */
  private buildBestImprovement(worker: UnitCore, tile: TileCore) {
    // Determine best improvement based on tile properties
    let improvement: TileImprovement | null = null;

    if (isImprovementPossible(tile, TileImprovement.farm)) {
      improvement = TileImprovement.farm;
    } else if (isImprovementPossible(tile, TileImprovement.mine)) {
      improvement = TileImprovement.mine;
    } else if (isImprovementPossible(tile, TileImprovement.sawmill)) {
      improvement = TileImprovement.sawmill;
    }

    if (improvement === null) {
      return;
    }

    // Build the improvement
    const action = this.getActionForImprovement(improvement);
    if (action && worker.canDoAction(action)) {
      worker.doAction(action);
    }
  }

  /**
   * Build the required improvement for a resource
   */
  private buildRequiredImprovement(worker: UnitCore, resource: ResourceCore) {
    const improvement = resource.definition.requiredImprovement;
    if (improvement === null) return;

    const action = this.getActionForImprovement(improvement);
    if (action && worker.canDoAction(action)) {
      worker.doAction(action);
    }
  }

  /**
   * Build a road on the current tile
   */
  private buildRoad(worker: UnitCore) {
    if (worker.canDoAction("buildRoad")) {
      worker.doAction("buildRoad");
    }
  }

  /**
   * Get the action name for a given improvement
   */
  private getActionForImprovement(
    improvement: TileImprovement
  ): UnitAction | null {
    switch (improvement) {
      case TileImprovement.farm:
        return "buildFarm";
      case TileImprovement.mine:
        return "buildMine";
      case TileImprovement.sawmill:
        return "buildSawmill";
      default:
        return null;
    }
  }
}
