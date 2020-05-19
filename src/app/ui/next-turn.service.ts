import { Injectable } from "@angular/core";

import { MapUi } from "./map-ui";
import { Camera } from "../renderer/camera";
import { GameApi } from "../api";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class NextTurnService {
  private _waiting$ = new BehaviorSubject<boolean>(false);
  waiting$ = this._waiting$.asObservable();

  constructor(
    public game: GameApi,
    private camera: Camera,
    private mapUi: MapUi,
  ) {}

  get nextCity() {
    // return this.game.state?.trackedPlayer!.cityWithoutProduction[0] || null;
    return null;
  }

  get nextUnit() {
    // return this.game.state?.trackedPlayer!.unitsWithoutOrders[0] || null;
    return null;
  }

  async next() {
    if (this._waiting$.value) {
      return;
    }

    if (this.nextCity) {
      this.mapUi.selectCity(this.nextCity);
    } else if (this.nextUnit) {
      // this.mapUi.selectUnit(this.nextUnit);
      // this.camera.moveToTileWithEasing(this.nextUnit.tile);
    } else {
      this._waiting$.next(true);
      await this.game.nextPlayer();
      this._waiting$.next(false);
    }
  }
}
