import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from "@angular/core";

import { Controls } from "../controls";
import { GameRenderer } from "../renderer/renderer";

@Component({
  selector: "app-game-canvas",
  templateUrl: "./game-canvas.component.html",
  styleUrls: ["./game-canvas.component.scss"],
  standalone: false,
})
export class GameCanvasComponent implements AfterViewInit {
  @ViewChild("canvas") canvas!: ElementRef<HTMLCanvasElement>;

  constructor(
    public controls: Controls,
    private renderer: GameRenderer,
  ) {}

  ngAfterViewInit() {
    this.renderer.setCanvas(this.canvas.nativeElement);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.renderer.resize(window.innerWidth, window.innerHeight);
  }

  @HostListener("window:keydown", ["$event"])
  onKeyDown(event: KeyboardEvent) {
    this.controls.onKeyDown(event);
  }

  @HostListener("window:keyup", ["$event"])
  onKeyUp(event: KeyboardEvent) {
    this.controls.onKeyUp(event);
  }
}
