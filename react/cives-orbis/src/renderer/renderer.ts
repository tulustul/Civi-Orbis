import {
  Application,
  Container,
  MaskFilter,
  UpdateTransformOptions,
  RenderLayer,
  IRenderLayer,
} from "pixi.js";

import { Subject } from "rxjs";

import { FogOfWarDrawer } from "./fog-of-war";
import { Grid } from "./grid";
import { Layer } from "./layer";
import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";
import { MapDrawer } from "./terrain";
import { ExploredTilesDrawer } from "./exploredTilesDrawer";
import { camera } from "./camera";
import { FogOfWarFilter } from "./filters/fog-of-war-filter";
import { UnitsDrawer } from "./unitsDrawer";
import { animationsManager } from "./animation";
import { AreasDrawer } from "./areasDrawer";
import { mapUi } from "@/ui/mapUi";

export class GameRenderer {
  app!: Application;

  canvas!: HTMLCanvasElement;

  mapDrawer!: MapDrawer;

  fogOfWarDrawer!: FogOfWarDrawer;
  visibleTilesDrawer!: ExploredTilesDrawer;

  overlays!: OverlaysRenderer;

  path!: PathRenderer;

  mapLayer!: Layer;
  yieldsLayer!: IRenderLayer;

  fogOfWarLayer!: Layer;

  exploredTilesLayer!: Layer;

  overlaysContainer = new Container({ label: "overlays" });
  mapContainer = new Container({ label: "map" });
  unitsAndCitiesContainer = new Container({ label: "unitsAndCities" });
  unitsDrawer = new UnitsDrawer(this.unitsAndCitiesContainer);
  // citiesDrawer = new CitiesDrawer(this.unitsAndCitiesContainer);
  areaDrawer = new AreasDrawer(this.overlaysContainer);

  grid!: Grid;

  lastScale = camera.transform.scale;

  private _tick$ = new Subject<void>();
  tick$ = this._tick$.asObservable();

  constructor() {
    mapUi.fogOfWarEnabled$.subscribe(() => {
      this.updateForOfWarEnabled();
    });

    mapUi.yieldsEnabled$.subscribe((enabled) => {
      if (enabled) {
        this.mapLayer.stage.addChild(this.yieldsLayer);
      } else {
        this.mapLayer.stage.removeChild(this.yieldsLayer);
      }
    });
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
    this.exploredTilesLayer = new Layer(this.app, "visibleTilesLayer");
    this.yieldsLayer = new RenderLayer();

    this.mapDrawer = new MapDrawer(this.mapLayer.stage, this.yieldsLayer);

    this.fogOfWarDrawer = new FogOfWarDrawer(this.fogOfWarLayer.stage);
    this.visibleTilesDrawer = new ExploredTilesDrawer(
      this.exploredTilesLayer.stage,
    );

    this.overlays = new OverlaysRenderer(this.overlaysContainer);

    this.path = new PathRenderer(this.overlaysContainer);

    this.overlaysContainer.interactiveChildren = false;

    this.app.stage.addChild(this.mapLayer.sprite);
    this.app.stage.addChild(this.overlaysContainer);
    this.app.stage.addChild(this.mapContainer);
    this.mapContainer.addChild(this.unitsAndCitiesContainer);
    this.unitsAndCitiesContainer.zIndex = 1000;

    this.grid = new Grid();
    this.mapLayer.stage.addChild(this.grid.sprite);
    this.mapLayer.stage.addChild(this.yieldsLayer);

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
      this.exploredTilesLayer.stage.updateTransform(transform);

      this.updateForOfWarEnabled();
    });

    this.app.ticker.add(() => {
      animationsManager.update(this.app.ticker.deltaMS);
      // camera.update();
      this._tick$.next();

      const scale = camera.transform.scale;

      if (scale != this.lastScale) {
        this.lastScale = scale;
        this.unitsDrawer.setScale(scale);
        // this.citiesDrawer.setScale(scale);
      }

      if (this.mapDrawer.politicsDrawer) {
        const backgroundOpacity = Math.min(
          0.4,
          Math.max(0, (70 - scale) / 150),
        );

        const borderShadow = Math.max(0.4, Math.min(0.7, (150 - scale) / 100));

        for (const area of this.mapDrawer.politicsDrawer.areas.values()) {
          area.drawer.backgroundShader.resources["uniforms"].uniforms.opacity =
            backgroundOpacity;
          area.drawer.borderShader.resources["uniforms"].uniforms.borderShadow =
            borderShadow;
        }
      }

      this.mapLayer.renderToTarget();
      this.fogOfWarLayer.renderToTarget();
      this.exploredTilesLayer.renderToTarget();
    });
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
    this.mapLayer.resize(width, height);
    this.fogOfWarLayer.resize(width, height);
    this.exploredTilesLayer.resize(width, height);

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
    this.unitsDrawer.clear();
    // this.citiesDrawer.clear();
  }

  updateForOfWarEnabled() {
    if (!this.mapLayer) {
      return;
    }

    if (mapUi.fogOfWarEnabled) {
      this.unitsAndCitiesContainer.filters = [
        new MaskFilter({
          sprite: this.fogOfWarLayer.sprite,
        }),
      ];
      this.mapLayer.sprite.filters = [
        new MaskFilter({
          sprite: this.exploredTilesLayer.sprite,
        }),
        new FogOfWarFilter({ sprite: this.fogOfWarLayer.sprite }),
      ];
    } else {
      this.unitsAndCitiesContainer.filters = [];
      this.mapLayer.sprite.filters = [];
    }
  }
}

export let renderer = new GameRenderer();

if (import.meta.hot) {
  console.log("renderer.ts is hot");

  const hotData = import.meta.hot.data as { renderer?: GameRenderer };
  if (hotData.renderer) {
    renderer = hotData.renderer;
  }
  import.meta.hot.accept(() => {
    console.log("accept renderer");
    import.meta.hot!.data.renderer = renderer;
  });
}
