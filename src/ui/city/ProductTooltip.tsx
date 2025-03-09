import {
  CityDetailsChanneled,
  ProductDefinitionChanneled,
} from "@/core/serialization/channel";
import { PropsWithChildren } from "react";
import { Bonuses, Tooltip } from "@/ui/components";
import { ProductRequirements } from "./ProductRequirements";

type Props = PropsWithChildren & {
  city: CityDetailsChanneled;
  product: ProductDefinitionChanneled;
};

export function ProductTooltip({ children, city, product }: Props) {
  return (
    <Tooltip
      content={
        <>
          <b>{product.name}</b>
          <Bonuses bonuses={product.bonuses} />
          <ProductRequirements product={product} city={city} />
          <div>Cost: {product.productionCost}</div>
        </>
      }
    >
      {children}
    </Tooltip>
  );
}
