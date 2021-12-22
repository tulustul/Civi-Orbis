import { PlayerCore } from "./player";
import { TileCore } from "./tile";

export class SuppliesProducer {
  potentialTiles = new Set<TileCore>();
  suppliedTiles = new Set<TileCore>();

  constructor(
    public tile: TileCore,
    public player: PlayerCore,
    public range: number,
  ) {
    this.add();
  }

  forget() {
    for (const tile of this.potentialTiles) {
      tile.potentiallySuppliedBy.delete(this);
      if (!tile.isPotentiallySuppliedByPlayer(this.player)) {
        this.player.suppliedTiles.delete(tile);
      }
    }
    this.potentialTiles.clear();
    this.suppliedTiles.clear();
  }

  add() {
    this.potentialTiles = getRange(this.player, this.tile, this.range, true);
    this.suppliedTiles = getRange(this.player, this.tile, this.range, false);

    for (const tile of this.potentialTiles) {
      tile.potentiallySuppliedBy.add(this);
      this.player.potentialSuppliedTiles.add(tile);
    }

    for (const tile of this.suppliedTiles) {
      tile.suppliedBy.add(this);
      this.player.suppliedTiles.add(tile);
    }
  }
}

export class SuppliesBlocker {
  constructor(public tile: TileCore, public player: PlayerCore) {
    this.update(tile);
  }

  update(newTile: TileCore) {
    const oldTile = this.tile;
    this.tile = newTile;

    const producers = new Set([
      ...oldTile.potentiallySuppliedBy,
      ...newTile.potentiallySuppliedBy,
    ]);

    for (const producer of producers) {
      if (this.player.isEnemyWith(producer.player)) {
        producer.forget();
        producer.add();
      }
    }
  }
}

function getRange(
  player: PlayerCore,
  tile: TileCore,
  range: number,
  potentialRange: boolean,
): Set<TileCore> {
  const result = new Set<TileCore>();
  const actionPointsAtTile = new Map<TileCore, number>();
  _getRange(player, tile, range, result, actionPointsAtTile, potentialRange);
  return result;
}

function _getRange(
  player: PlayerCore,
  tile: TileCore,
  actionPointsLeft: number,
  result: Set<TileCore>,
  actionPointsLeftAtTile: Map<TileCore, number>,
  potentialRange: boolean,
) {
  result.add(tile);

  if (actionPointsLeft <= 0) {
    return result;
  }

  for (const neighbour of tile.neighbours) {
    const cost = tile.neighboursCosts.get(neighbour)!;

    const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);
    const newActionPointsLeft = actionPointsLeft - cost;

    if (
      (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) &&
      tile.passableArea === neighbour.passableArea &&
      (potentialRange || !neighbour.zocPlayer?.isEnemyWith(player))
    ) {
      actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);
      _getRange(
        player,
        neighbour,
        newActionPointsLeft,
        result,
        actionPointsLeftAtTile,
        potentialRange,
      );
    }
  }
}
