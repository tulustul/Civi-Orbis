import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { GameApi } from "src/app/api/game";
import { MapGeneratorOptions } from "src/app/api/game.interface";
import { Camera } from "src/app/renderer/camera";
import { UIState } from "../../ui-state";

@Component({
    selector: "app-new-game-view",
    templateUrl: "./new-game-view.component.html",
    styleUrls: ["./new-game-view.component.scss"],
    standalone: false
})
export class NewGameViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  width = 50;

  height = 40;

  uniformity = 0.5;

  seaLevel = 0;

  resources = 0.2;

  humanPlayersCount = 1;

  aiPlayersCount = 5;

  seed: number | null = null;

  waiting = false;

  constructor(
    private game: GameApi,
    private uiState: UIState,
    private camera: Camera,
  ) {}

  ngOnInit(): void {}

  async start() {
    const mapOptions: MapGeneratorOptions = {
      width: this.width,
      height: this.height,
      uniformity: this.uniformity,
      seaLevel: this.seaLevel,
      resources: this.resources,
      aiPlayersCount: this.aiPlayersCount,
      humanPlayersCount: this.humanPlayersCount,
      seed: this.seed ? this.seed?.toString() : undefined,
    };

    this.waiting = true;
    await this.game.newGame(mapOptions);
    this.waiting = false;

    const unit = this.game.state?.trackedPlayer.units[0];
    if (unit) {
      this.camera.moveToTile(unit.tile);
    }

    this.uiState.menuVisible$.next(false);
  }
}
