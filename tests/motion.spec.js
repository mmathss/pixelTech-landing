import { test, expect } from '@playwright/test'

for (const [route, prefix, target] of [
  ['/', 'pt', '.pt-project-image'],
  ['/soporte/', 'sp', '.sp-symptom'],
]) {
  test(`${route} reveals keyboard targets and responds to motion preferences`, async ({ page }) => {
    await page.goto(route)
    const card = page.locator(target).first()
    await expect(card).toHaveClass(new RegExp(`${prefix}-reveal-pending`))
    await card.focus()
    await expect(card).toBeFocused()
    await expect(card).toHaveCSS('opacity', '1')
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(page.locator(`.${prefix}-reveal-pending`)).toHaveCount(0)
    await expect(page.locator('main')).toBeVisible()
    if (prefix === 'sp') {
      await expect.poll(() => page.locator('.sp-laptop-art').evaluate(
        (element) => element.getAnimations({ subtree: true }).length,
      )).toBe(0)
    }
  })
}
