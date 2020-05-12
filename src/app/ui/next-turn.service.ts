import { Injectable } from "@angular/core";

import { Game } from "../core/game";
import { MapUi } from "./map-ui";
import { Camera } from "../renderer/camera";

@Injectable()
export class NextTurnService {
  constructor(
    public game: Game,
    private camera: Camera,
    private mapUi: MapUi,
  ) {}

  get nextCity() {
    return this.game.humanPlayer!.cityWithoutProduction[0] || null;
  }

  get nextUnit() {
    return this.game.humanPlayer!.unitsWithoutOrders[0] || null;
  }

  next() {
    if (this.nextCity) {
      this.mapUi.selectCity(this.nextCity);
    } else if (this.nextUnit) {
      this.mapUi.selectUnit(this.nextUnit);
      this.camera.moveToTileWithEasing(this.nextUnit.tile);
    } else {
      this.game.nextPlayer();
    }
  }
}
