import * as PIXIE from 'pixi.js';

import { Tile, SeaLevel, Climate, TileDirection } from '../game/tile.interface';
import { Game } from '../game/game';

function getTileVariants(tileName: string, variants: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < variants; i++) {
    result.push(`${tileName}${i.toString().padStart(2, '0')}.png`);
  }
  return result;
}

const SEA_COLORS: Record<SeaLevel, string[]> = {
  [SeaLevel.deep]: getTileVariants('hexOcean', 4),
  [SeaLevel.shallow]: getTileVariants('hexShallowWater', 4),
  [SeaLevel.flood]: [],
  [SeaLevel.none]: []
};

const CLIMATE_COLORS: Record<Climate, string[]> = {
  [Climate.continental]: getTileVariants('hexPlains', 4),
  [Climate.desert]: getTileVariants('hexDesertDunes', 4),
  [Climate.oceanic]: getTileVariants('hexWoodlands', 4),
  [Climate.savanna]: getTileVariants('hexScrublands', 4),
  [Climate.tropical]: getTileVariants('hexTropicalPlains', 4),
  [Climate.tundra]: getTileVariants('hexPlainsColdSnowCovered', 4)
};

export class TerrainRenderer {
  container = new PIXIE.Container();

  constructor(private game: Game) {
    this.buildContainer();
  }

  get textures() {
    return this.game.renderer.textures;
  }

  buildContainer() {
    for (let y = 0; y < this.game.map.height; y++) {
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
      }
    }
  }

  drawTile(tile: Tile) {
    if (
      !this.game.debug.revealMap &&
      !this.game.activeHumanPlayer?.exploredTiles.has(tile)
    ) {
      return;
    }

    let variants: string[];
    if (tile.seaLevel === SeaLevel.none) {
      variants = CLIMATE_COLORS[tile.climate];
    } else {
      variants = SEA_COLORS[tile.seaLevel];
    }

    const textureName = variants[Math.floor(Math.random() * variants.length)];

    const sprite = new PIXIE.Sprite(this.textures[textureName]);
    sprite.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    sprite.position.y = tile.y * 0.75 - 0.5;
    sprite.scale.set(1 / sprite.width, 1 / sprite.width);
    this.container.addChild(sprite);

    this.renderRivers(tile);
  }

  private renderRivers(tile: Tile) {
    if (!tile.riverParts.length) {
      return;
    }

    const graphics = new PIXIE.Graphics();
    graphics.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    graphics.position.y = tile.y * 0.75;
    this.container.addChild(graphics);

    graphics.lineStyle(0.15, 0x4169e1);

    for (const river of tile.riverParts) {
      if (river === TileDirection.TOP_LEFT) {
        graphics.moveTo(0, 0.25);
        graphics.lineTo(0.5, 0);
      }

      if (river === TileDirection.TOP_RIGHT) {
        graphics.moveTo(0.5, 0);
        graphics.lineTo(1, 0.25);
      }

      if (river === TileDirection.RIGHT) {
        graphics.moveTo(1, 0.25);
        graphics.lineTo(1, 0.75);
      }

      if (river === TileDirection.BOTTOM_RIGHT) {
        graphics.moveTo(1, 0.75);
        graphics.lineTo(0.5, 1);
      }

      if (river === TileDirection.BOTTOM_LEFT) {
        graphics.moveTo(0.5, 1);
        graphics.lineTo(0, 0.75);
      }

      if (river === TileDirection.LEFT) {
        graphics.moveTo(0, 0.75);
        graphics.lineTo(0, 0.25);
      }
    }
  }
}
