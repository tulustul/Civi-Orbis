import { Multiselect, Radio } from "@/ui/components";
import styles from "./TileEditor.module.css";

import { bridge } from "@/bridge";
import { useObservable } from "@/utils";
import { useEffect } from "react";
import { mapUi } from "../mapUi";
import {
  CLIMATE_OPTIONS,
  FOREST_OPTIONS,
  IMPROVEMENT_OPTIONS,
  LAND_FORM_OPTIONS,
  RESOURCE_OPTIONS,
  RIVER_OPTIONS,
  ROAD_OPTIONS,
  SEA_LEVEL_OPTIONS,
  WETLANDS_OPTIONS,
} from "./constants";

export function TileEditor() {
  const tile = useObservable(mapUi.selectedTile$);

  useEffect(() => {
    mapUi.enableSelectingTile(true);
    return () => mapUi.enableSelectingTile(false);
  }, []);

  if (!tile) {
    return <div>Select the tile to edit</div>;
  }

  return (
    <div className={styles.tile}>
      <div>
        <h4>Sea level</h4>
        <Radio
          options={SEA_LEVEL_OPTIONS}
          value={tile.seaLevel}
          onChange={(seaLevel) =>
            bridge.tiles.update({ id: tile!.id, seaLevel })
          }
        />
      </div>

      <div>
        <h4>Land form</h4>
        <Radio
          options={LAND_FORM_OPTIONS}
          value={tile.landForm}
          onChange={(landForm) =>
            bridge.tiles.update({ id: tile!.id, landForm })
          }
        />
      </div>

      <div>
        <h4>Climate</h4>
        <Radio
          options={CLIMATE_OPTIONS}
          value={tile.climate}
          onChange={(climate) => bridge.tiles.update({ id: tile!.id, climate })}
        />
      </div>

      <div>
        <h4>Forest</h4>
        <Radio
          options={FOREST_OPTIONS}
          value={tile.forest}
          onChange={(forest) => bridge.tiles.update({ id: tile!.id, forest })}
        />
      </div>

      <div>
        <h4>Wetlands</h4>
        <Radio
          options={WETLANDS_OPTIONS}
          value={tile.wetlands}
          onChange={(wetlands) =>
            bridge.tiles.update({ id: tile!.id, wetlands })
          }
        />
      </div>

      <div>
        <h4>Improvements</h4>
        <Radio
          options={IMPROVEMENT_OPTIONS}
          value={tile.improvement}
          onChange={(improvement) =>
            bridge.tiles.update({ id: tile!.id, improvement })
          }
        />
      </div>

      <div>
        <h4>Road</h4>
        <Radio
          options={ROAD_OPTIONS}
          value={tile.road}
          onChange={(road) => bridge.tiles.update({ id: tile!.id, road })}
        />
      </div>

      <div>
        <h4>River</h4>
        <Multiselect
          options={RIVER_OPTIONS}
          value={tile.riverParts}
          onChange={(riverParts) =>
            bridge.tiles.update({ id: tile!.id, riverParts })
          }
        />
      </div>

      <div>
        <h4>Resource</h4>
        <Radio
          options={RESOURCE_OPTIONS}
          value={tile.resource?.id ?? null}
          onChange={(resourceId) =>
            bridge.tiles.setResource({
              tileId: tile!.id,
              resourceId,
              quantity: 1,
            })
          }
        />
      </div>
    </div>
  );
}
