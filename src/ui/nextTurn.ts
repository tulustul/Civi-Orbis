import { BehaviorSubject } from "rxjs";

import { mapUi } from "./mapUi";
import { camera } from "@/renderer/camera";
import { bridge } from "@/bridge";
import { PlayerTask } from "@/shared";

export class NextTurnService {
  private _waiting$ = new BehaviorSubject<boolean>(false);
  waiting$ = this._waiting$.asObservable();

  private _isAiOnlyMatch$ = new BehaviorSubject<boolean>(false);
  isAiOnlyMatch$ = this._isAiOnlyMatch$.asObservable();

  autoplayEnabled = false;

  nextTask: PlayerTask | null = null;

  constructor() {
    bridge.game.start$.subscribe((startInfo) => {
      this._isAiOnlyMatch$.next(startInfo.gameInfo.aiOnly);
      this.autoplayEnabled = false;
    });

    bridge.nextTask$.subscribe((nextTask) => (this.nextTask = nextTask));
  }

  async next() {
    await this.executeTask(this.nextTask, { withAnimations: true });
  }

  async executeTask(
    task: PlayerTask | null,
    options: { withAnimations?: boolean } = {},
  ) {
    if (this._waiting$.value) {
      return;
    }

    if (!task) {
      this._waiting$.next(true);
      await bridge.game.nextPlayer();
      this._waiting$.next(false);
      return;
    }

    switch (task.task) {
      case "city":
        mapUi.selectCity(task.id);
        break;

      case "unit":
        await mapUi.selectUnit(task.id);
        if (mapUi.selectedUnit) {
          if (options.withAnimations) {
            camera.moveToTileWithEasing(mapUi.selectedUnit.tile);
          } else {
            camera.moveToTile(mapUi.selectedUnit.tile);
          }
        }
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
