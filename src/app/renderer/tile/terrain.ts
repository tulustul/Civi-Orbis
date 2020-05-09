import * as PIXIE from "pixi.js";

import {
  getTileVariants,
  drawTileSprite,
  pickRandom,
  drawTileSpriteCentered,
} from "../utils";
import {
  Tile,
  Climate,
  LandForm,
  SeaLevel,
  TileImprovement,
} from "src/app/core/tile";
import { Game } from "src/app/core/game";
import { TileContainer } from "../tile-container";
import { takeUntil } from "rxjs/operators";
import { GameRenderer } from "../renderer";

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
  constructor(
    private game: Game,
    private renderer: GameRenderer,
    private terrainContainer: TileContainer,
    private waterContainer: TileContainer,
  ) {
    const tilesManager = this.game.tilesManager;

    game.started$.subscribe(() => {
      tilesManager.updatedTile$
        .pipe(takeUntil(game.stopped$))
        .subscribe((tile) => this.updateTile(tile));
    });
  }

  public drawTile(tile: Tile) {
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

    if (tile.seaLevel === SeaLevel.none) {
      this.terrainContainer.addChild(sprite, tile);
    } else {
      this.waterContainer.addChild(sprite, tile);
    }

    this.drawRoads(tile);

    this.drawImprovement(tile);
  }

  private drawImprovement(tile: Tile) {
    if (tile.improvement === TileImprovement.farm) {
      const textureName = pickRandom(FARM_TEXTURES);
      const sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      this.terrainContainer.addChild(sprite, tile);
    } else if (tile.improvement === TileImprovement.mine) {
      const textureName = pickRandom(MINE_TEXTURES);
      const sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      this.terrainContainer.addChild(sprite, tile);
    } else if (tile.improvement === TileImprovement.sawmill) {
      const textureName = pickRandom(SAWMILL_TEXTURES);
      const sprite = drawTileSpriteCentered(tile, this.textures[textureName]);
      this.terrainContainer.addChild(sprite, tile);
    }
  }

  private drawRoads(tile: Tile) {
    if (tile.road === null) {
      return;
    }

    // FIXME This will fail to render roads on map edges because of insufficient number of neighbours.
    const roadId = tile.neighbours
      .map((n) => (n.road === null ? "0" : "1"))
      .join("");

    const textureName = `hexRoad-${roadId}-00.png`;
    const sprite = drawTileSprite(tile, this.textures[textureName]);
    this.terrainContainer.addChild(sprite, tile);
  }

  private updateTile(tile: Tile) {
    this.waterContainer.clearTile(tile);
    this.terrainContainer.clearTile(tile);
    this.drawTile(tile);
  }

  clear() {
    this.waterContainer.destroyAllChildren();
    this.terrainContainer.destroyAllChildren();
  }

  protected get textures() {
    return this.renderer.textures;
  }
}
