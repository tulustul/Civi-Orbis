import {
  getTileVariants,
  drawTileSprite,
  pickRandom,
  drawTileSpriteCentered,
} from "../utils";
import { GameRenderer } from "../renderer";
import { TileImprovement } from "src/app/core/tile-improvements";
import { SeaLevel, Climate, LandForm } from "src/app/shared";
import { GameApi } from "src/app/api";
import { Tile } from "src/app/api/tile.interface";
import { Container, Sprite } from "pixi.js";

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

export class TerrainDrawer {
  constructor(
    private renderer: GameRenderer,
    game: GameApi,
  ) {}

  public drawTile(tile: Tile, container: Container) {
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

    this.drawRoads(tile, container);
    this.drawImprovement(tile, container);
    this.drawResource(tile, container);
  }

  private drawImprovement(tile: Tile, container: Container) {
    let sprite: Sprite | null = null;
    if (tile.improvement === TileImprovement.farm) {
      sprite = drawTileSpriteCentered(tile, this.textures["field.png"]);
      container.addChild(sprite);
    } else if (tile.improvement === TileImprovement.mine) {
      sprite = drawTileSpriteCentered(tile, this.textures["mines.png"]);
      container.addChild(sprite);
    } else if (tile.improvement === TileImprovement.sawmill) {
      sprite = drawTileSpriteCentered(tile, this.textures["forester_hut.png"]);
      container.addChild(sprite);
    }

    return sprite;
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
      return null;
    }

    const roadId = tile.fullNeighbours
      .map((n) => (!n || n.road === null ? "0" : "1"))
      .join("");

    const textureName = `hexRoad-${roadId}-00.png`;
    const sprite = drawTileSprite(tile, this.textures[textureName]);
    container.addChild(sprite);
    return sprite;
  }

  protected get textures() {
    return this.renderer.spritesheet.textures;
  }
}
