import { useObservable } from "@/utils";
import { Switch } from "./components";
import { mapUi } from "./mapUi";

export function MapSettings() {
  const gridEnabled = useObservable(mapUi.gridEnabled$);
  const yieldsEnabled = useObservable(mapUi.yieldsEnabled$);

  return (
    <div style={{ pointerEvents: "all" }}>
      <div>
        <Switch
          label="Grid"
          checked={gridEnabled ?? true}
          onChange={() => (mapUi.gridEnabled = !gridEnabled)}
        />
        <Switch
          label="Yields"
          checked={yieldsEnabled ?? true}
          onChange={() => (mapUi.yieldsEnabled = !yieldsEnabled)}
        />
      </div>
    </div>
  );
}
