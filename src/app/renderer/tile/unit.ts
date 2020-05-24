import * as PIXIE from "pixi.js";

import { takeUntil } from "rxjs/operators";

import { drawTileSpriteCentered, putSpriteAtTileCentered } from "../utils";
import { TileContainer } from "../tile-container";
import { GameApi } from "src/app/api";
import { Unit } from "src/app/api/unit";
import { GameRenderer } from "../renderer";

export class UnitsDrawer {
  unitGraphics = new Map<Unit, PIXIE.Sprite[]>();

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
    this.container.addChild(backgroundSprite, unit.tile);
    objects.push(backgroundSprite);
    backgroundSprite.tint = unit.player.color;

    const unitSprite = drawTileSpriteCentered(unit.tile, unitTexture);
    this.container.addChild(unitSprite, unit.tile);
    objects.push(unitSprite);

    this.unitGraphics.set(unit, objects);

    if (!this.game.state!.trackedPlayer.exploredTiles.has(unit.tile)) {
      backgroundSprite.visible = false;
      unitSprite.visible = false;
    }
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

    for (const sprite of objs) {
      putSpriteAtTileCentered(unit.tile, sprite);

      this.container.moveChild(sprite, unit.tile);

      sprite.visible = this.game.state!.trackedPlayer.exploredTiles.has(
        unit.tile,
      );
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
