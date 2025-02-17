import { bridge } from "@/bridge";
import { TileChanneled } from "@/core/serialization/channel";
import { TileImprovement } from "@/core/tile-improvements";
import { Climate, LandForm, SeaLevel, TileDirection } from "@/shared";
import { measureTime } from "@/utils";
import { Container, Graphics, Sprite } from "pixi.js";
import { getAssets } from "./assets";
import { PoliticsDrawer } from "./politicsDrawer";
import { drawTileSprite, drawTileSpriteCentered } from "./utils";

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
  terrainContainer = new Container({ label: "terrain" });

  tilesById = new Map<number, TileChanneled>();
  tileContainers = new Map<number, Container>();
  // Yields are not using per tile container but use a separate container for easy toggling.

  politicsDrawer!: PoliticsDrawer;

  tilesTextures = getAssets().tilesSpritesheet.textures;
  iconsTextures = getAssets().iconsSpritesheet.textures;

  constructor(private container: Container) {
    container.addChild(this.terrainContainer);

    bridge.tiles.updated$.subscribe((tiles) => {
      for (const tile of tiles) {
        this.updateTile(tile);
      }
    });

    bridge.game.start$.subscribe(() => {
      measureTime("build map", () => this.build());
    });
  }

  clear() {
    this.politicsDrawer.clear();
    this.terrainContainer.removeChildren();
    this.tileContainers.clear();
  }

  private async build() {
    const tiles = await bridge.tiles.getAll();

    this.politicsDrawer = new PoliticsDrawer(this.container);

    for (const tile of tiles) {
      this.tilesById.set(tile.id, tile);
      const container = new Container();
      container.zIndex = tile.y;
      this.tileContainers.set(tile.id, container);
      this.terrainContainer.addChild(container);
      this.drawTile(tile, container);
    }
  }

  private updateTile(tile: TileChanneled) {
    this.tilesById.set(tile.id, tile);
    const container = this.clearTile(tile);
    if (container) {
      this.drawTile(tile, container);
    }
  }

  private clearTile(tile: TileChanneled) {
    const container = this.tileContainers.get(tile.id);
    container?.removeChildren();
    return container;
  }

  private drawTile(tile: TileChanneled, container: Container) {
    this.drawTerrain(tile, container);
    this.drawImprovement(tile, container);
    this.drawResource(tile, container);
    this.drawRoads(tile, container);
    this.drawCity(tile, container);
    this.drawRiver(tile, container);
    this.drawYields(tile, container);
  }

  private drawTerrain(tile: TileChanneled, container: Container) {
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

    const sprite = drawTileSprite(tile, this.tilesTextures[textureName]);

    container.addChild(sprite);
  }

  private drawImprovement(tile: TileChanneled, container: Container) {
    let sprite: Sprite | null = null;
    if (tile.improvement === TileImprovement.farm) {
      sprite = drawTileSpriteCentered(tile, this.tilesTextures["field.png"]);
    } else if (tile.improvement === TileImprovement.mine) {
      sprite = drawTileSpriteCentered(tile, this.tilesTextures["mines.png"]);
    } else if (tile.improvement === TileImprovement.sawmill) {
      sprite = drawTileSpriteCentered(
        tile,
        this.tilesTextures["forester_hut.png"],
      );
    }

    if (sprite) {
      container.addChild(sprite);
    }
  }

  private drawResource(tile: TileChanneled, container: Container) {
    if (!tile.resource) {
      return;
    }

    const textureName = `${tile.resource.id}.png`;
    const sprite = drawTileSpriteCentered(
      tile,
      this.iconsTextures[textureName],
      0.4,
    );
    sprite.y += 0.3;
    container.addChild(sprite);
  }

  private drawRoads(tile: TileChanneled, container: Container) {
    if (tile.road === null) {
      return;
    }

    const textureName = `hexRoad-${tile.roads}-00.png`;
    const sprite = drawTileSprite(tile, this.tilesTextures[textureName]);
    container.addChild(sprite);
  }

  private drawCity(tile: TileChanneled, container: Container) {
    if (tile.cityId === null) {
      return;
    }

    const g = drawTileSprite(tile, this.tilesTextures["village.png"]);
    container.addChild(g);
  }

  private drawRiver(tile: TileChanneled, container: Container) {
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

  private drawYields(tile: TileChanneled, container: Container) {
    const g = new Graphics();

    g.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.025;
    g.position.y = tile.y * 0.75 - 0.35;

    this.drawYield(g, 0.55, tile.yields.food, 0x00ff00);
    this.drawYield(g, 0.65, tile.yields.production, 0xffaa00);

    container.addChild(g);
  }

  private drawYield(g: Graphics, y: number, quantity: number, color: number) {
    for (let i = 0; i < quantity; i++) {
      const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
      g.rect(x, y, 0.05, 0.05);
    }
    g.fill({ color });
  }
}
