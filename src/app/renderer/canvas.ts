import { Tile } from '../game/tile.interface';
import { Game } from '../game/game';

export abstract class Canvas {
  canvas = document.createElement('canvas');

  protected ctx = this.canvas.getContext('2d')!;

  constructor(protected game: Game, width: number, height: number) {
    this.resize(width, height);
  }

  abstract render();

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.render();
  }

  protected renderHex() {
    this.ctx.beginPath();

    this.ctx.moveTo(0, 0.25);
    this.ctx.lineTo(0.5, 0);
    this.ctx.lineTo(1, 0.25);
    this.ctx.lineTo(1, 0.75);
    this.ctx.lineTo(0.5, 1);
    this.ctx.lineTo(0, 0.75);

    this.ctx.closePath();
  }

  protected translateToTile(tile: Tile) {
    this.ctx.translate(tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75);
  }

  protected moveToCamera() {
    const t = this.game.camera.transform$.value;

    this.ctx.scale(t.scale, t.scale);
    this.ctx.translate(
      -t.x + this.canvas.width / 2 / t.scale,
      -t.y + this.canvas.height / 2 / t.scale
    );
  }
}
