import { Canvas } from './canvas';

export class UnitsCanvas extends Canvas {
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();

    this.moveToCamera();

    this.renderUnits();

    this.ctx.restore();
  }

  renderUnits() {
    for (const unit of this.game.unitsManager.units) {
      this.ctx.save();
      this.translateToTile(unit.tile);

      this.ctx.fillStyle = 'blue';
      this.ctx.beginPath();
      this.ctx.ellipse(0.5, 0.5, 0.2, 0.2, 0, 0, Math.PI * 2);
      this.ctx.fill();

      this.ctx.restore();
    }
  }
}
