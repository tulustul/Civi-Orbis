import { game } from "@/api";
import { saveGameData } from "@/api/saving";
import { useState } from "react";
import styles from "./GameMenu.module.css";
import { SavesList } from "./SavesList";
import { useMenu } from "./gameMenuStore";

export function SaveMenu() {
  const [saveName, setSaveName] = useState("");
  const menu = useMenu();

  async function save() {
    if (saveName) {
      const data = await game.saveGame();
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
