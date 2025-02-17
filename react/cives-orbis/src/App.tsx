import { useEffect, useState } from "react";
import "./App.css";
import { loadAssets } from "./renderer/assets";
import { GameCanvas } from "./ui/GameCanvas";
import { MapMode } from "./ui/MapMode";
import { useUiState } from "./ui/uiState";
import { GameMenu, useMenu } from "./ui/gameMenu";
import { CitiesLayer } from "./ui/mapElements/CitiesLayer";
import { EditorMode } from "./ui/EditorMode";

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
    if (uiState.mode === "none") {
      return null;
    }

    return (
      <>
        <div
          style={{ visibility: uiState.mode === "map" ? "visible" : "hidden" }}
        >
          <MapMode />
        </div>
        {uiState.mode === "editor" && <EditorMode />}
      </>
    );
  }

  return (
    <>
      {menu.enabled && <GameMenu />}
      <GameCanvas />
      <CitiesLayer />
      {getContent()}
    </>
  );
}

export default App;
