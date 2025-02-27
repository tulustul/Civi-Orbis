import { bridge } from "@/bridge";
import { useObservable } from "@/utils";
import { Tooltip } from "./components";

export function PlayerYields() {
  const yields = useObservable(bridge.player.yields$);

  if (!yields) {
    return null;
  }

  return (
    <div>
      <Tooltip
        content={
          <>
            <div>From cities: {yields.income.publicWorks}</div>
            <div>Improvements maintainance: {yields.costs.publicWorks}</div>
            <div>Netto per turn: {yields.perTurn.publicWorks}</div>
          </>
        }
      >
        Public works: {yields.total.publicWorks} (
        {yields.perTurn.publicWorks >= 0 ? "+" : ""}
        {yields.perTurn.publicWorks})
      </Tooltip>
    </div>
  );
}
