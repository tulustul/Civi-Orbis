import { Component, OnInit } from '@angular/core';

import { Game } from 'src/app/game/game';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit {
  debugModalVisible = false;

  constructor(public game: Game) {}

  ngOnInit(): void {}
}
