import { takeUntil } from "rxjs/operators";

import { GameRenderer } from "./renderer";
import { GameApi } from "../api";
import { GameState } from "../api/state";
import { PoliticsDrawer } from "./politics";
import { Tile } from "../api/tile.interface";
import { Container, Graphics, Sprite } from "pixi.js";
import { drawTileSprite, drawTileSpriteCentered } from "./utils";
import { measureTime } from "src/app/utils";
import { Climate, LandForm, SeaLevel, TileDirection } from "src/app/shared";
import { TileImprovement } from "src/app/core/tile-improvements";
import { MapUi } from "src/app/ui/map-ui";

const SEA_TEXTURES: Record<SeaLevel, string> = {
  [SeaLevel.deep]: "hexOcean00.png",
  [SeaLevel.shallow]: "hexShallowWater00.png",
  [SeaLevel.none]: "",
};

const CLIMATE_TEXTURES: Record<Climate, Record<LandForm, string>> = {
  [Climate.continental]: {
    [LandForm.plains]: "hexPlainsCold00.png",
    [LandForm.hills]: "hexHillsCold00.png",
    [LandForm.mountains]: "hexMountain00.png",
  },
  [Climate.desert]: {
    [LandForm.plains]: "hexSand00.png",
    [LandForm.hills]: "hexHillsDesert00.png",
    [LandForm.mountains]: "hexMountainDesert00.png",
  },
  [Climate.oceanic]: {
    [LandForm.plains]: "hexPlains00.png",
    [LandForm.hills]: "hexHighlands00.png",
    [LandForm.mountains]: "hexMountain00.png",
  },
  [Climate.savanna]: {
    [LandForm.plains]: "hexScrublands00.png",
    [LandForm.hills]: "hexHillsSavanna00.png",
    [LandForm.mountains]: "hexMountainDesert00.png",
  },
  [Climate.tropical]: {
    [LandForm.plains]: "hexTropicalPlains00.png",
    [LandForm.hills]: "hexHills00.png",
    [LandForm.mountains]: "hexMountain00.png",
  },
  [Climate.tundra]: {
    [LandForm.plains]: "hexPlainsColdSnowTransition00.png",
    [LandForm.hills]: "hexHillsColdSnowTransition00.png",
    [LandForm.mountains]: "hexMountainSnow00.png",
  },
  [Climate.arctic]: {
    [LandForm.plains]: "hexPlainsColdSnowCovered00.png",
    [LandForm.hills]: "hexHillsColdSnowCovered00.png",
    [LandForm.mountains]: "hexMountainSnow00.png",
  },
};

const FOREST_TEXTURES: Record<Climate, string> = {
  [Climate.continental]: "hexForestPine00.png",
  [Climate.oceanic]: "hexForestBroadleaf00.png",
  [Climate.tropical]: "hexJungle00.png",
  [Climate.tundra]: "hexForestPineSnowTransition00.png",
  [Climate.savanna]: "",
  [Climate.desert]: "",
  [Climate.arctic]: "",
};

export class MapDrawer {
  yieldsContainer = new Container({ label: "yields", isRenderGroup: true });

  tileContainers = new Map<Tile, Container>();
  // Yields are not using per tile container but use a separate container for easy toggling.
  tileYields = new Map<Tile, Graphics>();

  politicsDrawer!: PoliticsDrawer;

  constructor(
    private container: Container,
    private game: GameApi,
    private renderer: GameRenderer,
    private mapUi: MapUi,
  ) {
    container.addChild(this.yieldsContainer);
    this.yieldsContainer.zIndex = 1000;

    this.game.init$.subscribe((state) => {
      measureTime("build map", () => this.build(state));

      state.tilesUpdated$
        .pipe(takeUntil(this.game.stop$))
        .subscribe((tiles) => {
          for (const tile of tiles) {
            this.updateTile(tile);
          }
        });

      // cities
      state.citySpawned$
        .pipe(takeUntil(game.stop$))
        .subscribe((city) => this.updateTile(city.tile));

      // state.cityUpdated$
      //   .pipe(takeUntil(game.stop$))
      //   .subscribe((city) => this.updateTile(city.tile));

      state.cityDestroyed$
        .pipe(takeUntil(game.stop$))
        .subscribe((city) => this.updateTile(city.tile));

      mapUi.yieldsVisible$
        .pipe(takeUntil(game.stop$))
        .subscribe((visible) => (this.yieldsContainer.visible = visible));
    });

    this.game.stop$.subscribe(() => this.clear());
  }

  private get textures() {
    return this.renderer.spritesheet.textures;
  }

  clear() {}

  private build(gameState: GameState) {
    this.politicsDrawer = new PoliticsDrawer(gameState, this.renderer);

    for (let x = 0; x < gameState.map.width; x++) {
      for (let y = 0; y < gameState.map.height; y++) {
        const tile = gameState.map.tiles[x][y];
        const container = new Container();
        container.zIndex = y;
        this.tileContainers.set(tile, container);
        this.container.addChild(container);
        this.drawTile(tile, container);
      }
    }
  }

  private updateTile(tile: Tile) {
    const container = this.clearTile(tile);
    if (container) {
      this.drawTile(tile, container);
    }
  }

  private clearTile(tile: Tile) {
    const container = this.tileContainers.get(tile);
    if (container) {
      for (const child of container.children) {
        child.destroy();
      }
    }

    const yieldsGraphics = this.tileYields.get(tile);
    if (yieldsGraphics) {
      yieldsGraphics.destroy();
    }

    return container;
  }

  private drawTile(tile: Tile, container: Container) {
    this.drawTerrain(tile, container);
    this.drawImprovement(tile, container);
    this.drawResource(tile, container);
    this.drawRoads(tile, container);
    this.drawCity(tile, container);
    this.drawRiver(tile, container);
    this.drawYields(tile);
  }

  private drawTerrain(tile: Tile, container: Container) {
    let textureName: string;

    if (tile.wetlands) {
      if (tile.forest) {
        textureName = "hexSwamp00.png";
      } else {
        textureName = "hexMarsh00.png";
      }
    } else if (tile.forest) {
      textureName = FOREST_TEXTURES[tile.climate];
    } else if (tile.seaLevel === SeaLevel.none) {
      if (
        tile.climate === Climate.desert &&
        tile.landForm === LandForm.plains &&
        tile.riverParts.length
      ) {
        textureName = "hexGrassySand00.png";
      } else {
        textureName = CLIMATE_TEXTURES[tile.climate][tile.landForm];
      }
    } else {
      textureName = SEA_TEXTURES[tile.seaLevel];
    }

    const sprite = drawTileSprite(tile, this.textures[textureName]);

    container.addChild(sprite);
  }

  private drawImprovement(tile: Tile, container: Container) {
    let sprite: Sprite | null = null;
    if (tile.improvement === TileImprovement.farm) {
      sprite = drawTileSpriteCentered(tile, this.textures["field.png"]);
    } else if (tile.improvement === TileImprovement.mine) {
      sprite = drawTileSpriteCentered(tile, this.textures["mines.png"]);
    } else if (tile.improvement === TileImprovement.sawmill) {
      sprite = drawTileSpriteCentered(tile, this.textures["forester_hut.png"]);
    }

    if (sprite) {
      container.addChild(sprite);
    }
  }

  private drawResource(tile: Tile, container: Container) {
    if (!tile.resource) {
      return;
    }

    const textureName = `${tile.resource.id}.png`;
    const sprite = drawTileSpriteCentered(
      tile,
      this.textures[textureName],
      0.4,
    );
    sprite.y += 0.3;
    container.addChild(sprite);
  }

  private drawRoads(tile: Tile, container: Container) {
    if (tile.road === null) {
      return;
    }

    const roadId = tile.fullNeighbours
      .map((n) => (!n || n.road === null ? "0" : "1"))
      .join("");

    const textureName = `hexRoad-${roadId}-00.png`;
    const sprite = drawTileSprite(tile, this.textures[textureName]);
    container.addChild(sprite);
  }

  private drawCity(tile: Tile, container: Container) {
    if (!tile.city) {
      return;
    }

    const g = drawTileSprite(tile.city.tile, this.textures["village.png"]);
    this.container.addChild(g);
  }

  private drawRiver(tile: Tile, container: Container) {
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

  private drawYields(tile: Tile) {
    const g = new Graphics();

    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
    g.position.y = tile.y * 0.75;

    this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
    this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);

    this.yieldsContainer.addChild(g);
    this.tileYields.set(tile, g);

    return [g];
  }

  private drawYield(g: Graphics, y: number, quantity: number, color: number) {
    for (let i = 0; i < quantity; i++) {
      const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
      g.rect(x, y, 0.05, 0.05);
    }
    g.fill({ color });
  }
}
