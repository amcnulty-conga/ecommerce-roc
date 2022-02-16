import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as locales from './locales';

const languageKeys = Object.keys(locales);
const languages = {};
for (let i = 0; i < languageKeys.length; i++) {
  languages[languageKeys[i]] = locales[languageKeys[i]];
}

i18n
  .use(initReactI18next)
  .init({
    resources: languages,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;