import { game } from "@/api";
import { bridge } from "@/bridge";
import {
  TileCoordsWithUnits,
  UnitChanneled,
} from "@/core/serialization/channel";
import { mapUi } from "@/ui/mapUi";
import { OutlineFilter } from "pixi-filters";
import { Container, Graphics, Sprite } from "pixi.js";
import { Animations } from "./animation";
import { getAssets } from "./assets";
import { camera } from "./camera";
import { TILE_SIZE } from "./constants";

export class UnitsDrawer {
  units = new Map<number, UnitDrawer>();

  private selectedDrawer: UnitDrawer | null = null;

  constructor(private container: Container) {
    game.init$.subscribe(() => this.build());

    bridge.units.updated$.subscribe((unit) => this.updateUnit(unit));

    bridge.units.destroyed$.subscribe((unitId) => {
      const drawer = this.units.get(unitId);
      if (drawer) {
        drawer.destroy();
        this.units.delete(unitId);
      }
    });

    bridge.units.moved$.subscribe((move) => {
      const drawer = this.units.get(move.unitId);
      if (drawer) {
        drawer.animatePosition(move.tiles);
        this.updateNeighbours(drawer, move.tiles[0]);
        this.updateNeighbours(drawer, move.tiles[move.tiles.length - 1]);
      }
    });

    mapUi.selectedUnit$.subscribe((unit) => {
      if (this.selectedDrawer) {
        this.selectedDrawer.deselect();
      }

      if (!unit) {
        return;
      }

      const drawer = this.units.get(unit.id);
      if (drawer) {
        this.selectedDrawer = drawer;
        drawer.select();
      }
    });
  }

  private async build() {
    const units = await bridge.units.getAll();
    for (const unit of units) {
      this.makeUnitDrawer(unit);
    }
    this.setScale(camera.transform.scale);
  }

  private updateUnit(unit: UnitChanneled) {
    let drawer = this.units.get(unit.id);
    if (drawer) {
      drawer.unit = unit;
    } else {
      drawer = this.makeUnitDrawer(unit);
    }
    this.updateDrawer(drawer);
  }

  private updateDrawer(drawer: UnitDrawer) {
    drawer.updateUi();
    this.updateNeighbours(drawer, drawer.unit.tile);
  }

  private updateNeighbours(drawer: UnitDrawer, tile: TileCoordsWithUnits) {
    for (const unitId of tile.units) {
      const otherDrawer = this.units.get(unitId);
      if (otherDrawer && otherDrawer !== drawer) {
        otherDrawer.unit.tile = tile;
        otherDrawer.correctPosition();
      }
    }
  }

  private makeUnitDrawer(unit: UnitChanneled) {
    const drawer = new UnitDrawer(unit);
    this.container.addChild(drawer.container);
    this.units.set(unit.id, drawer);
    return drawer;
  }

  public setScale(scale: number) {
    let alpha = 1;
    if (scale < 20) {
      alpha = Math.max(0, 1 - (20 - scale) / 8);
    }
    const unitScale = Math.pow(0.5 / TILE_SIZE / scale, 0.5);
    for (const drawer of this.units.values()) {
      drawer.container.alpha = alpha;
      drawer.container.scale.set(unitScale);
    }
  }

  clear() {
    for (const drawer of this.units.values()) {
      drawer.destroy();
    }
    this.units.clear();
  }
}

export class UnitDrawer {
  public container = new Container();
  private g = new Graphics();
  private isSelected = false;

  static selectionFilter = new OutlineFilter({
    color: 0xffffff,
    alpha: 1,
    thickness: 4,
    quality: 1,
  });

  static highlightFilter = new OutlineFilter({
    color: 0xffffff,
    alpha: 0.5,
    thickness: 4,
    quality: 1,
  });

  constructor(public unit: UnitChanneled) {
    const textures = getAssets().iconsSpritesheet.textures;
    const banner = new Sprite(textures[`unitBackground-${unit.type}.png`]);
    const icon = new Sprite(textures[`${unit.definitionId}.png`]);
    banner.tint = unit.cssColor;
    banner.anchor.set(0.5, 0.5);
    icon.anchor.set(0.5, 0.5);
    this.updateUi();
    this.updatePosition();
    this.container.addChild(banner, icon, this.g);

    this.container.interactive = true;
    this.container.on("pointerover", () => this.highlight());
    this.container.on("pointerout", () => this.dehighlight());
    this.container.on("click", () => mapUi.selectUnit(this.unit));
  }

  destroy() {
    this.container.destroy();
  }

  updateUi() {
    this.g.clear();
    this.g
      .circle(-35, -35, 8)
      .stroke({ width: 4, color: 0x000000 })
      .fill(this.getStatusColor());
  }

  private updatePosition() {
    const [x, y] = this.tileToUnitPosition(this.unit.tile);
    this.container.x = x;
    this.container.y = y;
  }

  correctPosition() {
    Animations.run({
      from: [this.container.x, this.container.y],
      to: this.tileToUnitPosition(this.unit.tile),
      duration: 100,
      fn: (pos) => {
        this.container.x = pos[0];
        this.container.y = pos[1];
      },
    });
  }

  animatePosition(tiles: TileCoordsWithUnits[]) {
    const positions = tiles
      .slice(1)
      .map((tile) => this.tileToUnitPosition(tile));

    Animations.sequence({
      animations: positions.map((pos, i) => {
        return Animations.new({
          from: [
            i === 0 ? this.container.x : positions[i - 1][0],
            i === 0 ? this.container.y : positions[i - 1][1],
          ],
          to: pos,
          duration: 150,
          fn: (pos) => {
            this.container.x = pos[0];
            this.container.y = pos[1];
          },
        });
      }),
    });
  }

  private getStatusColor() {
    if (this.unit.actions === "all") {
      return 0x00ff00;
    }

    if (this.unit.actions === "none") {
      return 0xff0000;
    }

    return 0xffff00;
  }

  highlight() {
    if (this.isSelected) {
      return;
    }
    this.container.filters = [UnitDrawer.highlightFilter];
  }

  dehighlight() {
    if (this.isSelected) {
      return;
    }
    this.container.filters = [];
  }

  select() {
    this.isSelected = true;
    this.container.zIndex = 1;
    this.container.filters = [UnitDrawer.selectionFilter];
  }

  deselect() {
    this.isSelected = false;
    this.container.filters = [];
    this.container.zIndex = 0;
  }

  tileToUnitPosition(
    tile: TileCoordsWithUnits,
    ignoreOthers = false,
  ): [number, number] {
    let x = tile.x + (tile.y % 2 ? 1 : 0.5);

    if (!ignoreOthers && tile.units.length > 1) {
      const index = tile.units.indexOf(this.unit.id);
      x += (index - (tile.units.length - 1) / 2) * 0.3;
    }

    return [x, (tile.y + 0.75) * 0.75];
  }
}
