import { Tile } from "../../api/tile.interface";
import { GameApi } from "src/app/api";
import { takeUntil } from "rxjs/operators";
import { TileWrapperContainer, TileContainer } from "../tile-container";
import { Camera } from "../camera";
import { drawTileSprite } from "../utils";
import { GameRenderer } from "../renderer";
import { GameState } from "src/app/api/state";
import { Container, Sprite } from "pixi.js";

export class VisibleTilesDrawer {
  private renderedTiles = new Map<Tile, Sprite>();

  public texture;

  constructor(
    private container: Container,
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.texture = this.renderer.spritesheet.textures["hexMask.png"];
    // this.container.addChild(this.wrapperContainer);
    // this.wrapperContainer.addChild(this.tilesContainer);

    this.game.init$.subscribe((state) => {
      this.build(state);

      state.tilesExplored$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => this.addTiles(tiles));

      state.trackedPlayer$.subscribe(() => this.bindToTrackedPlayer());

      this.bindToTrackedPlayer();
    });
  }

  clear() {
    this.renderedTiles.clear();
  }

  private build(state: GameState) {
    // this.wrapperContainer.bindToMap(state.map);
    // this.tilesContainer.bindToMap(state.map);
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
