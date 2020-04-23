import { BehaviorSubject } from 'rxjs';

import { Game } from './game/game';
import { findPath } from './game/pathfinding';
import { Tile } from './game/tile.interface';

export class Controls {
  isMousePressed = false;

  mouseButton: number | null = null;

  private _activePath$ = new BehaviorSubject<Tile[][] | null>(null);
  activePath$ = this._activePath$.asObservable();

  constructor(private game: Game) {}

  onMouseDown(event: MouseEvent) {
    this.isMousePressed = true;
    this.mouseButton = event.button;
    event.preventDefault();
    event.stopPropagation();

    if (this.activeUnit && this.mouseButton === 2) {
      const tile = this.getTileFromMouseEvent(event);
      if (tile) {
        this.activeUnit.path = findPath(this.activeUnit, tile);
        this._activePath$.next(this.activeUnit.path);
      }
    }

    return false;
  }

  onClick(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const activeTile = this.game.tilesManager.activeTile;
    const newActiveUnit = activeTile?.units[0] || null;
    if (newActiveUnit !== this.game.unitsManager.activeUnit) {
      this.game.unitsManager.activeUnit$.next(newActiveUnit);
      this._activePath$.next(newActiveUnit?.path || null);
    }

    return false;
  }

  onMouseUp(event: MouseEvent) {
    const [x, y] = this.game.camera.screenToGame(event.clientX, event.clientY);

    const activeUnit = this.game.unitsManager.activeUnit;
    if (activeUnit && this.mouseButton === 2) {
      const tile = this.game.map.get(x, y);
      if (tile) {
        this.game.unitsManager.moveAlongPath(activeUnit);
        this._activePath$.next(activeUnit.path);
      }
    }

    this.isMousePressed = false;
    this.mouseButton = null;
  }

  onMouseMove(event: MouseEvent) {
    const tile = this.getTileFromMouseEvent(event);

    if (tile !== this.game.tilesManager.activeTile) {
      this.game.tilesManager.activeTile$.next(tile);

      if (tile && this.activeUnit && this.mouseButton === 2) {
        this.activeUnit.path = findPath(this.activeUnit, tile);
        this._activePath$.next(this.activeUnit.path);
      }
    }

    if (this.isMousePressed) {
      if (this.mouseButton === 1) {
        this.game.camera.moveBy(event.movementX, event.movementY);
      }
    }
  }

  onWheel(event: WheelEvent) {
    this.game.camera.scaleBy(
      1 + (event.deltaY > 0 ? -0.2 : 0.2),
      event.clientX,
      event.clientY
    );
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.game.nextTurn();
    }
  }

  onKeyUp(event: KeyboardEvent) {}

  getTileFromMouseEvent(event: MouseEvent) {
    const [x, y] = this.game.camera.screenToGame(event.clientX, event.clientY);
    return this.game.map.get(x, y);
  }

  nextTurn() {
    this._activePath$.next(this.activeUnit?.path || null);
  }

  get activeUnit() {
    return this.game.unitsManager.activeUnit;
  }
}
