import { Option, Radio } from "@/ui/components";
import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  IMPROVEMENT_OPTIONS,
  LAND_FORM_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
} from "./constants";
import { Climate, LandForm, SeaLevel } from "@/shared";
import { TileImprovement } from "@/core/tile-improvements";
import { useEffect, useState } from "react";

import styles from "./TilePainter.module.css";
import { useObservable } from "@/utils";
import { mapUi } from "../mapUi";
import { renderer } from "@/renderer/renderer";
import { TilesCoordsWithNeighbours } from "@/core/serialization/channel";
import { bridge } from "@/bridge";
import { controls } from "@/renderer/controls";

type PaintData = {
  size: number;
  climate: Climate | undefined;
  forest: boolean | undefined;
  wetlands: boolean | undefined;
  landForm: LandForm | undefined;
  seaLevel: SeaLevel | undefined;
  improvement: TileImprovement | undefined;
};

const IGNORE_OPTION: Option<any> = { label: "ignore", value: undefined };

const SIZE_OPTIONS: Option<number>[] = [
  { label: "1x1", value: 1 },
  { label: "2x2", value: 2 },
  { label: "3x3", value: 3 },
  { label: "5x5", value: 5 },
  { label: "7x7", value: 7 },
  { label: "10x10", value: 10 },
  { label: "15x15", value: 15 },
];

const _SEA_LEVEL_OPTIONS: Option<SeaLevel>[] = [
  IGNORE_OPTION,
  ...SEA_LEVEL_OPTIONS,
];
const _LAND_FORM_OPTIONS: Option<LandForm>[] = [
  IGNORE_OPTION,
  ...LAND_FORM_OPTIONS,
];
const _CLIMATE_OPTIONS: Option<Climate>[] = [IGNORE_OPTION, ...CLIMATE_OPTIONS];
const _FOREST_OPTIONS: Option<boolean>[] = [IGNORE_OPTION, ...FOREST_OPTIONS];
const _WETLANDS_OPTIONS: Option<boolean>[] = [
  IGNORE_OPTION,
  ...WETLANDS_OPTIONS,
];
const _IMPROVEMENT_OPTIONS: Option<TileImprovement>[] = [
  IGNORE_OPTION,
  ...IMPROVEMENT_OPTIONS,
];

const DEFAULT_PAINT_DATA: PaintData = {
  size: 1,
  climate: undefined,
  forest: undefined,
  landForm: undefined,
  seaLevel: undefined,
  wetlands: undefined,
  improvement: undefined,
};

export function TilesPainter() {
  const [paintData, setPaintData] = useState<PaintData>({
    ...DEFAULT_PAINT_DATA,
  });

  const hoveredTile = useObservable(mapUi.hoveredTile$);

  useEffect(() => {
    onHover();
  }, [hoveredTile]);

  async function onHover() {
    if (!hoveredTile) {
      renderer.areaDrawer.editorArea.clear();
      return;
    }

    const tiles = await bridge.tiles.getInRange({
      tileId: hoveredTile.id,
      range: paintData.size - 1,
    });
    renderer.areaDrawer.editorArea.clear();
    renderer.areaDrawer.editorArea.addTiles(tiles);
    if (controls.mouseButton === 2) {
      paint(tiles);
    }
  }

  function paint(tiles: TilesCoordsWithNeighbours[]) {
    if (!hoveredTile) {
      return;
    }

    const filteredPaintData = Object.fromEntries(
      Object.entries(paintData).filter(
        ([key, value]) => value !== undefined && key !== "size",
      ),
    );

    bridge.tiles.bulkUpdate(
      tiles.map((tile) => ({ id: tile.id, ...filteredPaintData })),
    );
  }

  function reset() {
    setPaintData({ ...DEFAULT_PAINT_DATA });
  }

  return (
    <div className={styles.wrapper}>
      <div>
        <h4>Sea level</h4>
        <Radio
          options={SIZE_OPTIONS}
          value={paintData.size}
          onChange={(size) => setPaintData({ ...paintData, size })}
        />
      </div>

      <div>
        <h4>Sea level</h4>
        <Radio
          options={_SEA_LEVEL_OPTIONS}
          value={paintData.seaLevel}
          onChange={(seaLevel) => setPaintData({ ...paintData, seaLevel })}
        />
      </div>

      <div>
        <h4>Land form</h4>
        <Radio
          options={_LAND_FORM_OPTIONS}
          value={paintData.landForm}
          onChange={(landForm) => setPaintData({ ...paintData, landForm })}
        />
      </div>

      <div>
        <h4>Climate</h4>
        <Radio
          options={_CLIMATE_OPTIONS}
          value={paintData.climate}
          onChange={(climate) => setPaintData({ ...paintData, climate })}
        />
      </div>

      <div>
        <h4>Forest</h4>
        <Radio
          options={_FOREST_OPTIONS}
          value={paintData.forest}
          onChange={(forest) => setPaintData({ ...paintData, forest })}
        />
      </div>

      <div>
        <h4>Wetlands</h4>
        <Radio
          options={_WETLANDS_OPTIONS}
          value={paintData.wetlands}
          onChange={(wetlands) => setPaintData({ ...paintData, wetlands })}
        />
      </div>

      <div>
        <h4>Improvements</h4>
        <Radio
          options={_IMPROVEMENT_OPTIONS}
          value={paintData.improvement}
          onChange={(improvement) =>
            setPaintData({ ...paintData, improvement })
          }
        />
      </div>

      <button onClick={reset}>Reset</button>
    </div>
  );
}
