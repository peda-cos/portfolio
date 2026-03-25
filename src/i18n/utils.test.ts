import { describe, it, expect, vi, beforeAll } from 'vitest';

// Stub import.meta.env.BASE_URL to match astro.config.mjs base: '/portfolio'
// In the Astro build, Vite replaces import.meta.env.BASE_URL with the configured base.
// In test context, we stub it manually.
beforeAll(() => {
  vi.stubEnv('BASE_URL', '/portfolio/');
});

import { getLangFromUrl, getAlternateUrl, getHtmlLang, getBase, useTranslations } from './utils';

const localhost = 'http://localhost:4321';

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

describe('getLangFromUrl', () => {
  it('returns pt-br for /portfolio/', () => {
    const url = new URL('/portfolio/', localhost);
    expect(getLangFromUrl(url)).toBe('pt-br');
  });

  it('returns en for /portfolio/en/', () => {
    const url = new URL('/portfolio/en/', localhost);
    expect(getLangFromUrl(url)).toBe('en');
  });

  it('returns en for /portfolio/en/foo', () => {
    const url = new URL('/portfolio/en/foo', localhost);
    expect(getLangFromUrl(url)).toBe('en');
  });

  it('returns pt-br for unknown segment /portfolio/unknown/', () => {
    const url = new URL('/portfolio/unknown/', localhost);
    expect(getLangFromUrl(url)).toBe('pt-br');
  });

  it('returns pt-br for /portfolio (no trailing slash)', () => {
    const url = new URL('/portfolio', localhost);
    expect(getLangFromUrl(url)).toBe('pt-br');
  });

  it('returns pt-br for root /', () => {
    const url = new URL('/', localhost);
    expect(getLangFromUrl(url)).toBe('pt-br');
  });
});

describe('getAlternateUrl', () => {
  it('returns path to en/ when current lang is pt-br', () => {
    const result = getAlternateUrl('pt-br');
    expect(result).toMatch(/en\/$/);
  });

  it('returns base path when current lang is en', () => {
    const result = getAlternateUrl('en');
    expect(result).toBe(getBase());
    expect(result).not.toContain('en/');
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
    expect(t).toHaveProperty('summary');
    expect(t).toHaveProperty('skills');
    expect(t).toHaveProperty('experience');
    expect(t).toHaveProperty('education');
    expect(t).toHaveProperty('footer');
    expect(t).toHaveProperty('a11y');
  });

  it('returns en translations with all expected keys', () => {
    const t = useTranslations('en');
    expect(t).toHaveProperty('meta');
    expect(t).toHaveProperty('nav');
    expect(t).toHaveProperty('header');
    expect(t).toHaveProperty('summary');
    expect(t).toHaveProperty('skills');
    expect(t).toHaveProperty('experience');
    expect(t).toHaveProperty('education');
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
