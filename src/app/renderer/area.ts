import * as PIXI from "pixi.js";

import { SeaLevel } from "src/app/shared";
import { GameState } from "src/app/api/state";
import { TileContainer } from "./tile-container";
import { HEX_GEOMETRY } from "./utils";
import { Tile } from "../api/tile.interface";

export interface AreaOptions {
  color: number;
  borderSize: number;
  borderShadow: number;
  borderShadowStrength: number;
  backgroundOpacity: number;
  visibleOnWater: boolean;
  container: TileContainer;
}

const VS_BORDER_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;
attribute float aUvs;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

varying float vUvs;

void main() {
  vUvs = aUvs;
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAG_BORDER_PROGRAM = `
precision mediump float;

varying float vUvs;

uniform vec4 color;
uniform float borderSize;
uniform float borderShadow;
uniform float borderShadowStrength;

void main() {
  vec4 c = color;
  float a = 1.0;
  if (vUvs < borderSize) {
    a = 0.0;
  } else if (vUvs < (1.0 - borderSize)) {
    a = (vUvs - (1.0 - borderShadow)) * borderShadowStrength;
  }
  
  gl_FragColor = vec4(c.r * a, c.g * a, c.b * a, a);
}`;

const VS_BACKGROUND_PROGRAM = `
precision mediump float;

attribute vec2 aVertexPosition;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;

void main() {
  gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
}`;

const FRAG_BACKGROUND_PROGRAM = `
precision mediump float;

uniform vec4 color;
uniform float opacity;

void main() {
  float a = 0.5;
  gl_FragColor = vec4(color.r * opacity, color.g * opacity, color.b * opacity, opacity);
}`;

const TRIANGLES: number[][] = [
  [0.5, 0.5, 0, 0.25, 0.5, 0],
  [0.5, 0.5, 0.5, 0, 1, 0.25],
  [0.5, 0.5, 1, 0.25, 1, 0.75],
  [0.5, 0.5, 1, 0.75, 0.5, 1],
  [0.5, 0.5, 0.5, 1, 0, 0.75],
  [0.5, 0.5, 0, 0.75, 0, 0.25],
];

const LEFT_SIDE_TRIANGLES: number[][] = [
  [0.5, 0.5, 0, 0.5, 0, 0.25],
  [0.5, 0.5, 0.25, 0.125, 0.5, 0],
  [0.5, 0.5, 0.75, 0.125, 1, 0.25],
  [0.5, 0.5, 1, 0.5, 1, 0.75],
  [0.5, 0.5, 0.75, 0.875, 0.5, 1],
  [0.5, 0.5, 0.25, 0.875, 0, 0.75],
];

const RIGHT_SIDE_TRIANGLES: number[][] = [
  [0.5, 0.5, 0.5, 0, 0.75, 0.125],
  [0.5, 0.5, 1, 0.25, 1, 0.5],
  [0.5, 0.5, 1, 0.75, 0.75, 0.875],
  [0.5, 0.5, 0.5, 1, 0.25, 0.875],
  [0.5, 0.5, 0, 0.75, 0, 0.5],
  [0.5, 0.5, 0, 0.25, 0.25, 0.125],
];

const borderGeometries = new Map<string, PIXI.Geometry>();

const borderProgram = PIXI.Program.from(VS_BORDER_PROGRAM, FRAG_BORDER_PROGRAM);
const backgroundProgram = PIXI.Program.from(
  VS_BACKGROUND_PROGRAM,
  FRAG_BACKGROUND_PROGRAM,
);

function makeBorderGeometry(borders: string): PIXI.Geometry {
  const vertices: number[] = [];
  const uvs: number[] = [];

  for (let i = 0; i < 6; i++) {
    if (borders[i] === "1") {
      vertices.push(...TRIANGLES[i]);
      uvs.push(...[0, 1, 1]);

      let leftNeighbour = i - 1;
      if (leftNeighbour < 0) {
        leftNeighbour += 6;
      }
      if (borders[leftNeighbour] === "0") {
        vertices.push(...LEFT_SIDE_TRIANGLES[i]);
        uvs.push(...[0, 0, 1]);
      }

      let rightNeighbour = i + 1;
      if (rightNeighbour > 5) {
        rightNeighbour -= 6;
      }
      if (borders[rightNeighbour] === "0") {
        vertices.push(...RIGHT_SIDE_TRIANGLES[i]);
        uvs.push(...[0, 1, 0]);
      }
    }
  }
  return new PIXI.Geometry()
    .addAttribute("aVertexPosition", vertices, 2)
    .addAttribute("aUvs", uvs, 1);
}

export class Area {
  tiles = new Set<Tile>();

  borders = new Map<Tile, string>();

  drawer: AreaDrawer;

  constructor(state: GameState, private options: AreaOptions) {
    this.drawer = new AreaDrawer(this, state, options);
  }

  destroy() {
    this.drawer.clear();
  }

  setTiles(tiles: Tile[]) {
    this.clear();
    this.tiles = new Set(tiles);
    this.computeAllBorders();

    for (const [tile, borders] of this.borders) {
      this.drawer.drawTileBorders(tile, borders);
    }

    if (this.options.backgroundOpacity > 0) {
      for (const tile of this.tiles) {
        this.drawer.drawTileBackground(tile);
      }
    }
  }

  addTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.tiles.add(tile);
      this.drawer.drawTileBackground(tile);
    }

    this.computeBordersForTiles(tiles);
  }

  removeTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      this.tiles.delete(tile);
    }
    this.computeBordersForTiles(tiles);
    this.drawer.removeTiles(tiles);
  }

  private computeBordersForTiles(tiles: Tile[]) {
    const visited = new Set<Tile>();
    for (const tile of tiles) {
      if (visited.has(tile)) {
        continue;
      }
      visited.add(tile);
      this.computeTileBorders(tile);
      this.drawer.updateTileBorders(tile);

      for (const neighbour of tile.neighbours) {
        if (!this.tiles.has(neighbour) || visited.has(neighbour)) {
          continue;
        }
        this.computeTileBorders(neighbour);
        this.drawer.updateTileBorders(neighbour);
      }
    }
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
    this.borders.clear();
    this.tiles = new Set();
    this.drawer.clear();
  }
}

class AreaDrawer {
  borderShader: PIXI.Shader;

  backgroundShader: PIXI.Shader;

  bordersMap = new Map<Tile, PIXI.Mesh>();

  backgroundMap = new Map<Tile, PIXI.Mesh>();

  vec4Color: number[];

  constructor(
    private area: Area,
    private state: GameState,
    private options: AreaOptions,
  ) {
    const cssColor = "#" + options.color.toString(16).padStart(6, "0");

    this.vec4Color = [
      parseInt(cssColor[1] + cssColor[2], 16) / 255,
      parseInt(cssColor[3] + cssColor[4], 16) / 255,
      parseInt(cssColor[5] + cssColor[6], 16) / 255,
      1,
    ];

    this.borderShader = new PIXI.Shader(borderProgram, {
      color: this.vec4Color,
      borderSize: this.options.borderSize,
      borderShadow: this.options.borderShadow,
      borderShadowStrength: this.options.borderShadowStrength,
    });

    this.backgroundShader = new PIXI.Shader(backgroundProgram, {
      color: this.vec4Color,
      opacity: this.options.backgroundOpacity,
    });
  }

  removeTiles(tiles: Tile[]) {
    for (const tile of tiles) {
      const mesh = this.backgroundMap.get(tile);
      if (mesh) {
        mesh.destroy();
        this.backgroundMap.delete(tile);
      }
    }
  }

  drawTileBackground(tile: Tile) {
    if (tile.seaLevel !== SeaLevel.none && !this.options.visibleOnWater) {
      return;
    }

    const mesh = new PIXI.Mesh(HEX_GEOMETRY, this.backgroundShader);
    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.options.container.addChild(mesh, tile);
    this.backgroundMap.set(tile, mesh);

    if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
      mesh.visible = false;
    }
  }

  updateTileBorders(tile: Tile) {
    const mesh = this.bordersMap.get(tile);
    if (mesh) {
      mesh.destroy();
    }
    const borders = this.area.borders.get(tile);
    if (borders) {
      this.drawTileBorders(tile, borders);
    } else {
      this.bordersMap.delete(tile);
    }
  }

  drawTileBorders(tile: Tile, borders: string) {
    let geometry = borderGeometries.get(borders);
    if (!geometry) {
      geometry = makeBorderGeometry(borders);
      borderGeometries.set(borders, geometry);
    }

    const mesh = new PIXI.Mesh(geometry, this.borderShader);

    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.options.container.addChild(mesh, tile);
    this.bordersMap.set(tile, mesh);

    if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
      mesh.visible = false;
    }
  }

  clear() {
    for (const obj of this.bordersMap.values()) {
      obj.destroy();
    }
    this.bordersMap.clear();

    for (const obj of this.backgroundMap.values()) {
      obj.destroy();
    }
    this.backgroundMap.clear();
  }
}
