import clsx from "clsx";
import styles from "./PlayersList.module.css";
import { useEffect, useState } from "react";
import { PlayerChanneled } from "@/core/serialization/channel";
import { bridge } from "@/bridge";

type Props = {
  selectedPlayerId: number | null;
  onSelect: (id: number) => void;
};

export function PlayersList({ selectedPlayerId, onSelect }: Props) {
  const [players, setPlayers] = useState<PlayerChanneled[]>([]);

  useEffect(() => {
    bridge.game.getAllPlayers().then(setPlayers);
  }, []);

  if (!players.length) {
    return null;
  }

  return (
    <ul className={styles.playersList}>
      {players.map((player) => (
        <li
          key={player.id}
          className={clsx(styles.item, {
            [styles.selected]: player.id === selectedPlayerId,
          })}
          onClick={() => onSelect(player.id)}
        >
          <span>Player {player.id}</span>
          <div
            className={styles.colorBox}
            style={{ backgroundColor: player.cssColor }}
          />
        </li>
      ))}
    </ul>
  );
}
