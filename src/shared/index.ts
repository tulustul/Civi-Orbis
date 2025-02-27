import { Yields } from "../core/yields";

export * from "./tile.interface";

export interface PlayerTask {
  task: "city" | "unit";
  id: number;
}

export interface PlayerYields {
  perTurn: Yields;
  income: Yields;
  total: Yields;
  costs: Yields;
}
