import * as PIXI from "pixi.js";

import { Injectable } from "@angular/core";

import { Subject, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./layers/map";
import { FogOfWarDrawer } from "./layers/fog-of-war";
import { MapUi } from "../ui/map-ui";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { Layer } from "./layer";
import { FogOfWarFilter } from "./filters/fog-of-war-filter";
import { TileContainer, TileWrapperContainer } from "./tile-container";

@Injectable()
export class GameRenderer {
  app: PIXI.Application;

  canvas: HTMLCanvasElement;

  mapDrawer: MapDrawer;

  fogOfWarDrawer: FogOfWarDrawer;

  overlays: OverlaysRenderer;

  path: PathRenderer;

  mapLayer: Layer;

  fogOfWarLayer: Layer;

  overlaysContainer = new PIXI.Container();

  loader = new PIXI.Loader();

  atlas = this.loader.add("assets/atlas.json").load(() => this.onLoad());

  textures: PIXI.ITextureDictionary;

  _loading$ = new BehaviorSubject<boolean>(true);
  loading$ = this._loading$.asObservable();
  ready$ = this._loading$.pipe(filter((loading) => !loading));

  private _tick$ = new Subject<void>();
  tick$ = this._tick$.asObservable();

  constructor(
    private game: GameApi,
    public mapUi: MapUi,
    private camera: Camera,
  ) {
    this.camera.setRenderer(this);

    this.game.stop$.subscribe(() => this.clear());
  }

  setCanvas(canvas: HTMLCanvasElement) {
    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new PIXI.Application({ view: canvas, width, height });

    this.canvas = canvas;

    this.mapLayer = new Layer(this.app);
    this.fogOfWarLayer = new Layer(this.app);

    this.mapDrawer = new MapDrawer(
      this.mapLayer.stage,
      this.game,
      this,
      this.camera,
    );

    this.fogOfWarDrawer = new FogOfWarDrawer(
      this.fogOfWarLayer.stage,
      this.game,
      this,
      this.camera,
    );

    this.overlays = new OverlaysRenderer(
      this.overlaysContainer,
      this.game,
      this.camera,
      this.mapUi,
    );

    this.path = new PathRenderer(
      this.overlaysContainer,
      this.game,
      this.camera,
      this.mapUi,
    );

    this.overlaysContainer.interactiveChildren = false;

    this.app.stage.addChild(this.mapLayer.sprite);
    this.app.stage.addChild(this.mapDrawer.unitsDrawer.container);
    this.app.stage.addChild(this.overlaysContainer);

    this.mapLayer.sprite.filters = [
      new FogOfWarFilter(this.fogOfWarLayer.texture),
    ];

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

      this.mapLayer.renderToTarget();
      this.fogOfWarLayer.renderToTarget();
    });
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
    this.mapLayer.resize(width, height);
    this.fogOfWarLayer.resize(width, height);

    // A new texture is created when resizing, need to update the filter. Could just update uniforms but whatever.
    this.mapLayer.sprite.filters = [
      new FogOfWarFilter(this.fogOfWarLayer.texture),
    ];
  }

  onReady() {
    this.camera.transform$.subscribe((t) => {
      const x = (-t.x + this.canvas.width / 2 / t.scale) * t.scale;
      const y = (-t.y + this.canvas.height / 2 / t.scale) * t.scale;

      this.mapDrawer.unitsDrawer.container.setTransform(x, y, t.scale, t.scale);
      this.overlaysContainer.setTransform(x, y, t.scale, t.scale);
      this.mapLayer.stage.setTransform(x, y, t.scale, t.scale);
      this.fogOfWarLayer.stage.setTransform(x, y, t.scale, t.scale);
    });
  }

  onLoad() {
    const atlas = this.atlas.resources["assets/atlas.json"];
    atlas.spritesheet!.baseTexture.mipmap = PIXI.MIPMAP_MODES.POW2;
    this.textures = atlas.textures!;
    if (this.canvas) {
      this.onReady();
    }

    this._loading$.next(false);
  }

  clear() {
    this.mapDrawer.clear();
    this.path.clear();
    this.overlays.clear();
    this.fogOfWarDrawer.clear();
  }

  get isLoaded() {
    return !!this.textures;
  }
}
