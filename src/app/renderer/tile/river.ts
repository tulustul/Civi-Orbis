import * as PIXIE from "pixi.js";

import { Tile, TileDirection } from "src/app/core/tile";
import { Game } from "src/app/core/game";
import { TileContainer } from "../tile-container";

export class RiverDrawer {
  constructor(game: Game, private container: TileContainer) {
    const tilesManager = game.tilesManager;

    tilesManager.updatedTile$.subscribe((tile) => this.updateTile(tile));
  }

  public drawTile(tile: Tile) {
    if (!tile.riverParts.length) {
      return;
    }

    const g = new PIXIE.Graphics();
    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    g.position.y = tile.y * 0.75;
    this.container.addChild(g, tile);

    g.lineStyle(0.15, 0x4169e1);

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        g.moveTo(0, 0.25);
        g.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        g.moveTo(0.5, 0);
        g.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        g.moveTo(1, 0.25);
        g.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        g.moveTo(1, 0.75);
        g.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        g.moveTo(0.5, 1);
        g.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        g.moveTo(0, 0.75);
        g.lineTo(0, 0.25);
      }
    }
  }

  private updateTile(tile: Tile) {
    this.container.clearTile(tile);
    this.drawTile(tile);
  }

  clear() {
    this.container.destroyAllChildren();
  }
}
