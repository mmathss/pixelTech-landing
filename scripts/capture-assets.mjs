import { chromium } from '@playwright/test'
import fs from 'node:fs/promises'
const origin = process.env.PREVIEW_URL || 'http://127.0.0.1:4173'
const brandWordmark = (
  await fs.readFile(
    new URL('../src/assets/brand/pixeltech-wordmark.png', import.meta.url),
  )
).toString('base64')
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
    if (input === 'social-card.svg') {
      await page.evaluate(async (base64) => {
        const group = document.getElementById('social-brand')
        const ns = 'http://www.w3.org/2000/svg'
        group.replaceChildren()
        const frame = document.createElementNS(ns, 'svg')
        for (const [name, value] of Object.entries({
          x: '70',
          y: '70',
          width: '310',
          height: '66',
          viewBox: '238 182 1696 359',
        }))
          frame.setAttribute(name, value)
        const image = document.createElementNS(ns, 'image')
        image.setAttribute('width', '2172')
        image.setAttribute('height', '724')
        const loaded = new Promise((resolve) =>
          image.addEventListener('load', resolve, { once: true }),
        )
        image.setAttribute('href', `data:image/png;base64,${base64}`)
        frame.append(image)
        group.append(frame)
        await loaded
      }, brandWordmark)
    }
    await page.screenshot({ path: `public/${output}` })
    console.log(`Rendered ${output}`)
  }
} finally {
  await browser.close()
}
