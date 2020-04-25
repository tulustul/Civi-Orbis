import { BehaviorSubject } from 'rxjs';
import { Game } from '../game/game';
import { getTileCoords } from './utils';
import { Tile } from '../game/tile.interface';

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

export class Camera {
  MAX_ZOOM = 256; // tile graphics width in pixels
  MIN_ZOOM = 5;

  transform$ = new BehaviorSubject<Transform>({ x: 0, y: 0, scale: 130 });

  constructor(private game: Game) {
    const unit = game.activePlayer$.value?.units[0];
    if (unit) {
      this.moveToTile(unit.tile);
    }
  }

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

  scaleBy(scaleFactor: number, screenPivotX: number, screenPivotY: number) {
    const t = this.transform$.value;

    const [x1, y1] = this.screenToCanvas(screenPivotX, screenPivotY);
    const [x2, y2] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.scale = Math.max(
      this.MIN_ZOOM,
      Math.min(this.MAX_ZOOM, t.scale * scaleFactor)
    );
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

  get canvas() {
    return this.game.renderer.canvas;
  }
}
