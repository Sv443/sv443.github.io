import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface SettingsStore {
  language: string;
  setSettings: (settings: Pick<SettingsStore, "language">) => void;
}

export const defaultSettings: Omit<SettingsStore, "setSettings"> = {
  language: navigator.language.split(/[-_]/)[0]?.trim() ?? "en",
};

export const useSettingsStore = create(
  persist<SettingsStore>(
    (set, _get) => ({
      ...defaultSettings,
      setSettings: (settings: Parameters<SettingsStore["setSettings"]>[0]) =>
        set({ ...settings }),
    }),
    {
      name: "settings", // name of the item in the storage (must be unique)
    },
  ),
);
