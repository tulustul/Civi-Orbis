import { controls } from "@/renderer/controls";
import { renderer } from "@/renderer/renderer";
import { memo } from "react";
import { useEventListener } from "usehooks-ts";

function _GameCanvas() {
  useEventListener("keydown", (event) => controls.onKeyDown(event));

  return (
    <canvas
      ref={(canvas) => {
        if (canvas) {
          renderer.setCanvas(canvas);
        }
      }}
      onClick={(e) => controls.onClick(e.nativeEvent)}
      onMouseDown={(e) => controls.onMouseDown(e.nativeEvent)}
      onMouseUp={(e) => controls.onMouseUp(e.nativeEvent)}
      onMouseMove={(e) => controls.onMouseMove(e.nativeEvent)}
      onWheel={(e) => controls.onWheel(e.nativeEvent)}
      onContextMenu={(e) => e.preventDefault()}
    />
  );
}

export const GameCanvas = memo(_GameCanvas);
