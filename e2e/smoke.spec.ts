import { test, expect } from '@playwright/test';

// Use relative paths (./ and ./en/) so Playwright correctly resolves them
// against baseURL. Absolute paths (/ and /en/) would discard the baseURL
// path component (/portfolio/) and hit the server root, returning 404.

// ── Keyboard-navigation helpers ───────────────────────────────────────────────

/**
 * Expected sequential tab order for shared interactive controls.
 * Each entry is a CSS selector for the focusable element.
 */
const sharedTabOrder = [
  // Skip link
  '.skip-link',
  // Language switcher
  'nav [aria-label^="Switch to"]',
  // Hero CTA and social links
  '#hero a[href^="mailto:"]',
  '#hero a[href*="linkedin"]',
  '#hero a[href*="github"]',
  // Education highlight links (#craft section – same URLs in both locales)
  'a[href="https://github.com/peda-cos/libft"]',
  'a[href="https://github.com/peda-cos/ft_printf"]',
  'a[href="https://github.com/peda-cos/get_next_line"]',
  'a[href="https://github.com/peda-cos/Born2beroot"]',
  'a[href="https://github.com/peda-cos/push_swap"]',
  'a[href="https://github.com/peda-cos/pipex"]',
  'a[href="https://github.com/peda-cos/FdF"]',
  'a[href="https://github.com/peda-cos/minishell"]',
  'a[href="https://github.com/peda-cos/Philosophers"]',
  'a[href="https://github.com/jonnathan-ls/42-cursus-cub3d"]',
  'a[href="https://github.com/peda-cos/NetPractice"]',
  'a[href="https://github.com/peda-cos/CPP_Modules"]',
  'a[href="https://github.com/peda-cos/Inception"]',
  // Contact CTA
  '#contact a[href^="mailto:"]',
  // Footer credit links
  'footer a[href*="astro.build"]',
  'footer a[href*="svelte.dev"]',
  'footer a[href*="tailwindcss.com"]',
];

/**
 * Press Tab `count` times starting from the top of the page.
 * Focuses <html> first so Tab reliably begins from the first focusable element.
 */
async function tabThrough(page: import('@playwright/test').Page, count: number) {
  await page.evaluate(() => (document.documentElement as HTMLElement).focus());
  for (let i = 0; i < count; i++) {
    await page.keyboard.press('Tab');
  }
}

/**
 * Press Tab once from the current focused position (no reset).
 */
async function tabOnce(page: import('@playwright/test').Page) {
  await page.keyboard.press('Tab');
}

// ── PT page (/portfolio/) ────────────────────────────────────────────────────

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

  test('keyboard: Tab forward through shared controls in expected order', async ({ page }) => {
    await page.goto('./');
    // Focus <html> so Tab reliably starts from the first focusable element
    await page.evaluate(() => (document.documentElement as HTMLElement).focus());
    for (const selector of sharedTabOrder) {
      await tabOnce(page);
      await expect(page.locator(selector)).toBeFocused();
    }
  });

  test('keyboard: Shift+Tab backward reverses tab order through shared controls', async ({
    page,
  }) => {
    await page.goto('./');
    // Advance focus to the last control in the shared order using tabThrough
    await tabThrough(page, sharedTabOrder.length);
    await expect(page.locator(sharedTabOrder[sharedTabOrder.length - 1])).toBeFocused();
    // Walk backward and verify each step
    for (let i = sharedTabOrder.length - 2; i >= 0; i--) {
      await page.keyboard.press('Shift+Tab');
      await expect(page.locator(sharedTabOrder[i])).toBeFocused();
    }
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

  test('keyboard: Tab forward through shared controls in expected order', async ({ page }) => {
    await page.goto('./en/');
    // Focus <html> so Tab reliably starts from the first focusable element
    await page.evaluate(() => (document.documentElement as HTMLElement).focus());
    for (const selector of sharedTabOrder) {
      await tabOnce(page);
      await expect(page.locator(selector)).toBeFocused();
    }
  });

  test('keyboard: Shift+Tab backward reverses tab order through shared controls', async ({
    page,
  }) => {
    await page.goto('./en/');
    // Advance focus to the last control in the shared order using tabThrough
    await tabThrough(page, sharedTabOrder.length);
    await expect(page.locator(sharedTabOrder[sharedTabOrder.length - 1])).toBeFocused();
    // Walk backward and verify each step
    for (let i = sharedTabOrder.length - 2; i >= 0; i--) {
      await page.keyboard.press('Shift+Tab');
      await expect(page.locator(sharedTabOrder[i])).toBeFocused();
    }
  });
});
