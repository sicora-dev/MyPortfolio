export const languages = {
  es: 'ES',
  en: 'EN',
};

export const defaultLang = 'es';

import es from './es.json';
import en from './en.json';

export const ui = {
  es,
  en,
};

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as keyof typeof languages;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): any {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
