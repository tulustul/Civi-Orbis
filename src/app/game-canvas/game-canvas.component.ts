import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { Renderer } from '../renderer';
import { Game } from '../game/game';
import { Camera } from '../renderer/camera';

@Component({
  selector: 'app-game-canvas',
  templateUrl: './game-canvas.component.html',
  styleUrls: ['./game-canvas.component.scss'],
})
export class GameCanvasComponent implements AfterViewInit {
  renderer: Renderer;

  isMousePressed = false;

  game = new Game();

  @ViewChild('canvas') canvas: ElementRef<HTMLCanvasElement>;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.game.camera = new Camera(this.game);

    this.game.renderer.setCanvas(this.canvas.nativeElement);

    this.game.camera.moveToTile(
      Math.floor(this.game.map.width / 2),
      Math.floor(this.game.map.height / 2)
    );
  }

  onMouseDown(event: MouseEvent) {
    this.isMousePressed = true;
  }

  onMouseUp(event: MouseEvent) {
    this.isMousePressed = false;
  }

  onMouseMove(event: MouseEvent) {
    if (this.isMousePressed) {
      this.game.camera.moveBy(event.movementX, event.movementY);
    }
  }

  onWheel(event: WheelEvent) {
    this.game.camera.scaleBy(
      1 + (event.deltaY > 0 ? -0.2 : 0.2),
      event.clientX,
      event.clientY
    );
  }
}
