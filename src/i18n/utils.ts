import { translations, type Locale } from './translations';

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'en') return 'en';
  return 'pt-br';
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getAlternateUrl(currentLang: Locale): string {
  if (currentLang === 'pt-br') {
    return '/en/';
  }
  return '/';
}

export function getHtmlLang(locale: Locale): string {
  return locale === 'pt-br' ? 'pt-BR' : 'en';
}
