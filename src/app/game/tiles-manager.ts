import { Subject } from "rxjs";

import { Tile } from "./tile";
import { Game } from "./game";

export class TilesManager {
  private _updatedTile$ = new Subject<Tile>();
  updatedTile$ = this._updatedTile$.asObservable();

  private _revealedTiles$ = new Subject<Tile[]>();
  revealedTiles$ = this._revealedTiles$.asObservable();

  constructor(private game: Game) {}

  reveal(tiles: Tile[]) {
    this._revealedTiles$.next(tiles);
  }

  revealAll() {
    const tiles: Tile[] = [];
    for (let x = 0; x < this.game.map.width; x++) {
      for (let y = 0; y < this.game.map.height; y++) {
        const tile = this.game.map.tiles[x][y];
        this.game.activeHumanPlayer?.exploredTiles.add(tile);
        tiles.push(tile);
      }
    }
    this.reveal(tiles);
  }

  updateTile(tile: Tile) {
    tile.computeYields();
    tile.computeMovementCosts();
    for (const neighbour of tile.neighbours) {
      // TODO this loop can be optimized by computing only the cost from neighbour to tile.
      neighbour.computeMovementCosts();
    }
    this._updatedTile$.next(tile);
  }
}
