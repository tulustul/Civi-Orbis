import { Tile } from './tile.interface';
import { Unit } from './unit';

export function findPath(unit: Unit, start: Tile, end: Tile): Tile[][] | null {
  const visitedTiles = new Set<Tile>();
  const tilesToVisit = new Set<Tile>([start]);
  const cameFrom = new Map<Tile, [number, number, Tile | null]>();
  const costs = new Map<Tile, number>();

  const turnCost = 1 / unit.definition.actionPoints;
  costs.set(start, 0);
  cameFrom.set(start, [0, unit.definition.actionPoints, null]);

  while (tilesToVisit.size) {
    let nextTile!: Tile;
    let minPredictedCost = Infinity;

    for (const tile of tilesToVisit) {
      const cost = costs.get(tile)! + getEuclideanDistance(tile, end);
      if (cost < minPredictedCost) {
        minPredictedCost = cost;
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
      return reconstructPath(cameFrom, end);
    }

    for (const neighbour of nextTile.neighbours) {
      if (!visitedTiles.has(neighbour)) {
        let cost = nextTile.neighboursCosts.get(neighbour)!;
        if (cost === Infinity) {
          continue;
        }

        let newActionPointsLeft = Math.max(0, actionPointsLeft - cost);

        cost *= turnCost;

        if (!newActionPointsLeft) {
          cost = 1; // ??
        }

        const totalCost = costs.get(nextTile)! + cost;

        if (!costs.has(neighbour) || totalCost < costs.get(neighbour)!) {
          costs.set(neighbour, totalCost);
          tilesToVisit.add(neighbour);
          cameFrom.set(neighbour, [turn, newActionPointsLeft, nextTile]);
        }
      }
    }
  }

  return null;
}

function getEuclideanDistance(start: Tile, end: Tile) {
  // skip the square root, it doesn't change the pathfinding result
  return (
    (start.x - end.x) * (start.x - end.x) +
    (start.y - end.y) * (start.y - end.y)
  );
}

function reconstructPath(
  cameFrom: Map<Tile, [number, number, Tile | null]>,
  target: Tile
): Tile[][] {
  let lastTile = target;
  let lastTurn: number | null = null;

  let turnPath: Tile[] = [target];
  const path: Tile[][] = [turnPath];
  while (cameFrom.has(lastTile)) {
    const [turn, _, tile] = cameFrom.get(lastTile)!;
    if (turn !== lastTurn) {
      lastTurn = turn;
      turnPath = [];
      path.unshift(turnPath);
    }
    if (tile) {
      turnPath.unshift(tile!);
    }
    lastTile = tile!;
  }
  return path;
}
