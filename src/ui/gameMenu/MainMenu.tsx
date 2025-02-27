import { bridge } from "@/bridge";
import { useUiState } from "@/ui/uiState";
import { useObservable } from "@/utils";
import styles from "./GameMenu.module.css";
import { useMenu } from "./gameMenuStore";

export function MainMenu() {
  const uiState = useUiState();

  const menu = useMenu();

  const startInfo = useObservable(bridge.game.start$);

  async function start() {
    await bridge.game.new({
      aiPlayersCount: 5,
      width: 50,
      height: 40,
      humanPlayersCount: 1,
      resources: 0.2,
      seaLevel: 0,
      uniformity: 0.5,
    });

    menu.hide();

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
      {startInfo && (
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
