import { useObservable } from "@/utils";
import { mapUi } from "./mapUi";
import { UnitIcon } from "./UnitIcon";
import styles from "./TileUnits.module.css";

export function TileUnits() {
  const tile = useObservable(mapUi.clickedTileDetails$);
  const selectedUnit = useObservable(mapUi.selectedUnit$);

  if (!tile || !tile.units.length) {
    return null;
  }

  return (
    <div className={styles.tile}>
      {tile.units.map((unit) => (
        <UnitIcon
          key={unit.id}
          unit={unit}
          isSelected={selectedUnit?.id === unit.id}
        />
      ))}
    </div>
  );
}
