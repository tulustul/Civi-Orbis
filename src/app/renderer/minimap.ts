import * as PIXIE from "pixi.js";

import { Tile, SeaLevel, Climate, TileDirection } from "../game/tile.interface";
import { Game } from "../game/game";
import { drawHex } from "./utils";

const SEA_COLORS: Record<SeaLevel, number> = {
  [SeaLevel.deep]: 0x4169e1,
  [SeaLevel.shallow]: 0x1e90ff,
  [SeaLevel.none]: 0x000000,
};

const CLIMATE_COLORS: Record<Climate, number> = {
  [Climate.continental]: 0x3cb371,
  [Climate.desert]: 0xffff00,
  [Climate.oceanic]: 0x90ee90,
  [Climate.savanna]: 0xffe4c4,
  [Climate.tropical]: 0x00ff00,
  [Climate.tundra]: 0xf5f5f5,
  [Climate.arctic]: 0xffffff,
};

export class TerrainRenderer {
  container = new PIXIE.Container();

  constructor(private game: Game) {
    this.buildContainer();
  }

  buildContainer() {
    for (let y = 0; y < this.game.map.height; y++) {
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
      }
    }
  }

  drawTile(tile: Tile) {
    if (
      !this.game.debug.revealMap &&
      !this.game.activeHumanPlayer?.exploredTiles.has(tile)
    ) {
      return;
    }

    let color: number;
    if (tile.seaLevel === SeaLevel.none) {
      color = CLIMATE_COLORS[tile.climate];
      // color = Math.round(tile.humidity * 255);
    } else {
      color = SEA_COLORS[tile.seaLevel];
    }

    // TODO graphics aren't batched and performance is poor on large maps.
    // Rewrite to sprites.
    const graphics = new PIXIE.Graphics();
    graphics.beginFill(color);
    drawHex(graphics);
    graphics.endFill();

    graphics.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    graphics.position.y = tile.y * 0.75;

    this.container.addChild(graphics);

    this.renderRivers(tile, graphics);
  }

  private renderRivers(tile: Tile, graphics: PIXIE.Graphics) {
    if (!tile.riverParts.length) {
      return;
    }

    graphics.lineStyle(0.15, SEA_COLORS[SeaLevel.deep]);

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        graphics.moveTo(0, 0.25);
        graphics.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        graphics.moveTo(0.5, 0);
        graphics.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        graphics.moveTo(1, 0.25);
        graphics.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        graphics.moveTo(1, 0.75);
        graphics.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        graphics.moveTo(0.5, 1);
        graphics.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        graphics.moveTo(0, 0.75);
        graphics.lineTo(0, 0.25);
      }
    }
  }
}
