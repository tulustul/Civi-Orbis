import { CityDetailsChanneled } from "@/core/serialization/channel";

import styles from "./City.module.scss";
import { mapUi } from "../mapUi";

type Props = {
  city: CityDetailsChanneled;
};
export function CityName({ city }: Props) {
  return (
    <div className={styles.cityNameWrapper}>
      <button
        className={styles.returnBtn}
        onClick={() => mapUi.selectCity(null)}
      >
        Return
      </button>
      <div className={styles.cityNameContent}>
        <div className={styles.cityNameBorder} />
        <div className={styles.cityName}>{city.name}</div>
        <div className={styles.cityNameBorder} />
      </div>
    </div>
  );
}
