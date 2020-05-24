export * from "./tile.interface";

export interface PlayerTask {
  task: "city" | "unit";
  id: number;
}
