import { UnitChanneled } from "@/core/serialization/channel";
import { Icon } from "./components/Icon";
import styles from "./UnitIcon.module.css";
import clsx from "clsx";
import { mapUi } from "./mapUi";

type Props = {
  unit: UnitChanneled;
  isSelected?: boolean;
};

export function UnitIcon({ unit, isSelected }: Props) {
  function select() {
    mapUi.selectUnit(unit.id);
  }

  return (
    <div
      className={clsx(styles.wrapper, {
        [styles.isSelected]: isSelected,
        [styles.noMoves]: unit.actionPointsLeft === 0,
      })}
      onClick={select}
    >
      <div className={styles.unit}>
        <Icon
          className={styles.icon}
          name={`unitBackground-${unit.type}`}
          scale={0.5}
          tint={unit.cssColor}
        />
        <Icon className={styles.icon} name={unit.definitionId} scale={0.5} />
      </div>
    </div>
  );
}
