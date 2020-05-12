const worker = new Worker("../core.worker", { type: "module" });

const awaitingExecutors: ((value: any) => void)[] = [];

worker.addEventListener("error", onError, false);

worker.addEventListener("message", onMessage, false);

function onMessage(event: MessageEvent) {
  const executor = awaitingExecutors.shift();
  if (!executor) {
    console.error("No awaiting executors but message received.");
    return;
  }
  executor(event.data);
}

function onError(error: any) {
  console.error(`Webworker error: ${error.message}`);
}

export function makeCommand<T>(command: string, data: any = {}) {
  return new Promise<T>((resolve, reject) => {
    awaitingExecutors.push(resolve);
    worker.postMessage({ command, data });
  });
}
