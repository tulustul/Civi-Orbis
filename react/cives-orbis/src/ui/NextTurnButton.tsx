import { game } from "@/api";
import { useBind } from "@/utils";
import { nextTurnService } from "./nextTurn";
import { Spinner } from "./components";

export function NextTurnButton() {
  const nextTask = useBind(game.nextTask$);
  const waiting = useBind(nextTurnService.waiting$);

  function getCssClass() {
    if (!nextTask) {
      return "";
    }

    switch (nextTask.task) {
      case "city":
        return "production-color";
      case "unit":
        return "";
    }
  }

  function getLabel() {
    if (!nextTask) {
      return "Next turn";
    }

    switch (nextTask.task) {
      case "city":
        return "Choose production";
      case "unit":
        return "Unit needs orders";
    }
  }

  if (waiting) {
    return (
      <button>
        <Spinner /> Wait for other players
      </button>
    );
  }

  return (
    <button className={getCssClass()} onClick={() => nextTurnService.next()}>
      {getLabel()}
    </button>
  );
}
