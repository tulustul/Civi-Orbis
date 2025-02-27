import { create } from "zustand";

export type MenuView = "main-menu" | "save" | "load" | "new-game";

export type MenuState = {
  enabled: boolean;
  view: MenuView;
  show: () => void;
  hide: () => void;
  setView: (view: MenuView) => void;
};

export const useMenu = create<MenuState>((set) => ({
  enabled: true,
  view: "main-menu",
  show: () => set({ enabled: true, view: "main-menu" }),
  hide: () => set({ enabled: false }),
  setView: (view) => set({ view }),
}));
