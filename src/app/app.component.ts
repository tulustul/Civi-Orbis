import {
  Component,
  ChangeDetectionStrategy,
  OnInit,
  HostListener,
} from "@angular/core";

import { UIState } from "./ui/ui-state";
import { MapUi } from "./ui/map-ui";
import { GameApi } from "./api";
import { GameRenderer } from "./renderer/renderer";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "Civi Orbis";

  constructor(
    public game: GameApi,
    public uiState: UIState,
    public mapUi: MapUi,
    public renderer: GameRenderer,
  ) {}

  @HostListener("click")
  makeFullScreen() {
    // This is a temporary solution. We need a button for enabling fullscreen.
    document.documentElement.requestFullscreen();
  }

  @HostListener("window:fullscreenchange", ["$event"])
  onFullscreen(event: Event) {
    screen.orientation.lock("landscape");
  }
}
