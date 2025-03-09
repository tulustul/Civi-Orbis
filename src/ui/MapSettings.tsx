import { useObservable } from "@/utils";
import { Panel, Switch } from "./components";
import { mapUi } from "./mapUi";

export function MapSettings() {
  const gridEnabled = useObservable(mapUi.gridEnabled$);
  const yieldsEnabled = useObservable(mapUi.yieldsEnabled$);

  return (
    <Panel className="p-2 flex flex-col gap-2">
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
    </Panel>
  );
}
