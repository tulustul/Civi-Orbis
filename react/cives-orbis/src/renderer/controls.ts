import { BehaviorSubject } from "rxjs";

import { mapUi } from "@/ui/mapUi";
import { camera } from "./camera";
import { game } from "@/api";

export class Controls {
  isMousePressed = false;

  private _mouseButton$ = new BehaviorSubject<number | null>(null);
  mouseButton$ = this._mouseButton$.asObservable();

  private hasMouseMoved = false;

  onMouseDown(event: MouseEvent) {
    this.hasMouseMoved = false;
    this.isMousePressed = true;
    this._mouseButton$.next(event.button);
    event.preventDefault();
    event.stopPropagation();

    if (mapUi.selectedUnit && this.mouseButton === 2) {
      const tile = this.getTileFromMouseEvent(event);
      if (tile) {
        mapUi.selectedUnit.findPath(tile).then(() => {
          if (mapUi.selectedUnit) {
            mapUi.setPath(mapUi.selectedUnit.path);
          }
        });
      }
    }

    return false;
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    if (this.hasMouseMoved) {
      return;
    }

    const hoveredTile = mapUi.hoveredTile;
    if (hoveredTile) {
      mapUi.clickTile(hoveredTile);
    }

    return false;
  }

  onMouseUp(event: MouseEvent) {
    const [x, y] = camera.screenToGame(event.clientX, event.clientY);

    const selectedUnit = mapUi.selectedUnit;
    if (selectedUnit && this.mouseButton === 2) {
      const tile = game.state!.map.get(x, y);
      if (tile) {
        selectedUnit.moveAlongPath().then(async () => {
          mapUi.setPath(selectedUnit.path);
          // to refresh the ui
          mapUi["_selectedUnit$"].next(selectedUnit);
          mapUi.unitRangeArea.setTiles(await selectedUnit.getRange());
        });
      }
    }

    this.isMousePressed = false;
    this._mouseButton$.next(null);
  }

  onMouseMove(event: MouseEvent) {
    this.hasMouseMoved = true;
    const tile = this.getTileFromMouseEvent(event);

    if (tile !== mapUi.hoveredTile) {
      mapUi.hoverTile(tile);

      if (tile && mapUi.selectedUnit && this.mouseButton === 2) {
        mapUi.selectedUnit.findPath(tile).then(() => {
          if (mapUi.selectedUnit) {
            mapUi.setPath(mapUi.selectedUnit.path);
          }
        });
      }
    }

    if (mapUi.allowMapPanning && this.isMousePressed) {
      if (this.mouseButton === 0) {
        camera.moveBy(event.movementX, event.movementY);
      }
    }
  }

  onWheel(event: WheelEvent) {
    camera.scaleByWithEasing(
      1 + (event.deltaY > 0 ? -0.3 : 0.3),
      event.clientX,
      event.clientY,
      300,
    );
  }

  onKeyDown(event: KeyboardEvent) {
    // if (this.uiState.activeView) {
    //   if (event.key === "Escape") {
    //     this.uiState.activeView.quit();
    //   }
    // } else if (this.uiState.menuVisible$.value) {
    //   if (event.key === "Escape" && game.state) {
    //     this.uiState.menuVisible$.next(false);
    //   }
    // } else {
    //   if (event.key === "Enter") {
    //     this.nextTurnService.next();
    //   } else if (event.key === "Escape") {
    //     this.uiState.menuVisible$.next(true);
    //   } else if (mapUi.selectedUnit) {
    //     if (event.key === "s" || event.key === "f") {
    //       mapUi.selectedUnit
    //         .setOrder("sleep")
    //         .then(() => mapUi["_selectedUnit$"].next(mapUi.selectedUnit));
    //     } else if (event.key === " ") {
    //       mapUi.selectedUnit
    //         .setOrder("skip")
    //         .then(() => mapUi["_selectedUnit$"].next(mapUi.selectedUnit));
    //     } else if (event.key === "b") {
    //       mapUi.selectedUnit
    //         .doAction("foundCity")
    //         .then(() => mapUi["_selectedUnit$"].next(mapUi.selectedUnit));
    //     }
    //   }
    // }
  }

  onKeyUp(event: KeyboardEvent) {}

  getTileFromMouseEvent(event: MouseEvent) {
    const [x, y] = camera.screenToGame(event.clientX, event.clientY);
    return game.state!.map.get(x, y);
  }

  nextTurn() {
    // mapUi.setPath(this.activeUnit?.path || null);
  }

  get mouseButton() {
    return this._mouseButton$.value;
  }
}

export const controls = new Controls();
