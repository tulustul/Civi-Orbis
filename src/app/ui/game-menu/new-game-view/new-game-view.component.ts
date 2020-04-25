import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Game } from 'src/app/game/game';

@Component({
  selector: 'app-new-game-view',
  templateUrl: './new-game-view.component.html',
  styleUrls: ['./new-game-view.component.scss'],
})
export class NewGameViewComponent implements OnInit {
  @Output() return = new EventEmitter<void>();

  constructor(private game: Game) {}

  ngOnInit(): void {}
}
