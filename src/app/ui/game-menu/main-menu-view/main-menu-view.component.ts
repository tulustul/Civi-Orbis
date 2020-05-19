import { Component, Output, EventEmitter } from "@angular/core";

import { MenuView } from "../menu-view";
import { UIState } from "../../ui-state";
import { GameApi } from "src/app/api";

@Component({
  selector: "app-main-menu-view",
  templateUrl: "./main-menu-view.component.html",
  styleUrls: ["./main-menu-view.component.scss"],
})
export class MainMenuViewComponent {
  @Output() change = new EventEmitter<MenuView>();

  constructor(public game: GameApi, private uiState: UIState) {}

  return() {
    this.uiState.menuVisible$.next(false);
  }
}
