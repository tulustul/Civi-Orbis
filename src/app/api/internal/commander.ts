import { awaitingExecutors, worker } from "./worker";

export function makeCommand<T>(command: string, data: any = {}) {
  return new Promise<T>((resolve, reject) => {
    awaitingExecutors.push(resolve);
    worker.postMessage({ command, data });
  });
}
