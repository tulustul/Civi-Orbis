import { AiOperation } from "./ai-operations";

export class AiPlanner {
  schedule(operations: AiOperation[]) {
    const sortedOperations = operations.sort(
      (o1, o2) => o1.priority - o2.priority,
    );
  }
}
