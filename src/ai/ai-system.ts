import { AIPlayer } from "./ai-player";
import { AiOperation } from "./types";

export abstract class AISystem {
  protected operations: AiOperation[] = [];

  constructor(protected ai: AIPlayer) {}

  abstract plan(): AiOperation[];

  get player() {
    return this.ai.player;
  }
}
