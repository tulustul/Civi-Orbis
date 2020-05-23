import * as PIXI from "pixi.js";

import { GameApi } from "src/app/api";
import { Area } from "src/app/api/area";
import { putContainerAtTile, drawHex, HEX_GEOMETRY } from "../utils";
import { TileContainer } from "../tile-container";
import { Tile, SeaLevel } from "src/app/shared";
import { GameState } from "src/app/api/state";

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

void main() {
  vec4 c = color;
  float a = 1.0;
  if (vUvs < 0.05) {
    a = 0.0;
  } else if (vUvs < 0.95) {
    a = (vUvs - 0.3) * 1.0;
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

const borderGeometries = new Map<string, PIXI.Geometry>();

let borderProgram: PIXI.Program;
let backgroundProgram: PIXI.Program;

export class AreasDrawer {
  areasDrawers: AreaDrawer[] = [];

  constructor(
    private game: GameApi,
    private bordersContainer: TileContainer,
    private backgroundContainer: TileContainer,
  ) {
    borderProgram = PIXI.Program.from(VS_BORDER_PROGRAM, FRAG_BORDER_PROGRAM);
    backgroundProgram = PIXI.Program.from(
      VS_BACKGROUND_PROGRAM,
      FRAG_BACKGROUND_PROGRAM,
    );

    this.game.stop$.subscribe(() => this.clear());
    this.game.init$.subscribe(() => {
      this.game.state!.areaSpawned$.subscribe((area) => {
        this.areasDrawers.push(
          new AreaDrawer(
            area,
            this.game.state!,
            this.bordersContainer,
            this.backgroundContainer,
          ),
        );
      });
    });
  }

  build() {
    for (const area of this.game.state!.areas) {
      const areaDrawer = new AreaDrawer(
        area,
        this.game.state!,
        this.bordersContainer,
        this.backgroundContainer,
      );
      this.areasDrawers.push(areaDrawer);
      areaDrawer.build();
    }
  }

  clear() {
    for (const areaDrawer of this.areasDrawers) {
      areaDrawer.clear();
    }
    this.areasDrawers = [];
  }
}

class AreaDrawer {
  borderShader: PIXI.Shader;

  backgroundShader: PIXI.Shader;

  bordersMap = new Map<Tile, PIXI.Mesh>();

  backgroundMap = new Map<Tile, PIXI.Mesh>();

  constructor(
    private area: Area,
    private state: GameState,
    private bordersContainer: TileContainer,
    private backgroundContainer: TileContainer,
  ) {
    this.borderShader = new PIXI.Shader(borderProgram, {
      color: area.vec4Color,
    });

    this.backgroundShader = new PIXI.Shader(backgroundProgram, {
      color: area.vec4Color,
    });

    area.bordersUpdated$.subscribe((tiles) => {
      for (const tile of tiles) {
        this.updateTileBorders(tile);
      }
    });

    area.addedTiles$.subscribe((tiles) => {
      for (const tile of tiles) {
        this.drawTileBackground(tile);
      }
    });

    area.removedTiles$.subscribe((tiles) => {
      for (const tile of tiles) {
        const mesh = this.backgroundMap.get(tile);
        if (mesh) {
          mesh.destroy();
          this.backgroundMap.delete(tile);
        }
      }
    });
  }

  build() {
    for (const [tile, borders] of this.area.borders) {
      this.drawTileBorders(tile, borders);
    }
    for (const tile of this.area.tiles) {
      this.drawTileBackground(tile);
    }
  }

  private drawTileBackground(tile: Tile) {
    if (tile.seaLevel !== SeaLevel.none) {
      return;
    }

    const mesh = new PIXI.Mesh(HEX_GEOMETRY, this.backgroundShader);
    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.backgroundContainer.addChild(mesh, tile);
    this.backgroundMap.set(tile, mesh);

    if (!this.state.trackedPlayer.exploredTiles.has(tile)) {
      mesh.visible = false;
    }
  }

  private updateTileBorders(tile) {
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

  private drawTileBorders(tile: Tile, borders: string) {
    let geometry = borderGeometries.get(borders);
    if (!geometry) {
      geometry = makeBorderGeometry(borders);
      borderGeometries.set(borders, geometry);
    }

    const mesh = new PIXI.Mesh(geometry, this.borderShader);

    // putContainerAtTile(tile, mesh);
    mesh.position.x = tile.x + (tile.y % 2 ? 0.5 : 0);
    mesh.position.y = tile.y * 0.75;

    this.bordersContainer.addChild(mesh, tile);
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
