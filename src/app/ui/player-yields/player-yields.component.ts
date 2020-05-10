import { Component, OnInit } from "@angular/core";
import { Game } from "src/app/core/game";

@Component({
  selector: "app-player-yields",
  templateUrl: "./player-yields.component.html",
  styleUrls: ["./player-yields.component.scss"],
})
export class PlayerYieldsComponent implements OnInit {
  constructor(private game: Game) {}

  ngOnInit(): void {}

  get player() {
    return this.game.humanPlayer!;
  }
}
