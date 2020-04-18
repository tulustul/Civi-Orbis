import { Game } from './game/game';
import { Tile } from './game/tile.interface';

export class Controls {
  isMousePressed = false;

  constructor(private game: Game) {}

  onMouseDown(event: MouseEvent) {
    this.isMousePressed = true;
    const activeTile = this.game.tilesManager.activeTile;
    const newActiveUnit = activeTile?.units[0] || null;
    if (newActiveUnit !== this.game.unitsManager.activeUnit) {
      this.game.unitsManager.activeUnit$.next(newActiveUnit);
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isMousePressed = false;
  }

  onMouseMove(event: MouseEvent) {
    const [x, y] = this.game.camera.screenToGame(event.clientX, event.clientY);

    const map = this.game.map;
    let tile: Tile | null = null;

    if (x >= 0 && x < map.width && y >= 0 && y < map.height) {
      tile = map.tiles[x][y];
    }

    if (tile !== this.game.tilesManager.activeTile) {
      this.game.tilesManager.activeTile$.next(tile);
    }

    if (this.isMousePressed) {
      this.game.camera.moveBy(event.movementX, event.movementY);
    }
  }

  onWheel(event: WheelEvent) {
    this.game.camera.scaleBy(
      1 + (event.deltaY > 0 ? -0.2 : 0.2),
      event.clientX,
      event.clientY
    );
  }
}
