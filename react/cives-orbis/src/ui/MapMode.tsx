import { Panel } from "./components";
import { Minimap } from "./Minimap";
import { NextTurnButton } from "./NextTurnButton";

import styles from "./MapMode.module.css";
import { UnitPanel } from "./UnitPanel";
import { useObservable } from "@/utils";
import { mapUi } from "./mapUi";
import { CityView } from "./city";
import { Toolbar } from "./Toolbar";
import { MapSettings } from "./MapSettings";
import { CombatInfo } from "./CombatInfo";

export function MapMode() {
  const city = useObservable(mapUi.selectedCity$);

  return (
    <>
      {city && <CityView city={city} />}
      <div
        className={styles.layout}
        style={{ visibility: city ? "hidden" : "visible" }}
      >
        <div className={styles.minimap}>
          <MapSettings />
          <Panel corner="bottom-right">
            <div style={{ display: "flex", flexDirection: "column" }}>
              <NextTurnButton />
              <Minimap />
            </div>
          </Panel>
        </div>

        <div className={styles.toolbar}>
          <Panel corner="top-right">
            <Toolbar />
          </Panel>
        </div>

        <div className={styles.unit}>
          <CombatInfo />
          <UnitPanel />
        </div>
      </div>
    </>
  );
}
