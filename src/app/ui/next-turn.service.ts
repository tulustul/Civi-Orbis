import { Injectable } from "@angular/core";

import { Game } from "../core/game";

@Injectable()
export class NextTurnService {
  constructor(public game: Game) {}

  get nextCity() {
    return this.game.humanPlayer!.cityWithoutProduction[0] || null;
  }

  next() {
    if (this.nextCity) {
      this.game.mapUi.selectCity(this.nextCity);
    } else {
      this.game.nextPlayer();
    }
  }
}
