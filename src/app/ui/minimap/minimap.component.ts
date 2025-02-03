import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
} from "@angular/core";

import { MinimapRenderer } from "src/app/renderer/minimap";
import { GameRenderer } from "src/app/renderer/renderer";
import { Camera } from "src/app/renderer/camera";
import { GameApi } from "src/app/api";
import { Application } from "pixi.js";

@Component({
  selector: "app-minimap",
  templateUrl: "./minimap.component.html",
  styleUrls: ["./minimap.component.scss"],
  standalone: false,
})
export class MinimapComponent implements AfterViewInit, OnDestroy {
  app: Application | null = null;

  minimapRenderer: MinimapRenderer | null = null;

  @ViewChild("canvas") canvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {}

  ngAfterViewInit(): void {
    this.create();
  }

  ngOnDestroy() {
    this.minimapRenderer?.destroy();
    this.app?.destroy();
  }

  async create() {
    if (this.minimapRenderer) {
      this.minimapRenderer.destroy();
    }

    this.minimapRenderer = new MinimapRenderer(
      this.game,
      this.renderer,
      this.camera,
    );
    this.minimapRenderer.calculateSize();

    this.app = new Application();
    await this.app.init({
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
