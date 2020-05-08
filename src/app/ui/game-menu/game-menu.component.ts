import { Component, OnInit } from "@angular/core";

import { MenuView } from "./menu-view";
import { UIState } from "../ui-state";

@Component({
  selector: "app-game-menu",
  templateUrl: "./game-menu.component.html",
  styleUrls: ["./game-menu.component.scss"],
})
export class GameMenuComponent implements OnInit {
  view: MenuView = "main-menu-view";

  constructor(private uiState: UIState) {}

  ngOnInit(): void {}

  return() {
    this.uiState.menuVisible$.next(false);
  }
}
