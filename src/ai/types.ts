import { AiPriorities } from "./ai-player";

export type AiOperation = {
  group: "unit" | "city" | "city-produce";
  focus: keyof Omit<AiPriorities, "randomize">;
  entityId: number;
  priority: number;
  perform: () => void;
};
