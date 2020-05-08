import * as PIXIE from "pixi.js";

import { Injectable } from "@angular/core";

import { Game } from "../core/game";
import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./map";
import { MapUi } from "../ui/map-ui";

@Injectable()
export class GameRenderer {
  app: PIXIE.Application;

  canvas: HTMLCanvasElement;

  mapDrawer: MapDrawer;

  overlays: OverlaysRenderer;

  path: PathRenderer;

  loader = new PIXIE.Loader();

  atlas = this.loader.add("assets/atlas.json").load(() => this.onLoad());

  textures: PIXIE.ITextureDictionary;

  constructor(private game: Game, public mapUi: MapUi) {
    game.stopped$.subscribe(() => this.clear());
  }

  setCanvas(canvas: HTMLCanvasElement) {
    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new PIXIE.Application({ view: canvas, width, height });

    this.canvas = canvas;

    this.mapDrawer = new MapDrawer(this.game, this);
    this.overlays = new OverlaysRenderer(this.mapUi);
    this.path = new PathRenderer(this.game, this.mapUi);

    this.app.stage.addChild(this.mapDrawer.container);
    this.app.stage.addChild(this.overlays.container);
    this.app.stage.addChild(this.path.container);

    if (this.isLoaded) {
      this.onReady();
    }

    this.app.ticker.add(() => {
      this.game.camera.update();
      this.mapUi.update();
    });
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
  }

  onReady() {
    this.game.camera.transform$.subscribe((t) => {
      const x = (-t.x + this.canvas.width / 2 / t.scale) * t.scale;
      const y = (-t.y + this.canvas.height / 2 / t.scale) * t.scale;
      this.app.stage.setTransform(x, y, t.scale, t.scale);
    });
  }

  onLoad() {
    const atlas = this.atlas.resources["assets/atlas.json"];
    atlas.spritesheet!.baseTexture.mipmap = PIXIE.MIPMAP_MODES.POW2;
    this.textures = atlas.textures!;
    if (this.canvas) {
      this.onReady();
    }
  }

  clear() {
    this.mapDrawer.clear();
    this.path.clear();
    this.overlays.clear();
  }

  get isLoaded() {
    return !!this.textures;
  }
}
