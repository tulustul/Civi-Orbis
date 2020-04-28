import { Component, OnInit } from "@angular/core";

import { Game } from "src/app/game/game";
import { UIState } from "../ui-state";

@Component({
  selector: "app-game-info",
  templateUrl: "./game-info.component.html",
  styleUrls: ["./game-info.component.scss"],
})
export class GameInfoComponent implements OnInit {
  debugModalVisible = false;

  constructor(public game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  openEditor() {
    this.uiState.editorEnabled$.next(true);
  }
  openMenu() {
    this.uiState.menuVisible$.next(true);
  }
}
