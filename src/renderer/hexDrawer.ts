import { TileCoords } from "@/core/serialization/channel";
import { Container, Sprite } from "pixi.js";
import { getAssets } from "./assets";
import { drawTileSprite } from "./utils";

export class HexDrawer {
  private renderedTiles = new Map<number, Sprite>();

  private texture = getAssets().tilesSpritesheet.textures["hexMask.png"];

  constructor(private container: Container) {}

  clear() {
    for (const sprite of this.renderedTiles.values()) {
      sprite.destroy();
    }
    this.renderedTiles.clear();
  }

  public async setTiles(tiles: TileCoords[]) {
    const tilesSet = new Set(tiles.map((t) => t.id));

    for (const tileId of this.renderedTiles.keys()) {
      if (!tilesSet.has(tileId)) {
        this.destroyTile(tileId);
      }
    }
    for (const tile of tiles) {
      if (!this.renderedTiles.has(tile.id)) {
        this.renderTile(tile);
      }
    }
  }

  public addTiles(tiles: TileCoords[]) {
    for (const tile of tiles) {
      if (!this.renderedTiles.has(tile.id)) {
        this.renderTile(tile);
      }
    }
  }

  public renderTile(tile: TileCoords) {
    const sprite = drawTileSprite(tile, this.texture);
    this.container.addChild(sprite);
    this.renderedTiles.set(tile.id, sprite);
  }

  public destroyTile(tileId: number) {
    const sprite = this.renderedTiles.get(tileId);
    this.renderedTiles.delete(tileId);
    if (sprite) {
      sprite.destroy();
    }
  }
}
