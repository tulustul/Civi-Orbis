import * as PIXIE from 'pixi.js';

import { Tile } from '../game/tile.interface';

export function getTileCenter(tile: Tile): [number, number] {
  return [0.5 + tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75 + 0.5];
}

export function getTileCoords(tile: Tile): [number, number] {
  return [tile.x + (tile.y % 2 ? 0.5 : 0), tile.y * 0.75];
}

export function drawHex(graphics: PIXIE.Graphics) {
  graphics.moveTo(0, 0.25);
  graphics.lineTo(0.5, 0);
  graphics.lineTo(1, 0.25);
  graphics.lineTo(1, 0.75);
  graphics.lineTo(0.5, 1);
  graphics.lineTo(0, 0.75);
}

export function drawClosedHex(graphics: PIXIE.Graphics) {
  drawHex(graphics);
  graphics.lineTo(0, 0.25);
}
