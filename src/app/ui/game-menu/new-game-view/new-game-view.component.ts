import { Component, OnInit, Output, EventEmitter } from "@angular/core";

import { Game } from "src/app/game/game";
import { SimplexMapGenerator } from "src/app/map-generators/simplex";
import { Player, PlayerType } from "src/app/game/player";
import { UIState } from "../../ui-state";

@Component({
  selector: "app-new-game-view",
  templateUrl: "./new-game-view.component.html",
  styleUrls: ["./new-game-view.component.scss"],
})
export class NewGameViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  width = 50;

  height = 40;

  uniformity = 0.5;

  seaLevel = 0;

  seed: number | null = null;

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  start() {
    this.game.clear();

    const humanPlayer = new Player(this.game, PlayerType.human);
    this.game.addPlayer(humanPlayer);

    const generator = new SimplexMapGenerator(this.game.players.length);
    this.game.map = generator.generate(
      this.width,
      this.height,
      this.seed ? this.seed?.toString() : undefined,
      this.uniformity,
      this.seaLevel,
    );
    this.game.map.precomputeMovementCosts();

    for (let i = 0; i < this.game.players.length; i++) {
      this.game.unitsManager.spawn(
        "scout",
        generator.getStartingLocations()[i],
        this.game.players[i],
      );
    }

    this.game.start();

    const unit = this.game.activePlayer$.value?.units[0];
    if (unit) {
      this.game.camera.moveToTile(unit.tile);
    }

    this.uiState.menuVisible$.next(false);
  }
}
