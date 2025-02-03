import { TileDirection } from "src/app/shared";
import { Tile } from "src/app/api/tile.interface";
import { Container, Graphics } from "pixi.js";

export class RiverDrawer {
  public drawTile(tile: Tile, container: Container) {
    if (!tile.riverParts.length) {
      return;
    }

    // TODO avoid rendering the same river twice.

    const g = new Graphics();
    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    g.position.y = tile.y * 0.75;
    container.addChild(g);

    g.setStrokeStyle({ width: 0.15, color: 0x4169e1 });

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        g.moveTo(0, 0.25);
        g.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        g.moveTo(0.5, 0);
        g.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        g.moveTo(1, 0.25);
        g.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        g.moveTo(1, 0.75);
        g.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        g.moveTo(0.5, 1);
        g.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        g.moveTo(0, 0.75);
        g.lineTo(0, 0.25);
      }
    }
    g.stroke();
  }
}
