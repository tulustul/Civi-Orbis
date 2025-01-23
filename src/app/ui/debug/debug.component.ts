import { Component, OnInit } from "@angular/core";

import { GameApi } from "src/app/api";

@Component({
    selector: "app-debug",
    templateUrl: "./debug.component.html",
    styleUrls: ["./debug.component.scss"],
    standalone: false
})
export class DebugComponent implements OnInit {
  constructor(public game: GameApi) {}

  ngOnInit(): void {}

  revealWorld() {
    this.game.state!.trackedPlayer.revealWorld();
  }
}
