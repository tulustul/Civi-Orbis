import { useEffect, useState } from "react";
import "./App.css";
import { loadAssets } from "./renderer/assets";
import { GameMenu, useMenu } from "./ui";
import { GameCanvas } from "./ui/GameCanvas";
import { MapMode } from "./ui/MapMode";
import { useUiState } from "./ui/uiState";

function App() {
  const [loading, setLoading] = useState(true);

  const uiState = useUiState();
  const menu = useMenu();

  useEffect(() => {
    loadAssets().then(() => {
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="loader">
        <div className="panel">
          <h2>Loading...</h2>
        </div>
      </div>
    );
  }

  function getContent() {
    if (uiState.mode === "map") {
      return <MapMode />;
    }

    if (uiState.mode === "editor") {
      return getEditorMode();
    }

    return null;
  }

  function getEditorMode() {
    return null;
  }

  return (
    <>
      {menu.enabled && <GameMenu />}
      <GameCanvas />
      {getContent()}
    </>
  );
}

export default App;
