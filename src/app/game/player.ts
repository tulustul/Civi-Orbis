import { Tile } from './tile.interface';
import { Unit } from './unit';

export enum PlayerType {
  human,
  ai,
}

export class Player {
  exploredTiles = new Set<Tile>();

  visibleTiles = new Set<Tile>();

  units: Unit[] = [];

  constructor(public type: PlayerType) {}
}
