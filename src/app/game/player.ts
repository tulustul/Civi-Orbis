import { Tile } from './tile.interface';
import { Unit } from './unit';

export type PlayerType = 'human' | 'ai';

export class Player {
  exploredTiles = new Set<Tile>();

  visibleTiles = new Set<Tile>();

  units: Unit[] = [];

  constructor(private type: PlayerType) {}
}
