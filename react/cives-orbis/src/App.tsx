import { useEffect, useState } from "react";
import { loadAssets } from "./renderer/assets";
import { GameCanvas } from "./ui/GameCanvas";
import { MapMode } from "./ui/MapMode";
import { useUiState } from "./ui/uiState";
import { GameMenu, useMenu } from "./ui/gameMenu";
import { CitiesLayer } from "./ui/mapElements/CitiesLayer";
import { EditorMode } from "./ui/EditorMode";

import styles from "./App.module.css";

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
      <div className={styles.wrapper}>
        <div className={styles.mapMode}>
          <MapMode />
        </div>
        {uiState.mode === "editor" && <EditorMode />}
      </div>
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
