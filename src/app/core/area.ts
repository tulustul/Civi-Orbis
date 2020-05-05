import { Subject } from "rxjs";
import { share } from "rxjs/operators";

import { Tile, TileDirection } from "./tile";

export class Area {
  tiles = new Set<Tile>();

  borders: [Tile, TileDirection][] = [];

  backgroundOpacity = 1;

  private _changed$ = new Subject<void>();
  changed$ = this._changed$.asObservable().pipe(share());

  constructor(public color: number) {}

  add(tile: Tile, emitEvent = true) {
    this.tiles.add(tile);
    if (emitEvent) {
      // TODO make a local change and emit event instead of recomputing whole borders
      this.computeBorders();
      // this._changed$.next();
    }
  }

  remove(tile: Tile, emitEvent = true) {
    this.tiles.delete(tile);
    if (emitEvent) {
      this.computeBorders();
      // this._changed$.next();
    }
  }

  computeBorders() {
    const visited = new Set<Tile>();
    this.borders = [];
    for (const tile of this.tiles) {
      visited.add(tile);
      for (const neighbour of tile.neighbours) {
        if (visited.has(neighbour)) {
          continue;
        }
        if (!this.tiles.has(neighbour)) {
          this.borders.push([tile, tile.getDirectionTo(neighbour)]);
        }
      }
    }
    this._changed$.next();
  }
}
