import { Component, OnInit } from "@angular/core";

import { Game } from "src/app/game/game";
import { MenuView } from "./menu-view";

@Component({
  selector: "app-game-menu",
  templateUrl: "./game-menu.component.html",
  styleUrls: ["./game-menu.component.scss"],
})
export class GameMenuComponent implements OnInit {
  view: MenuView = "main-menu-view";

  constructor(private game: Game) {}

  ngOnInit(): void {}

  return() {
    this.game.uiState.menuVisible$.next(false);
  }
}
