import { Assets, Spritesheet, Texture } from "pixi.js";
import atlasTilesData from "@/assets/atlas-tiles.json";
import atlasTilesUrl from "@/assets/atlas-tiles.png";
import atlasIconsData from "@/assets/atlas-icons.json";
import atlasIconsUrl from "@/assets/atlas-icons.png";
import gridUrl from "@/assets/grid.png";

export type Assets = {
  textures: {
    grid: Texture;
  };
  tilesSpritesheet: Spritesheet;
  iconsSpritesheet: Spritesheet;
};

let assets: Assets | null = null;

export async function loadAssets() {
  const grid = await Assets.load(gridUrl);

  const tilesAtlas = await Assets.load(atlasTilesUrl);
  const tilesSpritesheet = new Spritesheet(tilesAtlas, atlasTilesData);
  tilesSpritesheet.textureSource.autoGenerateMipmaps = true;
  tilesSpritesheet.textureSource.scaleMode = "nearest";
  await tilesSpritesheet.parse();

  const iconsAtlas = await Assets.load(atlasIconsUrl);
  const iconsSpritesheet = new Spritesheet(iconsAtlas, atlasIconsData);
  iconsSpritesheet.textureSource.autoGenerateMipmaps = true;
  iconsSpritesheet.textureSource.scaleMode = "linear";
  await iconsSpritesheet.parse();

  assets = {
    textures: {
      grid,
    },
    tilesSpritesheet,
    iconsSpritesheet,
  };
}

export function getAssets(): Assets {
  if (!assets) {
    throw new Error("Assets not loaded");
  }
  return assets;
}
