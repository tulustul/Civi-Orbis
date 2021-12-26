export const worker = new Worker(new URL("../../core.worker", import.meta.url));

export const awaitingExecutors: ((value: any) => void)[] = [];
