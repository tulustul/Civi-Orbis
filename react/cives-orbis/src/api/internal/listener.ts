import { worker, awaitingExecutors } from "./worker";
import { bridgeHandlers, changeHandlers } from "./changes";
import { game } from "@/api";

export function initWorkerListeners() {
  worker.addEventListener("error", onError, false);
  worker.addEventListener("message", onMessage, false);
}

function onMessage(event: MessageEvent) {
  const executor = awaitingExecutors.shift();
  if (!executor) {
    console.error("No awaiting executors but message received.");
    return;
  }

  if (event.data.changes.length && !game.state) {
    console.error("Received change events but state is not instantiated yet.");
  } else {
    for (const change of event.data.changes) {
      console.debug(`change received: ${change.type}`);
      const handler = changeHandlers.get(change.type);
      const bridgeHandler = bridgeHandlers.get(change.type);
      if (!handler && !bridgeHandler) {
        console.error(`No handler for change with type "${change.type}"`);
        continue;
      }

      if (handler) {
        handler(game.state!, change.data);
      }

      if (bridgeHandler) {
        bridgeHandler(change.data);
      }
    }
  }

  executor(event.data.result);

  game["_nextTask$"].next(event.data.nextTask);
}

function onError(error: any) {
  console.error(`Webworker error: ${error.message}`);
}
