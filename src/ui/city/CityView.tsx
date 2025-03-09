import { CityDetailsChanneled } from "@/core/serialization/channel";
import { CityBuildings } from "./CityBuldings";
import { CityMainPanel } from "./CityMainPanel";
import { CityName } from "./CityName";

type Props = {
  city: CityDetailsChanneled;
};
export function CityView({ city }: Props) {
  return (
    <div className="flex w-full h-full absolute">
      <div className="bg-primary-300 text-white pointer-events-auto border-primary-100 border-r-2 w-80">
        <CityMainPanel city={city} />
      </div>

      <div className="grow">
        <CityName city={city} />
      </div>

      <div className="bg-primary-300 text-white pointer-events-auto border-primary-100 border-l-2 w-80">
        <CityBuildings city={city} />
      </div>
    </div>
  );
}
