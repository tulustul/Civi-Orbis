import { Component, OnInit } from "@angular/core";

import { UIState } from "../ui-state";
import { GameApi } from "src/app/api";

@Component({
  selector: "app-game-info",
  templateUrl: "./game-info.component.html",
  styleUrls: ["./game-info.component.scss"],
})
export class GameInfoComponent implements OnInit {
  debugModalVisible = false;

  constructor(public game: GameApi, private uiState: UIState) {}

  ngOnInit(): void {}

  openEditor() {
    this.uiState.editorEnabled$.next(true);
  }
  openMenu() {
    this.uiState.menuVisible$.next(true);
  }
}
