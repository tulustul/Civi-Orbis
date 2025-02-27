import { bridge } from "@/bridge";
import {
  CityDetailsChanneled,
  ProductDefinitionChanneled,
} from "@/core/serialization/channel";
import { useEffect, useState } from "react";

import styles from "./ProductRequirements.module.css";

type Props = {
  city: CityDetailsChanneled;
  product: ProductDefinitionChanneled;
};

export function ProductRequirements({ city, product }: Props) {
  const [failedRequirements, setFailedRequirements] = useState<[string, any][]>(
    [],
  );

  useEffect(() => {
    getFailedRequirements();
  }, [city, product]);

  async function getFailedRequirements() {
    const requirements = await bridge.entities.getFailedWeakRequirements({
      cityId: city.id,
      entityId: product.id,
    });
    setFailedRequirements(requirements);
  }

  return (
    <div className={styles.wrapper}>
      {failedRequirements.map(([key, value], index) => (
        <Requirement key={index} type={key} context={value} />
      ))}
    </div>
  );
}

function Requirement({ type, context }: { type: string; context: any }) {
  if (type === "building") {
    return (
      <div>
        <b>{context.buildingId}</b> is required
      </div>
    );
  }

  if (type === "size") {
    return (
      <div>
        City size should be at least <b>{context.size}</b>
      </div>
    );
  }

  return null;
}
