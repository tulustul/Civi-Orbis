import { Injectable } from "@angular/core";

import { MapUi } from "./map-ui";
import { Camera } from "../renderer/camera";
import { GameApi } from "../api";

@Injectable()
export class NextTurnService {
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

  next() {
    if (this.nextCity) {
      this.mapUi.selectCity(this.nextCity);
    } else if (this.nextUnit) {
      // this.mapUi.selectUnit(this.nextUnit);
      // this.camera.moveToTileWithEasing(this.nextUnit.tile);
    } else {
      this.game.nextPlayer();
    }
  }
}
