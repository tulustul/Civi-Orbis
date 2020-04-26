import * as PIXIE from 'pixi.js';

import { Unit } from '../game/unit';
import { Game } from '../game/game';
import { getTileCoords, clearContainer } from './utils';

export class UnitsRenderer {
  container = new PIXIE.Container();

  unitGraphics = new Map<Unit, PIXIE.Graphics>();

  constructor(game: Game) {
    game.unitsManager.updated$.subscribe((unit) => this.update(unit));
    game.unitsManager.spawned$.subscribe((unit) => this.spawn(unit));
    game.unitsManager.destroyed$.subscribe((unit) => this.destroy(unit));
  }

  spawn(unit: Unit) {
    const g = new PIXIE.Graphics();
    this.container.addChild(g);
    this.unitGraphics.set(unit, g);

    const [x, y] = getTileCoords(unit.tile);
    g.position.x = x;
    g.position.y = y;

    g.beginFill(0x0000ff);
    g.drawCircle(0.5, 0.5, 0.2);
    g.endFill();
  }

  destroy(unit: Unit) {
    const g = this.unitGraphics.get(unit)!;
    this.unitGraphics.delete(unit);
    g.destroy();
  }

  update(unit: Unit) {
    const g = this.unitGraphics.get(unit)!;

    const [x, y] = getTileCoords(unit.tile);
    g.position.x = x;
    g.position.y = y;
  }

  clear() {
    clearContainer(this.container);
    this.unitGraphics.clear();
  }
}
