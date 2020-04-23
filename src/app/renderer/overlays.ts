import * as PIXIE from 'pixi.js';

import { Game } from '../game/game';
import { drawClosedHex, getTileCoords } from './utils';

export class OverlaysRenderer {
  container = new PIXIE.Container();

  activeTileGraphics = new PIXIE.Graphics();

  constructor(game: Game) {
    this.container.addChild(this.activeTileGraphics);

    this.buildActiveTileGraphics();

    game.tilesManager.activeTile$.subscribe((tile) => {
      if (tile) {
        const [x, y] = getTileCoords(tile);
        this.activeTileGraphics.position.x = x;
        this.activeTileGraphics.position.y = y;
        this.activeTileGraphics.visible = true;
      } else {
        this.activeTileGraphics.visible = false;
      }
    });
  }

  buildActiveTileGraphics() {
    this.activeTileGraphics.lineStyle(0.05, 0xff0000);
    this.activeTileGraphics.beginFill(0xffffff, 0.5);
    drawClosedHex(this.activeTileGraphics);
    this.activeTileGraphics.endFill();
  }
}
