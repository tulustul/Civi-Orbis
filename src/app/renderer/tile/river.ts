import * as PIXIE from "pixi.js";

import { TileContainer } from "../tile-container";
import { TileDirection } from "src/app/shared";
import { GameApi } from "src/app/api";
import { Tile } from "src/app/api/tile.interface";

export class RiverDrawer {
  constructor(private game: GameApi, private container: TileContainer) {}

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

    if (!this.game.state!.trackedPlayer.exploredTiles.has(tile)) {
      g.visible = false;
    }
  }

  clearTile(tile: Tile) {
    this.container.clearTile(tile);
  }

  clear() {
    this.container.destroyAllChildren();
  }
}
