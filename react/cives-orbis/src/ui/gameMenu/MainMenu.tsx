import { game } from "@/api";
import { useUiState } from "@/ui/uiState";
import styles from "./GameMenu.module.css";
import { useMenu } from "./gameMenuStore";
import { camera } from "@/renderer/camera";

export function MainMenu() {
  const uiState = useUiState();

  const menu = useMenu();

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

    menu.hide();

    const unit = game.state?.trackedPlayer.units[0];
    if (unit) {
      camera.moveToTile(unit.tile);
    }

    uiState.setMode("map");
  }

  return (
    <>
      <div className={styles.item} onClick={start}>
        Quick Start
      </div>
      <div className={styles.item} onClick={() => menu.setView("new-game")}>
        New
      </div>
      <div className={styles.item} onClick={() => menu.setView("load")}>
        Load
      </div>
      {game.state && (
        <>
          <div className={styles.item} onClick={() => menu.setView("save")}>
            Save
          </div>
          <div className={styles.item} onClick={menu.hide}>
            Return
          </div>
        </>
      )}
    </>
  );
}
