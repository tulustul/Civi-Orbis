import * as PIXIE from "pixi.js";

import { Game } from "../game/game";
import { TerrainRenderer } from "./terrain";
import { UnitsRenderer } from "./units";
import { OverlaysRenderer } from "./overlays";
import { PathRenderer } from "./path";

export class Renderer {
  app: PIXIE.Application;

  canvas: HTMLCanvasElement;

  terrain: TerrainRenderer;

  units: UnitsRenderer;

  overlays: OverlaysRenderer;

  path: PathRenderer;

  loader = new PIXIE.Loader();

  atlas = this.loader.add("assets/atlas.json").load(() => this.onLoad());

  textures: PIXIE.ITextureDictionary;

  constructor(private game: Game) {}

  setCanvas(canvas: HTMLCanvasElement) {
    const [width, height] = [window.innerWidth, window.innerHeight];

    this.app = new PIXIE.Application({ view: canvas, width, height });

    this.canvas = canvas;

    this.terrain = new TerrainRenderer(this.game);
    this.units = new UnitsRenderer(this.game);
    this.overlays = new OverlaysRenderer(this.game);
    this.path = new PathRenderer(this.game);

    this.app.stage.addChild(this.terrain.container);
    this.app.stage.addChild(this.overlays.container);
    this.app.stage.addChild(this.units.container);
    this.app.stage.addChild(this.path.container);

    if (this.isLoaded) {
      this.onReady();
    }
  }

  resize(width: number, height: number) {
    this.app.renderer.resize(width, height);
  }

  render() {
    this.app.render();
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
    this.terrain.clear();
    this.units.clear();
    this.path.clear();
    this.overlays.clear();
  }

  get isLoaded() {
    return !!this.textures;
  }
}
