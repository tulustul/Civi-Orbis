import { game } from "@/api";
import { camera } from "@/renderer";
import { Panel } from "@/ui/components";
import { useUiState } from "../uiState";
import styles from "./MainMenu.module.css";

export function MainMenu() {
  const uiState = useUiState();

  async function start() {
    await game.newGame({
      aiPlayersCount: 5,
      width: 50,
      height: 40,
      humanPlayersCount: 1,
      resources: 0.2,
      seaLevel: 0,
      uniformity: 0.5,
    });

    uiState.setMenuEnabled(false);

    const unit = game.state?.trackedPlayer.units[0];
    if (unit) {
      camera.moveToTile(unit.tile);
    }

    uiState.setMode("map");
  }

  return (
    <div className={styles.backdrop}>
      <Panel className={styles.menu}>
        <div className={styles.item} onClick={start}>
          New
        </div>
      </Panel>
    </div>
  );
}
