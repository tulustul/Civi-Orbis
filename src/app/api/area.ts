import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { Tile } from "../shared";
import { GameState } from "./state";
import { AreaDetailsChanneled } from "../core/serialization/channel";

export class Area {
  id: number;

  tiles = new Set<Tile>();

  borders = new Map<Tile, string>();

  vec4Color: number[];

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _addedTiles$ = new Subject<Tile[]>();
  addedTiles$ = this._addedTiles$
    .asObservable()
    .pipe(takeUntil(this.destroyed$));

  private _removedTiles$ = new Subject<Tile[]>();
  removedTiles$ = this._removedTiles$
    .asObservable()
    .pipe(takeUntil(this.destroyed$));

  private _bordersUpdated$ = new Subject<Set<Tile>>();
  bordersUpdated$ = this._bordersUpdated$
    .asObservable()
    .pipe(takeUntil(this.destroyed$));

  constructor(public color: number) {
    const cssColor = "#" + color.toString(16).padStart(6, "0");

    this.vec4Color = [
      parseInt(cssColor[1] + cssColor[2], 16) / 255,
      parseInt(cssColor[3] + cssColor[4], 16) / 255,
      parseInt(cssColor[5] + cssColor[6], 16) / 255,
      1,
    ];
  }

  static fromDetailsChanneled(
    state: GameState,
    areaChanneled: AreaDetailsChanneled,
  ) {
    const area = new Area(areaChanneled.color);

    area.id = areaChanneled.id;

    state.areasMap.set(area.id, area);

    for (const tileId of areaChanneled.tiles) {
      area.tiles.add(state.map.tilesMap.get(tileId)!);
    }

    area.computeAllBorders();

    return area;
  }

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  addTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.tiles.add(tile);
    }

    this._addedTiles$.next(tiles);
    this.computeBordersForTiles(tiles);
  }

  removeTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.tiles.delete(tile);
    }
    this._removedTiles$.next(tiles);
    this.computeBordersForTiles(tiles);
  }

  private computeBordersForTiles(tiles: Tile[]) {
    const visited = new Set<Tile>();
    for (const tile of tiles) {
      if (visited.has(tile)) {
        continue;
      }
      visited.add(tile);
      this.computeTileBorders(tile);

      for (const neighbour of tile.neighbours) {
        if (!this.tiles.has(neighbour) || visited.has(neighbour)) {
          continue;
        }
        visited.add(neighbour);
        this.computeTileBorders(neighbour);
      }
    }

    this._bordersUpdated$.next(visited);
  }

  private computeAllBorders() {
    this.borders.clear();
    for (const tile of this.tiles) {
      this.computeTileBorders(tile);
    }
  }

  private computeTileBorders(tile: Tile) {
    const borders = tile.fullNeighbours
      .map((n) => (n && this.tiles.has(n) ? "0" : "1"))
      .join("");

    if (borders === "000000") {
      this.borders.delete(tile);
    } else {
      this.borders.set(tile, borders);
    }
  }

  clear() {
    this._removedTiles$.next(Array.from(this.tiles));
    this.borders.clear();
    this._bordersUpdated$.next(this.tiles);
    this.tiles = new Set();
  }
}
