import * as PIXIE from "pixi.js";

import { Tile } from "../core/tile";
import { drawClosedHex, getTileCoords, drawHex } from "./utils";
import { MapUi } from "../ui/map-ui";

export class OverlaysRenderer {
  container = new PIXIE.Container();

  hoveredTileGraphics = new PIXIE.Graphics();

  selectedTileGraphics = new PIXIE.Graphics();

  highlightedTilesGraphics = new PIXIE.Graphics();

  constructor(mapUi: MapUi) {
    this.container.addChild(this.hoveredTileGraphics);
    this.container.addChild(this.selectedTileGraphics);

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

  clear() {
    this.highlightedTilesGraphics.clear();
    this.hoveredTileGraphics.visible = false;
    this.selectedTileGraphics.visible = false;
  }
}
