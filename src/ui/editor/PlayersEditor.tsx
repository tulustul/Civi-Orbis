import { useEffect, useState } from "react";
import { PlayersList } from "./PlayersList";
import { bridge } from "@/bridge";

export function PlayersEditor() {
  const [trackedPlayerId, setTrackedPlayerId] = useState(0);

  useEffect(() => {
    bridge.game.getInfo();
  }, []);

  async function trackPlayer(playerId: number) {
    await bridge.player.trackPlayer(playerId);
    setTrackedPlayerId(playerId);
  }

  return (
    <PlayersList selectedPlayerId={trackedPlayerId} onSelect={trackPlayer} />
  );
}
