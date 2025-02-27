import { CombatModifierType, CombatSimulationSide } from "@/core/combat";
import clsx from "clsx";
import styles from "./CombatInfo.module.css";

const MODIFIER_LABELS: Record<CombatModifierType, string> = {
  [CombatModifierType.river]: "from river",
  [CombatModifierType.hills]: "from hills",
  [CombatModifierType.health]: "from health penalty",
  [CombatModifierType.forest]: "from forest",
  [CombatModifierType.flanks]: "from flanks",
};

type Props = {
  label: string;
  unitName: string;
  simulationSide: CombatSimulationSide;
  className?: string;
};

export function CombatInfoSide({
  label,
  simulationSide,
  unitName,
  className,
}: Props) {
  return (
    <div className={clsx(styles.side, className)}>
      <h3 className={styles.sideName}>{label}</h3>
      <div>{unitName}</div>
      <div className={styles.field}>
        Approx. dmg.: <b>{simulationSide.damage}</b>
      </div>
      <div className={styles.field}>
        Strength: <b>{simulationSide.strength.toFixed(1)}</b>
      </div>

      <div>
        <div className={styles.modifier}>
          {simulationSide.modifiers.map((modifier) => (
            <div
              key={modifier.type}
              className={clsx(styles.modifier, {
                [styles.positive]: modifier.value > 0,
              })}
            >
              {modifier.value > 0 ? "+" : ""}
              {(modifier.value * 100).toFixed()}%
              {MODIFIER_LABELS[modifier.type]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
