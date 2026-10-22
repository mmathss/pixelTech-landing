import { test, expect } from '@playwright/test'

for (const [path, target, title] of [
  ['/', 'soluciones', 'Cada negocio tiene su camino'],
  ['/soporte/', 'servicios', 'Encuentra el servicio'],
]) {
  test(`mascot follows sections and remembers dismissal on ${path}`, async ({ page }) => {
    const errors = []
    page.on('pageerror', (error) => errors.push(error.message))
    await page.goto(path)
    const mascot = page.getByRole('complementary', { name: 'Pixel, tu mascota guía' })
    await expect(mascot).toBeVisible()
    const initialLeft = await mascot.evaluate((element) => element.getBoundingClientRect().left)
    await expect(mascot.locator('.pixel-mascot-bubble p')).toHaveCSS('color', 'rgb(211, 219, 213)')
    await page.evaluate((id) => {
      const element = document.getElementById(id)
      window.scrollTo({ top: element.offsetTop, behavior: 'instant' })
    }, target)
    await expect(mascot).toContainText(title)
    await expect(mascot).toHaveCSS('transform', 'none')
    expect(await mascot.evaluate((element) => element.getBoundingClientRect().left)).toBe(initialLeft)
    await expect(mascot.locator('.pixel-mascot-bubble')).toBeVisible()
    await page.getByRole('button', { name: 'Cerrar mensaje de Pixel', exact: true }).click()
    await expect(mascot.locator('.pixel-mascot-bubble')).toBeHidden()
    await page.getByRole('button', { name: 'Ver consejo de Pixel' }).click()
    await expect(mascot.locator('.pixel-mascot-bubble')).toBeVisible()
    await page.getByRole('button', { name: 'Ocultar mascota', exact: true }).click()
    await expect(mascot).toHaveCount(0)
    await page.reload()
    await expect(page.getByRole('button', { name: 'Mostrar mascota', exact: true })).toBeVisible()
    await page.getByRole('button', { name: 'Mostrar mascota', exact: true }).click()
    await expect(mascot).toBeVisible()
    await page.emulateMedia({ reducedMotion: 'reduce' })
    await expect(mascot.locator('.pixel-mascot-sprite')).toHaveCSS('animation-name', 'none')
    await expect(mascot).toHaveCSS('transform', 'none')
    expect(errors).toEqual([])
  })
}

test('mobile mascot fits the screen and gives the support form space', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 })
  await page.goto('/soporte/')
  const mascot = page.locator('.pixel-mascot')
  const bounds = await mascot.boundingBox()
  expect(bounds.x).toBeGreaterThanOrEqual(0)
  expect(bounds.x + bounds.width).toBeLessThanOrEqual(375)
  await page.getByLabel('Tu nombre').focus()
  await expect(mascot).toBeHidden()
  await page.getByLabel('Tu nombre').blur()
  await expect(mascot).toBeVisible()
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true)
})
