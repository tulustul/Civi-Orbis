import { initWorkerListeners } from "./internal/listener";
import { initChangeHandlers } from "./change-handlers";

export * from "./game";
export * from "./game.interface";

initWorkerListeners();
initChangeHandlers();
