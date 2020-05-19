import { Component, Output, EventEmitter } from "@angular/core";

import { UIState } from "../../ui-state";
import { saveGameData } from "src/app/api/saving";
import { GameApi } from "src/app/api";

@Component({
  selector: "app-save-view",
  templateUrl: "./save-view.component.html",
  styleUrls: ["./save-view.component.scss"],
})
export class SaveViewComponent {
  @Output() return = new EventEmitter<void>();

  saveName = "";

  constructor(private game: GameApi, private uiState: UIState) {}

  async save() {
    if (this.saveName) {
      const data = await this.game.saveGame();
      saveGameData(data, this.saveName);
      this.uiState.menuVisible$.next(false);
    }
  }
}
