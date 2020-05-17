import { gameApi } from "./game";

export type ChangeHandler = (data: any) => void;
const changeHandlers = new Map<string, ChangeHandler>();

export function changeHandler(changeType: string) {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor,
  ) {
    changeHandlers.set(changeType, target[propertyKey]);
  };
}

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

  if (event.data.changes.length && !gameApi.state) {
    console.error("Received change events but state is not instantiated yet.");
  } else {
    for (const change of event.data.changes) {
      const handler = changeHandlers.get(change.type);
      if (!handler) {
        console.error(`No handler for change with type "${change.type}"`);
        continue;
      }

      handler.bind(gameApi.state)(change.data);
    }
  }

  executor(event.data.result);
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
