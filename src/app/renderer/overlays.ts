import { Canvas } from './canvas';

export class OverlaysCanvas extends Canvas {
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();

    this.moveToCamera();

    this.renderActiveTile();

    this.renderActivePath();

    this.ctx.restore();
  }

  renderActiveTile() {
    const tile = this.game.tilesManager.activeTile;
    if (!tile) {
      return;
    }

    this.ctx.save();
    this.translateToTile(tile);
    this.renderHex();
    this.ctx.lineWidth = 0.05;
    this.ctx.strokeStyle = 'orange';
    this.ctx.fillStyle = 'rgba(255,255,255,0.5)';
    this.ctx.fill();
    this.ctx.stroke();
    this.ctx.restore();
  }

  renderActivePath() {
    const path = this.game.unitsManager.activePath;
    if (!path) {
      return;
    }

    this.ctx.lineWidth = 0.1;
    this.ctx.strokeStyle = 'black';

    this.ctx.save();

    this.ctx.beginPath();
    this.ctx.moveTo(...this.getTileCenter(path[0]));
    for (const tile of path.slice(1)) {
      this.ctx.lineTo(...this.getTileCenter(tile));
    }
    this.ctx.stroke();

    this.ctx.restore();
  }
}
