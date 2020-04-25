import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Game } from 'src/app/game/game';
import { UIState } from '../../ui-state';
import { loadGame } from 'src/app/game/saving';

@Component({
  selector: 'app-load-view',
  templateUrl: './load-view.component.html',
  styleUrls: ['./load-view.component.scss'],
})
export class LoadViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  saveName = '';

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  load() {
    if (this.saveName) {
      loadGame(this.game, this.saveName);
      this.uiState.menuVisible$.next(false);
    }
  }
}
