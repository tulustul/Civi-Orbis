import {
  CityDetailsChanneled,
  CityProductChanneled,
  ProductDefinitionChanneled,
} from "@/core/serialization/channel";
import { ProgressBar, Tooltip } from "@/ui/components";
import clsx from "clsx";
import { Icon } from "../components/Icon";

import { bridge } from "@/bridge";
import { PropsWithChildren } from "react";
import { mapUi } from "../mapUi";
import styles from "./City.module.scss";
import { ProductRequirements } from "./ProductRequirements";

type Props = {
  city: CityDetailsChanneled;
};

export function CityMainPanel({ city }: Props) {
  async function optimizeYields() {
    const updatedCity = await bridge.cities.optimizeYields(city.id);
    if (updatedCity) {
      mapUi.setCityDetails(updatedCity);
    }
  }

  async function produce(product: CityProductChanneled) {
    if (!product.enabled) {
      return;
    }
    const updatedCity = await bridge.cities.produce({
      cityId: city.id,
      productId: product.definition.id,
      productType: product.definition.productType,
    });

    if (updatedCity) {
      mapUi.setCityDetails(updatedCity);
    }
  }

  return (
    <>
      <div className="size-and-growth margin">
        <span className="size">{city.size}</span>

        <Tooltip
          content=<div className="growth-color">
            {city.totalFood.toFixed(1)} (+{city.yields.food}) /{city.foodToGrow}
          </div>
        >
          <ProgressBar
            className={styles.growthBar}
            progress={city.totalFood}
            nextProgress={city.totalFood + city.perTurn.food}
            total={city.foodToGrow}
          >
            {city.perTurn.food > 0 && (
              <span className="turns">
                will grow in {city.turnsToGrow} turns
              </span>
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
        </Tooltip>
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

      <Tooltip
        content={
          <div className="culture-color">
            {city.totalCulture.toFixed(1)} (+{city.yields.culture}) /
            {city.cultureToExpand}
          </div>
        }
      >
        <ProgressBar
          className={clsx(styles.cultureBar, "margin")}
          progress={city.totalCulture}
          nextProgress={city.totalCulture + city.perTurn.culture}
          total={city.cultureToExpand}
        >
          <span className="turns">
            borders will expand in {city.turnsToExpand} turns
          </span>
        </ProgressBar>
      </Tooltip>

      <div className="separator"></div>

      <h3>Production</h3>

      {city.product && (
        <ProductTooltip city={city} product={city.product.definition}>
          <ProgressBar
            className={clsx(styles.productionBar, "margin")}
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
        </ProductTooltip>
      )}

      {city.availableProducts.map((product) => (
        <ProductTooltip
          key={product.definition.id}
          city={city}
          product={product.definition}
        >
          <div
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
        </ProductTooltip>
      ))}
    </>
  );
}

function ProductTooltip({
  children,
  city,
  product,
}: PropsWithChildren & {
  city: CityDetailsChanneled;
  product: ProductDefinitionChanneled;
}) {
  return (
    <Tooltip
      content={
        <>
          <b>{product.name}</b>
          <ProductRequirements product={product} city={city} />
          {/* <app-bonuses bonuses={building.bonuses} /> */}
          <div>Cost: {product.productionCost}</div>
        </>
      }
    >
      {children}
    </Tooltip>
  );
}
