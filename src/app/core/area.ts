import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Tile, TileDirection } from "./tile";

export class Area {
  tiles = new Set<Tile>();

  borders = new Map<Tile, TileDirection[]>();

  backgroundOpacity = 1;

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _added$ = new Subject<Tile>();
  added$ = this._added$.asObservable().pipe(takeUntil(this.destroyed$));

  private _removed$ = new Subject<Tile>();
  removed$ = this._removed$.asObservable().pipe(takeUntil(this.destroyed$));

  constructor(public color: number) {}

  add(tile: Tile, emitEvent = true) {
    this.tiles.add(tile);
    if (emitEvent) {
      // TODO make a local change and emit event instead of recomputing whole borders
      this.computeBorders();
      this._added$.next(tile);
    }
  }

  remove(tile: Tile, emitEvent = true) {
    this.tiles.delete(tile);
    if (emitEvent) {
      this.computeBorders();
      this._removed$.next(tile);
    }
  }

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  computeBorders() {
    const visited = new Set<Tile>();
    this.borders.clear();
    for (const tile of this.tiles) {
      visited.add(tile);
      for (const neighbour of tile.neighbours) {
        if (visited.has(neighbour)) {
          continue;
        }
        if (!this.tiles.has(neighbour)) {
          if (!this.borders.has(tile)) {
            this.borders.set(tile, []);
          }
          this.borders.get(tile)!.push(tile.getDirectionTo(neighbour));
        }
      }
    }
  }
}
