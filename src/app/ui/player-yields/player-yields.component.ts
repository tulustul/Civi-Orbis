import { Component, OnInit } from "@angular/core";

import { GameApi } from "src/app/api";

@Component({
  selector: "app-player-yields",
  templateUrl: "./player-yields.component.html",
  styleUrls: ["./player-yields.component.scss"],
})
export class PlayerYieldsComponent implements OnInit {
  constructor(private game: GameApi) {}

  ngOnInit(): void {}

  get player() {
    return this.game.state!.trackedPlayer;
  }
}
