import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4173'
const browser = await chromium.launch({ channel: 'chrome', headless: true })
try {
  const page = await browser.newPage({
    viewport: { width: 1320, height: 1000 },
    deviceScaleFactor: 1,
  })
  await fs.mkdir('public/projects', { recursive: true })
  for (const id of ['inventario', 'reservas', 'pedidos']) {
    await page.goto(`${origin}/proyectos/${id}/`)
    await page.locator(`[data-demo="${id}"]`).waitFor()
    await page.evaluate(() => document.fonts.ready)
    await page
      .locator(`[data-demo="${id}"]`)
      .screenshot({ path: `public/projects/${id}.png` })
    console.log(`Captured ${id}`)
  }
  for (const [input, output] of [
    ['social-card.svg', 'og-image.png'],
    ['social-support.svg', 'og-support.png'],
  ]) {
    await page.setViewportSize({ width: 1200, height: 630 })
    await page.goto(`${origin}/${input}`)
    await page.screenshot({ path: `public/${output}` })
    console.log(`Rendered ${output}`)
  }
} finally {
  await browser.close()
}
