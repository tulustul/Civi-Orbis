import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Renderer } from '../renderer';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss'],
})
export class GameCanvasComponent implements AfterViewInit {
  renderer: Renderer;

  isMousePressed = false;

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.renderer = new Renderer(this.canvas.nativeElement);
  }

  onMouseDown(event: MouseEvent) {
    this.isMousePressed = true;
  }

  onMouseUp(event: MouseEvent) {
    this.isMousePressed = false;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isMousePressed) {
      this.renderer.camera.moveBy(event.movementX, event.movementY);
    }

    // const t = this.renderer.camera.transform$.value;
    // console.log(t.scale, event.offsetX, event.offsetX / t.scale, t.x);
    // console.log([event.offsetX / t.scale - t.x, event.offsetY / t.scale - t.y]);
  }

  onWheel(event: WheelEvent) {
    this.renderer.camera.scaleBy(
      1 + (event.deltaY > 0 ? -0.1 : 0.1),
      event.clientX,
      event.clientY
    );
    // this.renderer.camera.scaleBy(2, 1000, 0);
  }
}
