import { useObservable } from "@/utils";
import { Switch } from "./components";
import { mapUi } from "./mapUi";

export function MapSettings() {
  const gridEnabled = useObservable(mapUi.gridEnabled$);

  return (
    <div style={{ pointerEvents: "all" }}>
      <div>
        <Switch
          label="Grid"
          checked={gridEnabled ?? true}
          onChange={() => (mapUi.gridEnabled = !gridEnabled)}
        />
      </div>
    </div>
  );
}
