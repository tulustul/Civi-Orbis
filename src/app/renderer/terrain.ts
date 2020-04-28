import * as PIXIE from "pixi.js";

import {
  Tile,
  SeaLevel,
  Climate,
  TileDirection,
  Landform,
} from "../game/tile.interface";
import { Game } from "../game/game";
import { clearContainer } from "./utils";
import { getTileDirection } from "../game/hex-math";

function getTileVariants(tileName: string, variants: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < variants; i++) {
    result.push(`${tileName}${i.toString().padStart(2, "0")}.png`);
  }
  return result;
}

const SEA_TEXTURES: Record<SeaLevel, string[]> = {
  [SeaLevel.deep]: getTileVariants("hexOcean", 4),
  [SeaLevel.shallow]: getTileVariants("hexShallowWater", 4),
  [SeaLevel.none]: [],
};

const CLIMATE_TEXTURES: Record<Climate, Record<Landform, string[]>> = {
  [Climate.continental]: {
    [Landform.plains]: getTileVariants("hexPlainsCold", 4),
    [Landform.hills]: getTileVariants("hexHillsCold", 4),
    [Landform.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.desert]: {
    [Landform.plains]: getTileVariants("hexSand", 4),
    [Landform.hills]: getTileVariants("hexHillsDesert", 4),
    [Landform.mountains]: getTileVariants("hexMountainDesert", 4),
  },
  [Climate.oceanic]: {
    [Landform.plains]: getTileVariants("hexPlains", 4),
    [Landform.hills]: getTileVariants("hexHighlands", 4),
    [Landform.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.savanna]: {
    [Landform.plains]: getTileVariants("hexScrublands", 4),
    [Landform.hills]: getTileVariants("hexHillsSavanna", 4),
    [Landform.mountains]: getTileVariants("hexMountainDesert", 4),
  },
  [Climate.tropical]: {
    [Landform.plains]: getTileVariants("hexTropicalPlains", 4),
    [Landform.hills]: getTileVariants("hexHills", 4),
    [Landform.mountains]: getTileVariants("hexMountain", 4),
  },
  [Climate.tundra]: {
    [Landform.plains]: getTileVariants("hexPlainsColdSnowTransition", 4),
    [Landform.hills]: getTileVariants("hexHillsColdSnowTransition", 4),
    [Landform.mountains]: getTileVariants("hexMountainSnow", 4),
  },
  [Climate.arctic]: {
    [Landform.plains]: getTileVariants("hexPlainsColdSnowCovered", 4),
    [Landform.hills]: getTileVariants("hexHillsColdSnowCovered", 4),
    [Landform.mountains]: getTileVariants("hexMountainSnow", 4),
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

const COASTLINE_TEXTURES = getTileVariants("coastline", 4);

export class TerrainRenderer {
  container = new PIXIE.Container();

  terrainContainer = new PIXIE.Container();

  waterContainer = new PIXIE.Container();

  coastlinesContainer = new PIXIE.Container();

  private tilesMap = new Map<Tile, PIXIE.DisplayObject[]>();

  constructor(private game: Game) {
    // this.waterContainer.zIndex = 3;
    // this.coastlinesContainer.zIndex = 2;
    // this.terrainContainer.zIndex = 0;

    this.container.addChild(this.waterContainer);
    this.container.addChild(this.coastlinesContainer);
    this.container.addChild(this.terrainContainer);

    this.game.tilesManager.revealedTiles$.subscribe((tiles) => {
      for (const tile of tiles) {
        const displayObjects = this.tilesMap.get(tile);
        if (displayObjects) {
          for (const obj of displayObjects) {
            obj.visible = true;
          }
        }
      }
    });

    this.game.tilesManager.updatedTile$.subscribe((tile) =>
      this.updateTile(tile)
    );

    this.game.started$.subscribe(() => this.build());
  }

  private build() {
    for (let y = 0; y < this.game.map.height; y++) {
      for (let x = 0; x < this.game.map.width; x++) {
        this.drawTile(this.game.map.tiles[x][y]);
      }
    }
  }

  private get textures() {
    return this.game.renderer.textures;
  }

  private clearTile(tile: Tile) {
    const displayObjects = this.tilesMap.get(tile);
    if (!displayObjects) {
      return;
    }

    for (const obj of displayObjects) {
      obj.destroy();
    }

    this.tilesMap.delete(tile);
  }

  private updateTile(tile: Tile) {
    this.clearTile(tile);
    this.drawTile(tile);
  }

  private drawTile(tile: Tile) {
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
        tile.landForm === Landform.plains &&
        tile.riverParts.length
      ) {
        variants = DESERT_FLOOD_PLAINS_TEXTURES;
      } else {
        variants = CLIMATE_TEXTURES[tile.climate][tile.landForm];
      }
    } else {
      variants = SEA_TEXTURES[tile.seaLevel];
    }

    const textureName = variants[Math.floor(Math.random() * variants.length)];

    const sprite = new PIXIE.Sprite(this.textures[textureName]);
    sprite.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    sprite.position.y = tile.y * 0.75 - 0.5;
    sprite.scale.set(1 / sprite.width, 1 / sprite.width);

    if (tile.seaLevel === SeaLevel.none) {
      this.terrainContainer.addChild(sprite);
    } else {
      this.waterContainer.addChild(sprite);
    }

    const riverGraphics = this.renderRivers(tile);

    const displayObjects: PIXIE.DisplayObject[] = [sprite];
    if (riverGraphics) {
      displayObjects.push(riverGraphics);
    }
    this.tilesMap.set(tile, displayObjects);

    // disabled for now, it's ugly as hell
    // if (tile.seaLevel === SeaLevel.none) {
    //   this.renderCoastline(tile, sprite, displayObjects);
    // }

    if (!this.game.activeHumanPlayer?.exploredTiles.has(tile)) {
      for (const obj of displayObjects) {
        obj.visible = false;
      }
    }
  }

  private renderRivers(tile: Tile) {
    if (!tile.riverParts.length) {
      return;
    }

    const graphics = new PIXIE.Graphics();
    graphics.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    graphics.position.y = tile.y * 0.75;
    this.container.addChild(graphics);

    graphics.lineStyle(0.15, 0x4169e1);

    for (const river of tile.riverParts) {
      if (river === TileDirection.NW) {
        graphics.moveTo(0, 0.25);
        graphics.lineTo(0.5, 0);
      }

      if (river === TileDirection.NE) {
        graphics.moveTo(0.5, 0);
        graphics.lineTo(1, 0.25);
      }

      if (river === TileDirection.E) {
        graphics.moveTo(1, 0.25);
        graphics.lineTo(1, 0.75);
      }

      if (river === TileDirection.SE) {
        graphics.moveTo(1, 0.75);
        graphics.lineTo(0.5, 1);
      }

      if (river === TileDirection.SW) {
        graphics.moveTo(0.5, 1);
        graphics.lineTo(0, 0.75);
      }

      if (river === TileDirection.W) {
        graphics.moveTo(0, 0.75);
        graphics.lineTo(0, 0.25);
      }
    }

    return graphics;
  }

  renderCoastline(
    tile: Tile,
    tileSprite: PIXIE.Sprite,
    displayObjects: PIXIE.DisplayObject[]
  ) {
    for (const neighbour of tile.neighbours) {
      if (neighbour.seaLevel !== SeaLevel.none) {
        const dir = getTileDirection(tile, neighbour);
        const textureName =
          COASTLINE_TEXTURES[
            Math.floor(Math.random() * COASTLINE_TEXTURES.length)
          ];
        const g = new PIXIE.Sprite(this.textures[textureName]);
        g.scale.set(1 / g.width / 1.8, 1 / g.width / 1.8);
        g.position.x = tileSprite.position.x;
        g.position.y = tileSprite.position.y + tileSprite.height - 0.75;
        g.rotation =
          (Math.PI / 3) * dir + (2 * Math.PI) / 3 - Math.PI / 12 - 0.32;
        g.pivot.x = g.width / 2;
        g.anchor;
        displayObjects.push(g);
        this.coastlinesContainer.addChild(g);

        if (dir === TileDirection.NW) {
          g.position.x += 0.5;
          g.position.y -= 0.25;
        } else if (dir === TileDirection.NE) {
          g.position.x += 1;
        } else if (dir === TileDirection.E) {
          g.position.x += 1;
          g.position.y += 0.5;
        } else if (dir === TileDirection.SE) {
          g.position.x += 0.5;
          g.position.y += 0.75;
        } else if (dir === TileDirection.SW) {
          g.position.y += 0.5;
        }
      }
    }
  }

  clear() {
    clearContainer(this.terrainContainer);
    clearContainer(this.waterContainer);
    clearContainer(this.coastlinesContainer);
    this.tilesMap.clear();
  }
}
