import * as PIXIE from "pixi.js";

import { Component, ViewChild, ElementRef, AfterViewInit } from "@angular/core";

import { Game } from "src/app/core/game";
import { MinimapRenderer } from "src/app/renderer/minimap";
import { GameRenderer } from "src/app/renderer/renderer";
import { Camera } from "src/app/renderer/camera";

@Component({
  selector: "app-minimap",
  templateUrl: "./minimap.component.html",
  styleUrls: ["./minimap.component.scss"],
})
export class MinimapComponent implements AfterViewInit {
  app: PIXIE.Application | null = null;

  minimapRenderer: MinimapRenderer | null = null;

  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    private game: Game,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {}

  ngAfterViewInit(): void {
    this.game.started$.subscribe(() => this.create());
  }

  create() {
    if (this.app) {
      this.app.destroy();
    }
    if (this.minimapRenderer) {
      this.minimapRenderer.destroy();
    }

    this.minimapRenderer = new MinimapRenderer(
      this.game,
      this.renderer,
      this.camera,
    );
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
    if (!this.minimapRenderer) {
      return;
    }

    if (event.buttons === 1) {
      const canvasRect = this.canvas.nativeElement.getBoundingClientRect();
      this.camera.moveTo(
        (event.clientX - canvasRect.x) / this.minimapRenderer.scale,
        (event.clientY - canvasRect.y) / this.minimapRenderer.scale,
      );
    }
  }
}
