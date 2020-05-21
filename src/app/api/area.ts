import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Tile } from "../shared";
import { GameState } from "./state";
import { AreaChanneled } from "../core/serialization/channel";

export class Area {
  id: number;

  tiles = new Set<Tile>();

  borders = new Map<Tile, string>();

  backgroundOpacity: number;

  color: number;

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _added$ = new Subject<Tile>();
  added$ = this._added$.asObservable().pipe(takeUntil(this.destroyed$));

  private _updated$ = new Subject<Tile>();
  updated$ = this._updated$.asObservable().pipe(takeUntil(this.destroyed$));

  constructor(game: GameState, area: AreaChanneled) {
    this.id = area.id;
    this.backgroundOpacity = area.backgroundOpacity;
    this.color = area.color;
    this.update(game, area);
    game.areasMap.set(this.id, this);
  }

  update(game: GameState, area: AreaChanneled) {
    this.tiles = new Set(area.tiles.map((id) => game.map.tilesMap.get(id)!));
    this.computeBorders();
    this._updated$.next();
  }

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  computeBorders() {
    this.borders.clear();
    for (const tile of this.tiles) {
      const borders = tile.fullNeighbours
        .map((n) => (n && this.tiles.has(n) ? "0" : "1"))
        .join("");

      if (borders !== "000000") {
        this.borders.set(tile, borders);
      }
    }
  }
}
