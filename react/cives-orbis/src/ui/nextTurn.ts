import { BehaviorSubject } from "rxjs";

import { game } from "@/api";
import { mapUi } from "./mapUi";
import { camera } from "@/renderer";

export class NextTurnService {
  private _waiting$ = new BehaviorSubject<boolean>(false);
  waiting$ = this._waiting$.asObservable();

  private _isAiOnlyMatch$ = new BehaviorSubject<boolean>(false);
  isAiOnlyMatch$ = this._isAiOnlyMatch$.asObservable();

  autoplayEnabled = false;

  constructor() {
    game.init$.subscribe(() => {
      let isAiOnlyMatch = true;
      for (const player of game.state!.players) {
        if (!player.isAi) {
          isAiOnlyMatch = false;
          break;
        }
      }
      this._isAiOnlyMatch$.next(isAiOnlyMatch);
      this.autoplayEnabled = false;
    });
  }

  async next() {
    if (this._waiting$.value) {
      return;
    }

    const nextTask = game.nextTask;

    if (!nextTask) {
      this._waiting$.next(true);
      await game.nextPlayer();
      this._waiting$.next(false);
      return;
    }

    const state = game.state!;

    switch (nextTask.task) {
      case "city":
        const city = state.citiesMap.get(nextTask.id)!;
        mapUi.selectCity(city);
        break;

      case "unit":
        const unit = state.unitsMap.get(nextTask.id)!;
        mapUi.selectUnit(unit);
        camera.moveToTileWithEasing(unit.tile);
        break;
    }
  }

  enableAutoplay() {
    this.autoplayEnabled = true;
    this.autoplay();
  }

  stopAutoplay() {
    this.autoplayEnabled = false;
  }

  private autoplay() {
    this.next();
    if (this.autoplayEnabled) {
      setTimeout(() => this.autoplay());
    }
  }
}

export const nextTurnService = new NextTurnService();
