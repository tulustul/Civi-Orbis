import { create } from "zustand";
import type { GameRenderer } from "./renderer";

export type SingletonsState = {
  renderer: GameRenderer | undefined;
  setRenderer: (renderer: GameRenderer) => void;
};

export const useSingletons = create<SingletonsState>((set) => ({
  renderer: undefined,
  setRenderer: (renderer) => set({ renderer }),
}));
