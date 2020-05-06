import * as PIXIE from "pixi.js";

import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

import { Game } from "src/app/core/game";
import { MinimapRenderer } from "src/app/renderer/minimap";

@Component({
  selector: "app-minimap",
  templateUrl: "./minimap.component.html",
  styleUrls: ["./minimap.component.scss"],
})
export class MinimapComponent implements AfterViewInit {
  app: PIXIE.Application;

  minimapRenderer: MinimapRenderer;

  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

  constructor(private game: Game) {}

  ngAfterViewInit(): void {
    this.game.started$.subscribe(() => this.create());
  }

  create() {
    this.minimapRenderer = new MinimapRenderer(this.game);
    this.minimapRenderer.calculateSize();

    this.app = new PIXIE.Application({
      view: this.canvas.nativeElement,
      width: this.minimapRenderer.width,
      height: this.minimapRenderer.height,
      autoStart: false,
    });

    this.minimapRenderer.create(this.app);
  }

  moveViewport(event: MouseEvent) {
    if (event.buttons === 1) {
      const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
      this.game.camera.moveTo(
        (event.clientX - canvasRect.x) / this.minimapRenderer.scale,
        (event.clientY - canvasRect.y) / this.minimapRenderer.scale,
      );
    }
  }
}
