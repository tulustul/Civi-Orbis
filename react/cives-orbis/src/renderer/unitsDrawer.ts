import { game, Tile, Unit } from "@/api";
import { Container, Graphics, Sprite } from "pixi.js";
import { OutlineFilter } from "pixi-filters";
import { merge, takeUntil } from "rxjs";
import { Animations } from "./animation";
import { getAssets } from "./assets";
import { TILE_SIZE } from "./constants";
import { mapUi } from "@/ui";

export class UnitsDrawer {
  units = new Map<number, UnitDrawer>();
  tilesByUnit = new Map<number, Tile>();

  private selectedDrawer: UnitDrawer | null = null;

  constructor(private container: Container) {
    game.init$.subscribe(() => {
      this.init();
    });
  }

  private init() {
    this.clear();

    if (!game.state) {
      return;
    }

    merge(game.state.unitSpawned$, game.state.unitUpdated$)
      .pipe(takeUntil(game.stop$))
      .subscribe((unit) => {
        this.updateUnit(unit);
      });

    game.state.unitDestroyed$.pipe(takeUntil(game.stop$)).subscribe((unit) => {
      const drawer = this.units.get(unit.id);
      if (drawer) {
        drawer.destroy();
        this.units.delete(unit.id);
      }
    });

    game.state.unitMove$.pipe(takeUntil(game.stop$)).subscribe((move) => {
      const drawer = this.units.get(move.unit.id);
      if (drawer) {
        drawer.animatePosition(move.tiles);
        this.updateNeighbours(drawer);
        this.tilesByUnit.set(drawer.unit.id, drawer.unit.tile);
      }
    });

    mapUi.selectedUnit$.pipe(takeUntil(game.stop$)).subscribe((unit) => {
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

    this.build();
  }

  private build() {
    for (const unit of game.state!.units) {
      this.makeUnitDrawer(unit);
    }
  }

  private updateUnit(unit: Unit) {
    let drawer = this.units.get(unit.id);
    if (!drawer) {
      drawer = this.makeUnitDrawer(unit);
    }
    this.updateDrawer(drawer);
  }

  private updateDrawer(drawer: UnitDrawer) {
    drawer.updateUi();
    this.updateNeighbours(drawer);
    this.tilesByUnit.set(drawer.unit.id, drawer.unit.tile);
  }

  private updateNeighbours(drawer: UnitDrawer) {
    const lastTile = this.tilesByUnit.get(drawer.unit.id);
    if (lastTile) {
      for (const unit of lastTile.units) {
        const otherDrawer = this.units.get(unit.id);
        if (otherDrawer && otherDrawer !== drawer) {
          otherDrawer.correctPosition();
        }
      }
    }
  }

  private makeUnitDrawer(unit: Unit) {
    const drawer = new UnitDrawer(unit);
    this.container.addChild(drawer.container);
    this.units.set(unit.id, drawer);
    this.tilesByUnit.set(unit.id, unit.tile);
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
    this.tilesByUnit.clear();
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

  constructor(public unit: Unit) {
    const textures = getAssets().iconsSpritesheet.textures;
    const type = unit.definition.strength > 0 ? "military" : "civilian";
    const banner = new Sprite(textures[`unitBackground-${type}.png`]);
    const icon = new Sprite(textures[`${unit.definition.id}.png`]);
    banner.tint = unit.player.cssColor;
    banner.anchor.set(0.5, 0.5);
    icon.anchor.set(0.5, 0.5);
    this.container.scale.x = 1 / TILE_SIZE;
    this.container.scale.y = 1 / TILE_SIZE;
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
    const [x, y] = tileToUnitPosition(this.unit, this.unit.tile);
    this.container.x = x;
    this.container.y = y;
  }

  correctPosition() {
    Animations.run({
      from: [this.container.x, this.container.y],
      to: tileToUnitPosition(this.unit, this.unit.tile),
      duration: 100,
      fn: (pos) => {
        this.container.x = pos[0];
        this.container.y = pos[1];
      },
    });
  }

  animatePosition(tiles: Tile[]) {
    const positions = tiles
      .slice(1)
      .map((tile) => tileToUnitPosition(this.unit, tile));

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
    if (this.unit.actionPointsLeft === this.unit.definition.actionPoints) {
      return 0x00ff00;
    }

    if (this.unit.actionPointsLeft === 0) {
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
}

function tileToUnitPosition(
  unit: Unit,
  tile: Tile,
  ignoreOthers = false,
): [number, number] {
  let x = tile.x + (tile.y % 2 ? 1 : 0.5);

  const tileUnits = tile.units;
  if (!ignoreOthers && tileUnits.length > 1) {
    const index = tileUnits.indexOf(unit);
    x += (index - (tileUnits.length - 1) / 2) * 0.3;
  }

  return [x, (tile.y + 0.75) * 0.75];
}
