import { BehaviorSubject } from 'rxjs';
import { Renderer } from './renderer';

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

export class Camera {
  transform$ = new BehaviorSubject<Transform>({ x: 0, y: 0, scale: 1 });

  constructor(private renderer: Renderer) {}

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
    t.scale *= scaleFactor;
    const [x2, y2] = this.screenToCanvas(screenPivotX, screenPivotY);

    t.x += x1 - x2;
    t.y += y1 - y2;

    this.transform$.next(t);
  }

  centerAt(x: number, y: number) {
    const scale = this.transform$.value.scale;
    this.moveTo(
      x - this.renderer.canvas.width / scale / 2,
      y - this.renderer.canvas.height / scale / 2
    );
  }

  screenToCanvas(screenX: number, screenY: number): [number, number] {
    const t = this.transform$.value;
    return [
      (screenX - this.renderer.canvas.width / 2) / t.scale + t.x,
      (screenY - this.renderer.canvas.height / 2) / t.scale + t.y
    ];
  }

  canvasToScreen(canvasX: number, canvasY: number): [number, number] {
    const t = this.transform$.value;
    return [
      t.scale * (canvasX - t.x) + this.renderer.canvas.width / 2,
      t.scale * (canvasY - t.y) + this.renderer.canvas.height / 2
    ];
  }
}
