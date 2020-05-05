import { Component, OnInit } from "@angular/core";

import { Game } from "src/app/core/game";

@Component({
  selector: "app-debug",
  templateUrl: "./debug.component.html",
  styleUrls: ["./debug.component.scss"],
})
export class DebugComponent implements OnInit {
  constructor(public game: Game) {}

  ngOnInit(): void {}
}
