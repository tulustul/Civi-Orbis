import { Camera, Transform } from './camera';
import { Game } from '../game/game';
import { Tile, SeaLevel, Climate } from '../game/tile.interface';

const SEA_COLORS: Record<SeaLevel, string> = {
  [SeaLevel.deep]: 'blue',
  [SeaLevel.shallow]: 'lightblue',
  [SeaLevel.flood]: 'red',
  [SeaLevel.none]: 'none'
};

const CLIMATE_COLORS: Record<Climate, string> = {
  [Climate.continental]: 'darkgreen',
  [Climate.desert]: 'yellow',
  [Climate.oceanic]: 'lightgreen',
  [Climate.savanna]: 'darkyellow',
  [Climate.tropical]: 'green',
  [Climate.tundra]: 'lightgrey'
};

export class Renderer {
  ctx: CanvasRenderingContext2D;

  camera = new Camera(this);

  constructor(public canvas: HTMLCanvasElement, private game: Game) {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;

    this.camera.transform$.subscribe(transform => {
      this.render(transform);
    });
  }

  render(t: Transform) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.scale(t.scale, t.scale);
    this.ctx.translate(
      -t.x + this.canvas.width / 2 / t.scale,
      -t.y + this.canvas.height / 2 / t.scale
    );

    this.ctx.lineWidth = 2;

    for (let y = 0; y < this.game.map.height; y++) {
      this.ctx.save();
      this.ctx.translate(y % 2 ? 50 : 0, 0);
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
        this.ctx.translate(100, 0);
      }
      this.ctx.restore();
      this.ctx.translate(0, 75);
    }
    this.ctx.restore();
  }

  drawTile(tile: Tile) {
    this.ctx.beginPath();

    this.ctx.moveTo(0, 25);
    this.ctx.lineTo(50, 0);
    this.ctx.lineTo(100, 25);
    this.ctx.lineTo(100, 75);
    this.ctx.lineTo(50, 100);
    this.ctx.lineTo(0, 75);

    this.ctx.closePath();
    this.ctx.stroke();

    if (tile.seaLevel === SeaLevel.none) {
      this.ctx.fillStyle = CLIMATE_COLORS[tile.climate];
    } else {
      this.ctx.fillStyle = SEA_COLORS[tile.seaLevel];
    }

    this.ctx.fill();
  }
}
