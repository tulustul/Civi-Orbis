import * as PIXIE from "pixi.js";

import { Tile } from "src/app/game/tile";
import { Game } from "src/app/game/game";

export abstract class TileDrawer {
  protected tilesMap = new Map<Tile, PIXIE.DisplayObject[]>();

  constructor(protected game: Game) {}

  protected get textures() {
    return this.game.renderer.textures;
  }

  protected clearTile(tile: Tile) {
    const displayObjects = this.tilesMap.get(tile);
    if (!displayObjects) {
      return;
    }

    for (const obj of displayObjects) {
      obj.destroy();
    }

    this.tilesMap.delete(tile);
  }

  protected updateTile(tile: Tile) {
    this.clearTile(tile);
    this.drawTile(tile);
  }

  clear() {
    this.tilesMap.clear();
  }

  abstract drawTile(tile: Tile): PIXIE.DisplayObject[];
}
