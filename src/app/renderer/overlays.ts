import * as PIXIE from 'pixi.js';

import { Game } from '../game/game';
import { drawClosedHex, getTileCoords, drawHex } from './utils';
import { Tile, TileDirection } from '../game/tile.interface';
import { getTileDirection } from '../game/hex-math';

const HEX_VERTICES: Record<TileDirection, [number, number]> = {
  [TileDirection.NW]: [0.5, 0],
  [TileDirection.NE]: [1, 0.25],
  [TileDirection.E]: [1, 0.75],
  [TileDirection.SE]: [0.5, 1],
  [TileDirection.SW]: [0, 0.75],
  [TileDirection.W]: [0, 0.25],
  [TileDirection.NONE]: [0, 0],
};

export class OverlaysRenderer {
  container = new PIXIE.Container();

  hoveredTileGraphics = new PIXIE.Graphics();

  selectedTileGraphics = new PIXIE.Graphics();

  highlightedTilesGraphics = new PIXIE.Graphics();

  constructor(game: Game) {
    this.container.addChild(this.hoveredTileGraphics);
    this.container.addChild(this.selectedTileGraphics);

    this.buildHoveredTileGraphics();
    this.buildSelectedTileGraphics();

    game.tilesManager.hoveredTile$.subscribe((tile) =>
      this.displayAtTile(this.hoveredTileGraphics, tile)
    );

    game.tilesManager.selectedTile$.subscribe((tile) => {
      this.displayAtTile(this.selectedTileGraphics, tile);
    });

    game.tilesManager.highlightedTiles$.subscribe((tiles) => {
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
}
