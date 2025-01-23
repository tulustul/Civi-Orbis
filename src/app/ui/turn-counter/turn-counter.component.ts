import { Component, OnInit, HostBinding } from "@angular/core";

import { filter } from "rxjs/operators";

import { GameApi } from "src/app/api";

@Component({
    selector: "app-turn-counter",
    templateUrl: "./turn-counter.component.html",
    styleUrls: ["./turn-counter.component.scss"],
    standalone: false
})
export class TurnCounterComponent implements OnInit {
  @HostBinding("class.is-visible")
  isVisible = false;

  timeout: number;

  constructor(public game: GameApi) {}

  ngOnInit(): void {
    this.game.state!.turn$.pipe(filter((turn) => turn > 1)).subscribe(() => {
      this.isVisible = true;
      if (this.timeout) {
        clearTimeout(this.timeout);
      }
      this.timeout = setTimeout(() => (this.isVisible = false), 2000) as any;
    });
  }
}
