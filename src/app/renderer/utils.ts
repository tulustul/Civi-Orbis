import * as PIXIE from "pixi.js";

import { TILE_SIZE } from "./constants";
import { Tile } from "../shared";

export function getTileCenter(tile: Tile): [number, number] {
  return [0.5 + tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75 + 0.5];
}

export function getTileCoords(tile: Tile): [number, number] {
  return [tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75];
}

export function drawHex(graphics: PIXIE.Graphics, x = 0, y = 0) {
  graphics.moveTo(x + 0, y + 0.25);
  graphics.lineTo(x + 0.5, y + 0);
  graphics.lineTo(x + 1, y + 0.25);
  graphics.lineTo(x + 1, y + 0.75);
  graphics.lineTo(x + 0.5, y + 1);
  graphics.lineTo(x + 0, y + 0.75);
}

export function drawClosedHex(graphics: PIXIE.Graphics) {
  drawHex(graphics);
  graphics.lineTo(0, 0.25);
}

export function clearContainer(container: PIXIE.Container) {
  while (container.children.length) {
    container.removeChildAt(0).destroy();
  }
}

export function getTileVariants(tileName: string, variants: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < variants; i++) {
    result.push(`${tileName}${i.toString().padStart(2, "0")}.png`);
  }
  return result;
}

export function drawTileSprite(tile: Tile, texture: PIXIE.Texture) {
  const sprite = new PIXIE.Sprite(texture);
  putContainerAtTile(tile, sprite);
  sprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
  return sprite;
}

export function drawTileSpriteCentered(tile: Tile, texture: PIXIE.Texture) {
  const sprite = new PIXIE.Sprite(texture);
  sprite.position.x =
    tile.x + (tile.y % 2 ? 0.5 : 0) + 0.5 - sprite.width / 2 / TILE_SIZE;
  sprite.position.y = tile.y * 0.75 - 0.5 + 1 - sprite.width / 2 / TILE_SIZE;
  sprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
  return sprite;
}

export function putContainerAtTile(tile: Tile, container: PIXIE.Container) {
  container.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
  container.position.y = tile.y * 0.75 - 0.5;
}

export function pickRandom(items: any[]) {
  return items[Math.floor(Math.random() * items.length)];
}
