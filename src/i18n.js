import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import translationEN from './locales/en/translation.json'
import translationIT from './locales/it/translation.json'
import translationFR from './locales/fr/translation.json'
import translationES from './locales/es/translation.json'
import translationDE from './locales/de/translation.json'
import translationPT from './locales/pt/translation.json'
import translationJA from './locales/ja/translation.json'

const resources = {
    en: {
        translation: translationEN,
    },
    it: {
        translation: translationIT,
    },
    fr: {
        translation: translationFR,
    },
    es: {
        translation: translationES,
    },
    de: {
        translation: translationDE,
    },
    pt: {
        translation: translationPT,
    },
    ja: {
        translation: translationJA,
    },
}

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false,
        },
    })

export default i18n


// i18n.js
// import i18n from 'i18next';
// import { initReactI18next } from 'react-i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
//
// i18n
//     .use(HttpApi)
//     .use(LanguageDetector)
//     .use(initReactI18next)
//     .init({
//         fallbackLng: 'en',
//         interpolation: {
//             escapeValue: false,
//         },
//         backend: {
//             loadPath: '/locales/{{lng}}/{{ns}}.json',
//         },
//     });
//
// export default i18n;
