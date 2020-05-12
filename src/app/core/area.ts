import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { TileCore } from "./tile";
import { POSSIBLE_BORDER_PATHS } from "../map-generators/utils";
import { TileDirection } from "../shared";

type Border = [TileCore, TileDirection];
type BorderPath = Border[];

export class Area {
  id = 0;

  tiles = new Set<TileCore>();

  borders: BorderPath[] = [];

  backgroundOpacity = 1;

  private _destroyed$ = new Subject<void>();
  destroyed$ = this._destroyed$.asObservable();

  private _added$ = new Subject<TileCore>();
  added$ = this._added$.asObservable().pipe(takeUntil(this.destroyed$));

  private _updated$ = new Subject<TileCore>();
  updated$ = this._updated$.asObservable().pipe(takeUntil(this.destroyed$));

  constructor(public color: number) {}

  add(tile: TileCore, recomputeBorders = true) {
    this.tiles.add(tile);
    if (recomputeBorders) {
      // TODO make a local change and emit event instead of recomputing whole borders
      this.computeBorders();
      this._updated$.next(tile);
    }
    this._added$.next(tile);
  }

  remove(tile: TileCore, recomputeBorders = true) {
    this.tiles.delete(tile);
    if (recomputeBorders) {
      this.computeBorders();
      this._updated$.next(tile);
    }
  }

  destroy() {
    this._destroyed$.next();
    this._destroyed$.complete();
  }

  computeBorders() {
    const visited = new Set<TileCore>();
    this.borders = [];
    for (const tile of this.tiles) {
      visited.add(tile);
      for (const neighbour of tile.neighbours) {
        if (visited.has(neighbour)) {
          continue;
        }
        if (!this.tiles.has(neighbour)) {
          const dir = tile.getDirectionTo(neighbour);
          const border: Border = [tile, dir];
          const path = this.buildBorderPath(border, visited);
          this.borders.push(path);
        }
      }
    }
  }

  update() {
    this._updated$.next();
  }

  private buildBorderPath(
    currentBorder: Border,
    visited: Set<TileCore>,
    path: BorderPath = [],
  ) {
    if (path.length) {
      const firstBorder = path[0];
      if (
        firstBorder[0] === currentBorder[0] &&
        firstBorder[1] === currentBorder[1]
      ) {
        return path;
      }
    }

    path.push(currentBorder);

    let [tile, dir] = currentBorder;

    const nextPairs = POSSIBLE_BORDER_PATHS[dir];

    for (const pair of nextPairs) {
      const [tileA, tileB] = [
        pair[0] === TileDirection.NONE ? tile : tile.fullNeighbours[pair[0]],
        tile.fullNeighbours[pair[1]],
      ];

      if (!tileA && !tileB) {
        continue;
      }

      if (tileA) {
        visited.add(tileA);
      }
      if (tileB) {
        visited.add(tileB);
      }

      if (tileA) {
        if (this.tiles.has(tileA) && !this.tiles.has(tileB!)) {
          const nextDir = tile === tileA ? pair[1] : pair[1] - 1; // adjusting for map edges
          const nextBorder: Border = [
            tileA,
            tileB ? tileA.getDirectionTo(tileB) : nextDir,
          ];
          return this.buildBorderPath(nextBorder, visited, path);
        }
      }

      if (tileB) {
        if (!this.tiles.has(tileA!) && this.tiles.has(tileB)) {
          const nextBorder: Border = [
            tileB,
            tileA ? tileB.getDirectionTo(tileA) : pair[0],
          ];
          return this.buildBorderPath(nextBorder, visited, path);
        }
      }
    }

    return path;
  }
}
