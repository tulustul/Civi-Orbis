import { AiOperation } from "./ai-operations";
import { AIPlayer } from "./ai-player";

export abstract class AISystem {
  protected operations: AiOperation[] = [];

  constructor(protected ai: AIPlayer) {}

  abstract plan(): AiOperation[];

  get player() {
    return this.ai.player;
  }
}
