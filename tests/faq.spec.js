import { expect, test } from '@playwright/test'

test('FAQ opens and closes smoothly, including rapid reversals and keyboard input', async ({
  page,
}) => {
  await page.goto('/#preguntas')
  const item = page.locator('.pt-faq details').first()
  const summary = item.locator('summary')
  const panel = item.locator('.pt-faq-answer')
  await summary.click()
  await expect(item).toHaveAttribute('open', '')
  await expect
    .poll(() => panel.evaluate((element) => element.getAnimations().length))
    .toBe(0)
  expect(
    await panel.evaluate((element) => element.getBoundingClientRect().height),
  ).toBeGreaterThan(50)
  await summary.click()
  // Reopen before the closing animation finishes.
  await summary.click({ force: true })
  await expect
    .poll(() => panel.evaluate((element) => element.getAnimations().length))
    .toBe(0)
  await expect(item).toHaveAttribute('open', '')
  await expect(panel).toHaveCSS('opacity', '1')
  await summary.focus()
  await page.keyboard.press('Enter')
  await expect(item).not.toHaveAttribute('open')
  await expect(summary).toBeFocused()
})

test('FAQ remains operable with reduced motion and without JavaScript', async ({
  browser,
}) => {
  for (const options of [
    { reducedMotion: 'reduce' },
    { javaScriptEnabled: false },
  ]) {
    const context = await browser.newContext(options)
    try {
      const page = await context.newPage()
      await page.goto('http://127.0.0.1:4175/#preguntas')
      const item = page.locator('.pt-faq details').first()
      await item.locator('summary').click()
      await expect(item).toHaveAttribute('open', '')
      await expect(item.locator('p')).toBeVisible()
      await item.locator('summary').click()
      await expect(item).not.toHaveAttribute('open')
    } finally {
      await context.close()
    }
  }
})
