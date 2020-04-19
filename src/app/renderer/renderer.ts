import { Game } from '../game/game';
import { TerrainCanvas } from './terrain';
import { UnitsCanvas } from './units';
import { OverlaysCanvas } from './overlays';

export class Renderer {
  canvas: HTMLCanvasElement;

  terrainCanvas: TerrainCanvas;

  unitsCanvas: UnitsCanvas;

  overlaysCanvas: OverlaysCanvas;

  ctx: CanvasRenderingContext2D;

  constructor(private game: Game) {}

  setCanvas(canvas: HTMLCanvasElement) {
    const [w, h] = [window.innerWidth, window.innerHeight];

    this.canvas = canvas;
    canvas.width = w;
    canvas.height = h;

    this.ctx = this.canvas.getContext('2d')!;

    this.terrainCanvas = new TerrainCanvas(this.game, w, h);
    this.unitsCanvas = new UnitsCanvas(this.game, w, h);
    this.overlaysCanvas = new OverlaysCanvas(this.game, w, h);

    this.game.camera.transform$.subscribe(() => {
      this.terrainCanvas.render();
    });

    requestAnimationFrame(this.render.bind(this));
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.terrainCanvas.resize(width, height);
    this.unitsCanvas.resize(width, height);
    this.overlaysCanvas.resize(width, height);
  }

  render() {
    this.unitsCanvas.render();
    this.overlaysCanvas.render();
    this.compose();
    requestAnimationFrame(this.render.bind(this));
  }

  compose() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.drawImage(this.terrainCanvas.canvas, 0, 0);
    this.ctx.drawImage(this.unitsCanvas.canvas, 0, 0);
    this.ctx.drawImage(this.overlaysCanvas.canvas, 0, 0);
  }
}
