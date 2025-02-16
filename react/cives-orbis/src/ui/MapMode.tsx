import { Panel } from "./components";
import { Minimap } from "./Minimap";
import { NextTurnButton } from "./NextTurnButton";

import styles from "./MapMode.module.css";
import { UnitPanel } from "./UnitPanel";
import { useObservable } from "@/utils";
import { mapUi } from "./mapUi";
import { CityView } from "./city";

export function MapMode() {
  const city = useObservable(mapUi.selectedCity$);

  return (
    <>
      {city && <CityView city={city} />}
      <div style={{ visibility: city ? "hidden" : "visible" }}>
        <Panel corner="bottom-right" className={styles.minimap}>
          <NextTurnButton />
          <Minimap />
        </Panel>

        <UnitPanel />
      </div>
    </>
  );
}
