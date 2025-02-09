import { game } from "@/api";
import { Container, Sprite } from "pixi.js";
import { takeUntil } from "rxjs/operators";
import { Tile } from "@/api";
import { getAssets } from "./assets";
import { drawTileSprite } from "./utils";

export class VisibleTilesDrawer {
  private renderedTiles = new Map<Tile, Sprite>();

  private texture = getAssets().tilesSpritesheet.textures["hexMask.png"];

  constructor(private container: Container) {
    game.init$.subscribe((state) => {
      state.tilesExplored$
        .pipe(takeUntil(game.stop$))
        .subscribe((tiles) => this.addTiles(tiles));

      state.trackedPlayer$.subscribe(() => this.bindToTrackedPlayer());

      this.bindToTrackedPlayer();
    });
  }

  clear() {
    this.renderedTiles.clear();
  }

  private bindToTrackedPlayer() {
    const visibleTiles = game.state!.trackedPlayer.visibleTiles;

    for (const tile of this.renderedTiles.keys()) {
      if (!visibleTiles.has(tile)) {
        this.destroyTile(tile);
      }
    }
    for (const tile of visibleTiles) {
      if (!this.renderedTiles.has(tile)) {
        this.renderTile(tile);
      }
    }
  }

  private addTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      if (!this.renderedTiles.has(tile)) {
        this.renderTile(tile);
      }
    }
  }

  private renderTile(tile: Tile) {
    const sprite = drawTileSprite(tile, this.texture);
    this.container.addChild(sprite);
    this.renderedTiles.set(tile, sprite);
  }

  private destroyTile(tile: Tile) {
    const sprite = this.renderedTiles.get(tile);
    this.renderedTiles.delete(tile);
    if (sprite) {
      sprite.destroy();
    }
  }
}
