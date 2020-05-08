import {
  Component,
  ElementRef,
  ViewChild,
  AfterViewInit,
  HostListener,
} from "@angular/core";

import { Game } from "../core/game";
import { Camera } from "../renderer/camera";
import { UIState } from "../ui/ui-state";
import { Controls } from "../controls";

@Component({
  selector: "app-game-canvas",
  templateUrl: "./game-canvas.component.html",
  styleUrls: ["./game-canvas.component.scss"],
})
export class GameCanvasComponent implements AfterViewInit {
  @ViewChild("canvas") canvas: ElementRef<HTMLCanvasElement>;

  constructor(
    public game: Game,
    private uiState: UIState,
    public controls: Controls,
  ) {}

  ngOnInit(): void {
    this.game.uiState = this.uiState;
  }

  ngAfterViewInit() {
    this.game.camera = new Camera(this.game); //TODO move to more appriopriate place
    this.game.renderer.setCanvas(this.canvas.nativeElement);
  }

  onContextMenu(event: Event) {
    event.preventDefault();
  }

  @HostListener("window:resize", ["$event"])
  onResize(event: Event) {
    this.game.renderer.resize(window.innerWidth, window.innerHeight);
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
