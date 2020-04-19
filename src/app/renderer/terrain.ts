import { Canvas } from './canvas';
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

export class TerrainCanvas extends Canvas {
  render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.ctx.save();

    this.moveToCamera();

    this.ctx.lineWidth = 0.02;

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
}
