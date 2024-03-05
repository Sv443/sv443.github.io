import { useSettingsStore } from "@/store";
import { useTranslation } from "react-i18next";

interface LanguageSwitcherProps {
  languages: string[];
}

export function LanguageSwitcher({ languages }: LanguageSwitcherProps) {
  const { setSettings, ...settings } = useSettingsStore();
  const { t } = useTranslation();

  return (
    <div>
      {languages.map((lang) => (
        <button
          key={`lang-switch-${lang}`}
          role="select"
          aria-label={t(`lang-name-${lang}` as "_")}
          title={t(`lang-name-${lang}` as "_")}
          onClick={() => {
            setSettings({ ...settings, language: lang });
          }}
        >
          {t(`lang-name-${lang}` as "_")}
        </button>
      ))}
    </div>
  );
}
