import { languages, translations, type Locale } from './translations';

/**
 * Returns the normalized base URL path, always ending with a trailing slash.
 *
 * @returns The base URL path (e.g. `'/portfolio/'`).
 *
 * @example
 * // With BASE_URL = '/portfolio'
 * getBase(); // '/portfolio/'
 *
 * @example
 * // With BASE_URL = '/'
 * getBase(); // '/'
 */
export function getBase(): string {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/');
}

/**
 * Extracts the locale from a URL by inspecting the first path segment
 * after the base path. Falls back to `'pt-br'` if no known locale is found.
 *
 * @param url - The URL to extract the locale from.
 * @returns The detected locale.
 *
 * @example
 * getLangFromUrl(new URL('https://example.com/portfolio/en/')); // 'en'
 *
 * @example
 * getLangFromUrl(new URL('https://example.com/portfolio/')); // 'pt-br'
 */
export function getLangFromUrl(url: URL): Locale {
  const base = getBase();
  let path = url.pathname;
  if (base !== '/' && path.startsWith(base)) {
    path = '/' + path.slice(base.length);
  }
  const [, lang] = path.split('/');
  if (lang && lang in languages) return lang as Locale;
  return 'pt-br';
}

/**
 * Returns the translation object for the given locale.
 *
 * @param lang - The locale to retrieve translations for.
 * @returns The translation record for the specified locale.
 *
 * @example
 * const t = useTranslations('en');
 * console.log(t.meta.title); // 'Pedro Costa | ...'
 */
export function useTranslations(lang: Locale) {
  return translations[lang];
}

/**
 * Returns the alternate-language URL for the given locale.
 * Used for the `<link rel="alternate">` tag and the language switcher.
 *
 * @param currentLang - The current page locale.
 * @returns The URL path for the alternate locale.
 *
 * @example
 * getAlternateUrl('pt-br'); // '/portfolio/en/'
 *
 * @example
 * getAlternateUrl('en'); // '/portfolio/'
 */
export function getAlternateUrl(currentLang: Locale): string {
  if (currentLang === 'pt-br') {
    return `${getBase()}en/`;
  }
  return getBase();
}

/**
 * Converts a locale identifier to its BCP 47 HTML `lang` attribute value.
 *
 * @param locale - The internal locale identifier.
 * @returns The BCP 47 language tag for use in HTML `lang` attributes.
 *
 * @example
 * getHtmlLang('pt-br'); // 'pt-BR'
 *
 * @example
 * getHtmlLang('en'); // 'en'
 */
export function getHtmlLang(locale: Locale): string {
  return locale === 'pt-br' ? 'pt-BR' : 'en';
}
