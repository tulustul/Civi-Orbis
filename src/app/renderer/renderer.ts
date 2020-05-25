import * as PIXIE from "pixi.js";

import { Injectable } from "@angular/core";

import { Game } from "../core/game";
import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./map";
import { MapUi } from "../ui/map-ui";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { Subject } from "rxjs";

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

  private _tick$ = new Subject<void>();
  tick$ = this._tick$.asObservable();

  constructor(
    private game: GameApi,
    public mapUi: MapUi,
    private camera: Camera,
  ) {
    this.camera.setRenderer(this);
  }

  setCanvas(canvas: HTMLCanvasElement) {
    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new PIXIE.Application({ view: canvas, width, height });

    this.canvas = canvas;

    this.mapDrawer = new MapDrawer(this.game, this, this.camera);
    this.overlays = new OverlaysRenderer(this.mapUi);
    this.path = new PathRenderer(this.game, this.camera, this.mapUi);

    this.app.stage.addChild(this.mapDrawer.container);
    this.app.stage.addChild(this.overlays.container);
    this.app.stage.addChild(this.path.container);

    if (this.isLoaded) {
      this.onReady();
    }

    this.app.ticker.add(() => {
      this.camera.update();
      this.mapUi.update();
      this._tick$.next();

      const scale = this.camera.transform.scale;
      if (this.mapDrawer.politicsDrawer) {
        const backgroundOpacity = Math.min(
          0.4,
          Math.max(0, (70 - scale) / 150),
        );

        const borderShadow = Math.max(0.4, Math.min(0.7, (150 - scale) / 100));

        for (const area of this.mapDrawer.politicsDrawer.areas) {
          area.drawer.backgroundShader.uniforms.opacity = backgroundOpacity;
          area.drawer.borderShader.uniforms.borderShadow = borderShadow;
        }
      }
    });
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
  }

  onReady() {
    this.camera.transform$.subscribe((t) => {
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
