import { getTileCenter } from "./utils";
import { MapUi } from "../ui/map-ui";
import { Camera } from "./camera";
import { GameApi } from "../api";
import { Tile } from "../api/tile.interface";
import {
  CanvasTextMetrics,
  Container,
  Graphics,
  Text,
  TextStyle,
} from "pixi.js";

export class PathRenderer {
  pathGraphics = new Graphics();

  labels: Text[] = [];

  constructor(
    private container: Container,
    private game: GameApi,
    private camera: Camera,
    private mapUi: MapUi,
  ) {
    this.container.addChild(this.pathGraphics);

    mapUi.activePath$.subscribe((path) => this.buildPath(path));
  }

  clear() {
    this.pathGraphics.clear();
    for (const label of this.labels) {
      this.container.removeChild(label);
      label.destroy();
    }
    this.labels = [];
  }

  buildPath(path: Tile[][] | null) {
    this.clear();

    const g = this.pathGraphics;

    const unit = this.mapUi.selectedUnit;
    if (!path || !path.length || !unit) {
      g.visible = false;
      return;
    }

    g.visible = true;

    g.setStrokeStyle({ width: 0.1, color: 0xff0000 });
    g.moveTo(...getTileCenter(unit.tile));
    for (const turn of path) {
      for (const tile of turn) {
        g.lineTo(...getTileCenter(tile));
      }
    }
    g.stroke();

    for (let turn = 0; turn < path.length; turn++) {
      if (path[turn][0]) {
        const scale = this.camera.transform.scale;
        const style = new TextStyle({
          align: "center",
          fill: "white",
          dropShadow: { blur: 5 },
          fontSize: scale * 0.7,
        });
        const label = new Text({ text: turn.toString(), style });

        label.scale.set(1 / scale, 1 / scale);
        this.container.addChild(label);
        this.labels.push(label);
        const metrics = CanvasTextMetrics.measureText(
          turn.toString(),
          label.style,
        );
        const [x, y] = getTileCenter(path[turn][0]);
        label.position.x = x - metrics.width / 2 / scale;
        label.position.y = y - metrics.height / 2 / scale;
      }
    }
  }
}
