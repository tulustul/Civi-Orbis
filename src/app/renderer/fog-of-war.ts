import { Tile } from "../api/tile.interface";
import { GameApi } from "src/app/api";
import { takeUntil } from "rxjs/operators";
import { Camera } from "./camera";
import { drawTileSprite } from "./utils";
import { GameRenderer } from "./renderer";
import { GameState } from "src/app/api/state";
import { Container, Sprite } from "pixi.js";
import { bridge } from "react/cives-orbis/src/bridge";

export class FogOfWarDrawer {
  private renderedTiles = new Map<Tile, Sprite>();

  public texture;

  constructor(
    private container: Container,
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.texture = this.renderer.spritesheet.textures["hexMask.png"];

    bridge.tiles.showed$.subscribe(() => this.bindToTrackedPlayer());

    bridge.tiles.showedAdded$.subscribe((tiles) => this.addTiles(tiles));

    bridge.player.tracked$.subscribe(() => this.bindToTrackedPlayer());

    this.game.init$.subscribe((state) => {
      this.bindToTrackedPlayer();
    });
  }

  clear() {
    this.renderedTiles.clear();
  }

  private bindToTrackedPlayer() {
    const visibleTiles = this.game.state!.trackedPlayer.visibleTiles;

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
    // this.tilesContainer.addChildToTile(sprite, tile);
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
