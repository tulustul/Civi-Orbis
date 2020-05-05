import * as PIXIE from "pixi.js";

import { Tile } from "../game/tile";
import { Game } from "../game/game";
import { GridContainer } from "./grid-container";

export class MapRenderer {
  container = new PIXIE.Container();

  waterContainer = new GridContainer(this.game.camera.boundingBox);

  terrainContainer = new GridContainer(this.game.camera.boundingBox);

  riverContainer = new GridContainer(this.game.camera.boundingBox);

  cityContainer = new GridContainer(this.game.camera.boundingBox);

  yieldsContainer = new GridContainer(this.game.camera.boundingBox);

  unitsContainer = new GridContainer(this.game.camera.boundingBox);

  overlaysContainer = new GridContainer(this.game.camera.boundingBox);

  private tilesMap = new Map<Tile, PIXIE.DisplayObject[]>();

  constructor(private game: Game) {
    this.container.addChild(this.waterContainer);
    this.container.addChild(this.terrainContainer);
    this.container.addChild(this.riverContainer);
    this.container.addChild(this.cityContainer);
    this.container.addChild(this.yieldsContainer);
    this.container.addChild(this.unitsContainer);
    this.container.addChild(this.overlaysContainer);

    const tilesManager = this.game.tilesManager;
    tilesManager.revealedTiles$.subscribe((tiles) => this.reveal(tiles));

    tilesManager.updatedTile$.subscribe((tile) => this.updateTile(tile));

    tilesManager.resetTilesVisibility$.subscribe((tiles) => {
      this.hideAllTiles();
      this.reveal(tiles);
    });

    this.game.started$.subscribe(() => this.build());
  }

  hideAllTiles() {
    for (const objects of this.tilesMap.values()) {
      for (const obj of objects) {
        obj.visible = false;
      }
    }
  }

  reveal(tiles: Tile[]) {
    for (const tile of tiles) {
      const displayObjects = this.tilesMap.get(tile);
      if (displayObjects) {
        for (const obj of displayObjects) {
          obj.visible = true;
        }
      }
    }
  }

  private build() {
    this.waterContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.terrainContainer.setGridSize(
      this.game.map.width,
      this.game.map.height,
    );
    this.cityContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.yieldsContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.riverContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.riverContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.unitsContainer.setGridSize(this.game.map.width, this.game.map.height);
    this.overlaysContainer.setGridSize(
      this.game.map.width,
      this.game.map.height,
    );

    for (let x = 0; x < this.game.map.width; x++) {
      for (let y = 0; y < this.game.map.height; y++) {
        this.drawTile(this.game.map.tiles[x][y]);
      }
    }
  }

  private clearTile(tile: Tile) {
    const displayObjects = this.tilesMap.get(tile);
    if (!displayObjects) {
      return;
    }

    for (const obj of displayObjects) {
      obj.destroy();
    }

    this.tilesMap.delete(tile);
  }

  private updateTile(tile: Tile) {
    this.clearTile(tile);
    this.drawTile(tile);
  }

  private drawTile(tile: Tile) {}
}
