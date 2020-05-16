import * as PIXIE from "pixi.js";

import { TileCore } from "src/app/core/tile";
import { Game } from "src/app/core/game";
import { Area } from "src/app/core/area";
import { TileDirection } from "src/app/shared";
import { GameApi } from "src/app/api";

const BORDER_WIDTH = 0.11;
const BORDER_WIDTH_HALVED = BORDER_WIDTH / 2;

const BORDERS_VERTICES: Record<
  TileDirection,
  [[number, number], [number, number]]
> = {
  [TileDirection.NW]: [
    [0 + BORDER_WIDTH_HALVED, 0.25 + BORDER_WIDTH_HALVED],
    [0.5, 0 + BORDER_WIDTH_HALVED],
  ],
  [TileDirection.NE]: [
    [0.5, 0 + BORDER_WIDTH_HALVED],
    [1 - BORDER_WIDTH_HALVED, 0.25 + BORDER_WIDTH_HALVED],
  ],
  [TileDirection.E]: [
    [1 - BORDER_WIDTH_HALVED, 0.25 + BORDER_WIDTH_HALVED],
    [1 - BORDER_WIDTH_HALVED, 0.75 - BORDER_WIDTH_HALVED],
  ],
  [TileDirection.SE]: [
    [1 - BORDER_WIDTH_HALVED, 0.75 - BORDER_WIDTH_HALVED],
    [0.5, 1 - BORDER_WIDTH_HALVED],
  ],
  [TileDirection.SW]: [
    [0.5, 1 - BORDER_WIDTH_HALVED],
    [0 + BORDER_WIDTH_HALVED, 0.75 - BORDER_WIDTH_HALVED],
  ],
  [TileDirection.W]: [
    [0 + BORDER_WIDTH_HALVED, 0.75 - BORDER_WIDTH_HALVED],
    [0 + BORDER_WIDTH_HALVED, 0.25 + BORDER_WIDTH_HALVED],
  ],
  [TileDirection.NONE]: [
    [0, 0],
    [0, 0],
  ],
};

export class AreaDrawer {
  areasMap = new Map<Area, PIXIE.DisplayObject[]>();

  constructor(private game: GameApi, private container: PIXIE.Container) {
    // game.areasManager.created$.pipe().subscribe((area) => {
    //   area.changed$
    //     // .pipe(
    //     //   takeUntil(
    //     //     game.areasManager.destroyed$.pipe(
    //     //       filter((destroyedArea) => destroyedArea === area),
    //     //     ),
    //     //   ),
    //     // )
    //     .subscribe((i) => {
    //       console.log("RENDER updated", i);
    //       this.clearArea(area);
    //       this.drawArea(area);
    //     });
    // });
    // game.areasManager.destroyed$.subscribe((area) => {
    //   this.clearArea(area);
    // });
    // this.game.started$.subscribe(() => this.build());
  }

  build() {
    // for (const area of this.game.areasManager.areas) {
    //   this.drawArea(area);
    //   // TODO we can update only single tiles here.
    //   area.updated$.subscribe(() => {
    //     this.clearArea(area);
    //     this.drawArea(area);
    //   });
    // }
  }

  clearArea(area: Area) {
    for (const obj of this.areasMap.get(area) || []) {
      obj.destroy();
    }
    this.areasMap.delete(area);
  }

  private drawArea(area: Area) {
    if (!this.areasMap.has(area)) {
      this.areasMap.set(area, []);
    }

    const objs = this.areasMap.get(area)!;

    for (const path of area.borders) {
      const g = new PIXIE.Graphics();

      g.lineStyle(BORDER_WIDTH, area.color);
      g.alpha = 0.8;
      objs.push(g);
      this.container.addChild(g);

      const firstBorder = path[0];

      const points: PIXIE.Point[] = [];

      this.drawBorder(points, g, firstBorder[0], firstBorder[1], true);

      for (const [tile, dir] of path.slice(1)) {
        this.drawBorder(points, g, tile, dir);
      }

      g.drawPolygon(points);
    }
  }

  private drawBorder(
    points: PIXIE.Point[],
    g: PIXIE.Graphics,
    tile: TileCore,
    dir: TileDirection,
    start = false,
  ) {
    const [p1, p2] = BORDERS_VERTICES[dir];

    if (start) {
      const x1 = p1[0] + tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
      const y1 = p1[1] + tile.y * 0.75;
      points.push(new PIXIE.Point(x1, y1));
    }

    const x2 = p2[0] + tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
    const y2 = p2[1] + tile.y * 0.75;

    points.push(new PIXIE.Point(x2, y2));
  }

  clear() {
    for (const area of this.areasMap.keys()) {
      this.clearArea(area);
    }
  }
}
