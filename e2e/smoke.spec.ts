import { test, expect } from '@playwright/test';

// Use relative paths (./ and ./en/) so Playwright correctly resolves them
// against baseURL. Absolute paths (/ and /en/) would discard the baseURL
// path component (/portfolio/) and hit the server root, returning 404.

test.describe('PT page (/portfolio/)', () => {
  test('renders with correct lang attribute', async ({ page }) => {
    await page.goto('./');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('pt-BR');
  });

  test('has h1 with name', async ({ page }) => {
    await page.goto('./');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Pedro Monteiro');
  });

  test('returns HTTP 200', async ({ page }) => {
    const response = await page.goto('./');
    expect(response?.status()).toBe(200);
  });

  test('skip link target exists', async ({ page }) => {
    await page.goto('./');
    const main = page.locator('#main-content');
    await expect(main).toBeAttached();
  });

  test('language switcher navigates to EN page', async ({ page }) => {
    await page.goto('./');
    const switcher = page.getByRole('link', { name: /Switch to/i });
    await expect(switcher).toBeVisible();
    await switcher.click();
    await page.waitForURL('**/en/**');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('hero CTA renders with localized label and btn-primary class', async ({ page }) => {
    await page.goto('./');
    const heroCta = page.locator('#hero a[href^="mailto:"]');
    await expect(heroCta).toBeVisible();
    await expect(heroCta).toHaveText('Entrar em contato');
    await expect(heroCta).toHaveClass(/btn-primary/);
  });

  test('final CTA renders with localized label and btn-primary class', async ({ page }) => {
    await page.goto('./');
    const finalCta = page.locator('#contact a[href^="mailto:"]');
    await expect(finalCta).toBeVisible();
    await expect(finalCta).toHaveText('Enviar e-mail');
    await expect(finalCta).toHaveClass(/btn-primary/);
  });

  test('hero CTA shows visible focus treatment when focused', async ({ page }) => {
    await page.goto('./');
    const heroCta = page.locator('#hero a[href^="mailto:"]');
    await heroCta.focus();
    await expect(heroCta).toBeFocused();
  });

  test('final CTA shows visible focus treatment when focused', async ({ page }) => {
    await page.goto('./');
    const finalCta = page.locator('#contact a[href^="mailto:"]');
    await finalCta.focus();
    await expect(finalCta).toBeFocused();
  });
});

test.describe('EN page (/portfolio/en/)', () => {
  test('renders with correct lang attribute', async ({ page }) => {
    await page.goto('./en/');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
  });

  test('has h1 with name', async ({ page }) => {
    await page.goto('./en/');
    const h1 = page.locator('h1');
    await expect(h1).toBeVisible();
    await expect(h1).toHaveText('Pedro Monteiro');
  });

  test('returns HTTP 200', async ({ page }) => {
    const response = await page.goto('./en/');
    expect(response?.status()).toBe(200);
  });

  test('skip link target exists', async ({ page }) => {
    await page.goto('./en/');
    const main = page.locator('#main-content');
    await expect(main).toBeAttached();
  });

  test('language switcher navigates to PT page', async ({ page }) => {
    await page.goto('./en/');
    const switcher = page.getByRole('link', { name: /Switch to/i });
    await expect(switcher).toBeVisible();
    await switcher.click();
    // Should navigate back to /portfolio/ (no /en/ in URL)
    await page.waitForURL((url) => !url.pathname.includes('/en/'));
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('pt-BR');
  });

  test('hero CTA renders with localized label and btn-primary class', async ({ page }) => {
    await page.goto('./en/');
    const heroCta = page.locator('#hero a[href^="mailto:"]');
    await expect(heroCta).toBeVisible();
    await expect(heroCta).toHaveText('Get in touch');
    await expect(heroCta).toHaveClass(/btn-primary/);
  });

  test('final CTA renders with localized label and btn-primary class', async ({ page }) => {
    await page.goto('./en/');
    const finalCta = page.locator('#contact a[href^="mailto:"]');
    await expect(finalCta).toBeVisible();
    await expect(finalCta).toHaveText('Send an email');
    await expect(finalCta).toHaveClass(/btn-primary/);
  });

  test('hero CTA shows visible focus treatment when focused', async ({ page }) => {
    await page.goto('./en/');
    const heroCta = page.locator('#hero a[href^="mailto:"]');
    await heroCta.focus();
    await expect(heroCta).toBeFocused();
  });

  test('final CTA shows visible focus treatment when focused', async ({ page }) => {
    await page.goto('./en/');
    const finalCta = page.locator('#contact a[href^="mailto:"]');
    await finalCta.focus();
    await expect(finalCta).toBeFocused();
  });
});
