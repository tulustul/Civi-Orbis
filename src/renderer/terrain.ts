import { bridge } from "@/bridge";
import { TileChanneled } from "@/core/serialization/channel";
import { TileImprovement } from "@/core/tile-improvements";
import { Climate, LandForm, SeaLevel, TileDirection } from "@/shared";
import { measureTime } from "@/utils";
import { Container, Graphics, IRenderLayer, Sprite } from "pixi.js";
import { getAssets } from "./assets";
import { putContainerAtTile, putSpriteAtTileCentered } from "./utils";

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

const IMPROVEMENT_TEXTURES: Record<TileImprovement, string> = {
  [TileImprovement.farm]: "field.png",
  [TileImprovement.mine]: "mines.png",
  [TileImprovement.sawmill]: "forester_hut.png",
};

export class MapDrawer {
  terrainContainer = new Container({ label: "terrain" });

  tileDrawers = new Map<number, TileDrawer>();

  constructor(container: Container, private yieldsLayer: IRenderLayer) {
    container.addChild(this.terrainContainer);

    bridge.tiles.updated$.subscribe((tiles) => {
      const t0 = performance.now();
      for (const tile of tiles) {
        this.updateTile(tile);
      }
      const t1 = performance.now();
      console.log("Call to updateTile took " + (t1 - t0) + " milliseconds.");
    });

    bridge.game.start$.subscribe(() => {
      measureTime("build map", () => this.build());
    });
  }

  clear() {
    for (const drawer of this.tileDrawers.values()) {
      drawer.destroy();
    }
    this.tileDrawers.clear();
  }

  private async build() {
    this.clear();
    const tiles = await bridge.tiles.getAll();

    for (const tile of tiles) {
      const drawer = new TileDrawer(tile, this.yieldsLayer);
      this.tileDrawers.set(tile.id, drawer);
      this.terrainContainer.addChild(drawer.container);
      drawer.draw(tile);
    }
  }

  private updateTile(tile: TileChanneled) {
    const drawer = this.tileDrawers.get(tile.id);
    if (drawer) {
      drawer.draw(tile);
    }
  }
}

class TileDrawer {
  container = new Container();

  tilesTextures = getAssets().tilesSpritesheet.textures;
  iconsTextures = getAssets().iconsSpritesheet.textures;

  yieldsGraphics = new Graphics();
  terrainSprite = new Sprite(this.tilesTextures["hexPlains00.png"]);
  resourceSprite: Sprite | null = null;
  improvementSprite: Sprite | null = null;
  roadSprite: Sprite | null = null;
  citySprite: Sprite | null = null;
  riverGraphics: Graphics | null = null;

  constructor(private tile: TileChanneled, private yieldsLayer: IRenderLayer) {
    this.container.zIndex = tile.y;

    putContainerAtTile(this.terrainSprite, tile);
    this.container.addChild(this.terrainSprite);
  }

  public destroy() {
    this.yieldsLayer.detach(this.yieldsGraphics);
    this.container.destroy({ children: true });
  }

  public draw(tile: TileChanneled) {
    this.tile = tile;
    this.drawTerrain();
    this.drawImprovement();
    this.drawResource();
    this.drawRoads();
    this.drawCity();
    this.drawRiver();
    this.drawYields();
  }

  private drawTerrain() {
    let textureName: string;

    if (this.tile.wetlands) {
      if (this.tile.forest) {
        textureName = "hexSwamp00.png";
      } else {
        textureName = "hexMarsh00.png";
      }
    } else if (this.tile.forest) {
      textureName = FOREST_TEXTURES[this.tile.climate];
    } else if (this.tile.seaLevel === SeaLevel.none) {
      if (
        this.tile.climate === Climate.desert &&
        this.tile.landForm === LandForm.plains &&
        this.tile.riverParts.length
      ) {
        textureName = "hexGrassySand00.png";
      } else {
        textureName = CLIMATE_TEXTURES[this.tile.climate][this.tile.landForm];
      }
    } else {
      textureName = SEA_TEXTURES[this.tile.seaLevel];
    }

    this.terrainSprite.texture = this.tilesTextures[textureName];
  }

  private drawImprovement() {
    if (this.tile.improvement === null) {
      if (this.improvementSprite) {
        this.improvementSprite.visible = false;
      }
      return;
    }

    if (!this.improvementSprite) {
      this.improvementSprite = new Sprite();
      this.container.addChild(this.improvementSprite);
    }

    this.improvementSprite.visible = true;

    let textureName = IMPROVEMENT_TEXTURES[this.tile.improvement];
    this.improvementSprite.texture = this.tilesTextures[textureName];
    putSpriteAtTileCentered(this.improvementSprite, this.tile);
  }

  private drawResource() {
    if (this.tile.resource === null) {
      if (this.resourceSprite) {
        this.resourceSprite.visible = false;
      }
      return;
    }

    if (!this.resourceSprite) {
      this.resourceSprite = new Sprite();
      this.resourceSprite.zIndex = 20;
      this.container.addChild(this.resourceSprite);
    }

    this.resourceSprite.visible = true;

    const textureName = `${this.tile.resource.id}.png`;
    this.resourceSprite.texture = this.iconsTextures[textureName];
    putSpriteAtTileCentered(this.resourceSprite, this.tile, 0.4);
    this.resourceSprite.y += 0.3;
  }

  private drawRoads() {
    if (this.tile.road === null) {
      if (this.roadSprite) {
        this.roadSprite.visible = false;
      }
      return;
    }

    if (!this.roadSprite) {
      this.roadSprite = new Sprite();
      this.roadSprite.zIndex = 10;
      this.container.addChild(this.roadSprite);
    }

    this.roadSprite.visible = true;

    const textureName = `hexRoad-${this.tile.roads}-00.png`;
    this.roadSprite.texture = this.tilesTextures[textureName];
    putContainerAtTile(this.roadSprite, this.tile);
  }

  private drawCity() {
    if (this.tile.cityId === null) {
      if (this.citySprite) {
        this.citySprite.visible = false;
      }
      return;
    }

    if (!this.citySprite) {
      this.citySprite = new Sprite();
      this.citySprite.texture = this.tilesTextures["village.png"];
      this.container.addChild(this.citySprite);
      putContainerAtTile(this.citySprite, this.tile);
    }

    this.citySprite.visible = true;
  }

  private drawRiver() {
    if (!this.tile.riverParts.length) {
      if (this.riverGraphics) {
        this.riverGraphics.clear();
        this.riverGraphics.visible = false;
      }
      return;
    }

    if (!this.riverGraphics) {
      this.riverGraphics = new Graphics();
      this.container.addChild(this.riverGraphics);
    }

    this.riverGraphics.visible = true;

    // TODO avoid rendering the same river twice.

    this.riverGraphics.position.x = this.tile.x + (this.tile.y % 2 ? 0.5 : 0);
    this.riverGraphics.position.y = this.tile.y * 0.75;
    this.container.addChild(this.riverGraphics);

    for (const river of this.tile.riverParts) {
      if (river === TileDirection.NW) {
        this.riverGraphics.moveTo(0, 0.25);
        this.riverGraphics.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        this.riverGraphics.moveTo(0.5, 0);
        this.riverGraphics.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        this.riverGraphics.moveTo(1, 0.25);
        this.riverGraphics.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        this.riverGraphics.moveTo(1, 0.75);
        this.riverGraphics.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        this.riverGraphics.moveTo(0.5, 1);
        this.riverGraphics.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        this.riverGraphics.moveTo(0, 0.75);
        this.riverGraphics.lineTo(0, 0.25);
      }
    }
    this.riverGraphics.stroke({ width: 0.15, color: 0x4169e1 });
  }

  private drawYields() {
    this.yieldsGraphics.clear();

    this.yieldsGraphics.position.x =
      this.tile.x + (this.tile.y % 2 ? 0.5 : 0) + 0.025;
    this.yieldsGraphics.position.y = this.tile.y * 0.75 - 0.35;

    this.drawYield(0.55, this.tile.yields.food, 0x00ff00);
    this.drawYield(0.65, this.tile.yields.production, 0xffaa00);

    this.container.addChild(this.yieldsGraphics);
    this.yieldsLayer.attach(this.yieldsGraphics);
  }

  private drawYield(y: number, quantity: number, color: number) {
    for (let i = 0; i < quantity; i++) {
      const x = 0.5 - (quantity / 2) * 0.1 + 0.1 * i;
      this.yieldsGraphics.rect(x, y, 0.05, 0.05);
    }
    this.yieldsGraphics.fill({ color });
  }
}
