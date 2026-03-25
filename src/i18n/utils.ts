import { languages, translations, type Locale } from './translations'

export function getBase(): string {
  return import.meta.env.BASE_URL.replace(/\/?$/, '/')
}

export function getLangFromUrl(url: URL): Locale {
  const base = getBase()
  let path = url.pathname
  if (base !== '/' && path.startsWith(base)) {
    path = '/' + path.slice(base.length)
  }
  const [, lang] = path.split('/')
  if (lang && lang in languages) return lang as Locale
  return 'pt-br'
}

export function useTranslations(lang: Locale) {
  return translations[lang]
}

export function getAlternateUrl(currentLang: Locale): string {
  if (currentLang === 'pt-br') {
    return `${getBase()}en/`
  }
  return getBase()
}

export function getHtmlLang(locale: Locale): string {
  return locale === 'pt-br' ? 'pt-BR' : 'en'
}
