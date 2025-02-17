import { Tab, Tabs } from "@/ui/components";
import { useUiState } from "../uiState";

import styles from "./Editor.module.css";
import { TileEditor } from "./TileEditor";
import { TilesPainter } from "./TilesPainter";
import { UnitsPainter } from "./UnitsPainter";
import { CitiesEditor } from "./CitiesEditor";
import { PlayersEditor } from "./PlayersEditor";

export function Editor() {
  const uiState = useUiState();

  return (
    <div className={styles.editor}>
      <Tabs>
        <Tab title="Tile">
          <TileEditor />
        </Tab>
        <Tab title="Tiles painter">
          <TilesPainter />
        </Tab>
        <Tab title="Units painter">
          <UnitsPainter />
        </Tab>
        <Tab title="Cities">
          <CitiesEditor />
        </Tab>
        <Tab title="Players">
          <PlayersEditor />
        </Tab>
      </Tabs>

      <div className={styles.closeWrapper}>
        <button onClick={() => uiState.setMode("map")}>Close</button>
      </div>
    </div>
  );
}
