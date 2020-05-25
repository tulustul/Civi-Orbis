import * as PIXI from "pixi.js";

import { takeUntil } from "rxjs/operators";

import { drawTileSpriteCentered, putSpriteAtTileCentered } from "../utils";
import { TileContainer } from "../tile-container";
import { GameApi } from "src/app/api";
import { Unit } from "src/app/api/unit";
import { GameRenderer } from "../renderer";
import { Tile } from "src/app/api/tile.interface";

export class UnitsDrawer {
  unitGraphics = new Map<Unit, PIXI.Sprite[]>();

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

    const objects: PIXI.Sprite[] = [];

    const backgroundSprite = drawTileSpriteCentered(
      unit.tile,
      backgroundTexture,
    );

    // TODO don't need set position here as layoutTile will do it.
    this.container.addChild(backgroundSprite, unit.tile);
    objects.push(backgroundSprite);
    backgroundSprite.tint = unit.player.color;

    const unitSprite = drawTileSpriteCentered(unit.tile, unitTexture);
    this.container.addChild(unitSprite, unit.tile);
    objects.push(unitSprite);

    this.unitGraphics.set(unit, objects);

    this.layoutTile(unit.tile);

    backgroundSprite.interactive = true;

    backgroundSprite.on("pointerdown", (event) => {
      if (event.data.button === 0) {
        this.renderer.mapUi.selectUnit(unit);
      }
    });
  }

  destroy(unit: Unit) {
    const objs = this.unitGraphics.get(unit);
    if (!objs) {
      return;
    }

    this.unitGraphics.delete(unit);

    for (const obj of objs) {
      obj.destroy();
    }
  }

  update(unit: Unit) {
    const objs = this.unitGraphics.get(unit)!;
    if (!objs) {
      return;
    }

    const oldTile = this.container.childrenMap.get(objs[0]);
    if (oldTile && oldTile.units.length) {
      this.layoutTile(oldTile);
    }

    this.layoutTile(unit.tile);
  }

  layoutTile(tile: Tile) {
    const isVisible = this.game.state!.trackedPlayer.exploredTiles.has(tile);

    let x = 1 / (tile.units.length + 1) - 0.5;
    const xOffset = 1 / (tile.units.length + 1);

    for (const unit of tile.units) {
      const sprites = this.unitGraphics.get(unit);
      if (!sprites) {
        // the sprites may not be created yet.
        continue;
      }

      for (const sprite of sprites) {
        putSpriteAtTileCentered(unit.tile, sprite);
        sprite.position.x += x;
        if (
          unit.id === this.renderer.mapUi.selectedUnit?.id &&
          tile.units.length > 1
        ) {
          sprite.position.y -= 0.1;
        }

        this.container.moveChild(sprite, unit.tile);
        sprite.visible = isVisible;
      }

      x += xOffset;
    }
  }

  clear() {
    this.container.destroyAllChildren();
    this.unitGraphics.clear();
  }

  protected get textures() {
    return this.renderer.textures;
  }
}
