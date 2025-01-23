import { Component, ChangeDetectionStrategy } from "@angular/core";

import { UIState } from "./ui/ui-state";
import { MapUi } from "./ui/map-ui";
import { GameApi } from "./api";
import { GameRenderer } from "./renderer/renderer";

@Component({
    selector: "app-root",
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class AppComponent {
  title = "Civi Orbis";

  constructor(
    public game: GameApi,
    public uiState: UIState,
    public mapUi: MapUi,
    public renderer: GameRenderer,
  ) {}
}
