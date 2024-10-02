import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationEN from "./locales/en.json";
import translationUZ from "./locales/uz.json";
import translationRU from "./locales/ru.json";
import translationPO from "./locales/po.json";
const savedLanguage = localStorage.getItem("language") || "uz";

const resources = {
  en: {
    translation: translationEN,
  },
  uz: {
    translation: translationUZ,
  },
  ru: {
    translation: translationRU,
  },
  po: {
    translation: translationPO,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
