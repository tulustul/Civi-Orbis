import { useEffect, useState } from "react";
import "./App.css";
import { GameCanvas } from "./ui/GameCanvas";
import { MainMenu } from "./ui/mainMenu/MainMenu";
import { useUiState } from "./ui/uiState";
import { loadAssets } from "./renderer/assets";
import { Minimap } from "./ui/Minimap";
import { NextTurnButton } from "./ui/NextTurnButton";
import { MapMode } from "./ui/MapMode";

function App() {
  const [loading, setLoading] = useState(true);

  const uiState = useUiState();

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
      {uiState.menuEnabled && <MainMenu />}
      <GameCanvas />
      {getContent()}
    </>
  );
}

export default App;
