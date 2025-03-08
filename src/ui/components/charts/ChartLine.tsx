import { useContext, useEffect } from "react";
import { ChartContext } from "./context";
import { DataSeries } from "./types";

type Props = {
  id: string;
  data: number[];
  color: string;
};
export function ChartLine({ id, data, color }: Props) {
  const { registerSeries, unregisterSeries } = useContext(ChartContext);

  useEffect(() => {
    const series: DataSeries = {
      id,
      type: "line",
      data,
      color,
    };
    registerSeries(series);
    return () => {
      unregisterSeries(series);
    };
  }, [data, color, registerSeries]);

  return null;
}
