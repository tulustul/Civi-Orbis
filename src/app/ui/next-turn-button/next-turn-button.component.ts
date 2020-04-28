import { Component, OnInit } from "@angular/core";

import { Game } from "src/app/game/game";

@Component({
  selector: "app-next-turn-button",
  templateUrl: "./next-turn-button.component.html",
  styleUrls: ["./next-turn-button.component.scss"],
})
export class NextTurnButtonComponent implements OnInit {
  constructor(public game: Game) {}

  ngOnInit(): void {}
}
