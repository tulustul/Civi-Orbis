import { Tile } from './tile.interface';

export class TilesMap {
  constructor(
    public width: number,
    public height: number,
    public tiles: Tile[][]
  ) {}
}
