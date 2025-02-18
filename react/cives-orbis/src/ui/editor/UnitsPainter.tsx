import { bridge } from "@/bridge";
import { UnitDefinition } from "@/core/data.interface";
import { PlayerChanneled } from "@/core/serialization/channel";
import { UNITS_DEFINITIONS } from "@/data/products/units";
import { Option, Radio } from "@/ui/components";
import { useSubscription } from "@/utils";
import { useStateRef } from "@/utils/useStateRef";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { mapUi } from "../mapUi";
import styles from "./UnitsPainter.module.css";

const definitionOptions = UNITS_DEFINITIONS.map((d) => {
  return { label: d.name, value: d } as Option<UnitDefinition>;
});

export function UnitsPainter() {
  const [selectedPlayerId, setSelectedPlayerId, selectedPlayerIdRef] =
    useStateRef<number | null>(null);
  const [unitDefinition, setUnitDefinition, unitDefinitionRef] =
    useStateRef<UnitDefinition | null>(null);

  const [players, setPlayers] = useState<PlayerChanneled[]>([]);

  useEffect(() => {
    bridge.game.getAllPlayers().then(setPlayers);
  }, []);

  useSubscription(mapUi.clickedTile$, (tile) => {
    if (
      !tile ||
      !unitDefinitionRef.current ||
      selectedPlayerIdRef.current === null
    ) {
      return;
    }

    bridge.units.spawn({
      definitionId: unitDefinitionRef.current.id,
      tileId: tile.id,
      playerId: selectedPlayerIdRef.current,
    });
  });

  if (!players.length) {
    return null;
  }

  return (
    <div className={styles.wrapper}>
      <ul className={styles.unitSelector}>
        {players.map((player) => (
          <li
            key={player.id}
            className={clsx(styles.item, {
              [styles.selected]: player.id === selectedPlayerId,
            })}
            onClick={() => setSelectedPlayerId(player.id)}
          >
            <span>Player {player.id}</span>
            <div
              className={styles.colorBox}
              style={{ backgroundColor: player.cssColor }}
            />
          </li>
        ))}
      </ul>

      <Radio
        options={definitionOptions}
        value={unitDefinition}
        onChange={setUnitDefinition}
      />
    </div>
  );
}
