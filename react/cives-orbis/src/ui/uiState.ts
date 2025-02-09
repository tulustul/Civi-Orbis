import { create } from "zustand";

export type UiMode = "none" | "map" | "editor";

export type UiState = {
  menuEnabled: boolean;
  mode: UiMode;
  setMenuEnabled: (enabled: boolean) => void;
  setMode: (mode: UiMode) => void;
};

export const useUiState = create<UiState>((set) => ({
  menuEnabled: true,
  mode: "none",
  setMenuEnabled: (menuEnabled) => set({ menuEnabled }),
  setMode: (mode) => set({ mode }),
}));
