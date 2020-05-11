import { Tile } from "./tile";
import { Unit } from "./unit";

export function findPath(unit: Unit, end: Tile): Tile[][] | null {
  const startTime = performance.now();
  const start = unit.tile;

  if (start === end) {
    return null;
  }

  const visitedTiles = new Set<Tile>();
  const tilesToVisit = new Map<Tile, number>();
  const cameFrom = new Map<Tile, [number, number, Tile | null]>();
  const costsSoFar = new Map<Tile, number>();

  const turnCost = 1 / unit.definition.actionPoints;
  tilesToVisit.set(start, 0);
  costsSoFar.set(start, 0);
  cameFrom.set(start, [0, unit.definition.actionPoints, null]);

  while (tilesToVisit.size) {
    let nextTile!: Tile;
    let minEstimatedCost = Infinity;

    for (const [tile, estimatedCost] of tilesToVisit.entries()) {
      if (estimatedCost < minEstimatedCost) {
        minEstimatedCost = estimatedCost;
        nextTile = tile;
      }
    }

    let [turn, actionPointsLeft, ..._] = cameFrom.get(nextTile)!;

    if (!actionPointsLeft) {
      actionPointsLeft = unit.definition.actionPoints;
      turn++;
    }

    visitedTiles.add(nextTile);
    tilesToVisit.delete(nextTile);

    if (nextTile === end) {
      const endTime = performance.now();
      console.log(`pathfinding took ${Math.round(endTime - startTime)}ms`);
      return reconstructPath(cameFrom, end);
    }

    for (const neighbour of nextTile.neighbours) {
      if (!visitedTiles.has(neighbour)) {
        const isExplored = unit.player.exploredTiles.has(neighbour);
        let moveCost = isExplored
          ? nextTile.neighboursCosts.get(neighbour)!
          : 1;

        if (moveCost === Infinity) {
          continue;
        }

        let newActionPointsLeft = Math.max(0, actionPointsLeft - moveCost);

        moveCost *= turnCost;

        if (!newActionPointsLeft) {
          moveCost = 1; // ??
        }

        const costSoFar = costsSoFar.get(nextTile)! + moveCost;

        if (
          !costsSoFar.has(neighbour) ||
          costSoFar < costsSoFar.get(neighbour)!
        ) {
          costsSoFar.set(neighbour, costSoFar);
          tilesToVisit.set(
            neighbour,
            costSoFar + getEuclideanDistance(neighbour, end) * turnCost,
          );
          cameFrom.set(neighbour, [turn, newActionPointsLeft, nextTile]);
        }
      }
    }
  }

  const endTime = performance.now();
  console.log(`pathfinding took ${Math.round(endTime - startTime)}ms`);
  return null;
}

function getEuclideanDistance(start: Tile, end: Tile) {
  return Math.sqrt(
    (start.x - end.x) * (start.x - end.x) +
      (start.y - end.y) * (start.y - end.y),
  );
}

function reconstructPath(
  cameFrom: Map<Tile, [number, number, Tile | null]>,
  target: Tile,
): Tile[][] {
  let lastTile = target;
  let lastTurn: number | null = null;

  let turnPath: Tile[] = [target];
  const path: Tile[][] = [turnPath];
  while (true) {
    const [turn, _, tile] = cameFrom.get(lastTile)!;
    if (!tile || !cameFrom.has(tile)) {
      return path;
    }
    if (turn !== lastTurn) {
      lastTurn = turn;
      turnPath = [];
      path.unshift(turnPath);
    }
    turnPath.unshift(tile!);
    lastTile = tile!;
  }
}
