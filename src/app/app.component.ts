import { Component } from "@angular/core";

import { UIState } from "./ui/ui-state";
import { Game } from "./core/game";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "civ";

  constructor(public game: Game, public uiState: UIState) {}
}
