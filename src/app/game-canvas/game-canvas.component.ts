import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from "@angular/core";

import { Game } from "../core/game";
import { Camera } from "../renderer/camera";
import { Controls } from "../controls";
import { GameRenderer } from "../renderer/renderer";

@Component({
  selector: "app-game-canvas",
  templateUrl: "./game-canvas.component.html",
  styleUrls: ["./game-canvas.component.scss"],
})
export class GameCanvasComponent implements AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    public game: Game,
    public controls: Controls,
    private renderer: GameRenderer,
  ) {}

  ngAfterViewInit() {
    this.game.camera = new Camera(this.game, this.renderer); //TODO move to more appriopriate place
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
