import { Component, OnInit } from "@angular/core";

import { GameApi } from "src/app/api";

@Component({
    selector: "app-player-yields",
    templateUrl: "./player-yields.component.html",
    styleUrls: ["./player-yields.component.scss"],
    standalone: false
})
export class PlayerYieldsComponent implements OnInit {
  constructor(private game: GameApi) {}

  ngOnInit(): void {}

  get yields() {
    return this.game.state!.trackedPlayer.yields;
  }
}
