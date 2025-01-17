import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from "./assets/locales/en.json"
import es from "./assets/locales/es.json"

const resources = {
    en,
    es
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "es",
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already protects from XSS
      format: (value, format, lng) => {
        if (format === 'datetime') {
          return new Intl.DateTimeFormat(lng, {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          }).format(value);
        }
        return value;
      },
    },
  });


export default i18n;
