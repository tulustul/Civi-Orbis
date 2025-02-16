import {
  Application,
  Container,
  Graphics,
  RenderTexture,
  Sprite,
} from "pixi.js";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { bridge } from "@/bridge";
import {
  GameInfo,
  TileChanneled,
  TileCoords,
} from "@/core/serialization/channel";
import { Climate, SeaLevel, TileDirection } from "@/shared";
import { camera, Transform } from "../renderer/camera";
import { renderer } from "./renderer";
import { drawHex } from "./utils";

const SEA_COLORS: Record<SeaLevel, number> = {
  [SeaLevel.deep]: 0x25619a,
  [SeaLevel.shallow]: 0x4383b5,
  [SeaLevel.none]: 0x000000,
};

const CLIMATE_COLORS: Record<Climate, number> = {
  [Climate.continental]: 0x516733,
  [Climate.desert]: 0xc7bd93,
  [Climate.oceanic]: 0x678123,
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

  private tilesMap = new Map<number, Container>();

  public app!: Application;

  private destroyed$ = new Subject<void>();

  constructor() {
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
    this.app = app;

    this.mapTexture = RenderTexture.create({
      width: this.width,
      height: this.height,
    });
    this.mapSprite.texture = this.mapTexture;

    const allTiles = await bridge.tiles.getAll();
    this.drawTiles(allTiles);

    this.hideAllTiles();
    const exploredTiles = await bridge.tiles.getAllExplored();
    this.reveal(exploredTiles);

    this.app.stage.addChild(this.container);

    camera.transform$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((transform) => {
        this.updateCamera(transform);
      });

    this.updateMap();
  }

  destroy() {
    if (!this.app) {
      return;
    }
    this.mapTexture.destroy();
    this.mapSprite.destroy();
    for (const container of this.tilesMap.values()) {
      container.destroy();
    }
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private hideAllTiles() {
    for (const container of this.tilesMap.values()) {
      container.visible = false;
    }
  }

  private reveal(tiles: TileCoords[]) {
    for (const tile of tiles) {
      const container = this.tilesMap.get(tile.id);
      if (container) {
        container.visible = true;
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
    let color: number;

    if (tile.seaLevel !== SeaLevel.none) {
      color = SEA_COLORS[tile.seaLevel];
    } else if (tile.playerColor) {
      color = tile.playerColor;
    } else {
      color = CLIMATE_COLORS[tile.climate];
    }

    const g = new Graphics();
    g.scale.x = this.scale;
    g.scale.y = this.scale;

    drawHex(g, tile.x, tile.y);
    g.fill({ color });

    this.mapScene.addChild(g);
    this.tilesMap.set(tile.id, g);

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
