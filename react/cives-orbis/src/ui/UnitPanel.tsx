import { bridge } from "@/bridge";
import { UnitOrder } from "@/core/unit";
import { ACTIONS, UnitAction } from "@/core/unit-actions";
import { useForceRender, useObservable } from "@/utils";
import clsx from "clsx";
import { Panel, Tooltip } from "./components";
import { mapUi } from "./mapUi";
import styles from "./UnitPanel.module.css";
import { PropsWithChildren, ReactNode, useState } from "react";

export function UnitPanel() {
  const unit = useObservable(mapUi.selectedUnit$);
  const forceRender = useForceRender();

  function destroy() {}

  async function setOrder(order: UnitOrder) {
    if (!unit) {
      return;
    }
    await bridge.units.setOrder({ unitId: unit.id, order });
    forceRender();
  }

  async function doAction(action: UnitAction) {
    if (!unit) {
      return;
    }
    await bridge.units.doAction({ action, unitId: unit.id });
  }

  function getActionName(action: UnitAction) {
    return ACTIONS[action].name;
  }

  if (!unit) {
    return null;
  }

  function canDoAction(action: UnitAction) {
    return !!action;
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
          <Tooltip key={i} content={<div>DIPA</div>}>
            <button
              className={clsx("btn", { disabled: !canDoAction(action) })}
              onClick={() => doAction(action)}
            >
              {getActionName(action)}
            </button>
          </Tooltip>
        ))}
      </div>
    </Panel>
  );
}
