import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Game } from "src/app/core/game";
import { saveGame } from "src/app/core/saving";
import { MenuView } from "../menu-view";
import { UIState } from "../../ui-state";

@Component({
  selector: "app-main-menu-view",
  templateUrl: "./main-menu-view.component.html",
  styleUrls: ["./main-menu-view.component.scss"],
})
export class MainMenuViewComponent implements OnInit {
  @Output() change = new EventEmitter<MenuView>();

  constructor(public game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  save() {
    saveGame(this.game, "dupa");
  }

  return() {
    this.uiState.menuVisible$.next(false);
  }
}
