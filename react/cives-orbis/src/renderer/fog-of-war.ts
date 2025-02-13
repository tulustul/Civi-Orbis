import { game } from "@/api";
import { bridge } from "@/bridge";
import { TileCoords } from "@/core/serialization/channel";
import { Container, Sprite } from "pixi.js";
import { getAssets } from "./assets";
import { drawTileSprite } from "./utils";

export class FogOfWarDrawer {
  private renderedTiles = new Map<TileCoords, Sprite>();

  private texture = getAssets().tilesSpritesheet.textures["hexMask.png"];

  constructor(private container: Container) {
    bridge.tiles.showed$.subscribe(() => this.bindToTrackedPlayer());

    bridge.tiles.showedAdded$.subscribe((tiles) => this.addTiles(tiles));

    bridge.player.tracked$.subscribe(() => this.bindToTrackedPlayer());

    game.init$.subscribe(() => {
      this.bindToTrackedPlayer();
    });
  }

  clear() {
    this.renderedTiles.clear();
  }

  private async bindToTrackedPlayer() {
    const visibleTiles = await bridge.tiles.getAllVisible();
    const visibleTilesSet = new Set(visibleTiles.map((t) => t.id));

    for (const tile of this.renderedTiles.keys()) {
      if (!visibleTilesSet.has(tile.id)) {
        this.destroyTile(tile);
      }
    }
    for (const tile of visibleTiles) {
      if (!this.renderedTiles.has(tile)) {
        this.renderTile(tile);
      }
    }
  }

  private addTiles(tiles: TileCoords[]) {
    for (const tile of tiles) {
      if (!this.renderedTiles.has(tile)) {
        this.renderTile(tile);
      }
    }
  }

  private renderTile(tile: TileCoords) {
    const sprite = drawTileSprite(tile, this.texture);
    this.container.addChild(sprite);
    this.renderedTiles.set(tile, sprite);
  }

  private destroyTile(tile: TileCoords) {
    const sprite = this.renderedTiles.get(tile);
    this.renderedTiles.delete(tile);
    if (sprite) {
      sprite.destroy();
    }
  }
}
