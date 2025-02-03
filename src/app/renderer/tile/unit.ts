import { Unit } from "src/app/api/unit";
import { GameRenderer } from "../renderer";
import { Tile } from "src/app/api/tile.interface";
import { TILE_SIZE } from "../constants";
import { GameApi } from "src/app/api";
import { TileContainer, TileWrapperContainer } from "../tile-container";
import { Camera } from "../camera";
import { GameState } from "src/app/api/state";
import { takeUntil } from "rxjs/operators";
import { merge } from "rxjs";
import { Container, Graphics, Sprite } from "pixi.js";

export class UnitsDrawer {
  tilesMap = new Map<Unit, Tile>();

  container = new TileWrapperContainer();

  tileContainer: TileContainer;

  unitContainerMap = new Map<Unit, Container>();

  healthBarsMap = new Map<Unit, Container>();

  constructor(
    private game: GameApi,
    private renderer: GameRenderer,
    private camera: Camera,
  ) {
    this.tileContainer = new TileContainer(this.camera.tileBoundingBox);

    game.init$.subscribe((state) => {
      state.unitSpawned$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.draw(unit));

      state.unitUpdated$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.update(unit));

      state.unitDestroyed$
        .pipe(takeUntil(game.stop$))
        .subscribe((unit) => this.destroy(unit));

      merge(state.trackedPlayer$, state.tilesShowedAdded$, state.tilesShowed$)
        .pipe(takeUntil(game.stop$))
        .subscribe(() => this.updateUnitVisibility());
    });
  }

  build(state: GameState) {
    this.container.addChild(this.tileContainer);
    this.container.bindToMap(state.map);
    this.tileContainer.bindToMap(state.map);

    for (const unit of state.units) {
      this.draw(unit);
    }
  }

  draw(unit: Unit) {
    const backgroundType =
      unit.definition.strength > 0 ? "military" : "civilian";
    const backgroundTextureName = `unitBackground-${backgroundType}.png`;
    const backgroundTexture = this.textures[backgroundTextureName];

    const unitTextureName = `${unit.definition.id}.png`;
    const unitTexture = this.textures[unitTextureName];

    const unitContainer = new Container();
    this.tileContainer.addChildToTile(unitContainer, unit.tile);

    const backgroundSprite = new Sprite(backgroundTexture);
    backgroundSprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);

    unitContainer.addChild(backgroundSprite);
    backgroundSprite.tint = unit.player.color;

    const unitSprite = new Sprite(unitTexture);
    unitSprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
    unitSprite.position.x = backgroundSprite.width / 2 - unitSprite.width / 2;
    unitSprite.position.y = backgroundSprite.height / 2 - unitSprite.height / 2;
    unitContainer.addChild(unitSprite);

    this.unitContainerMap.set(unit, unitContainer);

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
    const unitContainer = this.unitContainerMap.get(unit);
    if (!unitContainer) {
      return;
    }

    this.unitContainerMap.delete(unit);
    this.tilesMap.delete(unit);
    this.healthBarsMap.delete(unit);

    unitContainer.destroy();
  }

  update(unit: Unit) {
    const objs = this.unitContainerMap.get(unit)!;
    if (!objs) {
      return;
    }

    const oldTile = this.tilesMap.get(unit);
    if (oldTile && oldTile.units.length) {
      this.layoutTile(oldTile);
    }

    this.layoutTile(unit.tile);

    this.drawHealthBar(unit);
  }

  layoutTile(tile: Tile) {
    const isVisible = this.game.state!.trackedPlayer.visibleTiles.has(tile);

    let x = 1 / (tile.units.length + 1) - 0.5;
    const xOffset = 1 / (tile.units.length + 1);

    for (const unit of tile.units) {
      this.tilesMap.set(unit, unit.tile);
      const unitContainer = this.unitContainerMap.get(unit);
      if (!unitContainer) {
        // the unitContainer may not be created yet.
        continue;
      }

      const sprite = unitContainer.children[0] as Sprite;
      unitContainer.position.x =
        tile.x + (tile.y % 2 ? 0.5 : 0) + 0.5 - sprite.width / 2 + x;
      unitContainer.position.y = tile.y * 0.75 + 0.5 - sprite.height / 2;

      if (
        unit.id === this.renderer.mapUi.selectedUnit?.id &&
        tile.units.length > 1
      ) {
        unitContainer.position.y -= 0.1;
      }

      this.tileContainer.moveChild(unitContainer, unit.tile);

      unitContainer.visible = isVisible;

      x += xOffset;
    }
  }

  drawHealthBar(unit: Unit) {
    const unitContainer = this.unitContainerMap.get(unit);
    if (!unitContainer) {
      return;
    }

    const existingHealthBar = this.healthBarsMap.get(unit);
    if (existingHealthBar) {
      existingHealthBar.destroy();
    }

    if (unit.health === 100) {
      return;
    }

    const healthBarContainer = new Container();
    this.healthBarsMap.set(unit, healthBarContainer);
    unitContainer.addChild(healthBarContainer);

    const maxBarWidth = 0.4;
    const barWidth = (maxBarWidth * unit.health) / 100;

    let color = 0x65ea4b;
    if (unit.health < 35) {
      color = 0xff2424;
    } else if (unit.health < 70) {
      color = 0xffb42c;
    }

    let g = new Graphics();
    g.position.y = -0.03;
    g.rect(0, 0, barWidth, 0.03);
    g.fill({ color });
    healthBarContainer.addChild(g);

    g = new Graphics();
    g.position.y = -0.03;
    g.rect(barWidth, 0, maxBarWidth - barWidth, 0.03);
    g.fill({ color: 0x000000 });
    healthBarContainer.addChild(g);
  }

  updateUnitVisibility() {
    const visibleTiles = this.game.state!.trackedPlayer.visibleTiles;

    for (const [unit, container] of this.unitContainerMap.entries()) {
      container.visible = visibleTiles.has(unit.tile);
    }
  }

  clear() {
    this.tileContainer.destroyAllChildren();
    this.unitContainerMap.clear();
  }

  protected get textures() {
    return this.renderer.spritesheet.textures;
  }
}
