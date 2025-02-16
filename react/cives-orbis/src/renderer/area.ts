import {
  Container,
  Geometry,
  Mesh,
  Shader,
  ShaderFromResources,
} from "pixi.js";

import { TilesCoordsWithNeighbours } from "@/core/serialization/channel";
import { programs as areaPrograms } from "./shaders/area-shaders";
import { HEX_GEOMETRY } from "./utils";

export interface AreaPrograms {
  background: ShaderFromResources;
  border: ShaderFromResources;
}

export interface AreaOptions {
  color: number;
  borderSize: number;
  borderShadow: number;
  borderShadowStrength: number;
  backgroundOpacity: number;
  visibleOnWater: boolean;
  container: Container;
  programs?: AreaPrograms;
}

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

const borderGeometries = new Map<string, Geometry>();

function makeBorderGeometry(borders: string): Geometry {
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
  return new Geometry({
    attributes: {
      aVertexPosition: { buffer: vertices, format: "float32x2" },
      aUvs: { buffer: uvs, format: "float32" },
    },
  });
}

export class Area {
  tiles = new Set<TilesCoordsWithNeighbours>();
  tilesById = new Map<number, TilesCoordsWithNeighbours>();

  bordersByTile = new Map<number, string>();

  drawer: AreaDrawer;

  constructor(private options: AreaOptions) {
    this.drawer = new AreaDrawer(this, options);
  }

  destroy() {
    this.drawer.clear();
  }

  setTiles(tiles: TilesCoordsWithNeighbours[]) {
    this.clear();
    this.tiles = new Set(tiles);
    for (const tile of this.tiles) {
      this.tilesById.set(tile.id, tile);
    }
    this.computeAllBorders();

    for (const tile of this.tiles) {
      const borders = this.bordersByTile.get(tile.id);
      if (borders) {
        this.drawer.drawTileBorders(tile, borders);
      }
    }

    if (this.options.backgroundOpacity > 0) {
      for (const tile of this.tiles) {
        this.drawer.drawTileBackground(tile);
      }
    }
  }

  addTiles(tiles: TilesCoordsWithNeighbours[]) {
    for (const tile of tiles) {
      this.tiles.add(tile);
      this.tilesById.set(tile.id, tile);
      this.drawer.drawTileBackground(tile);
    }

    this.computeBordersForTiles(tiles);
  }

  removeTiles(tiles: TilesCoordsWithNeighbours[]) {
    this.drawer.removeTiles(tiles);
    for (const tile of tiles) {
      this.tiles.delete(this.tilesById.get(tile.id)!);
      this.tilesById.delete(tile.id);
    }
    this.computeBordersForTiles(tiles);
  }

  private computeBordersForTiles(tiles: TilesCoordsWithNeighbours[]) {
    const visited = new Set<number>();
    for (const tile of tiles) {
      if (visited.has(tile.id)) {
        continue;
      }
      visited.add(tile.id);
      this.computeTileBorders(tile);
      this.drawer.updateTileBorders(tile);

      for (const neighbourId of tile.fullNeighbours) {
        if (
          neighbourId == null ||
          !this.tilesById.has(neighbourId) ||
          visited.has(neighbourId)
        ) {
          continue;
        }

        const neighbour = this.tilesById.get(neighbourId)!;
        this.computeTileBorders(neighbour);
        this.drawer.updateTileBorders(neighbour);
      }
    }
  }

  private computeAllBorders() {
    this.bordersByTile.clear();
    for (const tile of this.tiles) {
      this.computeTileBorders(tile);
    }
  }

  private computeTileBorders(tile: TilesCoordsWithNeighbours) {
    const borders = tile.fullNeighbours
      .map((n) => (n && this.tilesById.has(n) ? "0" : "1"))
      .join("");

    if (borders === "000000") {
      this.bordersByTile.delete(tile.id);
    } else {
      this.bordersByTile.set(tile.id, borders);
    }
  }

  clear() {
    this.bordersByTile.clear();
    this.tiles.clear();
    this.tilesById.clear();
    this.drawer.clear();
  }
}

class AreaDrawer {
  borderShader: Shader;

  backgroundShader: Shader;

  bordersMap = new Map<number, Mesh<Geometry, Shader>>();

  backgroundMap = new Map<number, Mesh<Geometry, Shader>>();

  vec4Color: Float32Array;

  constructor(
    private area: Area,
    private options: AreaOptions,
  ) {
    const programs = options.programs ?? areaPrograms;

    this.vec4Color = new Float32Array([
      ((options.color >> 16) & 0xff) / 255, // red
      ((options.color >> 8) & 0xff) / 255, // green
      (options.color & 0xff) / 255, // blue
      1, // alpha
    ]);

    this.borderShader = Shader.from({
      ...programs.border,
      resources: {
        uniforms: {
          color: { value: this.vec4Color, type: "vec4<f32>" },
          borderSize: { value: this.options.borderSize, type: "f32" },
          borderShadow: { value: this.options.borderShadow, type: "f32" },
          borderShadowStrength: {
            value: this.options.borderShadowStrength,
            type: "f32",
          },
        },
      },
    });

    this.backgroundShader = Shader.from({
      ...programs.background,
      resources: {
        uniforms: {
          color: { value: this.vec4Color, type: "vec4<f32>" },
          opacity: { value: this.options.backgroundOpacity, type: "f32" },
        },
      },
    });
  }

  removeTiles(tiles: TilesCoordsWithNeighbours[]) {
    for (const tile of tiles) {
      const mesh = this.backgroundMap.get(tile.id);
      if (mesh) {
        mesh.destroy();
        this.backgroundMap.delete(tile.id);
      }
    }
  }

  drawTileBackground(tile: TilesCoordsWithNeighbours) {
    // TODO fix
    // if (tile.seaLevel !== SeaLevel.none && !this.options.visibleOnWater) {
    //   return;
    // }

    const mesh = new Mesh({
      geometry: HEX_GEOMETRY,
      shader: this.backgroundShader,
    });
    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.options.container.addChild(mesh);
    this.backgroundMap.set(tile.id, mesh);
  }

  updateTileBorders(tile: TilesCoordsWithNeighbours) {
    const mesh = this.bordersMap.get(tile.id);
    if (mesh) {
      mesh.destroy();
    }

    if (!this.area.tilesById.has(tile.id)) {
      return;
    }

    const borders = this.area.bordersByTile.get(tile.id);
    if (borders) {
      this.drawTileBorders(tile, borders);
    } else {
      this.bordersMap.delete(tile.id);
    }
  }

  drawTileBorders(tile: TilesCoordsWithNeighbours, borders: string) {
    let geometry = borderGeometries.get(borders);
    if (!geometry) {
      geometry = makeBorderGeometry(borders);
      borderGeometries.set(borders, geometry);
    }

    const mesh = new Mesh({ geometry, shader: this.borderShader });

    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.options.container.addChild(mesh);
    this.bordersMap.set(tile.id, mesh);
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
