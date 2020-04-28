import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Game } from "src/app/game/game";
import { saveGame } from "src/app/game/saving";
import { MenuView } from "../menu-view";

@Component({
  selector: "app-main-menu-view",
  templateUrl: "./main-menu-view.component.html",
  styleUrls: ["./main-menu-view.component.scss"],
})
export class MainMenuViewComponent implements OnInit {
  @Output() change = new EventEmitter<MenuView>();

  constructor(public game: Game) {}

  ngOnInit(): void {}

  save() {
    saveGame(this.game, "dupa");
  }

  return() {
    this.game.uiState.menuVisible$.next(false);
  }
}
