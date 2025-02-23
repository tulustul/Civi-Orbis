import {
  CityDetailsChanneled,
  CityProductChanneled,
} from "@/core/serialization/channel";
import { ProgressBar } from "@/ui/components";
import clsx from "clsx";
import { Icon } from "../Icon";

import { bridge } from "@/bridge";
import { mapUi } from "../mapUi";
import styles from "./City.module.scss";

type Props = {
  city: CityDetailsChanneled;
};

export function CityMainPanel({ city }: Props) {
  function optimizeYields() {}

  async function produce(product: CityProductChanneled) {
    if (!product.enabled) {
      return;
    }
    const updatedCity = await bridge.cities.produce({
      cityId: city.id,
      productId: product.definition.id,
      productType: product.definition.productType,
    });

    mapUi.setCityDetails(updatedCity);
  }

  return (
    <>
      <div className="size-and-growth margin">
        <span className="size">{city.size}</span>

        <ProgressBar
          className={styles.growthBar}
          // [appTooltip]="growthTooltipTmpl"
          progress={city.totalFood}
          nextProgress={city.totalFood + city.perTurn.food}
          total={city.foodToGrow}
        >
          {city.perTurn.food > 0 && (
            <span className="turns">will grow in {city.turnsToGrow} turns</span>
          )}

          {city.perTurn.food < 0 && (
            <span className="turns">
              will shrink in {-city.turnsToGrow} turns
            </span>
          )}
          {city.perTurn.food === 0 && (
            <span className="turns">growth stalled</span>
          )}
        </ProgressBar>
      </div>

      <h3>Yields</h3>

      <div className="margin-h">
        <div className={clsx(styles.yield, "growth-color")}>
          <div className="label">Food</div>
          <div className="value">
            {city.yields.food} - {city.foodConsumed} ={city.perTurn.food}
          </div>
        </div>
        <div className={clsx(styles.yield, "production-color")}>
          <div className="label">Production</div>
          <div className="value">{city.perTurn.production}</div>
        </div>
        <div className={clsx(styles.yield, "culture-color")}>
          <div className="label">Culture</div>
          <div className="value">{city.perTurn.culture}</div>
        </div>
        <div className={clsx(styles.yield, "public-works-color")}>
          <div className="label">Public works</div>
          <div className="value">{city.perTurn.publicWorks}</div>
        </div>
      </div>

      <button className="margin-h margin-top" onClick={optimizeYields}>
        Optimize yields
      </button>

      <div className="separator"></div>

      <h3>Expansion</h3>

      <ProgressBar
        className={clsx(styles.cultureBar, "margin")}
        // [appTooltip]="expansionTooltipTmpl"
        progress={city.totalCulture}
        nextProgress={city.totalCulture + city.perTurn.culture}
        total={city.cultureToExpand}
      >
        <span className="turns">
          borders will expand in {city.turnsToExpand} turns
        </span>
      </ProgressBar>

      <div className="separator"></div>

      <h3>Production</h3>

      {city.product && (
        <ProgressBar
          className={clsx(styles.productionBar, "margin")}
          // [appTooltip]="buildingTooltipTmpl"
          // [tooltipContext]="{ building: city().product?.productDefinition }"
          progress={city.totalProduction}
          nextProgress={city.totalProduction + city.perTurn.production}
          total={city.product.definition.productionCost}
        >
          <div className={styles.progressBarContent}>
            <span className="product-name-and-icon">
              <Icon name={city.product.definition.id} scale={0.3} />
              <span className="name">{city.product.definition.name}</span>
            </span>
            <span className="turns">{city.turnsToProductionEnd} turns</span>
          </div>
        </ProgressBar>
      )}

      {city.availableProducts.map((product) => (
        <div
          key={product.definition.id}
          className={clsx(styles.product, {
            [styles.disabled]: !product.enabled,
          })}
          // appTooltip]="unitTooltipTmpl"
          // tooltipContext="{ unit: unit }"
          onClick={() => produce(product)}
        >
          <span>
            <Icon name={product.definition.id} scale={0.3} />
            <span className="name">{product.definition.name}</span>
          </span>
          <span className={clsx(styles.turns, "small")}>
            {product.turnsToProduce} turns
          </span>
        </div>
      ))}
    </>
  );
}
