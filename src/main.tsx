import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import i18nInit, { i18n } from "./i18n";
import { defaultSettings, useSettingsStore } from "./store";

let i18nIsInitialized = false;

(async () => {
  const { language } = defaultSettings;

  const rootDiv: (HTMLElement & { _rendered?: boolean }) | null =
    document.getElementById("root")!;

  if (!i18nIsInitialized) {
    i18nIsInitialized = true;
    await i18nInit({ locale: language });
  }
  if (!rootDiv._rendered) {
    rootDiv._rendered = true;
    const root = createRoot(rootDiv);
    root.render(
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>,
    );
  }
  const currentLang = useSettingsStore.getState().language;
  if (currentLang && currentLang !== i18n.language) {
    i18n.changeLanguage(currentLang);
  }
})();
