import { Panel } from "./components";
import { Minimap } from "./Minimap";
import { NextTurnButton } from "./NextTurnButton";

import styles from "./MapMode.module.css";
import { UnitPanel } from "./UnitPanel";

export function MapMode() {
  return (
    <>
      <Panel corner="bottom-right" className={styles.minimap}>
        <NextTurnButton />
        <Minimap />
      </Panel>

      <UnitPanel />
    </>
  );
}
