import { deleteSaveGame, exportSave, listSaveGames } from "@/api/saving";
import clsx from "clsx";
import { useEffect, useState } from "react";
import styles from "./GameMenu.module.css";

type Props = {
  selectedSave: string;
  onSelect: (save: string) => void;
};

export function SavesList({ selectedSave, onSelect }: Props) {
  const [saves, setSaves] = useState<string[]>([]);

  useEffect(refresh, []);

  function refresh() {
    setSaves(listSaveGames());
  }

  function _delete(save: string) {
    deleteSaveGame(save);
    refresh();
    if (selectedSave === save) {
      onSelect(save);
    }
  }

  if (!saves.length) {
    return <p>No saves yet</p>;
  }

  return saves.map((save) => (
    <div
      key={save}
      className={clsx(styles.save, {
        [styles.selected]: save === selectedSave,
      })}
      onClick={() => onSelect(save)}
    >
      <span>{save}</span>
      <div className={styles.saveActions}>
        <button onClick={() => exportSave(save)}>export</button>
        <button onClick={() => _delete(save)}>delete</button>
      </div>
    </div>
  ));
}
