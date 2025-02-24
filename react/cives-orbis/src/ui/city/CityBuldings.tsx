import { CityDetailsChanneled } from "@/core/serialization/channel";
import { Tooltip } from "../components";

type Props = {
  city: CityDetailsChanneled;
};

export function CityBuildings({ city }: Props) {
  return (
    <>
      <h3 className="margin">Buildings</h3>

      {city.buildingsIds.map((buildingId) => (
        <Tooltip key={buildingId} content={<div>asd</div>}>
          <div className="building">{buildingId}</div>
        </Tooltip>
      ))}
    </>
  );
}
