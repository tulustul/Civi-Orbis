import { BehaviorSubject } from 'rxjs';

import { Tile } from './tile.interface';

export class TilesManager {
  activeTile$ = new BehaviorSubject<Tile | null>(null);

  get activeTile() {
    return this.activeTile$.value;
  }
}
