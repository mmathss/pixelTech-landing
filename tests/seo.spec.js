import { test, expect } from '@playwright/test'
import { pages } from '../src/data/pages.js'
test('every published route includes distinct metadata and server-rendered content', async ({
  request,
}) => {
  for (const [path, meta] of Object.entries(pages)) {
    const response = await request.get(path === '/' ? '/' : `${path}/`)
    expect(response.ok()).toBe(true)
    const html = await response.text()
    expect(html).toContain(
      `<title>${meta.title.replaceAll('&', '&amp;')}</title>`,
    )
    expect(html).toContain('rel="canonical"')
    expect(html).toContain('<h1')
    expect(html).not.toContain('<div id="root"></div>')
    expect(html).not.toContain('lh3.googleusercontent.com')
  }
})
