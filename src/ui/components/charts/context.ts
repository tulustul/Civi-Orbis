import { createContext } from "react";
import { DataSeries } from "./types";

export type ChartContextType = {
  registerSeries: (data: DataSeries) => void;
  unregisterSeries: (data: DataSeries) => void;
};
export const ChartContext = createContext<ChartContextType>({
  registerSeries: () => {},
  unregisterSeries: () => {},
});
