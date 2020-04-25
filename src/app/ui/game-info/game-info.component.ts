import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/game/game';
import { UIStateService } from '../ui-state.service';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss'],
})
export class GameInfoComponent implements OnInit {
  debugModalVisible = false;

  constructor(public game: Game, private uiState: UIStateService) {}

  ngOnInit(): void {}

  openEditor() {
    this.uiState.editorEnabled$.next(true);
  }
}
