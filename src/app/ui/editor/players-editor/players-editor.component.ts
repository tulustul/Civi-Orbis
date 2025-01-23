import {
  Component,
  OnInit,
  ChangeDetectorRef,
  ChangeDetectionStrategy,
} from "@angular/core";

import { GameApi } from "src/app/api";
import { Player } from "src/app/api/player";

@Component({
    selector: "app-players-editor",
    templateUrl: "./players-editor.component.html",
    styleUrls: ["./players-editor.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: false
})
export class PlayersEditorComponent implements OnInit {
  constructor(private cdr: ChangeDetectorRef, private game: GameApi) {}

  ngOnInit(): void {}

  get players() {
    return this.game.state!.players;
  }

  get trackedPlayerId() {
    return this.game.state?.trackedPlayer.id;
  }

  async track(player: Player) {
    await this.game.state?.setTrackedPlayer(player.id);
    this.cdr.markForCheck();
  }
}
