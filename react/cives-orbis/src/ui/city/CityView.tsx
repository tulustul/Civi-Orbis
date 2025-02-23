import { CityDetailsChanneled } from "@/core/serialization/channel";
import { Panel } from "@/ui/components";
import { CityBuildings } from "./CityBuldings";
import { CityMainPanel } from "./CityMainPanel";
import { CityName } from "./CityName";

type Props = {
  city: CityDetailsChanneled;
};
export function CityView({ city }: Props) {
  return (
    <>
      <Panel corner="top-left">
        <CityMainPanel city={city} />
      </Panel>

      <CityName />

      <Panel corner="bottom-left">
        <CityBuildings />
      </Panel>
    </>
  );
}
