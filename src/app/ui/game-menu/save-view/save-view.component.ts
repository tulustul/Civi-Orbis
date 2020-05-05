import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Game } from "src/app/core/game";
import { saveGame } from "src/app/core/saving";
import { UIState } from "../../ui-state";

@Component({
  selector: "app-save-view",
  templateUrl: "./save-view.component.html",
  styleUrls: ["./save-view.component.scss"],
})
export class SaveViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  saveName = "";

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  save() {
    if (this.saveName) {
      saveGame(this.game, this.saveName);
      this.uiState.menuVisible$.next(false);
    }
  }
}
