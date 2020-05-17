import { Subject } from "rxjs";

import { TileCore } from "./tile";
import { Game } from "./game";
import { collector } from "./collector";

export class TilesManager {
  private _updatedTile$ = new Subject<TileCore>();
  updatedTile$ = this._updatedTile$.asObservable();

  private _revealedTiles$ = new Subject<TileCore[]>();
  revealedTiles$ = this._revealedTiles$.asObservable();

  private _resetTilesVisibility$ = new Subject<Set<TileCore>>();
  resetTilesVisibility$ = this._resetTilesVisibility$.asObservable();

  constructor(private game: Game) {
    this.game.humanPlayer$.subscribe((player) => {
      if (player) {
        this._resetTilesVisibility$.next(player.exploredTiles);
      }
    });
  }

  reveal(tiles: TileCore[]) {
    this._revealedTiles$.next(tiles);
  }

  revealAll() {
    const tiles: TileCore[] = [];
    for (let x = 0; x < this.game.map.width; x++) {
      for (let y = 0; y < this.game.map.height; y++) {
        const tile = this.game.map.tiles[x][y];
        this.game.humanPlayer?.exploredTiles.add(tile);
        tiles.push(tile);
      }
    }
    this.reveal(tiles);
  }

  updateTile(tile: TileCore) {
    tile.computeYields();
    tile.computeMovementCosts();
    for (const neighbour of tile.neighbours) {
      // TODO this loop can be optimized by computing only the cost from neighbour to this tile.
      neighbour.computeMovementCosts();
    }
    this._updatedTile$.next(tile);
    collector.tiles.add(tile);
  }
}
