import * as PIXI from "pixi.js";

import { Tile } from "../../api/tile.interface";
import { GameApi } from "src/app/api";
import { takeUntil } from "rxjs/operators";
import { TileWrapperContainer, TileContainer } from "../tile-container";
import { Camera } from "../camera";
import { drawTileSprite } from "../utils";
import { GameRenderer } from "../renderer";
import { GameState } from "src/app/api/state";

export class FogOfWarDrawer {
  // TODO do we need this wrapper?
  wrapperContainer = new TileWrapperContainer();

  tilesContainer = new TileContainer(this.camera.tileBoundingBox);

  private renderedTiles = new Map<Tile, PIXI.Sprite>();

  private texture = this.renderer.textures["hexMask.png"];

  constructor(
    private container: PIXI.Container,
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.container.addChild(this.wrapperContainer);
    this.wrapperContainer.addChild(this.tilesContainer);

    this.game.init$.subscribe((state) => {
      this.build(state);

      state.tilesShowed$
        .pipe(takeUntil(this.game.stop$))
        .subscribe(() => this.bindToTrackedPlayer());

      state.tilesShowedAdded$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => this.addTiles(tiles));

      state.trackedPlayer$.subscribe(() => this.bindToTrackedPlayer());

      this.bindToTrackedPlayer();
    });
  }

  clear() {
    this.tilesContainer.destroyAllChildren();
    this.renderedTiles.clear();
  }

  private build(state: GameState) {
    this.wrapperContainer.bindToMap(state.map);
    this.tilesContainer.bindToMap(state.map);
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
    this.tilesContainer.addChild(sprite, tile);
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
