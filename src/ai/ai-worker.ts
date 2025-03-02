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
import { PassableArea } from "@/core/tiles-map";

const CITIES_PER_WORKER = 0.5;
const MIN_WORKERS = 2;
const MAX_ROAD_DISTANCE = 10;

export class WorkerAI extends AISystem {
  // Track assigned tasks to avoid duplicate work
  private assignedTiles = new Set<TileCore>();

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

    // Find pairs of cities that need roads
    for (let i = 0; i < cities.length; i++) {
      for (let j = i + 1; j < cities.length; j++) {
        const cityA = cities[i];
        const cityB = cities[j];

        if (cityA.tile.getDistanceTo(cityB.tile) > MAX_ROAD_DISTANCE) {
          continue;
        }

        // Find the path between the cities
        const path = findPath(worker, cityA.tile, cityB.tile);

        if (!path) {
          continue;
        }

        // Check if there are tiles on the path without roads
        for (const segment of path) {
          for (const tile of segment) {
            if (tile.road === null && !this.assignedTiles.has(tile)) {
              viableRoadTiles.push(tile);
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
