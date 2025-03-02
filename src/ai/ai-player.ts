import { PlayerCore } from "@/core/player";
import { CityAI } from "./ai-city";
import { ExploringAI } from "./ai-exploring";
import { MilitaryAI } from "./ai-military";
import { SettlingAI } from "./ai-settling";
import { AISystem } from "./ai-system";
import { AiOperation } from "./types";
import { ProductionAI } from "./ai-production";

export type AiPriorities = {
  expansion: number;
  economy: number;
  military: number;
  randomize: number;
};

export class AIPlayer {
  productionAi = new ProductionAI(this);

  systems: AISystem[] = [
    new SettlingAI(this),
    new CityAI(this),
    new ExploringAI(this),
    new MilitaryAI(this),
    this.productionAi,
  ];

  priorites: AiPriorities = {
    expansion: 1,
    economy: 1,
    military: 1,
    randomize: 0.2,
  };

  constructor(public player: PlayerCore) {}

  nextTurn() {
    const operations = this.prepareOperations();

    for (const op of operations) {
      op.perform();
    }
  }

  private prepareOperations(): AiOperation[] {
    const operationsMap = new Map<string, AiOperation[]>();
    for (const system of this.systems) {
      const systemOperations = system.plan();
      for (const op of systemOperations) {
        const groupId = `${op.group}-${op.entityId}`;
        op.priority *=
          this.priorites[op.focus] + Math.random() * this.priorites.randomize;
        if (!operationsMap.has(groupId)) {
          operationsMap.set(groupId, [op]);
        } else {
          operationsMap.get(groupId)!.push(op);
        }
      }
    }

    const result: AiOperation[] = [];
    for (const operations of operationsMap.values()) {
      const totalPriority = operations.reduce(
        (acc, op) => acc + op.priority,
        0
      );
      const value = Math.random() * totalPriority;
      let accPriority = 0;
      for (const op of operations) {
        accPriority += op.priority;
        if (accPriority >= value) {
          result.push(op);
          break;
        }
      }
    }

    return result;
  }
}
