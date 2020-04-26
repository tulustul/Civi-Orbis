import { Component, OnInit, OnDestroy } from '@angular/core';

import { UIState } from '../ui-state';
import { Game } from 'src/app/game/game';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit, OnDestroy {
  constructor(private game: Game, private uiState: UIState) {}

  ngOnInit(): void {}

  ngOnDestroy() {
    this.game.tilesManager.highlightTiles(new Set());
    this.game.tilesManager.enableSelectingTile(false);
  }

  close() {
    this.uiState.editorEnabled$.next(false);
  }
}
