import * as PIXIE from "pixi.js";

import { Tile, SeaLevel, Climate, TileDirection } from "../core/tile";
import { Game } from "../core/game";
import { Transform } from "../renderer/camera";
import { drawHex } from "./utils";
import { merge } from "rxjs";

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

  constructor(private game: Game) {
    const tilesManager = this.game.tilesManager;
    tilesManager.revealedTiles$.subscribe((tiles) => {
      this.reveal(tiles);
      this.updateMap();
    });

    tilesManager.resetTilesVisibility$.subscribe((tiles) => {
      this.hideAllTiles();
      this.reveal(tiles);
      this.updateMap();
    });

    this.container.addChild(this.mapSprite);
    this.container.addChild(this.cameraGraphics);
  }

  calculateSize() {
    const map = this.game.map;

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
    this.app = app;

    this.mapTexture = PIXIE.RenderTexture.create({
      width: this.width,
      height: this.height,
    });
    this.mapSprite.texture = this.mapTexture;

    this.drawMap();

    this.listenPlayerAreas();

    this.hideAllTiles();
    if (this.game.humanPlayer) {
      this.reveal(this.game.humanPlayer.exploredTiles);
    }

    this.app.stage.addChild(this.container);

    // TODO unsubscribing
    this.game.camera.transform$.subscribe((transform) => {
      this.updateCamera(transform);
    });

    this.updateMap();
  }

  private listenPlayerAreas() {
    for (const player of this.game.players) {
      merge(player.area.added$, player.area.removed$).subscribe((tile) => {
        this.drawTile(tile);
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
    let width = this.game.renderer.canvas.width / t.scale;
    let height = this.game.renderer.canvas.height / t.scale;

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
    for (let y = 0; y < this.game.map.height; y++) {
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
      }
    }
  }

  private drawTile(tile: Tile) {
    let color: number;
    if (tile.areaOf) {
      color = tile.areaOf.player.color;
    } else if (tile.seaLevel === SeaLevel.none) {
      color = CLIMATE_COLORS[tile.climate];
    } else {
      color = SEA_COLORS[tile.seaLevel];
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
