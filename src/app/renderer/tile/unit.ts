import * as PIXI from "pixi.js";

import { takeUntil } from "rxjs/operators";

import { TileContainer } from "../tile-container";
import { GameApi } from "src/app/api";
import { Unit } from "src/app/api/unit";
import { GameRenderer } from "../renderer";
import { Tile } from "src/app/api/tile.interface";
import { TILE_SIZE } from "../constants";

export class UnitsDrawer {
  unitContainers = new Map<Unit, PIXI.Container>();

  healthBars = new Map<Unit, PIXI.Container>();

  constructor(
    private game: GameApi,
    private renderer: GameRenderer,
    private container: TileContainer,
  ) {
    game.init$.subscribe((state) => {
      state.unitSpawned$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.spawn(unit));

      state.unitUpdated$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.update(unit));

      state.unitDestroyed$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.destroy(unit));
    });
  }

  build() {
    if (!this.game.state) {
      return;
    }

    for (const unit of this.game.state.units) {
      this.spawn(unit);
    }
  }

  spawn(unit: Unit) {
    const backgroundTextureName = `unitBackground-${unit.definition.type}.png`;
    const backgroundTexture = this.textures[backgroundTextureName];

    const unitTextureName = `unit-${unit.definition.id}.png`;
    const unitTexture = this.textures[unitTextureName];

    const unitContainer = new PIXI.Container();
    this.container.addChild(unitContainer, unit.tile);

    const backgroundSprite = new PIXI.Sprite(backgroundTexture);
    backgroundSprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);

    unitContainer.addChild(backgroundSprite);
    backgroundSprite.tint = unit.player.color;

    const unitSprite = new PIXI.Sprite(unitTexture);
    unitSprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
    unitSprite.position.x = backgroundSprite.width / 2 - unitSprite.width / 2;
    unitSprite.position.y = backgroundSprite.height / 2 - unitSprite.height / 2;
    unitContainer.addChild(unitSprite);

    this.unitContainers.set(unit, unitContainer);

    this.layoutTile(unit.tile);

    backgroundSprite.interactive = true;

    backgroundSprite.on("pointerdown", (event) => {
      if (event.data.button === 0) {
        this.renderer.mapUi.selectUnit(unit);
      }
    });

    this.drawHealthBar(unit);
  }

  destroy(unit: Unit) {
    const unitContainer = this.unitContainers.get(unit);
    if (!unitContainer) {
      return;
    }

    this.unitContainers.delete(unit);

    unitContainer.destroy();
  }

  update(unit: Unit) {
    const objs = this.unitContainers.get(unit)!;
    if (!objs) {
      return;
    }

    const oldTile = this.container.childrenMap.get(objs[0]);
    if (oldTile && oldTile.units.length) {
      this.layoutTile(oldTile);
    }

    this.layoutTile(unit.tile);

    this.drawHealthBar(unit);
  }

  layoutTile(tile: Tile) {
    const isVisible = this.game.state!.trackedPlayer.exploredTiles.has(tile);

    let x = 1 / (tile.units.length + 1) - 0.5;
    const xOffset = 1 / (tile.units.length + 1);

    for (const unit of tile.units) {
      const unitContainer = this.unitContainers.get(unit);
      if (!unitContainer) {
        // the unitContainer may not be created yet.
        continue;
      }

      const sprite = unitContainer.children[0] as PIXI.Sprite;
      unitContainer.position.x =
        tile.x + (tile.y % 2 ? 0.5 : 0) + 0.5 - sprite.width / 2 + x;
      unitContainer.position.y = tile.y * 0.75 + 0.5 - sprite.height / 2;

      if (
        unit.id === this.renderer.mapUi.selectedUnit?.id &&
        tile.units.length > 1
      ) {
        unitContainer.position.y -= 0.1;
      }

      this.container.moveChild(unitContainer, unit.tile);
      unitContainer.visible = isVisible;

      x += xOffset;
    }
  }

  drawHealthBar(unit: Unit) {
    const unitContainer = this.unitContainers.get(unit);
    if (!unitContainer) {
      return;
    }

    const existingHealthBar = this.healthBars.get(unit);
    if (existingHealthBar) {
      existingHealthBar.destroy();
    }

    if (unit.health === 100) {
      return;
    }

    const healthBarContainer = new PIXI.Container();
    this.healthBars.set(unit, healthBarContainer);
    unitContainer.addChild(healthBarContainer);

    const maxBarWidth = 0.4;
    const barWidth = (maxBarWidth * unit.health) / 100;

    let color = 0x65ea4b;
    if (unit.health < 35) {
      color = 0xff2424;
    } else if (unit.health < 70) {
      color = 0xffb42c;
    }

    let g = new PIXI.Graphics();
    g.position.y = -0.03;
    g.beginFill(color);
    g.drawRect(0, 0, barWidth, 0.03);
    g.endFill();
    healthBarContainer.addChild(g);

    g = new PIXI.Graphics();
    g.position.y = -0.03;
    g.beginFill(0x000000);
    g.drawRect(barWidth, 0, maxBarWidth - barWidth, 0.03);
    g.endFill();
    healthBarContainer.addChild(g);
  }

  clear() {
    this.container.destroyAllChildren();
    this.unitContainers.clear();
  }

  protected get textures() {
    return this.renderer.textures;
  }
}
