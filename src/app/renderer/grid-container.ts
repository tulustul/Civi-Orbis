import * as PIXIE from "pixi.js";

import { BoundingBox } from "./camera";

export class GridContainer extends PIXIE.DisplayObject {
  private grid: PIXIE.DisplayObject[][][] = [];

  private width: number;
  private height: number;

  private childrenMap = new Map<PIXIE.DisplayObject, [number, number]>();

  constructor(private bBox: BoundingBox) {
    super();
  }

  addChild<T extends PIXIE.DisplayObject>(
    child: T,
    x: number,
    y: number,
  ): void {
    if (child.parent) {
      child.parent.removeChild(child);
    }

    (child as any).parent = this;
    (child as any).transform._parentID = -1;

    this.grid[x][y].push(child);

    this.childrenMap.set(child, [x, y]);

    (this as any)._boundsID++;

    child.emit("added", this);
  }

  removeChild(child: PIXIE.DisplayObject) {
    if (this.childrenMap.has(child)) {
      const [x, y] = this.childrenMap.get(child)!;
      this.childrenMap.delete(child);
      const index = this.grid[x][y].indexOf(child);
      if (index !== -1) {
        this.grid[x][y].splice(index, 1);
      }
    }
  }

  destroyAllChildren() {
    for (let x = 0; x < this.width; x++) {
      for (let y = 0; y < this.height; y++) {
        for (const child of this.grid[x][y]) {
          child.destroy();
        }
      }
    }
  }

  setGridSize(width: number, height: number) {
    this.width = width;
    this.height = height;

    this.grid = new Array(width);
    for (let x = 0; x < width; x++) {
      this.grid[x] = new Array(height);
      for (let y = 0; y < height; y++) {
        this.grid[x][y] = [];
      }
    }
  }

  render(renderer: PIXIE.Renderer) {
    if (!this.visible || this.worldAlpha <= 0 || !this.renderable) {
      return;
    }

    for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
      for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
        for (const child of this.grid[x][y]) {
          child.render(renderer);
        }
      }
    }
    renderer.batch.flush();
  }

  updateTransform() {
    (this as any)._boundsID++;

    this.transform.updateTransform(this.parent.transform);

    // TODO: check render flags, how to process stuff here
    (this as any).worldAlpha = this.alpha * this.parent.worldAlpha;

    for (let x = this.bBox.xStart; x < this.bBox.xEnd; x++) {
      for (let y = this.bBox.yStart; y < this.bBox.yEnd; y++) {
        for (const child of this.grid[x][y]) {
          if (child.visible) {
            child.updateTransform();
          }
        }
      }
    }
  }
}
