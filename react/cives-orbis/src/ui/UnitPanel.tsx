import { useBind, useforceRender } from "@/utils";
import { Panel } from "./components";
import { mapUi } from "./mapUi";
import clsx from "clsx";
import { UnitOrder } from "@/core/unit";
import { ACTIONS, UnitAction } from "@/core/unit-actions";
import styles from "./UnitPanel.module.css";

export function UnitPanel() {
  const unit = useBind(mapUi.selectedUnit$);
  const forceRender = useforceRender();

  function destroy() {}

  async function setOrder(order: UnitOrder) {
    await unit?.setOrder(order);
    forceRender();
  }

  function getActionName(action: UnitAction) {
    return ACTIONS[action].name;
  }

  if (!unit) {
    return null;
  }

  return (
    <Panel corner="bottom-left">
      <div className="header">
        <h2>{unit.definition.name}</h2>
        {/* <app-unit #unitComponent [unit]="unitSimple"></app-unit> */}
      </div>
      <p>Moves: {unit.actionPointsLeft}</p>
      <p>Strength: {unit.definition.strength}</p>
      <p>Order: {unit.order}</p>
      <p>Health: {unit.health}</p>
      <p>Supplies: {unit.supplies}</p>
      {!unit.isSupplied && <p>Out of range of supply lines</p>}

      <div className={styles.actions}>
        <button className="btn-danger" onClick={destroy}>
          Disband
        </button>

        <button onClick={() => setOrder("skip")}>Skip move</button>

        <button onClick={() => setOrder("sleep")}>Sleep</button>
      </div>

      <div className={styles.actions}>
        {unit.definition.actions.map((action, i) => (
          <button
            key={i}
            className={clsx("btn", { disabled: !unit.canDoAction(action) })}
            onClick={() => unit.doAction(action)}
          >
            {getActionName(action)}
          </button>
        ))}
      </div>
    </Panel>
  );
}
