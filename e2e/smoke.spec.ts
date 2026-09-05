import { test, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

const sharedTabOrder = [
  '.skip-link',
  '.hero__language',
  '#hero a[href^="mailto:"]',
  '#hero a[href*="linkedin"]',
  '#hero a[href*="github"]',
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
  '#contact a[href^="mailto:"]',
  'footer .footer-link-html',
  'footer .footer-link-css',
];

async function tabThrough(page: Page, count: number) {
  await page.evaluate(() => (document.documentElement as HTMLElement).focus());
  for (let i = 0; i < count; i++) {
    await page.keyboard.press('Tab');
  }
}

async function tabOnce(page: Page) {
  await page.keyboard.press('Tab');
}

const locales = [
  {
    name: 'PT',
    path: './',
    lang: 'pt-BR',
    switchHref: 'en/',
    switchLabel: /Mudar para/i,
    heroCtaText: 'Entrar em contato',
    finalCtaText: 'Enviar e-mail',
  },
  {
    name: 'EN',
    path: './en/',
    lang: 'en',
    switchHref: '../',
    switchLabel: /Switch to/i,
    heroCtaText: 'Get in touch',
    finalCtaText: 'Send an email',
  },
];

for (const locale of locales) {
  test.describe(`${locale.name} page (${locale.path})`, () => {
    test('renders with correct lang attribute', async ({ page }) => {
      await page.goto(locale.path);
      await expect(page.locator('html')).toHaveAttribute('lang', locale.lang);
    });

    test('has h1 with name', async ({ page }) => {
      await page.goto(locale.path);
      const h1 = page.locator('h1');
      await expect(h1).toBeVisible();
      await expect(h1).toHaveText('Pedro Monteiro');
    });

    test('returns HTTP 200', async ({ page }) => {
      const response = await page.goto(locale.path);
      expect(response?.status()).toBe(200);
    });

    test('skip link target exists', async ({ page }) => {
      await page.goto(locale.path);
      await expect(page.locator('#main-content')).toBeAttached();
    });

    test('language switcher navigates to other locale', async ({ page }) => {
      await page.goto(locale.path);
      const switcher = page.getByRole('link', { name: locale.switchLabel });
      await expect(switcher).toBeVisible();
      await expect(switcher).toHaveAttribute('href', locale.switchHref);
      await switcher.click();
      await page.waitForURL(locale.path === './' ? '**/en/**' : (url) => !url.pathname.includes('/en/'));
      const expectedLang = locale.path === './' ? 'en' : 'pt-BR';
      await expect(page.locator('html')).toHaveAttribute('lang', expectedLang);
    });

    test('hero CTA renders with localized label and primary button class', async ({ page }) => {
      await page.goto(locale.path);
      const heroCta = page.locator('#hero a[href^="mailto:"]');
      await expect(heroCta).toBeVisible();
      await expect(heroCta).toHaveText(locale.heroCtaText);
      await expect(heroCta).toHaveClass(/btn--solid/);
    });

    test('final CTA renders with localized label and deep-band button class', async ({ page }) => {
      await page.goto(locale.path);
      const finalCta = page.locator('#contact a[href^="mailto:"]');
      await expect(finalCta).toBeVisible();
      await expect(finalCta).toHaveText(locale.finalCtaText);
      await expect(finalCta).toHaveClass(/btn--on-deep/);
    });

    test('hero CTA shows visible focus treatment when focused', async ({ page }) => {
      await page.goto(locale.path);
      const heroCta = page.locator('#hero a[href^="mailto:"]');
      await heroCta.focus();
      await expect(heroCta).toBeFocused();
    });

    test('final CTA shows visible focus treatment when focused', async ({ page }) => {
      await page.goto(locale.path);
      const finalCta = page.locator('#contact a[href^="mailto:"]');
      await finalCta.focus();
      await expect(finalCta).toBeFocused();
    });

    test('keyboard: Tab forward through shared controls in expected order', async ({ page }) => {
      await page.goto(locale.path);
      await page.evaluate(() => (document.documentElement as HTMLElement).focus());
      for (const selector of sharedTabOrder) {
        await tabOnce(page);
        await expect(page.locator(selector)).toBeFocused();
      }
    });

    test('keyboard: Shift+Tab backward reverses tab order through shared controls', async ({ page }) => {
      await page.goto(locale.path);
      await tabThrough(page, sharedTabOrder.length);
      await expect(page.locator(sharedTabOrder[sharedTabOrder.length - 1])).toBeFocused();
      for (let i = sharedTabOrder.length - 2; i >= 0; i--) {
        await page.keyboard.press('Shift+Tab');
        await expect(page.locator(sharedTabOrder[i])).toBeFocused();
      }
    });
  });
}
