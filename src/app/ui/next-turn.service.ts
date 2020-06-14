import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { MapUi } from "./map-ui";
import { Camera } from "../renderer/camera";
import { GameApi } from "../api";

@Injectable()
export class NextTurnService {
  private _waiting$ = new BehaviorSubject<boolean>(false);
  waiting$ = this._waiting$.asObservable();

  private _isAiOnlyMatch$ = new BehaviorSubject<boolean>(false);
  isAiOnlyMatch$ = this._isAiOnlyMatch$.asObservable();

  autoplayEnabled = false;

  constructor(
    public game: GameApi,
    private camera: Camera,
    private mapUi: MapUi,
  ) {
    game.init$.subscribe(() => {
      let isAiOnlyMatch = true;
      for (const player of game.state!.players) {
        if (!player.isAi) {
          isAiOnlyMatch = false;
          break;
        }
      }
      this._isAiOnlyMatch$.next(isAiOnlyMatch);
    });
  }

  async next() {
    if (this._waiting$.value) {
      return;
    }

    const nextTask = this.game.nextTask;

    if (!nextTask) {
      this._waiting$.next(true);
      await this.game.nextPlayer();
      this._waiting$.next(false);
      return;
    }

    const state = this.game.state!;

    switch (nextTask.task) {
      case "city":
        const city = state.citiesMap.get(nextTask.id)!;
        this.mapUi.selectCity(city);
        break;

      case "unit":
        const unit = state.unitsMap.get(nextTask.id)!;
        this.mapUi.selectUnit(unit);
        this.camera.moveToTileWithEasing(unit.tile);
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
