import { translations, type Locale, type Translation } from './translations';

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
 * Returns the translation object for the given locale.
 *
 * @param lang - The locale to retrieve translations for.
 * @returns The translation record for the specified locale.
 *
 * @example
 * const t = useTranslations('en');
 * console.log(t.meta.title); // 'Pedro Costa | ...'
 */
export function useTranslations(lang: Locale): Translation {
  return translations[lang];
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
