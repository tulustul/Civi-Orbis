import { GameState } from "@/api/state";
import { Observable } from "rxjs";

export type ChangeHandler = (state: GameState, data: any) => void;

export const changeHandlers = new Map<string, ChangeHandler>();
export const bridgeHandlers = new Map<string, (data: any) => void>();

export function setChangesHandlers(handlers: { [key: string]: ChangeHandler }) {
  for (const [changeType, handler] of Object.entries(handlers)) {
    changeHandlers.set(changeType, handler);
  }
}

export function makeObservable<T>(type: string): Observable<T> {
  return new Observable((subscriber) => {
    bridgeHandlers.set(type, (data) => subscriber.next(data));
  });
}
