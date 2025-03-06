import {
  Application,
  Container,
  Graphics,
  RenderTexture,
  Sprite,
} from "pixi.js";

import { bridge } from "@/bridge";
import { TileChanneled, TileCoords } from "@/core/serialization/channel";
import { Climate, SeaLevel, TileDirection } from "@/shared";
import { camera, Transform } from "./camera";
import { renderer } from "./renderer";
import { drawHex } from "./utils";
import { skip } from "rxjs";

const SEA_COLORS: Record<SeaLevel, number> = {
  [SeaLevel.deep]: 0x25619a,
  [SeaLevel.shallow]: 0x4383b5,
  [SeaLevel.none]: 0x000000,
};

const CLIMATE_COLORS: Record<Climate, number> = {
  [Climate.temperate]: 0x516733,
  [Climate.desert]: 0xc7bd93,
  [Climate.savanna]: 0xb4a73f,
  [Climate.tropical]: 0x6c9b2b,
  [Climate.tundra]: 0x9cb3b6,
  [Climate.arctic]: 0xe5e5e5,
};

const maxSize = 300;

export class MinimapRenderer {
  width = 0;
  height = 0;
  scale = 1;

  public container = new Container();

  private mapScene = new Container();

  private cameraGraphics = new Graphics();

  private mapSprite = new Sprite();

  private mapTexture!: RenderTexture;

  private tilesMap = new Map<number, Graphics>();

  public app!: Application;

  constructor() {
    bridge.game.start$.pipe(skip(1)).subscribe(() => {
      this.clear();
      this.build();
    });

    bridge.tiles.explored$.subscribe((tiles) => {
      this.reveal(tiles);
      this.updateMap();
    });

    bridge.player.tracked$.subscribe(async () => {
      this.hideAllTiles();
      const tiles = await bridge.tiles.getAllExplored();
      this.reveal(tiles);
      this.updateMap();
    });

    bridge.tiles.updated$.subscribe((tiles) => {
      this.drawTiles(tiles);
      this.updateMap();
    });

    this.container.addChild(this.mapSprite);
    this.container.addChild(this.cameraGraphics);
  }

  async calculateSize() {
    const startInfo = await bridge.game.getInfo();

    const w = startInfo.gameInfo.mapWidth;
    const h = startInfo.gameInfo.mapHeight;

    if (w > h) {
      this.width = maxSize;
      this.height = maxSize / (w / h);
      this.scale = maxSize / w;
    } else {
      this.width = maxSize / (h / w);
      this.height = maxSize;
      this.scale = maxSize / h;
    }
    this.height *= 0.75;
  }

  async create(app: Application) {
    if (this.app) {
      return;
    }
    this.app = app;

    this.mapTexture = RenderTexture.create({
      width: this.width,
      height: this.height,
    });
    this.mapSprite.texture = this.mapTexture;

    this.app.stage.addChild(this.container);

    camera.transform$.subscribe((transform) => {
      this.updateCamera(transform);
    });

    await this.build();
  }

  async build() {
    const allTiles = await bridge.tiles.getAll();
    this.drawTiles(allTiles);

    this.hideAllTiles();
    const exploredTiles = await bridge.tiles.getAllExplored();
    this.reveal(exploredTiles);

    this.updateMap();
  }

  clear() {
    for (const g of this.tilesMap.values()) {
      g.destroy();
    }
    this.tilesMap.clear();
  }

  destroy() {
    if (!this.app) {
      return;
    }
    this.clear();
    this.mapTexture.destroy();
    this.mapSprite.destroy();
  }

  private hideAllTiles() {
    for (const g of this.tilesMap.values()) {
      g.visible = false;
    }
  }

  private reveal(tiles: TileCoords[]) {
    for (const tile of tiles) {
      const g = this.tilesMap.get(tile.id);
      if (g) {
        g.visible = true;
      }
    }
  }

  private updateCamera(t: Transform) {
    const width = renderer.canvas.width / t.scale;
    const height = renderer.canvas.height / t.scale;

    const xStart = (t.x - width / 2) * this.scale;
    const yStart = (t.y - height / 2) * this.scale;

    this.cameraGraphics.clear();

    this.cameraGraphics.setStrokeStyle({ width: 1, color: 0xffffff });
    this.cameraGraphics
      .rect(xStart, yStart, width * this.scale, height * this.scale)
      .stroke();

    if (this.app) {
      this.app.render();
    }
  }

  private updateMap() {
    this.app.renderer.render({
      container: this.mapScene,
      target: this.mapTexture,
    });
    this.app.render();
  }

  private drawTiles(tiles: TileChanneled[]) {
    for (const tile of tiles) {
      this.drawTile(tile);
    }
  }

  private drawTile(tile: TileChanneled) {
    let g = this.tilesMap.get(tile.id);
    if (g) {
      g.clear();
    } else {
      g = new Graphics();
      this.mapScene.addChild(g);
      this.tilesMap.set(tile.id, g);
    }

    let color: number;

    if (tile.seaLevel !== SeaLevel.none) {
      color = SEA_COLORS[tile.seaLevel];
    } else if (tile.playerColor) {
      color = tile.playerColor;
    } else {
      color = CLIMATE_COLORS[tile.climate];
    }

    g.clear();
    g.scale.x = this.scale;
    g.scale.y = this.scale;

    drawHex(g, tile.x, tile.y);
    g.fill({ color });

    this.renderRivers(tile, g);
  }

  private renderRivers(tile: TileChanneled, graphics: Graphics) {
    if (!tile.riverParts.length) {
      return;
    }
    const x = tile.x + (tile.y % 2 ? 0.5 : 0);
    const y = tile.y * 0.75;

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        graphics.moveTo(x, y + 0.25);
        graphics.lineTo(x + 0.5, y);
      }

      if (river === TileDirection.NE) {
        graphics.moveTo(x + 0.5, y);
        graphics.lineTo(x + 1, y + 0.25);
      }

      if (river === TileDirection.E) {
        graphics.moveTo(x + 1, y + 0.25);
        graphics.lineTo(x + 1, y + 0.75);
      }

      if (river === TileDirection.SE) {
        graphics.moveTo(x + 1, y + 0.75);
        graphics.lineTo(x + 0.5, y + 1);
      }

      if (river === TileDirection.SW) {
        graphics.moveTo(x + 0.5, y + 1);
        graphics.lineTo(x + 0, y + 0.75);
      }

      if (river === TileDirection.W) {
        graphics.moveTo(x + 0, y + 0.75);
        graphics.lineTo(x + 0, y + 0.25);
      }
    }

    graphics.stroke({ width: 0.3, color: SEA_COLORS[SeaLevel.deep] });
  }
}
