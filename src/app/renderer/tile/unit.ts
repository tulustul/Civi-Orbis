import * as PIXIE from "pixi.js";

import { getTileCoords } from "../utils";
import { TileContainer } from "../tile-container";
import { GameApi } from "src/app/api";
import { Unit } from "src/app/api/unit";
import { takeUntil } from "rxjs/operators";

export class UnitsDrawer {
  unitGraphics = new Map<Unit, PIXIE.Graphics>();

  constructor(private game: GameApi, private container: TileContainer) {
    game.init$.subscribe((state) => {
      state.unitSpawned$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.spawn(unit));

      state.unitUpdated$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.update(unit));

      state.unitDestroyed$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.destroy(unit));
    });
  }

  build() {
    if (!this.game.state) {
      return;
    }

    for (const unit of this.game.state.units) {
      this.spawn(unit);
    }
  }

  spawn(unit: Unit) {
    const g = new PIXIE.Graphics();
    this.container.addChild(g, unit.tile);
    this.unitGraphics.set(unit, g);

    const [x, y] = getTileCoords(unit.tile);
    g.position.x = x;
    g.position.y = y;

    g.beginFill(unit.player.color);
    g.drawCircle(0.5, 0.5, 0.2);
    g.endFill();
  }

  destroy(unit: Unit) {
    const g = this.unitGraphics.get(unit);
    if (g) {
      this.unitGraphics.delete(unit);
      g.destroy();
    }
  }

  update(unit: Unit) {
    const g = this.unitGraphics.get(unit)!;

    const [x, y] = getTileCoords(unit.tile);
    g.position.x = x;
    g.position.y = y;

    this.container.moveChild(g, unit.tile);
  }

  clear() {
    this.container.destroyAllChildren();
    this.unitGraphics.clear();
  }
}
