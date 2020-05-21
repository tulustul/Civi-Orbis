import * as PIXI from "pixi.js";

import { TileDirection, Tile } from "src/app/shared";
import { GameApi } from "src/app/api";
import { Area } from "src/app/api/area";
import { putContainerAtTile } from "../utils";

export class AreaDrawer {
  areasMap = new Map<Area, PIXI.DisplayObject[]>();

  // prettier-ignore
  BASE_GEOMETRIES: { [key: string]: PIXI.Geometry } = {
    "111000": new PIXI.Geometry()
      .addAttribute("aVertexPosition", [
          0.5, 0.5, 0, 0.5, 0, 0.25,
          0.5, 0.5, 0, 0.25, 0.5, 0,
          0.5, 0.5, 0.5, 0, 1, 0.25,
          0.5, 0.5, 1, 0.25, 1, 0.75,
          0.5, 0.5, 1, 0.75, 0.75, 0.875,
      ], 2)
      .addAttribute("aUvs", [
        0, 0, 1, 1, 1, 1,
        0, 0, 1, 1, 1, 1,
        0, 0, 1, 1, 1, 1,
        0, 0, 1, 1, 1, 1,
        0, 0, 1, 1, 1, 1,
      ], 2),
  };

  GEOMETRIES: {
    [key: string]: { rotation: number; geometry: PIXI.Geometry };
  } = {
    "111000": { rotation: 0, geometry: this.BASE_GEOMETRIES["111000"] },
    "011100": {
      rotation: Math.PI / 3,
      geometry: this.BASE_GEOMETRIES["111000"],
    },
    "001110": {
      rotation: (Math.PI / 3) * 2,
      geometry: this.BASE_GEOMETRIES["111000"],
    },
    "000111": { rotation: Math.PI, geometry: this.BASE_GEOMETRIES["111000"] },
    "100011": {
      rotation: (Math.PI / 3) * 4,
      geometry: this.BASE_GEOMETRIES["111000"],
    },
    "110001": {
      rotation: (Math.PI / 3) * 5,
      geometry: this.BASE_GEOMETRIES["111000"],
    },
  };

  program = PIXI.Program.from(
    `
  precision mediump float;

  attribute vec2 aVertexPosition;
  attribute vec2 aUvs;

  uniform mat3 translationMatrix;
  uniform mat3 projectionMatrix;

  varying vec2 vUvs;

  void main() {

      vUvs = aUvs;
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

  }`,

    `precision mediump float;

  varying vec2 vUvs;

  void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
  }

`,
  );

  constructor(private game: GameApi, private container: PIXI.Container) {
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
    for (const [tile, borders] of area.borders.entries()) {
      const geometry = this.GEOMETRIES[borders];
      if (!geometry) {
        continue;
      }

      const mesh = new PIXI.Mesh(
        geometry.geometry,
        new PIXI.Shader(this.program),
      );
      mesh.pivot.set(0.5, 0.5);
      mesh.rotation = geometry.rotation;

      putContainerAtTile(tile, mesh);
      mesh.position.y += 0.25;

      this.container.addChild(mesh);
    }
  }

  clear() {
    for (const area of this.areasMap.keys()) {
      this.clearArea(area);
    }
  }
}
