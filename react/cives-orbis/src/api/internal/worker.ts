import CoreWorker from "@/core.worker?worker";

// export const worker = new Worker(new URL("@/core.worker", import.meta.url), {
//   type: "module",
// });
export const worker = new CoreWorker();

export const awaitingExecutors: ((value: any) => void)[] = [];
