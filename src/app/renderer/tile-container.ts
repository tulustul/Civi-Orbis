import { BoundingBox } from "./camera";
import { TilesMap } from "../api/map";
import { Tile } from "../api/tile.interface";
import { Container, Renderer, UpdateTransformOptions } from "pixi.js";

export class TileWrapperContainer extends Container {
  tilesMap = new Map<Tile, Container[]>();

  bindToMap(map: TilesMap) {
    for (let x = 0; x < map.width; x++) {
      for (let y = 0; y < map.height; y++) {
        this.tilesMap.set(map.tiles[x][y], []);
      }
    }
  }
}

export class TileContainer extends Container {
  private map!: TilesMap;

  private grid: Container[][][] = [];
  childrenMap = new Map<Container, Tile>();

  // TODO can it be rewritten with tile ids? Map<number, ...>
  private tilesMap = new Map<Tile, Container[]>();

  // needed only for interactivity
  override children: Container[] = [];

  constructor(private bBox: BoundingBox) {
    super();
  }

  addChildToTile<T extends Container>(child: T, tile: Tile): void {
    if (child.parent) {
      child.parent.removeChild(child);
    }

    child.parent = this;
    // child.worldTransform._parentID = -1;

    this.grid[tile.x][tile.y].push(child);

    this.childrenMap.set(child, tile);
    this.tilesMap.get(tile)?.push(child);

    this.children.push(child);

    (this as any)._boundsID++;

    (this.parent as TileWrapperContainer).tilesMap.get(tile)!.push(child);

    child.emit("added", this);
  }

  removeChildFromTile(child: Container) {
    if (this.childrenMap.has(child)) {
      // remove from childrenMap
      const tile = this.childrenMap.get(child)!;
      this.childrenMap.delete(child);

      // remove from grid
      let children = this.grid[tile.x][tile.y];
      let index = children.indexOf(child);
      if (index !== -1) {
        children.splice(index, 1);
      }

      // remove from tilesMap
      children = this.tilesMap.get(tile)!;
      index = children.indexOf(child);
      if (index !== -1) {
        children.splice(index, 1);
      }

      // remove from parent
      children = (this.parent as TileWrapperContainer).tilesMap.get(tile)!;
      index = children.indexOf(child);
      if (index !== -1) {
        children.splice(index, 1);
      }

      // remove from children
      index = this.children.indexOf(child);
      if (index !== -1) {
        children.splice(index, 1);
      }
    }
  }

  moveChild(child: Container, tile: Tile) {
    this.removeChildFromTile(child);
    this.addChildToTile(child, tile);
  }

  getChildsFor(tile: Tile) {
    return this.tilesMap.get(tile)!;
  }

  clearTile(tile: Tile) {
    for (const obj of this.getChildsFor(tile)) {
      obj.destroy();
    }
  }

  destroyAllChildren() {
    if (!this.map) {
      return;
    }

    for (let x = 0; x < this.map.width; x++) {
      for (let y = 0; y < this.map.height; y++) {
        for (const child of this.grid[x][y]) {
          child.destroy();
        }
      }
    }
  }

  bindToMap(map: TilesMap) {
    this.map = map;
    this.grid = new Array(map.width);
    this.tilesMap.clear();
    for (let x = 0; x < map.width; x++) {
      this.grid[x] = new Array(map.height);
      for (let y = 0; y < map.height; y++) {
        this.grid[x][y] = [];
        this.tilesMap.set(map.tiles[x][y], []);
      }
    }
  }

  render(renderer: Renderer) {
    if (!this.visible || this.alpha <= 0 || !this.renderable) {
      return;
    }

    for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
      for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
        for (const child of this.grid[x][y]) {
          (child as any).render(renderer);
        }
      }
    }
    // renderer.batch.flush();
  }

  override updateTransform(opts: Partial<UpdateTransformOptions>): this {
    if (!this.grid.length) {
      return this;
    }

    (this as any)._boundsID++;

    this.worldTransform.copyFrom(this.parent.worldTransform);

    // TODO: check render flags, how to process stuff here
    (this as any).worldAlpha = this.alpha * this.parent.alpha;

    for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
      for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
        for (const child of this.grid[x][y]) {
          if (child.visible) {
            child.updateTransform(opts);
          }
        }
      }
    }

    return this;
  }
}
