import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { TileCore } from "./tile";
import { collector } from "./collector";

export class AreaCore {
  id = 0;

  tiles = new Set<TileCore>();

  backgroundOpacity = 1;

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _added$ = new Subject<TileCore>();
  added$ = this._added$.asObservable().pipe(takeUntil(this.destroyed$));

  private _updated$ = new Subject<TileCore>();
  updated$ = this._updated$.asObservable().pipe(takeUntil(this.destroyed$));

  constructor(public color: number) {}

  add(tile: TileCore) {
    this.tiles.add(tile);
    collector.areas.add(this);
    this._added$.next(tile);
  }

  remove(tile: TileCore) {
    this.tiles.delete(tile);
    collector.areas.add(this);
  }

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
    collector.areasDestroyed.add(this.id);
  }

  serializeToChannel(): AreaChanneled {
    return {
      id: this.id,
      tiles: Array.from(this.tiles).map((t) => t.id),
      color: this.color,
      backgroundOpacity: this.backgroundOpacity,
    };
  }
}

export interface AreaChanneled {
  id: number;
  tiles: number[];
  backgroundOpacity: number;
  color: number;
}
