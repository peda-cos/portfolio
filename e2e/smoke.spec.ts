import { test, expect } from '@playwright/test'

// Use relative paths (./ and ./en/) so Playwright correctly resolves them
// against baseURL. Absolute paths (/ and /en/) would discard the baseURL
// path component (/portfolio/) and hit the server root, returning 404.

test.describe('PT page (/portfolio/)', () => {
  test('renders with correct lang attribute', async ({ page }) => {
    await page.goto('./')
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('pt-BR')
  })

  test('has h1 with name', async ({ page }) => {
    await page.goto('./')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toHaveText('Pedro Monteiro')
  })

  test('returns HTTP 200', async ({ page }) => {
    const response = await page.goto('./')
    expect(response?.status()).toBe(200)
  })

  test('skip link target exists', async ({ page }) => {
    await page.goto('./')
    const main = page.locator('#main-content')
    await expect(main).toBeAttached()
  })

  test('language switcher navigates to EN page', async ({ page }) => {
    await page.goto('./')
    const switcher = page.locator('.language-switcher')
    await expect(switcher).toBeVisible()
    await switcher.click()
    await page.waitForURL('**/en/**')
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('en')
  })
})

test.describe('EN page (/portfolio/en/)', () => {
  test('renders with correct lang attribute', async ({ page }) => {
    await page.goto('./en/')
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('en')
  })

  test('has h1 with name', async ({ page }) => {
    await page.goto('./en/')
    const h1 = page.locator('h1')
    await expect(h1).toBeVisible()
    await expect(h1).toHaveText('Pedro Monteiro')
  })

  test('returns HTTP 200', async ({ page }) => {
    const response = await page.goto('./en/')
    expect(response?.status()).toBe(200)
  })

  test('skip link target exists', async ({ page }) => {
    await page.goto('./en/')
    const main = page.locator('#main-content')
    await expect(main).toBeAttached()
  })

  test('language switcher navigates to PT page', async ({ page }) => {
    await page.goto('./en/')
    const switcher = page.locator('.language-switcher')
    await expect(switcher).toBeVisible()
    await switcher.click()
    // Should navigate back to /portfolio/ (no /en/ in URL)
    await page.waitForURL((url) => !url.pathname.includes('/en/'))
    const lang = await page.locator('html').getAttribute('lang')
    expect(lang).toBe('pt-BR')
  })
})
