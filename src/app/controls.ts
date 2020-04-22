import { Game } from './game/game';
import { findPath } from './game/pathfinding';

export class Controls {
  isMousePressed = false;
  mouseButton: number | null = null;

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
        this.game.renderer.terrainCanvas.render();
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

  get activeUnit() {
    return this.game.unitsManager.activeUnit;
  }
}
