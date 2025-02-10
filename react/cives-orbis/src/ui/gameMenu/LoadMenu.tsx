import { game } from "@/api";
import { importSave, loadGameData } from "@/api/saving";
import { camera } from "@/renderer";
import { useRef, useState } from "react";
import { useMenu } from "./gameMenuStore";
import { SavesList } from "./SavesList";
import { Modal, Spinner } from "@/ui/components";
import styles from "./GameMenu.module.css";

export function LoadMenu() {
  const [saveName, setSaveName] = useState("");
  const [waiting, setWaiting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const menu = useMenu();

  async function load() {
    if (!saveName) {
      return;
    }

    const data = loadGameData(saveName);
    if (!data) {
      return;
    }

    setWaiting(true);

    await game.loadGame(data);

    const city = game.state?.trackedPlayer.cities[0];
    if (city) {
      camera.moveToTile(city.tile);
    } else {
      const unit = game.state?.trackedPlayer.units[0];
      if (unit) {
        camera.moveToTile(unit.tile);
      }
    }

    menu.hide();
    setWaiting(false);
  }

  async function _import(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target.files;

    if (!files) {
      return;
    }

    await importSave(files[0]);

    // this.savesListComponent.refresh();
  }

  return (
    <>
      <input
        ref={fileInputRef}
        type="file"
        hidden
        onChange={(event) => _import(event.nativeEvent)}
      />

      <h2>Load the game</h2>

      <SavesList selectedSave={saveName} onSelect={setSaveName} />

      <div className={styles.actions}>
        <button onClick={() => menu.setView("main-menu")}>Back</button>
        <button onClick={() => fileInputRef.current?.click()}>Import</button>
        <button disabled={!saveName} onClick={load}>
          Load
        </button>
      </div>

      {waiting && (
        <Modal>
          <div className="center">
            <h2>Loading map</h2>
            <Spinner />
          </div>
        </Modal>
      )}
    </>
  );
}
