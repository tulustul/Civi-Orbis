import * as PIXIE from "pixi.js";

import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Transform, Camera } from "../renderer/camera";
import { drawHex } from "./utils";
import { GameRenderer } from "./renderer";
import { SeaLevel, Climate, TileDirection, Tile } from "../shared";
import { GameApi } from "../api";

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

  public container = new PIXIE.Container();

  private mapScene = new PIXIE.Container();

  private cameraGraphics = new PIXIE.Graphics();

  private mapSprite = new PIXIE.Sprite();

  private mapTexture: PIXIE.RenderTexture;

  private tilesMap = new Map<Tile, PIXIE.DisplayObject[]>();

  private app: PIXIE.Application;

  private destroyed$ = new Subject<void>();

  constructor(
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.game.init$.subscribe((state) => {
      state.trackedPlayer$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((player) => {
          this.hideAllTiles();
          this.reveal(player.exploredTiles);
          this.updateMap();
        });

      state.tilesExplored$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => {
          this.reveal(tiles);
          this.updateMap();
        });
    });

    this.container.addChild(this.mapSprite);
    this.container.addChild(this.cameraGraphics);
  }

  calculateSize() {
    if (!this.game.state) {
      return;
    }

    const map = this.game.state.map;

    if (map.width > map.height) {
      this.width = maxSize;
      this.height = maxSize / (map.width / map.height);
      this.scale = maxSize / map.width;
    } else {
      this.width = maxSize / (map.height / map.width);
      this.height = maxSize;
      this.scale = maxSize / map.height;
    }
    this.height *= 0.75;
  }

  create(app: PIXIE.Application) {
    if (!this.game.state) {
      return;
    }

    this.app = app;

    this.mapTexture = PIXIE.RenderTexture.create({
      width: this.width,
      height: this.height,
    });
    this.mapSprite.texture = this.mapTexture;

    this.drawMap();

    this.listenPlayerAreas();

    this.hideAllTiles();
    this.reveal(this.game.state.trackedPlayer.exploredTiles);

    this.app.stage.addChild(this.container);

    this.camera.transform$
      .pipe(takeUntil(this.destroyed$))
      .subscribe((transform) => {
        this.updateCamera(transform);
      });

    this.updateMap();
  }

  destroy() {
    this.mapTexture.destroy();
    this.mapSprite.destroy();
    for (const objects of this.tilesMap.values()) {
      for (const obj of objects) {
        obj.destroy();
      }
    }
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  private listenPlayerAreas() {
    for (const player of this.game.state!.players) {
      player.area.addedTiles$.subscribe((tiles) => {
        for (const tile of tiles) {
          this.drawTile(tile);
        }
        this.updateMap();
      });
    }
  }

  private hideAllTiles() {
    for (const obj of this.mapScene.children) {
      obj.visible = false;
    }
  }

  private reveal(tiles: Iterable<Tile>) {
    for (const tile of tiles) {
      const displayObjects = this.tilesMap.get(tile);
      if (displayObjects) {
        for (const obj of displayObjects) {
          obj.visible = true;
        }
      }
    }
  }

  private updateCamera(t: Transform) {
    let width = this.renderer.canvas.width / t.scale;
    let height = this.renderer.canvas.height / t.scale;

    const xStart = (t.x - width / 2) * this.scale;
    const yStart = (t.y - height / 2) * this.scale;

    this.cameraGraphics.clear();

    this.cameraGraphics.lineStyle(1, 0xffffff);
    this.cameraGraphics.drawRect(
      xStart,
      yStart,
      width * this.scale,
      height * this.scale,
    );

    if (this.app) {
      this.app.render();
    }
  }

  private updateMap() {
    this.app.renderer.render(this.mapScene, this.mapTexture);
    this.app.render();
  }

  private drawMap() {
    if (!this.game.state) {
      return;
    }

    for (let y = 0; y < this.game.state.map.height; y++) {
      for (let x = 0; x < this.game.state.map.width; x++) {
        this.drawTile(this.game.state.map.tiles[x][y]);
      }
    }
  }

  private drawTile(tile: Tile) {
    let color: number;

    if (tile.seaLevel !== SeaLevel.none) {
      color = SEA_COLORS[tile.seaLevel];
    } else if (tile.areaOf) {
      color = tile.areaOf.player.color;
    } else {
      color = CLIMATE_COLORS[tile.climate];
    }

    const g = new PIXIE.Graphics();
    g.beginFill(color);
    drawHex(g);
    g.endFill();

    g.position.x = (tile.x + (tile.y % 2 ? 0.5 : 0)) * this.scale;
    g.position.y = tile.y * 0.75 * this.scale;
    g.scale.x = this.scale;
    g.scale.y = this.scale;

    this.mapScene.addChild(g);
    this.tilesMap.set(tile, [g]);

    this.renderRivers(tile, g);
  }

  private renderRivers(tile: Tile, graphics: PIXIE.Graphics) {
    if (!tile.riverParts.length) {
      return;
    }

    graphics.lineStyle(0.3, SEA_COLORS[SeaLevel.deep]);

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        graphics.moveTo(0, 0.25);
        graphics.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        graphics.moveTo(0.5, 0);
        graphics.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        graphics.moveTo(1, 0.25);
        graphics.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        graphics.moveTo(1, 0.75);
        graphics.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        graphics.moveTo(0.5, 1);
        graphics.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        graphics.moveTo(0, 0.75);
        graphics.lineTo(0, 0.25);
      }
    }
  }
}
