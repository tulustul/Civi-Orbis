import { CityDetailsChanneled } from "@/core/serialization/channel";
import { ProductTooltip } from "./ProductTooltip";

type Props = {
  city: CityDetailsChanneled;
};

export function CityBuildings({ city }: Props) {
  return (
    <>
      <div className="text-xl text-center my-4">Buildings</div>

      {city.buildings.length === 0 && (
        <div className="py-2 px-4 text-center font-thin">No buildings</div>
      )}

      {city.buildings.map((building) => (
        <div
          key={building.id}
          className="border-t-2 border-primary-500 cursor-pointer hover:bg-primary-500 last:border-b-2"
        >
          <ProductTooltip city={city} product={building.definition}>
            <div className="py-2 px-4">{building.name}</div>
          </ProductTooltip>
        </div>
      ))}
    </>
  );
}
