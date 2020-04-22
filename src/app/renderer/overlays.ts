import { Canvas } from './canvas';
import { Unit } from '../game/unit';

export class OverlaysCanvas extends Canvas {
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();

    this.moveToCamera();

    this.renderActiveTile();

    this.renderActivePath(this.game.unitsManager.activeUnit);

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

  renderActivePath(unit: Unit | null) {
    if (!unit || !unit.path?.length) {
      return;
    }

    this.ctx.lineWidth = 0.1;
    this.ctx.strokeStyle = 'orange';
    this.ctx.font = '0.5px sans-serif';
    this.ctx.fillStyle = 'white';
    this.ctx.shadowBlur = 4;
    this.ctx.shadowColor = 'rgba(0,0,0,0.8)';

    this.ctx.beginPath();
    this.ctx.moveTo(...this.getTileCenter(unit.tile));

    const path = unit.path;

    for (const turn of path) {
      for (const tile of turn) {
        this.ctx.lineTo(...this.getTileCenter(tile));
      }
    }
    this.ctx.stroke();

    for (let turn = 0; turn < path.length; turn++) {
      if (path[turn][0]) {
        const [x, y] = this.getTileCenter(path[turn][0]);
        // if (turn) {
        const text = turn.toString();
        const metrics = this.ctx.measureText(text);
        this.ctx.fillText(text, x - metrics.width / 2, y + 0.15);
        // }
      }
    }
  }
}
