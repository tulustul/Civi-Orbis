import * as PIXIE from "pixi.js";

import { takeUntil } from "rxjs/operators";

import { TileContainer } from "../tile-container";
import { MapUi } from "src/app/ui/map-ui";
import { Tile } from "src/app/shared";
import { GameApi } from "src/app/api";

export class YiedsDrawer {
  constructor(
    game: GameApi,
    private mapUi: MapUi,
    private container: TileContainer,
  ) {
    // game.started$.subscribe(() => {
    //   game.tilesManager.updatedTile$
    //     .pipe(takeUntil(game.stopped$))
    //     .subscribe((tile) => this.updateTile(tile));
    // });

    this.mapUi.yieldsVisible$.subscribe(
      (visible) => (this.container.visible = visible),
    );
  }

  updateTile(tile: Tile) {
    this.container.clearTile(tile);
    this.drawTile(tile);
  }

  drawTile(tile: Tile) {
    const g = new PIXIE.Graphics();

    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
    g.position.y = tile.y * 0.75;

    this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
    this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);

    this.container.addChild(g, tile);
  }

  private drawYield(
    g: PIXIE.Graphics,
    y: number,
    quantity: number,
    color: number,
  ) {
    g.beginFill(color);
    for (let i = 0; i < quantity; i++) {
      const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
      g.drawRect(x, y, 0.05, 0.05);
    }
    g.endFill();
  }

  clear() {
    this.container.destroyAllChildren();
  }
}
