import { ptBr } from './locales/pt-br';
import { en } from './locales/en';

export const languages = {
  'pt-br': 'Português',
  en: 'English',
} as const;

export type Locale = keyof typeof languages;

export const translations = {
  'pt-br': ptBr,
  en: en,
} as const;

/** The shape of a single locale's translation record. */
export type Translation = (typeof translations)[Locale];
