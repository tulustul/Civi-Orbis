import * as PIXIE from "pixi.js";

import { Game } from "../game/game";
import { Tile } from "../game/tile";
import { getTileCenter } from "./utils";

export class PathRenderer {
  container = new PIXIE.Container();

  pathGraphics = new PIXIE.Graphics();

  labels: PIXIE.Text[] = [];

  constructor(private game: Game) {
    this.container.addChild(this.pathGraphics);

    game.controls.activePath$.subscribe((path) => this.buildPath(path));
  }

  clear() {
    this.pathGraphics.clear();
    for (const label of this.labels) {
      this.container.removeChild(label);
      label.destroy();
    }
    this.labels = [];
  }

  buildPath(path: Tile[][] | null) {
    this.clear();

    const unit = this.game.unitsManager.activeUnit;

    if (!path || !path.length || !unit) {
      this.container.visible = false;
      return;
    }

    this.container.visible = true;

    const g = this.pathGraphics;

    g.lineStyle(0.1, 0xff0000);

    g.moveTo(...getTileCenter(unit.tile));

    for (const turn of path) {
      for (const tile of turn) {
        g.lineTo(...getTileCenter(tile));
      }
    }

    for (let turn = 0; turn < path.length; turn++) {
      if (path[turn][0]) {
        const scale = this.game.camera.transform$.value.scale;

        const label = new PIXIE.Text(turn.toString(), {
          align: "center",
          fill: "white",
          dropShadow: true,
          dropShadowBlur: 5,
          dropShadowDistance: 0,
          fontSize: scale * 0.7,
        } as PIXIE.TextStyle);

        label.scale.set(1 / scale, 1 / scale);

        this.container.addChild(label);
        this.labels.push(label);

        const metrics = PIXIE.TextMetrics.measureText(
          turn.toString(),
          label.style
        );
        const [x, y] = getTileCenter(path[turn][0]);
        label.position.x = x - metrics.width / 2 / scale;
        label.position.y = y - metrics.height / 2 / scale;
      }
    }
  }
}
