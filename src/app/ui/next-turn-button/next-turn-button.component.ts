import { Component, ChangeDetectionStrategy } from "@angular/core";

import { NextTurnService } from "../next-turn.service";

@Component({
  selector: "app-next-turn-button",
  templateUrl: "./next-turn-button.component.html",
  styleUrls: ["./next-turn-button.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NextTurnButtonComponent {
  constructor(public nextTurnService: NextTurnService) {}
}
