import { CityDetailsChanneled } from "@/core/serialization/channel";
import { Panel } from "@/ui/components";

type Props = {
  city: CityDetailsChanneled;
};
export function CityView({ city }: Props) {
  return <Panel corner="top-left">{city.name}</Panel>;
}
