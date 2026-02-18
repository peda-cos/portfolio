import { translations, type Locale } from './translations';

const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');

export function getLangFromUrl(url: URL): Locale {
  let path = url.pathname;
  if (base !== '/' && path.startsWith(base)) {
    path = '/' + path.slice(base.length);
  }
  const [, lang] = path.split('/');
  if (lang === 'en') return 'en';
  return 'pt-br';
}

export function useTranslations(lang: Locale) {
  return translations[lang];
}

export function getAlternateUrl(currentLang: Locale): string {
  if (currentLang === 'pt-br') {
    return `${base}en/`;
  }
  return base;
}

export function getHtmlLang(locale: Locale): string {
  return locale === 'pt-br' ? 'pt-BR' : 'en';
}
