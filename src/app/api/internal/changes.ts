import { GameState } from "../state";

export type ChangeHandler = (state: GameState, data: any) => void;

export const changeHandlers = new Map<string, ChangeHandler>();

export function setChangesHandlers(handlers: { [key: string]: ChangeHandler }) {
  for (const [changeType, handler] of Object.entries(handlers)) {
    changeHandlers.set(changeType, handler);
  }
}
