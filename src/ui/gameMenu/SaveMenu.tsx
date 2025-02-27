import { saveGameData } from "@/saving";
import { useState } from "react";
import styles from "./GameMenu.module.css";
import { SavesList } from "./SavesList";
import { useMenu } from "./gameMenuStore";
import { bridge } from "@/bridge";

export function SaveMenu() {
  const [saveName, setSaveName] = useState("");
  const menu = useMenu();

  async function save() {
    if (saveName) {
      const data = await bridge.game.dump();
      saveGameData(data, saveName);
      menu.hide();
    }
  }

  return (
    <>
      <h2>Save the game</h2>

      <label>
        Save name:
        <input
          type="text"
          value={saveName}
          onChange={(e) => setSaveName(e.target.value)}
        />
      </label>

      <SavesList selectedSave={saveName} onSelect={setSaveName} />

      <div className={styles.actions}>
        <button onClick={() => menu.setView("main-menu")}>Back</button>
        <button disabled={!saveName} onClick={save}>
          Save
        </button>
      </div>
    </>
  );
}
