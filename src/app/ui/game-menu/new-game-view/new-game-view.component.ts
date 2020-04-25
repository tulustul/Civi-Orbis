import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Game } from 'src/app/game/game';
import { SimplexMapGenerator } from 'src/app/map-generators/simplex';
import { Player, PlayerType } from 'src/app/game/player';
import { UIState } from '../../ui-state';

@Component({
  selector: 'app-new-game-view',
  templateUrl: './new-game-view.component.html',
  styleUrls: ['./new-game-view.component.scss'],
})
export class NewGameViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  width = 50;

  height = 40;

  seed: number | null = null;

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  start() {
    const generator = new SimplexMapGenerator(1);
    const map = generator.generate(this.width, this.height, this.seed);
    map.precomputeMovementCosts();

    const humanPlayer = new Player(this.game, PlayerType.human);
    this.game.addPlayer(humanPlayer);

    this.game.unitsManager.spawn(
      'scout',
      generator.getStartingLocations()[0],
      humanPlayer
    );

    this.game.start(map);
    this.uiState.menuVisible$.next(false);
  }
}
