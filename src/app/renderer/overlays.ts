import * as PIXIE from 'pixi.js';

import { Game } from '../game/game';
import { drawClosedHex, getTileCoords } from './utils';
import { Tile } from '../game/tile.interface';

export class OverlaysRenderer {
  container = new PIXIE.Container();

  hoveredTileGraphics = new PIXIE.Graphics();

  selectedTileGraphics = new PIXIE.Graphics();

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
}
