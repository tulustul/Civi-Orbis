import { BehaviorSubject, Observable } from "rxjs";
import { filter } from "rxjs/operators";

import { MapGeneratorOptions } from "./game.interface";
import { makeCommand } from "./internal/commander";
import { initWorkerListeners } from "./internal/listener";
import { GameChanneled } from "../core/game";
import { GameState } from "./state";
import { initChangeHandlers } from "./change-handlers";

export class GameApi {
  private _state$ = new BehaviorSubject<GameState | null>(null);
  state$ = this._state$.asObservable();

  init$ = this.state$.pipe(filter((state) => !!state)) as Observable<GameState>;

  stop$ = this.state$.pipe(filter((state) => !state));

  async newGame(mapGeneratorOptions: MapGeneratorOptions): Promise<GameState> {
    const gameChanneled = await makeCommand<GameChanneled>(
      "game.new",
      mapGeneratorOptions,
    );

    this._state$.next(new GameState(gameChanneled));
    return this._state$.value as GameState;
  }

  async loadGame(saveData: string): Promise<GameState | null> {
    const gameChanneled = await makeCommand<GameChanneled>(
      "game.load",
      saveData,
    );

    this._state$.next(new GameState(gameChanneled));
    return this._state$.value;
  }

  saveGame(): Promise<string> {
    return makeCommand("game.save");
  }

  async nextPlayer() {
    const gameState: GameChanneled = await makeCommand("game.nextPlayer");
    return gameState;
  }

  get state() {
    return this._state$.value;
  }
}

export const gameApi = new GameApi();
