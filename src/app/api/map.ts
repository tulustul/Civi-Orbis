import { Tile } from "../shared";
import { getTileNeighbours, getTileFullNeighbours } from "../shared/hex-math";
import { MapChanneled } from "../core/serialization/channel";
import { GameState } from "./state";

export class TilesMap {
  width = 0;
  height = 0;
  tiles: Tile[][] = [];
  tilesMap = new Map<number, Tile>();

  constructor(map: MapChanneled) {
    this.width = map.width;
    this.height = map.height;
    this.tiles = (map.tiles as unknown) as Tile[][];

    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile: Tile = this.tiles[x][y];
        this.tilesMap.set(tile.id, tile);
        tile.neighbours = getTileNeighbours(this.tiles, x, y);
        tile.fullNeighbours = getTileFullNeighbours(this.tiles, x, y);
        tile.units = [];
      }
    }
  }

  preprocess(game: GameState) {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        const tile: Tile = this.tiles[x][y];
        tile.areaOf = game.citiesMap.get(tile.areaOf as any)!;
        tile.city = game.citiesMap.get(tile.city as any)!;
      }
    }
  }

  get(x: number, y: number): Tile | null {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return null;
    }
    return this.tiles[x][y];
  }

  getTilesFromIds(ids: number[]): Tile[] {
    return ids.map((id) => this.tilesMap.get(id)!);
  }
}
