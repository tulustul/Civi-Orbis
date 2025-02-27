import { bridge } from "@/bridge";
import { importSave, loadGameData } from "@/saving";
import { Modal, Spinner } from "@/ui/components";
import { useRef, useState } from "react";
import { useUiState } from "../uiState";
import styles from "./GameMenu.module.css";
import { useMenu } from "./gameMenuStore";
import { SavesList } from "./SavesList";

export function LoadMenu() {
  const [saveName, setSaveName] = useState("");
  const [waiting, setWaiting] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const menu = useMenu();
  const uiState = useUiState();

  async function load() {
    if (!saveName) {
      return;
    }

    const data = loadGameData(saveName);
    if (!data) {
      return;
    }

    setWaiting(true);

    await bridge.game.load(data);

    menu.hide();
    uiState.setMode("map");
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
