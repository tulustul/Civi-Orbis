import * as PIXIE from "pixi.js";

import { TileDirection } from "src/app/core/tile";
import { TileContainer } from "../tile-container";
import { Game } from "src/app/core/game";
import { Area } from "src/app/core/area";
import { merge } from "rxjs";

const BORDERS_VERTICES: Record<
  TileDirection,
  [[number, number], [number, number]]
> = {
  [TileDirection.NW]: [
    [0, 0.25],
    [0.5, 0],
  ],
  [TileDirection.NE]: [
    [0.5, 0],
    [1, 0.25],
  ],
  [TileDirection.E]: [
    [1, 0.25],
    [1, 0.75],
  ],
  [TileDirection.SE]: [
    [1, 0.75],
    [0.5, 1],
  ],
  [TileDirection.SW]: [
    [0.5, 1],
    [0, 0.75],
  ],
  [TileDirection.W]: [
    [0, 0.25],
    [0, 0.75],
  ],
  [TileDirection.NONE]: [
    [0, 0],
    [0, 0],
  ],
};

export class AreaDrawer {
  areasMap = new Map<Area, PIXIE.DisplayObject[]>();

  constructor(private game: Game, private container: TileContainer) {
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

    game.areasManager.destroyed$.subscribe((area) => {
      this.clearArea(area);
    });

    this.game.started$.subscribe(() => this.build());
  }

  build() {
    for (const area of this.game.areasManager.areas) {
      this.drawArea(area);

      // TODO we can update only single tiles here.
      merge(area.added$, area.removed$).subscribe(() => {
        this.clearArea(area);
        this.drawArea(area);
      });
    }
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

    for (const [tile, dirs] of area.borders.entries()) {
      for (const dir of dirs) {
        const border = new PIXIE.Graphics();
        border.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
        border.position.y = tile.y * 0.75;

        objs.push(border);
        this.container.addChild(border, tile);

        border.lineStyle(0.11, area.color);
        border.alpha = 0.5;
        const [p1, p2] = BORDERS_VERTICES[dir];
        border.moveTo(p1[0], p1[1]);
        border.lineTo(p2[0], p2[1]);
      }

      // const background = new PIXIE.Graphics();
      // background.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
      // background.position.y = tile.y * 0.75;
      // objs.push(background);
      // this.backgroundContainer.addChild(background, tile.x, tile.y);
      // background.beginFill(area.color);
      // background.alpha = 0.15;
      // drawHex(background);
      // background.endFill();
    }
  }

  clear() {
    for (const area of this.areasMap.keys()) {
      this.clearArea(area);
    }
  }
}
