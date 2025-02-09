import { useApplication } from "@pixi/react";
import { useEffect } from "react";
import { Terrain } from "./Terrain";
import { controls } from "./controls";
import { camera } from "./camera";
import { UpdateTransformOptions } from "pixi.js";
import { FogOfWar } from "./FogOfWar";
import { Path } from "./Path";

export function Map() {
  const app = useApplication();

  useEffect(() => {
    if (app.isInitialising) {
      return;
    }

    (globalThis as any).__PIXI_APP__ = app.app;

    camera.setApp(app.app);

    app.app.canvas.addEventListener("click", (e) => {
      controls.onClick(e);
    });
    app.app.canvas.addEventListener("mousedown", (e) => {
      controls.onMouseDown(e);
    });
    app.app.canvas.addEventListener("mouseup", (e) => {
      controls.onMouseUp(e);
    });
    app.app.canvas.addEventListener("mousemove", (e) => {
      controls.onMouseMove(e);
    });
    app.app.canvas.addEventListener("wheel", (e) => {
      controls.onWheel(e);
    });
    app.app.canvas.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    camera.transform$.subscribe((t) => {
      const x = (-t.x + app.app.canvas.width / 2 / t.scale) * t.scale;
      const y = (-t.y + app.app.canvas.height / 2 / t.scale) * t.scale;

      const transform: Partial<UpdateTransformOptions> = {
        x,
        y,
        scaleX: t.scale,
        scaleY: t.scale,
      };

      app.app.stage.updateTransform(transform);
    });
  }, [app]);

  return (
    <>
      <Terrain />
      <FogOfWar />
      <Path />
    </>
  );
}
