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
    interpolation: {
        format: function(value, format, lng) {
            if (format === 'intlDate') return new Intl.DateTimeFormat().format(value);
            return value;
        }
    }
  });


export default i18n;
