import { BehaviorSubject } from "rxjs";
import { Game } from "../game/game";
import { getTileCoords } from "./utils";
import { Tile } from "../game/tile";
import { AnimationEaseOutCubic, Animation } from "../game/animation";

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
  MAX_ZOOM = 256; // tile graphics width in pixels
  MIN_ZOOM = 7;

  transform$ = new BehaviorSubject<Transform>({ x: 0, y: 0, scale: 130 });

  private scalePivotX: number;
  private scalePivotY: number;

  private scaleAnimation: Animation | null = null;
  private moveXAnimation: Animation | null = null;
  private moveYAnimation: Animation | null = null;

  public boundingBox: BoundingBox = {
    xStart: 0,
    yStart: 0,
    xEnd: 0,
    yEnd: 0,
  };

  constructor(private game: Game) {}

  moveBy(x: number, y: number) {
    this.transform$.value.x -= x / this.transform$.value.scale;
    this.transform$.value.y -= y / this.transform$.value.scale;
    this.transform$.next(this.transform$.value);
  }

  moveTo(x: number, y: number) {
    this.transform$.value.x = x;
    this.transform$.value.y = y;
    this.transform$.next(this.transform$.value);
  }

  moveToTileWithEasing(tile: Tile) {
    const t = this.transform$.value;
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
    const t = this.transform$.value;
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
    const t = this.transform$.value;
    const currentScale = this.scaleAnimation?.end || t.scale;
    const newScale = currentScale * scaleFactor;
    this.scaleToWithEasing(newScale, screenPivotX, screenPivotY, duration);
  }

  scaleTo(scale: number, screenPivotX: number, screenPivotY: number) {
    const t = this.transform$.value;
    const [x1, y1] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.scale = Math.max(this.MIN_ZOOM, Math.min(this.MAX_ZOOM, scale));

    const [x2, y2] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.x += x1 - x2;
    t.y += y1 - y2;

    this.transform$.next(t);
  }

  moveToTile(tile: Tile) {
    const [x, y] = getTileCoords(tile);
    this.moveTo(x, y);
  }

  screenToCanvas(screenX: number, screenY: number): [number, number] {
    const t = this.transform$.value;
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
    const t = this.transform$.value;
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
    return this.game.renderer.canvas;
  }

  serialize(): Transform {
    return this.transform$.value;
  }

  update() {
    const elapsedMS = this.game.renderer.app.ticker.elapsedMS;

    if (this.scaleAnimation) {
      const newScale = this.scaleAnimation.step(elapsedMS);
      if (newScale === null) {
        this.scaleAnimation = null;
      } else {
        this.scaleTo(newScale, this.scalePivotX, this.scalePivotY);
      }
    }

    if (this.moveXAnimation || this.moveYAnimation) {
      const t = this.transform$.value;
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
  }

  updateBoundingBox() {
    if (!this.game.map) {
      return;
    }

    const t = this.transform$.value;
    const width = Math.floor(this.game.renderer.canvas.width / t.scale);
    const height = Math.floor(this.game.renderer.canvas.height / t.scale);

    const map = this.game.map;

    const xStart = Math.floor(t.x - width / 2 - 1);
    const yStart = Math.floor(t.y - height / 2);

    this.boundingBox.xStart = Math.max(0, Math.min(map.width, xStart));
    this.boundingBox.yStart = Math.max(0, Math.min(map.height, yStart));
    this.boundingBox.xEnd = Math.min(map.width, xStart + width + 3);
    this.boundingBox.yEnd = Math.min(map.height, (yStart + height + 2) / 0.75);
  }
}
