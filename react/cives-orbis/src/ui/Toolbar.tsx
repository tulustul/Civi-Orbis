import { useMenu } from "./gameMenu";
import { useUiState } from "./uiState";

export function Toolbar() {
  const menu = useMenu();
  const uiState = useUiState();

  return (
    <>
      <button onClick={() => uiState.setMode("editor")}>Editor</button>
      <button onClick={menu.show}>Menu</button>
    </>
  );
}
