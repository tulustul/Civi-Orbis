import {
  Component,
  OnInit,
  ElementRef,
  Input,
  HostListener,
} from "@angular/core";

import { Tile } from "src/app/api/tile.interface";
import { Controls } from "src/app/controls";
import { MapUi } from "../../map-ui";
import { GameApi } from "src/app/api";

@Component({
  selector: "app-units-stack",
  templateUrl: "./units-stack.component.html",
  styleUrls: ["./units-stack.component.scss"],
})
export class UnitsStackComponent implements OnInit {
  @Input() tile: Tile;

  constructor(
    public elementRef: ElementRef<HTMLElement>,
    private game: GameApi,
    private controls: Controls,
    private mapUi: MapUi,
  ) {}

  ngOnInit(): void {}

  @HostListener("mousedown", ["$event"])
  onMouseDown(event: MouseEvent) {
    this.controls.onMouseDown(event);
  }

  @HostListener("mouseup", ["$event"])
  onMouseUp(event: MouseEvent) {
    this.controls.onMouseUp(event);
  }

  @HostListener("mousemove", ["$event"])
  onMouseMove(event: MouseEvent) {
    this.controls.onMouseMove(event);
  }

  @HostListener("wheel", ["$event"])
  onWheel(event: WheelEvent) {
    this.controls.onWheel(event);
  }

  get selectedUnit() {
    return this.mapUi.selectedUnit;
  }

  get trackedPlayer() {
    return this.game.state!.trackedPlayer;
  }
}
