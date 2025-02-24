import { CityDetailsChanneled } from "@/core/serialization/channel";
import { CityBuildings } from "./CityBuldings";
import { CityMainPanel } from "./CityMainPanel";
import { CityName } from "./CityName";

import styles from "./City.module.scss";
import { CityWorkedTiles } from "./CityWorkedTiles";

type Props = {
  city: CityDetailsChanneled;
};
export function CityView({ city }: Props) {
  return (
    <div className={styles.cityView}>
      <div className={styles.left}>
        <CityMainPanel city={city} />
      </div>

      <div className={styles.middle}>
        <CityName city={city} />
      </div>

      <div className={styles.right}>
        <CityBuildings city={city} />
      </div>

      <CityWorkedTiles city={city} />
    </div>
  );
}
