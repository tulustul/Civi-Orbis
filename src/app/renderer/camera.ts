import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { getTileCoords } from "./utils";
import { AnimationEaseOutCubic, Animation } from "./animation";
import { GameRenderer } from "./renderer";
import { TILE_SIZE } from "./constants";
import { GameApi } from "../api";
import { Tile } from "../shared";

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

@Injectable()
export class Camera {
  MAX_ZOOM = TILE_SIZE; // tile graphics width in pixels
  MIN_ZOOM = 7;

  transform = { x: 0, y: 0, scale: 130 };
  private _transform$ = new BehaviorSubject<Transform>(this.transform);
  transform$ = this._transform$.asObservable();
  private transformChanged = false;

  private scalePivotX: number;
  private scalePivotY: number;

  private scaleAnimation: Animation | null = null;
  private moveXAnimation: Animation | null = null;
  private moveYAnimation: Animation | null = null;

  private renderer: GameRenderer;

  public tileBoundingBox: BoundingBox = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0,
  };

  constructor(private game: GameApi) {}

  setRenderer(renderer: GameRenderer) {
    this.renderer = renderer;

    renderer.tick$.subscribe(() => {
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
  }

  moveTo(x: number, y: number) {
    this.transform.x = x;
    this.transform.y = y;
    this.transformChanged = true;
  }

  moveToTileWithEasing(tile: Tile) {
    const t = this.transform;
    const [x, y] = getTileCoords(tile);
    this.moveXAnimation = new AnimationEaseOutCubic(t.x, x, 600);
    this.moveYAnimation = new AnimationEaseOutCubic(t.y, y, 600);
  }

  scaleToWithEasing(
    newScale: number,
    screenPivotX: number,
    screenPivotY: number,
    duration = 600,
  ) {
    const t = this.transform;
    this.scalePivotX = screenPivotX;
    this.scalePivotY = screenPivotY;
    this.scaleAnimation = new AnimationEaseOutCubic(
      t.scale,
      newScale,
      duration,
    );
  }

  scaleByWithEasing(
    scaleFactor: number,
    screenPivotX: number,
    screenPivotY: number,
    duration = 600,
  ) {
    const t = this.transform;
    const currentScale = this.scaleAnimation?.end || t.scale;
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
  }

  moveToTile(tile: Tile) {
    const [x, y] = getTileCoords(tile);
    this.moveTo(x, y);
  }

  screenToCanvas(screenX: number, screenY: number): [number, number] {
    const t = this.transform;
    return [
      (screenX - this.canvas.width / 2) / t.scale + t.x,
      (screenY - this.canvas.height / 2) / t.scale + t.y,
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
      t.scale * (canvasX - t.x) + this.canvas.width / 2,
      t.scale * (canvasY - t.y) + this.canvas.height / 2,
    ];
  }

  gameToScreen(gameX: number, gameY: number): [number, number] {
    if (Math.floor(gameY) % 2) {
      gameX += 0.5;
    }
    return this.canvasToScreen(gameX, gameY * 0.75);
  }

  get canvas() {
    return this.renderer.canvas;
  }

  update() {
    const elapsedMS = this.renderer.app.ticker.elapsedMS;

    if (this.scaleAnimation) {
      const newScale = this.scaleAnimation.step(elapsedMS);
      if (newScale === null) {
        this.scaleAnimation = null;
      } else {
        this.scaleTo(newScale, this.scalePivotX, this.scalePivotY);
      }
    }

    if (this.moveXAnimation || this.moveYAnimation) {
      const t = this.transform;
      let [x, y] = [t.x, t.y];
      if (this.moveXAnimation) {
        const newX = this.moveXAnimation.step(elapsedMS);
        if (newX === null) {
          this.moveXAnimation = null;
        } else {
          x = newX;
        }
      }

      if (this.moveYAnimation) {
        const newY = this.moveYAnimation.step(elapsedMS);
        if (newY === null) {
          this.moveYAnimation = null;
        } else {
          y = newY;
        }
      }

      this.moveTo(x, y);
    }

    this.updateBoundingBox();

    this.updateProjectionMatrix();
  }

  updateProjectionMatrix() {
    // const m = this.renderer.app.renderer.globalUniforms.uniforms
    const m = this.renderer.app.renderer.projection.projectionMatrix;

    m.tx = this.transform.x;
    m.ty = this.transform.y;
    m.d = this.transform.scale;
    m.a = this.transform.scale;
  }

  updateBoundingBox() {
    if (!this.game.state) {
      return;
    }

    const t = this.transform;
    const width = Math.floor(this.renderer.canvas.width / t.scale);
    const height = Math.floor(this.renderer.canvas.height / t.scale);

    const map = this.game.state.map;

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
