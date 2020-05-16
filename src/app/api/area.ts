import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

import { TileDirection, Tile } from "../shared";
import { GameState } from "./state";
import { AreaChanneled } from "../core/area";
import { POSSIBLE_BORDER_PATHS } from "../map-generators/utils";
import { getDirectionTo } from "../shared/hex-math";

type Border = [Tile, TileDirection];
type BorderPath = Border[];

export class Area {
  id: number;

  tiles = new Set<Tile>();

  borders: BorderPath[] = [];

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
    const visited = new Set<Tile>();
    this.borders = [];
    for (const tile of this.tiles) {
      visited.add(tile);
      for (const neighbour of tile.neighbours) {
        if (visited.has(neighbour)) {
          continue;
        }
        if (!this.tiles.has(neighbour)) {
          const dir = getDirectionTo(tile, neighbour);
          const border: Border = [tile, dir];
          const path = this.buildBorderPath(border, visited);
          this.borders.push(path);
        }
      }
    }
  }

  private buildBorderPath(
    currentBorder: Border,
    visited: Set<Tile>,
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
            tileB ? getDirectionTo(tileA, tileB) : nextDir,
          ];
          return this.buildBorderPath(nextBorder, visited, path);
        }
      }

      if (tileB) {
        if (!this.tiles.has(tileA!) && this.tiles.has(tileB)) {
          const nextBorder: Border = [
            tileB,
            tileA ? getDirectionTo(tileB, tileA) : pair[0],
          ];
          return this.buildBorderPath(nextBorder, visited, path);
        }
      }
    }

    return path;
  }
}
