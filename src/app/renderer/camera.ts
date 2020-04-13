import { BehaviorSubject } from 'rxjs';
import { Renderer } from './renderer';

export interface Transform {
  x: number;
  y: number;
  scale: number;
}

export class Camera {
  transform$ = new BehaviorSubject<Transform>({ x: 500, y: 500, scale: 1 });

  constructor(private renderer: Renderer) {}

  moveBy(x: number, y: number) {
    this.transform$.value.x -= x;
    this.transform$.value.y -= y;
    this.transform$.next(this.transform$.value);
  }

  moveTo(x: number, y: number) {
    this.transform$.value.x = x;
    this.transform$.value.y = y;
    this.transform$.next(this.transform$.value);
  }

  scaleBy(scaleFactor: number, screenPivotX: number, screenPivotY: number) {
    const t = this.transform$.value;

    let x = screenPivotX - this.renderer.canvas.width / 2;
    let y = screenPivotY - this.renderer.canvas.height / 2;

    x = x / t.scale - t.x;
    y = y / t.scale - t.y;

    const oldScale = t.scale;
    t.scale *= scaleFactor;

    t.x += (oldScale - t.scale) * x;
    t.y += (oldScale - t.scale) * y;

    console.log((oldScale - t.scale) * x);

    this.transform$.next(t);

    // this.moveBy(diffX * (1 - scaleFactor), diffY * (1 - scaleFactor));
    // this.centerAt(...this.screenToCanvas(screenPivotX, screenPivotY));
    // this.transform$.next(this.transform$.value);
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
    return [screenX / t.scale - t.x, screenY / t.scale - t.y];
  }
}
