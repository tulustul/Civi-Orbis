import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Game } from 'src/app/game/game';
import { saveGame } from 'src/app/game/saving';
import { UIState } from '../../ui-state';

@Component({
  selector: 'app-save-view',
  templateUrl: './save-view.component.html',
  styleUrls: ['./save-view.component.scss'],
})
export class SaveViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  saveName = '';

  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  save() {
    if (this.saveName) {
      saveGame(this.game, this.saveName);
      this.uiState.menuVisible$.next(false);
    }
  }
}
