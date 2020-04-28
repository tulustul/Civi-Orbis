import * as PIXIE from "pixi.js";

import { Tile } from "../game/tile.interface";

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
