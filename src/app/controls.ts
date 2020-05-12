import { Injectable } from "@angular/core";

import { BehaviorSubject } from "rxjs";

import { findPath } from "./core/pathfinding";
import { NextTurnService } from "./ui/next-turn.service";
import { MapUi } from "./ui/map-ui";
import { UIState } from "./ui/ui-state";
import { Camera } from "./renderer/camera";
import { GameApi } from "./api/game";
import { Unit } from "./core/unit";

@Injectable()
export class Controls {
  isMousePressed = false;

  private _mouseButton$ = new BehaviorSubject<number | null>(null);
  mouseButton$ = this._mouseButton$.asObservable();

  constructor(
    private game: GameApi,
    private camera: Camera,
    private nextTurnService: NextTurnService,
    private mapUi: MapUi,
    private uiState: UIState,
  ) {}

  onMouseDown(event: MouseEvent) {
    this.isMousePressed = true;
    this._mouseButton$.next(event.button);
    event.preventDefault();
    event.stopPropagation();

    if (this.activeUnit && this.mouseButton === 2) {
      const tile = this.getTileFromMouseEvent(event);
      if (tile) {
        this.activeUnit.path = findPath(this.activeUnit, tile);
        this.mapUi.setPath(this.activeUnit.path);
      }
    }

    return false;
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const hoveredTile = this.mapUi.hoveredTile;
    if (hoveredTile) {
      this.mapUi.clickTile(hoveredTile);
    }

    return false;
  }

  onMouseUp(event: MouseEvent) {
    const [x, y] = this.camera.screenToGame(event.clientX, event.clientY);

    // const activeUnit = this.game.unitsManager.activeUnit;
    // if (activeUnit && this.mouseButton === 2) {
    //   const tile = this.game.map.get(x, y);
    //   if (tile) {
    //     this.game.unitsManager.moveAlongPath(activeUnit);

    //     // to refresh the ui
    //     this.game.unitsManager.activeUnit$.next(activeUnit);

    //     this.mapUi.setPath(activeUnit.path);
    //   }
    // }

    this.isMousePressed = false;
    this._mouseButton$.next(null);
  }

  onMouseMove(event: MouseEvent) {
    const tile = this.getTileFromMouseEvent(event);

    if (tile !== this.mapUi.hoveredTile) {
      this.mapUi.hoverTile(tile);

      if (tile && this.activeUnit && this.mouseButton === 2) {
        this.activeUnit.path = findPath(this.activeUnit, tile);
        this.mapUi.setPath(this.activeUnit.path);
      }
    }

    if (this.mapUi.allowMapPanning && this.isMousePressed) {
      if (this.mouseButton === 1) {
        this.camera.moveBy(event.movementX, event.movementY);
      }
    }
  }

  onWheel(event: WheelEvent) {
    this.camera.scaleByWithEasing(
      1 + (event.deltaY > 0 ? -0.3 : 0.3),
      event.clientX,
      event.clientY,
      300,
    );
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.nextTurnService.next();
    } else if (event.key === "Escape") {
      this.uiState.menuVisible$.next(true);
    }
  }

  onKeyUp(event: KeyboardEvent) {}

  getTileFromMouseEvent(event: MouseEvent) {
    const [x, y] = this.camera.screenToGame(event.clientX, event.clientY);
    // return this.game.map.get(x, y);
    return null;
  }

  nextTurn() {
    // this.mapUi.setPath(this.activeUnit?.path || null);
  }

  get activeUnit(): Unit | null {
    // return this.game.unitsManager.activeUnit;
    return null;
  }

  get mouseButton() {
    return this._mouseButton$.value;
  }
}
