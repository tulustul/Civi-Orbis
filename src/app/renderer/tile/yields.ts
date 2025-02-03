import * as PIXI from "pixi.js";

import { MapUi } from "src/app/ui/map-ui";
import { Tile } from "src/app/api/tile.interface";

export class YiedsDrawer {
  tilesMap = new Map<Tile, PIXI.Graphics>();

  constructor(private mapUi: MapUi) {
    this.mapUi.yieldsVisible$.subscribe((visible) => {
      for (const g of this.tilesMap.values()) {
        g.visible = visible;
      }
    });
  }

  drawTile(tile: Tile, container: PIXI.Container) {
    const g = new PIXI.Graphics();

    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
    g.position.y = tile.y * 0.75;

    this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
    this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);

    container.addChild(g);
    this.tilesMap.set(tile, g);
  }

  private drawYield(
    g: PIXI.Graphics,
    y: number,
    quantity: number,
    color: number,
  ) {
    for (let i = 0; i < quantity; i++) {
      const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
      g.rect(x, y, 0.05, 0.05);
    }
    g.fill({ color });
  }
}
