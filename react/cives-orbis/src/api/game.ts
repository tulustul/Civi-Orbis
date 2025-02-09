import { BehaviorSubject, Observable } from "rxjs";
import { filter, skip } from "rxjs/operators";

import { MapGeneratorOptions } from "./game.interface";
import { makeCommand } from "./internal/commander";
import { GameState } from "./state";
import { GameChanneled } from "@/core/serialization/channel";
import { PlayerTask } from "@/shared";

export class GameApi {
  private _state$ = new BehaviorSubject<GameState | null>(null);
  state$ = this._state$.asObservable();

  init$ = this.state$.pipe(filter((state) => !!state)) as Observable<GameState>;

  stop$ = this.state$.pipe(
    filter((state) => !state),
    skip(1),
  );

  private _nextTask$ = new BehaviorSubject<PlayerTask | null>(null);
  nextTask$ = this._nextTask$.asObservable();

  async newGame(mapGeneratorOptions: MapGeneratorOptions): Promise<GameState> {
    if (this.state) {
      this._state$.next(null);
    }

    const gameChanneled = await makeCommand<GameChanneled>(
      "game.new",
      mapGeneratorOptions,
    );

    this._state$.next(new GameState(gameChanneled));
    return this._state$.value as GameState;
  }

  async loadGame(data: string): Promise<GameState | null> {
    if (this.state) {
      this._state$.next(null);
    }

    const gameChanneled = await makeCommand<GameChanneled>(
      "game.loadDump",
      data,
    );

    this._state$.next(new GameState(gameChanneled));
    return this._state$.value;
  }

  saveGame() {
    return makeCommand<string>("game.saveDump");
  }

  nextPlayer() {
    return makeCommand("game.nextPlayer");
  }

  get state() {
    return this._state$.value;
  }

  get nextTask() {
    return this._nextTask$.value;
  }
}

export const game = new GameApi();
