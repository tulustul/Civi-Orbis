import { bridge } from "@/bridge";
import { useMenu } from "./gameMenu";
import { useUiState } from "./uiState";
import { useObservable } from "@/utils";

export function Toolbar() {
  const menu = useMenu();
  const uiState = useUiState();
  const turn = useObservable(bridge.game.turn$);

  return (
    <>
      <span>Turn {turn ?? 1} </span>
      <button onClick={() => uiState.setMode("editor")}>Editor</button>
      <button onClick={menu.show}>Menu</button>
    </>
  );
}
