import { TileCore } from "./tile";
import { UnitDefinition } from "./data.interface";
import { PlayerCore } from "./player";
import { UnitAction, ACTIONS } from "./unit-actions";
import { collector } from "./collector";
import { doCombat, BattleResult } from "./combat";
import { UnitsManager } from "./unit-manager";

export type UnitOrder = "go" | "skip" | "sleep" | null;

export class UnitCore {
  id: number;
  actionPointsLeft: number;
  health = 100;
  path: TileCore[][] | null;

  order: UnitOrder = null;

  constructor(
    public tile: TileCore,
    public definition: UnitDefinition,
    public player: PlayerCore,
    private unitManager: UnitsManager,
  ) {
    this.actionPointsLeft = definition.actionPoints;
  }

  doAction(action: UnitAction) {
    if (!this.canDoAction(action)) {
      return;
    }

    ACTIONS[action].fn(this.player.game, this);

    if (!collector.unitsDestroyed.has(this.id)) {
      collector.units.add(this);
    }
  }

  canDoAction(action: UnitAction): boolean {
    if (!this.actionPointsLeft) {
      return false;
    }

    if (!this.definition.actions.includes(action)) {
      return false;
    }

    for (const r of ACTIONS[action].requirements) {
      if (!r.check(this, action)) {
        return false;
      }
    }

    return true;
  }

  getFailedActionRequirements(action: UnitAction): string[] {
    return ACTIONS[action].requirements
      .filter((r) => !r.check(this, action))
      .map((r) => r.id);
  }

  setOrder(order: UnitOrder) {
    this.order = order;
    this.player.updateUnitsWithoutOrders();
  }

  getPathDestination(): TileCore | null {
    if (!this.path) {
      return null;
    }

    const lastPathTurn = this.path[this.path.length - 1];
    return lastPathTurn[lastPathTurn.length - 1];
  }

  getRange(): Set<TileCore> {
    const result = new Set<TileCore>();
    const actionPointsLeftAtTile = new Map<TileCore, number>();

    this._getRange(
      this.tile,
      this.actionPointsLeft,
      result,
      actionPointsLeftAtTile,
    );

    if (result.size === 1) {
      result.delete(this.tile);
    }

    return result;
  }

  private _getRange(
    tile = this.tile,
    actionPointsLeft = this.actionPointsLeft,
    result: Set<TileCore>,
    actionPointsLeftAtTile: Map<TileCore, number>,
  ) {
    result.add(tile);

    if (actionPointsLeft <= 0) {
      return result;
    }

    for (const neighbour of tile.neighbours) {
      const oldActionPointsLeft = actionPointsLeftAtTile.get(neighbour);

      if (this.definition.type === "land") {
        if (!neighbour.isLand) {
          continue;
        }
      }

      if (this.definition.type === "naval") {
        if (!neighbour.isWater && !neighbour.city) {
          continue;
        }
      }

      const cost = tile.neighboursCosts.get(neighbour)!;
      if (cost === Infinity) {
        continue;
      }

      const newActionPointsLeft = actionPointsLeft - cost;

      if (!oldActionPointsLeft || newActionPointsLeft > oldActionPointsLeft) {
        actionPointsLeftAtTile.set(neighbour, newActionPointsLeft);

        this._getRange(
          neighbour,
          newActionPointsLeft,
          result,
          actionPointsLeftAtTile,
        );
      }
    }

    return result;
  }

  destroy() {
    this.unitManager.destroy(this);
  }

  private move(tile: TileCore) {
    if (!this.actionPointsLeft) {
      return;
    }

    const cost = this.getMovementCost(tile);
    if (cost === Infinity) {
      return;
    }

    if (this.definition.strength) {
      if (tile.units.length) {
        const enemyUnit = tile.units.find(
          (u) => u.definition.strength && u.player !== this.player,
        );
        if (enemyUnit) {
          this.actionPointsLeft = Math.max(this.actionPointsLeft - 3, 0);
          const battleResult = doCombat(this, enemyUnit);
          if (battleResult !== BattleResult.victory) {
            return;
          }
        }
      } else if (tile.city && tile.city.player !== this.player) {
        tile.city.changeOwner(this.player);
      }
    }

    const index = this.tile.units.indexOf(this);
    if (index !== -1) {
      this.tile.units.splice(index, 1);
    }
    tile.units.push(this);
    this.tile = tile;

    this.actionPointsLeft = Math.max(this.actionPointsLeft - cost, 0);

    // TODO update also visibleTiles
    this.player.exploreTiles(this.getVisibleTiles());
  }

  moveAlongPath() {
    if (!this.path) {
      this.setOrder(null);
      return;
    }

    this.setOrder(this.path.length ? "go" : null);

    collector.units.add(this);

    while (this.actionPointsLeft && this.path.length) {
      this.move(this.path[0][0]);
      this.path[0].shift();
      if (!this.path[0].length) {
        this.path.shift();
      }
      if (!this.path.length) {
        this.path = null;
        this.setOrder(null);
        return;
      }
    }
  }

  getMovementCost(target: TileCore) {
    return this.tile.neighboursCosts.get(target) || Infinity;
  }

  getVisibleTiles(): Set<TileCore> {
    return this.tile.getTilesInRange(2);
  }
}
