import { CityChanneled } from "@/core/serialization/channel";
import { camera, Transform } from "@/renderer/camera";
import { ProgressBar } from "@/ui/components";
import { useEffect, useRef } from "react";
import styles from "./CitiesLayer.module.css";
import { getTileCoords } from "@/renderer/utils";
import { controls } from "@/renderer/controls";
import { mapUi } from "../mapUi";

type Props = {
  city: CityChanneled;
};

export function CityInfo({ city }: Props) {
  const elRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const subscription = camera.transform$.subscribe(transform);
    return () => subscription.unsubscribe();
  }, [camera]);

  useEffect(() => {
    if (!elRef.current) {
      return;
    }
    elRef.current.style.setProperty("--player-color", city.cssColor);
  }, []);

  function transform(t: Transform) {
    if (!elRef.current) {
      return;
    }

    const box = camera.tileBoundingBox;
    const tile = city.tile;
    if (
      tile.x >= box.xStart &&
      tile.x <= box.xEnd &&
      tile.y >= box.yStart &&
      tile.y <= box.yEnd
    ) {
      elRef.current.style.visibility = "visible";
    } else {
      elRef.current.style.visibility = "hidden";
      return;
    }

    const cityScale = Math.pow(t.scale / 70, 0.4);
    let [x, y] = getTileCoords(tile);
    [x, y] = camera.canvasToScreen(x + 0.5, y + 0.8);
    elRef.current.style.transform = `translate(${x}px, ${y}px) scale(${cityScale})`;
  }

  function getBody() {
    if (city.visibilityLevel === "basic") {
      return <div className={styles.simpleView}>{city.name}</div>;
    }

    return (
      <div>
        <ProgressBar
          className={styles.growth}
          progress={city.totalFood}
          nextProgress={city.totalFood + city.foodPerTurn}
          total={city.foodToGrow}
        >
          <span>{city.name}</span>
          <span>({city.turnsToGrow})</span>
        </ProgressBar>

        <ProgressBar
          className={styles.production}
          progress={city.totalProduction}
          nextProgress={city.totalProduction + city.productionPerTurn}
          total={city.productionRequired ?? 0}
        >
          <span>{city.productName}</span>
          <span>({city.turnsToProductionEnd})</span>
        </ProgressBar>
      </div>
    );
  }

  return (
    <div
      className={styles.city}
      ref={elRef}
      onClick={() => mapUi.selectCity(city.id)}
      // onMouseOver={() => {
      //   mapUi.hoverCity(city.id);
      // }}
      // onMouseOut={() => {
      //   mapUi.hoverCity(null);
      // }}
      onMouseDown={(e) => controls.onMouseDown(e.nativeEvent)}
      onMouseUp={() => controls.onMouseUp()}
      onMouseMove={(e) => controls.onMouseMove(e.nativeEvent)}
      onWheel={(e) => controls.onWheel(e.nativeEvent)}
      onContextMenu={(e) => e.preventDefault()}
    >
      <div className={styles.info}>
        <div className={styles.size}>{city.size}</div>
        {getBody()}
      </div>
    </div>
  );
}
