import { create } from "zustand";

export type UiMode = "none" | "map" | "editor";

export type UiState = {
  mode: UiMode;
  setMode: (mode: UiMode) => void;
};

export const useUiState = create<UiState>((set) => ({
  mode: "none",
  setMode: (mode) => set({ mode }),
}));
