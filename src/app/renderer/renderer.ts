import { Transform } from './camera';
import { Game } from '../game/game';
import { Tile, SeaLevel, Climate, TileDirection } from '../game/tile.interface';

const SEA_COLORS: Record<SeaLevel, string> = {
  [SeaLevel.deep]: 'royalblue',
  [SeaLevel.shallow]: 'dodgerblue',
  [SeaLevel.flood]: 'red',
  [SeaLevel.none]: 'none',
};

const CLIMATE_COLORS: Record<Climate, string> = {
  [Climate.continental]: 'mediumseagreen',
  [Climate.desert]: 'yellow',
  [Climate.oceanic]: 'lightgreen',
  [Climate.savanna]: 'bisque',
  [Climate.tropical]: 'green',
  [Climate.tundra]: 'whitesmoke',
};

export class Renderer {
  ctx: CanvasRenderingContext2D;

  canvas: HTMLCanvasElement;

  constructor(private game: Game) {}

  setCanvas(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    this.ctx = canvas.getContext('2d')!;

    this.game.camera.transform$.subscribe((transform) => {
      this.render();
    });

    this.game.tilesManager.activeTile$.subscribe((tile) => {
      this.render();
    });
  }

  resize(width: number, height: number) {
    this.canvas.width = width;
    this.canvas.height = height;
    this.render();
  }

  render() {
    if (!this.ctx) {
      return;
    }

    const t = this.game.camera.transform$.value;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.save();
    this.ctx.scale(t.scale, t.scale);
    this.ctx.translate(
      -t.x + this.canvas.width / 2 / t.scale,
      -t.y + this.canvas.height / 2 / t.scale
    );

    this.ctx.lineWidth = 0.02;

    this.ctx.save();
    for (let y = 0; y < this.game.map.height; y++) {
      this.ctx.save();
      this.ctx.translate(y % 2 ? 0.5 : 0, 0);
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
        this.ctx.translate(1, 0);
      }
      this.ctx.restore();
      this.ctx.translate(0, 0.75);
    }
    this.ctx.restore();

    this.renderActiveTile();

    this.renderUnits();

    this.ctx.restore();
  }

  drawTile(tile: Tile) {
    this.renderHex();

    this.ctx.stroke();

    if (tile.seaLevel === SeaLevel.none) {
      this.ctx.fillStyle = CLIMATE_COLORS[tile.climate];
      // const color = Math.round(tile.height * 90);
      // this.ctx.fillStyle = `rgb(${color},${color},${color})`;
    } else {
      this.ctx.fillStyle = SEA_COLORS[tile.seaLevel];
    }

    this.ctx.fill();

    this.renderRivers(tile);

    // if (tile.height) {
    //   this.ctx.fillStyle = 'black';
    //   this.ctx.font = '20px sans-serif';
    //   this.ctx.fillText(tile.height.toFixed(4), 0, 50);
    // }
  }

  private renderHex() {
    this.ctx.beginPath();

    this.ctx.moveTo(0, 0.25);
    this.ctx.lineTo(0.5, 0);
    this.ctx.lineTo(1, 0.25);
    this.ctx.lineTo(1, 0.75);
    this.ctx.lineTo(0.5, 1);
    this.ctx.lineTo(0, 0.75);

    this.ctx.closePath();
  }

  private renderRivers(tile: Tile) {
    if (tile.riverParts.length) {
      this.ctx.lineWidth = 0.15;
      this.ctx.strokeStyle = 'royalblue';

      this.ctx.fillStyle = 'royalblue';
      // if (tile.riverSource) {
      //   this.ctx.fillStyle = 'red';
      //   this.ctx.beginPath();
      //   this.ctx.ellipse(50, 50, 20, 20, 0, 0, Math.PI * 2);
      //   this.ctx.fill();
      // }
    }

    for (const river of tile.riverParts) {
      if (river === TileDirection.TOP_LEFT) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0.25);
        this.ctx.lineTo(0.5, 0);
        this.ctx.stroke();
      }

      if (river === TileDirection.TOP_RIGHT) {
        this.ctx.beginPath();
        this.ctx.moveTo(0.5, 0);
        this.ctx.lineTo(1, 0.25);
        this.ctx.stroke();
      }

      if (river === TileDirection.RIGHT) {
        this.ctx.beginPath();
        this.ctx.moveTo(1, 0.25);
        this.ctx.lineTo(1, 0.75);
        this.ctx.stroke();
      }

      if (river === TileDirection.BOTTOM_RIGHT) {
        this.ctx.beginPath();
        this.ctx.moveTo(1, 0.75);
        this.ctx.lineTo(0.5, 1);
        this.ctx.stroke();
      }

      if (river === TileDirection.BOTTOM_LEFT) {
        this.ctx.beginPath();
        this.ctx.moveTo(0.5, 1);
        this.ctx.lineTo(0, 0.75);
        this.ctx.stroke();
      }

      if (river === TileDirection.LEFT) {
        this.ctx.beginPath();
        this.ctx.moveTo(0, 0.75);
        this.ctx.lineTo(0, 0.25);
        this.ctx.stroke();
      }
    }

    if (tile.riverParts.length) {
      this.ctx.lineWidth = 0.01;
      this.ctx.strokeStyle = 'black';
    }
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
    this.ctx.lineWidth = 0.02;
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

  translateToTile(tile: Tile) {
    this.ctx.translate(tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75);
  }
}
