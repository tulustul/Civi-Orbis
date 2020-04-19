import { Tile } from './tile.interface';
import { Unit } from './unit';

/**
 * TODO returns tiles in a path aggregated by turns
 */
export function findPath(unit: Unit, start: Tile, end: Tile): Tile[] | null {
  const visitedTiles = new Set<Tile>();
  const tilesToVisit = new Set<Tile>([start]);
  const cameFrom = new Map<Tile, Tile>();
  const costs = new Map<Tile, number>();

  costs.set(start, 0);

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

    visitedTiles.add(nextTile);
    tilesToVisit.delete(nextTile);

    if (nextTile === end) {
      return recostructPath(cameFrom, end);
    }

    for (const neighbour of nextTile.neighbours) {
      if (!visitedTiles.has(neighbour)) {
        const cost = nextTile.neighboursCosts.get(neighbour)!;

        if (cost === Infinity) {
          continue;
        }

        const totalCost = costs.get(nextTile)! + cost;

        if (!costs.has(neighbour) || totalCost < costs.get(neighbour)!) {
          costs.set(neighbour, totalCost);
          tilesToVisit.add(neighbour);
          cameFrom.set(neighbour, nextTile);
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

function recostructPath(cameFrom: Map<Tile, Tile>, target: Tile): Tile[] {
  const path: Tile[] = [target];
  while (cameFrom.has(path[0])) {
    path.unshift(cameFrom.get(path[0])!);
  }
  return path;
}
