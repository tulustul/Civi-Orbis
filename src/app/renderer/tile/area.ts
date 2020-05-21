import * as PIXI from "pixi.js";

import { TileDirection, Tile } from "src/app/shared";
import { GameApi } from "src/app/api";
import { Area } from "src/app/api/area";
import { putContainerAtTile } from "../utils";
import { TileContainer } from "../tile-container";

export class AreaDrawer {
  areasMap = new Map<Area, PIXI.DisplayObject[]>();

  TRIANGLES: number[][] = [
    [0.5, 0.5, 0, 0.25, 0.5, 0],
    [0.5, 0.5, 0.5, 0, 1, 0.25],
    [0.5, 0.5, 1, 0.25, 1, 0.75],
    [0.5, 0.5, 1, 0.75, 0.5, 1],
    [0.5, 0.5, 0.5, 1, 0, 0.75],
    [0.5, 0.5, 0, 0.75, 0, 0.25],
  ];

  LEFT_SIDE_TRIANGLES: number[][] = [
    [0.5, 0.5, 0, 0.5, 0, 0.25],
    [0.5, 0.5, 0.25, 0.125, 0.5, 0],
    [0.5, 0.5, 0.75, 0.125, 1, 0.25],
    [0.5, 0.5, 1, 0.5, 1, 0.75],
    [0.5, 0.5, 0.75, 0.875, 0.5, 1],
    [0.5, 0.5, 0.25, 0.875, 0, 0.75],
  ];

  RIGHT_SIDE_TRIANGLES: number[][] = [
    [0.5, 0.5, 0.5, 0, 0.75, 0.125],
    [0.5, 0.5, 1, 0.25, 1, 0.5],
    [0.5, 0.5, 1, 0.75, 0.75, 0.875],
    [0.5, 0.5, 0.5, 1, 0.25, 0.875],
    [0.5, 0.5, 0, 0.75, 0, 0.5],
    [0.5, 0.5, 0, 0.25, 0.25, 0.125],
  ];

  geometries = new Map<string, PIXI.Geometry>();

  program = PIXI.Program.from(
    `
  precision mediump float;

  attribute vec2 aVertexPosition;
  attribute float aUvs;

  uniform mat3 translationMatrix;
  uniform mat3 projectionMatrix;

  varying float vUvs;

  void main() {

      vUvs = aUvs;
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

  }`,

    `precision mediump float;

  varying float vUvs;

  uniform vec4 color;

  void main() {
    vec4 c = color;
    float a = 1.0;
    if (vUvs < 0.05) {
      a = 0.0;
    } else if (vUvs < 0.95) {
      a = (vUvs - 0.5) * 1.5;
    }
    
    gl_FragColor = vec4(min(c.r, a), min(c.g, a), min(c.b, a), a);
  }

`,
  );

  constructor(private game: GameApi, private container: TileContainer) {
    this.game.stop$.subscribe(() => this.clear());
  }

  build() {
    for (const area of this.game.state!.areas) {
      this.drawArea(area);
      // TODO we can update only single tiles here.
      area.updated$.subscribe(() => {
        this.clearArea(area);
        this.drawArea(area);
      });
    }
  }

  clearArea(area: Area) {
    for (const obj of this.areasMap.get(area) || []) {
      obj.destroy();
    }
    this.areasMap.delete(area);
  }

  private drawArea(area: Area) {
    const shader = new PIXI.Shader(this.program, { color: area.vec4Color });
    const objs: PIXI.DisplayObject[] = [];
    this.areasMap.set(area, objs);

    for (const [tile, borders] of area.borders.entries()) {
      let geometry = this.geometries.get(borders);
      if (!geometry) {
        geometry = this.makeBorderGeometry(borders);
        this.geometries.set(borders, geometry);
      }

      const mesh = new PIXI.Mesh(geometry, shader);

      putContainerAtTile(tile, mesh);
      mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
      mesh.position.y = tile.y * 0.75;

      this.container.addChild(mesh, tile);
      objs.push(mesh);

      if (!this.game.state!.trackedPlayer.exploredTiles.has(tile)) {
        mesh.visible = false;
      }
    }
  }

  private makeBorderGeometry(borders: string): PIXI.Geometry {
    const vertices: number[] = [];
    const uvs: number[] = [];

    for (let i = 0; i < 6; i++) {
      if (borders[i] === "1") {
        vertices.push(...this.TRIANGLES[i]);
        uvs.push(...[0, 1, 1]);

        let leftNeighbour = i - 1;
        if (leftNeighbour < 0) {
          leftNeighbour += 6;
        }
        if (borders[leftNeighbour] === "0") {
          vertices.push(...this.LEFT_SIDE_TRIANGLES[i]);
          uvs.push(...[0, 0, 1]);
        }

        let rightNeighbour = i + 1;
        if (rightNeighbour > 5) {
          rightNeighbour -= 6;
        }
        if (borders[rightNeighbour] === "0") {
          vertices.push(...this.RIGHT_SIDE_TRIANGLES[i]);
          uvs.push(...[0, 1, 0]);
        }
      }
    }
    return new PIXI.Geometry()
      .addAttribute("aVertexPosition", vertices, 2)
      .addAttribute("aUvs", uvs, 1);
  }

  clear() {
    for (const area of this.areasMap.keys()) {
      this.clearArea(area);
    }
  }
}
