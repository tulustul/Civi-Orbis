export abstract class AiOperation {
  priority = 0;

  age = 0;

  children: AiOperation[] = [];

  blockedBy: AiOperation[] = [];

  abstract perform(): void;

  cancel() {
    for (const op of this.children) {
      op.cancel();
    }
  }
}
