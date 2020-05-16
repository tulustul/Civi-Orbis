import { Component, ChangeDetectionStrategy } from "@angular/core";

import { UIState } from "./ui/ui-state";
import { MapUi } from "./ui/map-ui";
import { GameApi } from "./api";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  title = "civ";

  constructor(
    public game: GameApi,
    public uiState: UIState,
    public mapUi: MapUi,
  ) {}
}
