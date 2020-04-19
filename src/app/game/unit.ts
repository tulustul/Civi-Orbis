import { Tile } from './tile.interface';
import { UnitDefinition } from './unit.interface';
import { Player } from './player';

export class Unit {
  tile: Tile;
  definition: UnitDefinition;
  actionPointsLeft: number;
  player: Player;
  path: Tile[];
}
