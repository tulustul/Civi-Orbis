import {
  Application,
  Container,
  MaskFilter,
  UpdateTransformOptions,
} from "pixi.js";

import { Subject } from "rxjs";

import { game } from "@/api";
import { FogOfWarDrawer } from "./fog-of-war";
import { Grid } from "./grid";
import { Layer } from "./layer";
import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./terrain";
import { VisibleTilesDrawer } from "./visible-tiles-drawer";
import { camera } from "./camera";
import { mapUi } from "@/ui";
import { FogOfWarFilter } from "./filters/fog-of-war-filter";
import { UnitsDrawer } from "./unitsDrawer";
import { animationsManager } from "./animation";

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
  unitsContainer = new Container({ label: "units" });
  unitsDrawer = new UnitsDrawer(this.unitsContainer);

  grid!: Grid;

  lastScale = camera.transform.scale;

  private _tick$ = new Subject<void>();
  tick$ = this._tick$.asObservable();

  constructor() {
    game.stop$.subscribe(() => this.clear());
  }

  async setCanvas(canvas: HTMLCanvasElement) {
    if (this.app) {
      console.warn("Canvas already set");
      return;
    }

    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new Application();
    (globalThis as any).__PIXI_APP__ = this.app;

    await this.app.init({
      canvas,
      width,
      height,
      preference: "webgl",
      antialias: true,
    });

    camera.setApp(this.app);
    this.canvas = canvas;

    this.mapLayer = new Layer(this.app, "mapLayer");
    this.fogOfWarLayer = new Layer(this.app, "fogOfWarLayer");
    this.visibleTilesLayer = new Layer(this.app, "visibleTilesLayer");

    this.mapDrawer = new MapDrawer(
      // this.mapContainer,
      this.mapLayer.stage,
    );

    this.fogOfWarDrawer = new FogOfWarDrawer(this.fogOfWarLayer.stage);

    this.visibleTilesDrawer = new VisibleTilesDrawer(
      this.visibleTilesLayer.stage,
    );

    this.overlays = new OverlaysRenderer(this.overlaysContainer);

    this.path = new PathRenderer(this.overlaysContainer);

    this.overlaysContainer.interactiveChildren = false;

    this.app.stage.addChild(this.mapLayer.sprite);
    this.app.stage.addChild(this.mapContainer);
    this.app.stage.addChild(this.overlaysContainer);
    this.mapContainer.addChild(this.unitsContainer);
    this.unitsContainer.zIndex = 1000;

    this.unitsContainer.filters = [
      new MaskFilter({
        sprite: this.fogOfWarLayer.sprite,
      }),
    ];
    this.mapLayer.sprite.filters = [
      new MaskFilter({
        sprite: this.visibleTilesLayer.sprite,
      }),
      new FogOfWarFilter({ sprite: this.fogOfWarLayer.sprite }),
    ];

    this.grid = new Grid();
    this.mapLayer.stage.addChild(this.grid.sprite);

    camera.transform$.subscribe((t) => {
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

    this.app.ticker.add(() => {
      animationsManager.update(this.app.ticker.deltaMS);
      // camera.update();
      mapUi.update();
      this._tick$.next();

      const scale = camera.transform.scale;

      if (scale != this.lastScale) {
        this.lastScale = scale;
        this.unitsDrawer.setScale(scale);
      }

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

  clear() {
    this.mapDrawer.clear();
    this.path.clear();
    this.overlays.clear();
    this.fogOfWarDrawer.clear();
    this.visibleTilesDrawer.clear();
  }
}

export const renderer = new GameRenderer();
