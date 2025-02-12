import { BehaviorSubject } from "rxjs";

import { Tile } from "@/api/tile.interface";
import { Application } from "pixi.js";
import { Animation, Animations } from "./animation";
import { TILE_SIZE } from "./constants";
import { getTileCoords } from "./utils";
import { game } from "@/api";

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

export interface BoundingBox {
  xStart: number;
  yStart: number;
  xEnd: number;
  yEnd: number;
}

export class Camera {
  MAX_ZOOM = TILE_SIZE; // tile graphics width in pixels
  MIN_ZOOM = 2;

  transform = { x: 0, y: 0, scale: 130 };
  private _transform$ = new BehaviorSubject<Transform>(this.transform);
  transform$ = this._transform$.asObservable();
  private transformChanged = false;

  private app!: Application;

  private scaleAnimation: Animation<number> | null = null;

  public tileBoundingBox: BoundingBox = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0,
  };

  setApp(app: Application) {
    this.app = app;
    app.ticker.add(() => {
      if (this.transformChanged) {
        this._transform$.next(this.transform);
        this.transformChanged = false;
      }
    });
  }

  moveBy(x: number, y: number) {
    this.transform.x -= x / this.transform.scale;
    this.transform.y -= y / this.transform.scale;
    this.transformChanged = true;
    this.updateBoundingBox();
  }

  moveTo(x: number, y: number) {
    this.transform.x = x;
    this.transform.y = y;
    this.transformChanged = true;
    this.updateBoundingBox();
  }

  moveToTileWithEasing(tile: Tile) {
    const t = this.transform;
    const [x, y] = getTileCoords(tile);

    Animations.run({
      from: [t.x, t.y],
      to: [x, y],
      duration: 600,
      easing: Animations.easing.easeOutCubic,
      fn: (pos) => this.moveTo(pos[0], pos[1]),
    });
  }

  scaleToWithEasing(
    newScale: number,
    screenPivotX: number,
    screenPivotY: number,
    duration = 600,
  ) {
    const t = this.transform;

    if (this.scaleAnimation) {
      Animations.cancel(this.scaleAnimation);
    }

    this.scaleAnimation = Animations.run({
      from: t.scale,
      to: newScale,
      duration,
      easing: Animations.easing.easeOutCubic,
      fn: (scale) => this.scaleTo(scale, screenPivotX, screenPivotY),
      onComplete: () => (this.scaleAnimation = null),
    });
  }

  scaleByWithEasing(
    scaleFactor: number,
    screenPivotX: number,
    screenPivotY: number,
    duration = 600,
  ) {
    const t = this.transform;
    const currentScale = this.scaleAnimation?.options.to || t.scale;
    const newScale = currentScale * scaleFactor;
    this.scaleToWithEasing(newScale, screenPivotX, screenPivotY, duration);
  }

  scaleTo(scale: number, screenPivotX: number, screenPivotY: number) {
    const t = this.transform;
    const [x1, y1] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.scale = Math.max(this.MIN_ZOOM, Math.min(this.MAX_ZOOM, scale));

    const [x2, y2] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.x += x1 - x2;
    t.y += y1 - y2;

    this.transformChanged = true;

    this.updateBoundingBox();
  }

  moveToTile(tile: Tile) {
    const [x, y] = getTileCoords(tile);
    this.moveTo(x, y);
  }

  screenToCanvas(screenX: number, screenY: number): [number, number] {
    const t = this.transform;
    return [
      (screenX - this.app.canvas.width / 2) / t.scale + t.x,
      (screenY - this.app.canvas.height / 2) / t.scale + t.y,
    ];
  }

  screenToGame(screenX: number, screenY: number): [number, number] {
    let [x, y] = this.screenToCanvas(screenX, screenY);
    y = Math.floor(y / 0.75);
    x = Math.floor(x - (y % 2 ? 0.5 : 0));
    return [x, y];
  }

  canvasToScreen(canvasX: number, canvasY: number): [number, number] {
    const t = this.transform;
    return [
      t.scale * (canvasX - t.x) + this.app.canvas.width / 2,
      t.scale * (canvasY - t.y) + this.app.canvas.height / 2,
    ];
  }

  gameToScreen(gameX: number, gameY: number): [number, number] {
    if (Math.floor(gameY) % 2) {
      gameX += 0.5;
    }
    return this.canvasToScreen(gameX, gameY * 0.75);
  }

  updateBoundingBox() {
    if (!game.state) {
      return;
    }

    const t = this.transform;
    const width = Math.floor(this.app.canvas.width / t.scale);
    const height = Math.floor(this.app.canvas.height / t.scale);

    const map = game.state.map;

    const xStart = Math.floor(t.x - width / 2 - 1);
    const yStart = Math.floor(t.y - height / 2);

    this.tileBoundingBox.xStart = Math.max(0, Math.min(map.width, xStart));
    this.tileBoundingBox.yStart = Math.max(0, Math.min(map.height, yStart));
    this.tileBoundingBox.xEnd = Math.min(map.width, xStart + width + 3);
    this.tileBoundingBox.yEnd = Math.min(
      map.height,
      (yStart + height + 2) / 0.75,
    );
  }
}

export const camera = new Camera();
