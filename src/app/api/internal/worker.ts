export const worker = new Worker("../../core.worker", { type: "module" });

export const awaitingExecutors: ((value: any) => void)[] = [];
