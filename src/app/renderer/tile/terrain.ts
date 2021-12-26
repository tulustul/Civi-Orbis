import * as PIXI from "pixi.js";
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

const SEA_TEXTURES: Record<SeaLevel, string[]> = {
  [SeaLevel.deep]: getTileVariants("hexOcean", 4),
  [SeaLevel.shallow]: getTileVariants("hexShallowWater", 4),
  [SeaLevel.none]: [],
};

const CLIMATE_TEXTURES: Record<Climate, Record<LandForm, string[]>> = {
  [Climate.continental]: {
    [LandForm.plains]: getTileVariants("hexPlainsCold", 4),
    [LandForm.hills]: getTileVariants("hexHillsCold", 4),
    [LandForm.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.desert]: {
    [LandForm.plains]: getTileVariants("hexSand", 4),
    [LandForm.hills]: getTileVariants("hexHillsDesert", 4),
    [LandForm.mountains]: getTileVariants("hexMountainDesert", 4),
  },
  [Climate.oceanic]: {
    [LandForm.plains]: getTileVariants("hexPlains", 4),
    [LandForm.hills]: getTileVariants("hexHighlands", 4),
    [LandForm.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.savanna]: {
    [LandForm.plains]: getTileVariants("hexScrublands", 4),
    [LandForm.hills]: getTileVariants("hexHillsSavanna", 4),
    [LandForm.mountains]: getTileVariants("hexMountainDesert", 4),
  },
  [Climate.tropical]: {
    [LandForm.plains]: getTileVariants("hexTropicalPlains", 4),
    [LandForm.hills]: getTileVariants("hexHills", 4),
    [LandForm.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.tundra]: {
    [LandForm.plains]: getTileVariants("hexPlainsColdSnowTransition", 4),
    [LandForm.hills]: getTileVariants("hexHillsColdSnowTransition", 4),
    [LandForm.mountains]: getTileVariants("hexMountainSnow", 4),
  },
  [Climate.arctic]: {
    [LandForm.plains]: getTileVariants("hexPlainsColdSnowCovered", 4),
    [LandForm.hills]: getTileVariants("hexHillsColdSnowCovered", 4),
    [LandForm.mountains]: getTileVariants("hexMountainSnow", 4),
  },
};

const FOREST_TEXTURES: Record<Climate, string[]> = {
  [Climate.continental]: getTileVariants("hexForestPine", 4),
  [Climate.oceanic]: getTileVariants("hexForestBroadleaf", 4),
  [Climate.tropical]: getTileVariants("hexJungle", 4),
  [Climate.tundra]: getTileVariants("hexForestPineSnowTransition", 4),
  [Climate.savanna]: [],
  [Climate.desert]: [],
  [Climate.arctic]: [],
};

const WETLANDS_TEXTURES = getTileVariants("hexMarsh", 4);
const WETLANDS_FOREST_TEXTURES = getTileVariants("hexSwamp", 4);
const DESERT_FLOOD_PLAINS_TEXTURES = getTileVariants("hexGrassySand", 4);

const FARM_TEXTURES = getTileVariants("field", 15);
const MINE_TEXTURES = getTileVariants("mines", 5);
const SAWMILL_TEXTURES = getTileVariants("forester_hut", 4);

export class TerrainDrawer {
  constructor(private renderer: GameRenderer, game: GameApi) {}

  public drawTile(tile: Tile, container: PIXI.Container) {
    let variants: string[];

    if (tile.wetlands) {
      if (tile.forest) {
        variants = WETLANDS_FOREST_TEXTURES;
      } else {
        variants = WETLANDS_TEXTURES;
      }
    } else if (tile.forest) {
      variants = FOREST_TEXTURES[tile.climate];
    } else if (tile.seaLevel === SeaLevel.none) {
      if (
        tile.climate === Climate.desert &&
        tile.landForm === LandForm.plains &&
        tile.riverParts.length
      ) {
        variants = DESERT_FLOOD_PLAINS_TEXTURES;
      } else {
        variants = CLIMATE_TEXTURES[tile.climate][tile.landForm];
      }
    } else {
      variants = SEA_TEXTURES[tile.seaLevel];
    }

    const textureName = pickRandom(variants);
    const sprite = drawTileSprite(tile, this.textures[textureName]);

    container.addChild(sprite);

    this.drawRoads(tile, container);
    this.drawImprovement(tile, container);
    this.drawResource(tile, container);
  }

  private drawImprovement(tile: Tile, container: PIXI.Container) {
    let sprite: PIXI.Sprite | null = null;
    if (tile.improvement === TileImprovement.farm) {
      const textureName = pickRandom(FARM_TEXTURES);
      sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      container.addChild(sprite);
    } else if (tile.improvement === TileImprovement.mine) {
      const textureName = pickRandom(MINE_TEXTURES);
      sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      container.addChild(sprite);
    } else if (tile.improvement === TileImprovement.sawmill) {
      const textureName = pickRandom(SAWMILL_TEXTURES);
      sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      container.addChild(sprite);
    }

    return sprite;
  }

  private drawResource(tile: Tile, container: PIXI.Container) {
    if (!tile.resource) {
      return;
    }

    const textureName = `${tile.resource.id}.png`;
    const sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
    sprite.y += 0.3;
    container.addChild(sprite);
  }

  private drawRoads(tile: Tile, container: PIXI.Container) {
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
    return this.renderer.textures;
  }
}
