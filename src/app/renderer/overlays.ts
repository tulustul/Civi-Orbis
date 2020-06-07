import * as PIXIE from "pixi.js";

import { drawClosedHex, getTileCoords, drawHex } from "./utils";
import { MapUi } from "../ui/map-ui";
import { Tile } from "../api/tile.interface";
import { TileWrapperContainer, TileContainer } from "./tile-container";
import { Camera } from "./camera";
import { GameState } from "../api/state";
import { GameApi } from "../api";
import { takeUntil } from "rxjs/operators";

export class OverlaysRenderer {
  wrapperContainer = new TileWrapperContainer();

  tilesContainer = new TileContainer(this.camera.tileBoundingBox);

  hoveredTileGraphics = new PIXIE.Graphics();

  selectedTileGraphics = new PIXIE.Graphics();

  highlightedTilesGraphics = new PIXIE.Graphics();

  constructor(
    private container: PIXI.Container,
    private game: GameApi,
    private camera: Camera,
    mapUi: MapUi,
  ) {
    this.game.init$.subscribe((state) => {
      this.build(state);

      state.tilesExplored$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => this.reveal(tiles));
    });

    this.container.addChild(this.hoveredTileGraphics);
    this.container.addChild(this.selectedTileGraphics);
    this.container.addChild(this.wrapperContainer);
    this.wrapperContainer.addChild(this.tilesContainer);

    this.buildHoveredTileGraphics();
    this.buildSelectedTileGraphics();

    mapUi.hoveredTile$.subscribe((tile) =>
      this.displayAtTile(this.hoveredTileGraphics, tile),
    );

    mapUi.selectedTile$.subscribe((tile) => {
      this.displayAtTile(this.selectedTileGraphics, tile);
    });

    mapUi.highlightedTiles$.subscribe((tiles) => {
      this.buildHighlightedTiles(tiles);
    });
  }

  build(state: GameState) {
    this.wrapperContainer.bindToMap(state.map);
    this.tilesContainer.bindToMap(state.map);
  }

  private displayAtTile(obj: PIXIE.DisplayObject, tile: Tile | null) {
    if (tile) {
      const [x, y] = getTileCoords(tile);
      obj.position.x = x;
      obj.position.y = y;
      obj.visible = true;
    } else {
      obj.visible = false;
    }
  }

  buildHoveredTileGraphics() {
    this.hoveredTileGraphics.lineStyle(0.02, 0xffffff, 0.5);
    this.hoveredTileGraphics.beginFill(0xffffff, 0.1);
    drawClosedHex(this.hoveredTileGraphics);
    this.hoveredTileGraphics.endFill();
  }

  buildSelectedTileGraphics() {
    this.selectedTileGraphics.lineStyle(0.05, 0xff0000, 0.5);
    this.selectedTileGraphics.beginFill(0xffffff, 0.1);
    drawClosedHex(this.selectedTileGraphics);
    this.selectedTileGraphics.endFill();
  }

  buildHighlightedTiles(tiles: Set<Tile>) {
    this.highlightedTilesGraphics.clear();
    if (!tiles.size) {
      this.container.removeChild(this.highlightedTilesGraphics);
      return;
    }

    const g = this.highlightedTilesGraphics;
    for (const tile of tiles) {
      const [x, y] = getTileCoords(tile);

      g.beginFill(0xffffff, 0.3);
      drawHex(g, x, y);
      g.endFill();
    }

    this.container.addChild(g);
  }

  reveal(tiles: Iterable<Tile>) {
    for (const tile of tiles) {
      const displayObjects = this.wrapperContainer.tilesMap.get(tile);
      if (displayObjects) {
        for (const obj of displayObjects) {
          obj.visible = true;
        }
      }
    }
  }

  clear() {
    this.highlightedTilesGraphics.clear();
    this.hoveredTileGraphics.visible = false;
    this.selectedTileGraphics.visible = false;
  }
}
