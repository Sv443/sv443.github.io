import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import KeyRetraction from "./i18n-plugin-retraction";

export const I18N_NS = "app";

declare module "i18next" {
  interface CustomTypeOptions {
    returnNull: false;
  }
}

export default ({ locale }: { locale: string }) =>
  i18n
    .use(initReactI18next)
    .use(KeyRetraction)
    .init({
      ns: [I18N_NS],
      defaultNS: I18N_NS,
      keySeparator: false,
      lng: locale,
      interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
      },
      returnNull: false,
      react: {
        bindI18n: "languageChanged",
        bindI18nStore: "added",
        transSupportBasicHtmlNodes: false,
        useSuspense: false,
      },
      // postProcess: ["KeyRetraction"],
    });

export { i18n };
