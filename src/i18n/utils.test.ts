import { describe, it, expect, vi, beforeAll } from 'vitest';

// Stub import.meta.env.BASE_URL to match astro.config.mjs base: '/portfolio'
// In the Astro build, Vite replaces import.meta.env.BASE_URL with the configured base.
// In test context, we stub it manually.
beforeAll(() => {
  vi.stubEnv('BASE_URL', '/portfolio/');
});

import { getHtmlLang, getBase, useTranslations } from './utils';

describe('getBase', () => {
  it('returns a string ending with /', () => {
    const base = getBase();
    expect(base.endsWith('/')).toBe(true);
  });

  it('contains the configured base path', () => {
    const base = getBase();
    expect(base).toContain('portfolio');
  });
});

describe('getHtmlLang', () => {
  it('returns pt-BR for pt-br locale', () => {
    expect(getHtmlLang('pt-br')).toBe('pt-BR');
  });

  it('returns en for en locale', () => {
    expect(getHtmlLang('en')).toBe('en');
  });
});

describe('useTranslations', () => {
  it('returns pt-br translations with all expected keys', () => {
    const t = useTranslations('pt-br');
    expect(t).toHaveProperty('meta');
    expect(t).toHaveProperty('nav');
    expect(t).toHaveProperty('header');
    expect(t).toHaveProperty('hero');
    expect(t).toHaveProperty('value');
    expect(t).toHaveProperty('experience');
    expect(t).toHaveProperty('craft');
    expect(t).toHaveProperty('cta');
    expect(t).toHaveProperty('footer');
    expect(t).toHaveProperty('a11y');
  });

  it('returns en translations with all expected keys', () => {
    const t = useTranslations('en');
    expect(t).toHaveProperty('meta');
    expect(t).toHaveProperty('nav');
    expect(t).toHaveProperty('header');
    expect(t).toHaveProperty('hero');
    expect(t).toHaveProperty('value');
    expect(t).toHaveProperty('experience');
    expect(t).toHaveProperty('craft');
    expect(t).toHaveProperty('cta');
    expect(t).toHaveProperty('footer');
    expect(t).toHaveProperty('a11y');
  });

  it('returns pt-br meta.title containing Pedro Monteiro', () => {
    const t = useTranslations('pt-br');
    expect(t.meta.title).toContain('Pedro Monteiro');
  });

  it('returns en meta.title containing Pedro Monteiro', () => {
    const t = useTranslations('en');
    expect(t.meta.title).toContain('Pedro Monteiro');
  });
});
