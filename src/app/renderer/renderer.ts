import {
  Assets,
  Container,
  Application,
  Spritesheet,
  Texture,
  UpdateTransformOptions,
} from "pixi.js";

import { Injectable } from "@angular/core";

import { Subject, BehaviorSubject } from "rxjs";
import { filter } from "rxjs/operators";

import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./map";
import { FogOfWarDrawer } from "./fog-of-war";
import { MapUi } from "../ui/map-ui";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { Layer } from "./layer";
import atlasData from "../../assets/atlas.json";
import { VisibleTilesDrawer } from "./visible-tiles-drawer";
import { Grid } from "./grid";

@Injectable()
export class GameRenderer {
  app!: Application;

  canvas!: HTMLCanvasElement;

  mapDrawer!: MapDrawer;

  fogOfWarDrawer!: FogOfWarDrawer;
  visibleTilesDrawer!: VisibleTilesDrawer;

  overlays!: OverlaysRenderer;

  path!: PathRenderer;

  mapLayer!: Layer;

  fogOfWarLayer!: Layer;

  visibleTilesLayer!: Layer;

  overlaysContainer = new Container({ label: "overlays" });
  mapContainer = new Container({ label: "map" });

  spritesheet!: Spritesheet;

  grid!: Grid;

  gridTexture!: Texture;

  _loading$ = new BehaviorSubject<boolean>(true);
  loading$ = this._loading$.asObservable();
  ready$ = this._loading$.pipe(filter((loading) => !loading));

  private _tick$ = new Subject<void>();
  tick$ = this._tick$.asObservable();

  constructor(
    public game: GameApi,
    public mapUi: MapUi,
    public camera: Camera,
  ) {
    this.camera.setRenderer(this);

    this.game.stop$.subscribe(() => this.clear());

    this.loadAssets();
  }

  async loadAssets() {
    this.gridTexture = await Assets.load("assets/grid.png");
    const atlas = await Assets.load("assets/atlas.png");
    this.spritesheet = new Spritesheet(atlas, atlasData);
    this.spritesheet.textureSource.autoGenerateMipmaps = true;
    this.spritesheet.textureSource.scaleMode = "nearest";

    await this.spritesheet.parse();

    if (this.canvas) {
      this.onReady();
    }

    this._loading$.next(false);
  }

  async setCanvas(canvas: HTMLCanvasElement) {
    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new Application();
    (globalThis as any).__PIXI_APP__ = this.app;

    await this.app.init({ view: canvas, width, height, preference: "webgl" });

    this.canvas = canvas;

    this.mapLayer = new Layer(this.app);
    this.fogOfWarLayer = new Layer(this.app);
    this.visibleTilesLayer = new Layer(this.app);

    this.mapDrawer = new MapDrawer(
      // this.mapContainer,
      this.mapLayer.stage,
      this.game,
      this,
      this.mapUi,
    );

    this.fogOfWarDrawer = new FogOfWarDrawer(
      this.fogOfWarLayer.stage,
      this.game,
      this,
      this.camera,
    );

    this.visibleTilesDrawer = new VisibleTilesDrawer(
      this.visibleTilesLayer.stage,
      this.game,
      this,
    );

    this.overlays = new OverlaysRenderer(this.overlaysContainer, this.mapUi);

    this.path = new PathRenderer(
      this.overlaysContainer,
      this.game,
      this.camera,
      this.mapUi,
    );

    this.overlaysContainer.interactiveChildren = false;

    this.app.stage.addChild(this.mapLayer.sprite);
    // this.app.stage.addChild(this.visibleTilesLayer.sprite);
    this.app.stage.addChild(this.mapContainer);
    this.app.stage.addChild(this.overlaysContainer);

    this.mapLayer.sprite.filters = [
      // new MaskFilter({
      //   sprite: this.visibleTilesLayer.sprite,
      // }),
      // new FogOfWarFilter({ sprite: this.fogOfWarLayer.sprite }),
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
          area.drawer.backgroundShader.resources["uniforms"].uniforms.opacity =
            backgroundOpacity;
          area.drawer.borderShader.resources["uniforms"].uniforms.borderShadow =
            borderShadow;
        }
      }

      this.mapLayer.renderToTarget();
      this.fogOfWarLayer.renderToTarget();
      this.visibleTilesLayer.renderToTarget();
    });
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
    this.mapLayer.resize(width, height);
    this.fogOfWarLayer.resize(width, height);
    this.visibleTilesLayer.resize(width, height);

    // A new texture is created when resizing, need to update the filter. Could just update uniforms but whatever.
    // this.mapContainer.filters = [
    //   new FogOfWarFilter({ sprite: this.fogOfWarLayer.sprite }),
    // ];
  }

  onReady() {
    this.grid = new Grid(this);

    this.camera.transform$.subscribe((t) => {
      const x = (-t.x + this.canvas.width / 2 / t.scale) * t.scale;
      const y = (-t.y + this.canvas.height / 2 / t.scale) * t.scale;

      const transform: Partial<UpdateTransformOptions> = {
        x,
        y,
        scaleX: t.scale,
        scaleY: t.scale,
      };

      // this.mapDrawer.unitsDrawer.container.setTransform(x, y, t.scale, t.scale);
      this.mapLayer.stage.updateTransform(transform);
      this.mapContainer.updateTransform(transform);
      this.overlaysContainer.updateTransform(transform);
      this.fogOfWarLayer.stage.updateTransform(transform);
      this.visibleTilesLayer.stage.updateTransform(transform);
    });
  }

  clear() {
    this.mapDrawer.clear();
    this.path.clear();
    this.overlays.clear();
    this.fogOfWarDrawer.clear();
    this.visibleTilesDrawer.clear();
  }

  get isLoaded() {
    return !!this.spritesheet.textures;
  }
}
