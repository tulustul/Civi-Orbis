import { Camera, Transform } from './camera';

export class Renderer {
  ctx: CanvasRenderingContext2D;

  camera = new Camera(this);

  constructor(public canvas: HTMLCanvasElement) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;

    this.camera.transform$.subscribe((transform) => {
      this.render(transform);
      // console.log(transform);
    });
  }

  render(t: Transform) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.translate(
      -t.x + this.canvas.width / 2,
      -t.y + this.canvas.height / 2
    );
    this.ctx.scale(t.scale, t.scale);
    this.ctx.ellipse(t.x / t.scale, t.y / t.scale, 20, 20, 0, 0, Math.PI * 2);
    this.ctx.fill();
    // this.ctx.translate(
    //   (transform.x + this.canvas.width / 2) / transform.scale,
    //   (transform.y + this.canvas.height / 2) / transform.scale
    // );

    this.ctx.lineWidth = 2;

    for (let y = 0; y < 10; y++) {
      this.ctx.translate(0, 75);
      this.ctx.save();
      this.ctx.translate(y % 2 ? 0 : 50, 0);
      for (let x = 0; x < 10; x++) {
        this.ctx.translate(100, 0);
        this.drawHex();
      }
      this.ctx.restore();
    }
    this.ctx.restore();
  }

  drawHex() {
    this.ctx.beginPath();

    this.ctx.moveTo(0, 25);
    this.ctx.lineTo(50, 0);
    this.ctx.lineTo(100, 25);
    this.ctx.lineTo(100, 75);
    this.ctx.lineTo(50, 100);
    this.ctx.lineTo(0, 75);

    this.ctx.closePath();
    this.ctx.stroke();
  }
}
