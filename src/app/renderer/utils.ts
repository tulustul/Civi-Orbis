import { Container, Geometry, Graphics, Sprite, Texture } from "pixi.js";

import { TILE_SIZE } from "./constants";
import { Tile } from "../api/tile.interface";

// prettier-ignore
const HEX_VERTICES = [
  0, 0.25, 0.5, 0, 1, 0.25,
  0, 0.25, 1, 0.25, 1, 0.75,
  0, 0.25, 1, 0.75, 0, 0.75,
  0, 0.75, 1, 0.75, 0.5, 1,
]

export const HEX_GEOMETRY = new Geometry({
  attributes: {
    aVertexPosition: { buffer: HEX_VERTICES, format: "float32x2" },
    // aUvs: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  },
});

export function getTileCenter(tile: Tile): [number, number] {
  return [0.5 + tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75 + 0.5];
}

export function getTileCoords(tile: Tile): [number, number] {
  return [tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75];
}

export function drawHex(graphics: Graphics, x = 0, y = 0) {
  x += y % 2 ? 0.5 : 0;
  y *= 0.75;
  graphics.moveTo(x + 0, y + 0.25);
  graphics.lineTo(x + 0.5, y + 0);
  graphics.lineTo(x + 1, y + 0.25);
  graphics.lineTo(x + 1, y + 0.75);
  graphics.lineTo(x + 0.5, y + 1);
  graphics.lineTo(x + 0, y + 0.75);
}

export function drawClosedHex(graphics: Graphics) {
  drawHex(graphics);
  graphics.lineTo(0, 0.25);
}

export function clearContainer(container: Container) {
  while (container.children.length) {
    container.removeChildAt(0);
    // TODO destroy child?
  }
}

export function getTileVariants(tileName: string, variants: number): string[] {
  const result: string[] = [];
  for (let i = 0; i < variants; i++) {
    result.push(`${tileName}${i.toString().padStart(2, "0")}.png`);
  }
  return result;
}

export function drawTileSprite(tile: Tile, texture: Texture) {
  const sprite = new Sprite(texture);
  sprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
  putContainerAtTile(tile, sprite);
  return sprite;
}

export function drawTileSpriteCentered(tile: Tile, texture: Texture) {
  const sprite = new Sprite(texture);
  sprite.scale.set(1 / TILE_SIZE, 1 / TILE_SIZE);
  putSpriteAtTileCentered(tile, sprite);
  return sprite;
}

export function putContainerAtTile(tile: Tile, container: Container) {
  container.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
  container.position.y = tile.y * 0.75 - 0.5;
}

export function putSpriteAtTileCentered(tile: Tile, sprite: Sprite) {
  sprite.position.x = tile.x + (tile.y % 2 ? 0.5 : 0) + 0.5 - sprite.width / 2;
  sprite.position.y = tile.y * 0.75 + 0.5 - sprite.height / 2;
}

export function pickRandom(items: any[]) {
  return items[Math.floor(Math.random() * items.length)];
}
