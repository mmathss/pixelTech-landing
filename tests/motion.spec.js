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

for (const [route, selector] of [['/', '.pt-process-window'], ['/soporte/', '.sp-laptop-scene']]) {
  test(`${route} depth settles after pointer exit and cleans up when motion is disabled`, async ({ page }) => {
    await page.goto(route)
    const surface = page.locator(selector)
    await expect(surface).toHaveClass(/motion-depth/)
    await surface.scrollIntoViewIfNeeded()
    const bounds = await surface.boundingBox()
    await page.mouse.move(bounds.x + bounds.width * .8, bounds.y + bounds.height * .3)
    await expect.poll(() => surface.evaluate((element) =>
      parseFloat(element.style.getPropertyValue('--depth-x')) || 0,
    )).toBeGreaterThan(1)
    await page.mouse.move(0, 0)
    await expect.poll(() => surface.evaluate((element) =>
      Math.abs(parseFloat(element.style.getPropertyValue('--depth-x')) || 0),
    )).toBeLessThan(.02)
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(page.locator('.motion-depth, .motion-glint')).toHaveCount(0)
    await expect(surface).toBeVisible()
    await page.emulateMedia({ reducedMotion: 'no-preference' })
    await expect(surface).toHaveClass(/motion-depth/)
    await expect(surface.locator(':scope > .motion-glint')).toHaveCount(1)
  })
}

test('touch devices keep native scrolling and omit pointer effects on both landings', async ({ browser }) => {
  const context = await browser.newContext({ isMobile: true, hasTouch: true, viewport: { width: 390, height: 844 } })
  try {
    const page = await context.newPage()
    for (const route of ['/', '/soporte/']) {
      await page.goto(`http://127.0.0.1:4175${route}`)
      await expect(page.locator('main')).toBeVisible()
      await expect(page.locator('.motion-depth, .motion-glint')).toHaveCount(0)
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1)).toBe(true)
    }
  } finally {
    await context.close()
  }
})

test('the animated repair tool stays inside the laptop screen', async ({ page }) => {
  await page.goto('/soporte/')
  const drawing = page.locator('.sp-laptop-drawing')
  await drawing.scrollIntoViewIfNeeded()
  await expect(page.locator('.sp-laptop-art')).toHaveClass(/sp-laptop-active/)
  const tool = page.locator('.sp-laptop-tool')
  await tool.evaluate((element) => {
    for (const animation of element.getAnimations()) {
      animation.pause()
      animation.currentTime = 1360
    }
  })
  const screen = await drawing.locator('path[d="M104 64h312v165H104Z"]').boundingBox()
  const bounds = await tool.boundingBox()
  expect(bounds.x).toBeGreaterThan(screen.x)
  expect(bounds.y).toBeGreaterThan(screen.y)
  expect(bounds.x + bounds.width).toBeLessThan(screen.x + screen.width)
  expect(bounds.y + bounds.height).toBeLessThan(screen.y + screen.height)
})
