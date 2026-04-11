import { describe, it, expect } from 'vitest';
import { translations, languages } from './translations';

describe('translations structure', () => {
  const locales = Object.keys(translations) as Array<keyof typeof translations>;

  it('has matching top-level keys for all locales', () => {
    const ptKeys = Object.keys(translations['pt-br']).sort();
    const enKeys = Object.keys(translations['en']).sort();
    expect(ptKeys).toEqual(enKeys);
  });

  it.each(['meta', 'nav', 'header', 'hero', 'cta', 'footer', 'a11y'] as const)(
    'has matching nested keys in %s for all locales',
    (section) => {
      const ptKeys = Object.keys(translations['pt-br'][section]).sort();
      const enKeys = Object.keys(translations['en'][section]).sort();
      expect(ptKeys).toEqual(enKeys);
    },
  );

  it('has no undefined values at depth 1', () => {
    for (const locale of locales) {
      const values = Object.values(translations[locale]);
      for (const value of values) {
        expect(value).toBeDefined();
      }
    }
  });

  it('has matching value skill clusters count between locales', () => {
    expect(translations['pt-br'].value.clusters.length).toBe(
      translations['en'].value.clusters.length,
    );
  });

  it('has matching experience positions count between locales', () => {
    expect(translations['pt-br'].experience.positions.length).toBe(
      translations['en'].experience.positions.length,
    );
  });

  it('has matching craft institutions count between locales', () => {
    expect(translations['pt-br'].craft.institutions.length).toBe(
      translations['en'].craft.institutions.length,
    );
  });
});

describe('languages map', () => {
  it('contains pt-br and en', () => {
    expect(Object.keys(languages)).toContain('pt-br');
    expect(Object.keys(languages)).toContain('en');
  });

  it('has non-empty string values', () => {
    for (const value of Object.values(languages)) {
      expect(typeof value).toBe('string');
      expect(value.length).toBeGreaterThan(0);
    }
  });

  it('has exactly 2 locales', () => {
    expect(Object.keys(languages)).toHaveLength(2);
  });
});
