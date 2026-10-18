import { test, expect } from '@playwright/test'

test('support guides visitors from symptoms to service quotes and clear conditions', async ({
  page,
}) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/soporte/')
  await expect(page).toHaveTitle('PixelTech | Soporte técnico en Huacho')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Vamos a revisarlo',
  )
  const symptom = page.locator('.sp-symptom').filter({ hasText: 'Se calienta' })
  const symptomUrl = new URL(await symptom.getAttribute('href'))
  expect(symptomUrl.hostname).toBe('wa.me')
  expect(symptomUrl.searchParams.get('text')).toContain('Se calienta')
  await expect(page.locator('.sp-service-grid .sp-service')).toHaveCount(3)
  await page.locator('.sp-more-services summary').click()
  await expect(page.locator('.sp-extra-services .sp-service')).toHaveCount(5)
  for (const link of await page.locator('.sp-service-link').all()) {
    const url = new URL(await link.getAttribute('href'))
    expect(url.hostname).toBe('wa.me')
    expect(url.searchParams.get('text')).toContain(
      'alcance, costo y disponibilidad',
    )
  }
  await expect(page.locator('.sp-process li')).toHaveCount(4)
  await expect(page.locator('.sp-record')).toContainText('MODELO ILUSTRATIVO')
  const question = page.getByText('¿Cuánto cuesta el diagnóstico?', {
    exact: true,
  })
  await question.click()
  await expect(page.locator('.sp-faq details').first()).toHaveAttribute(
    'open',
    '',
  )
  await expect(page.locator('.sp-faq details').first()).toContainText(
    'antes de recibir el equipo',
  )
  expect(errors).toEqual([])
})

test('support prepares the WhatsApp message without claiming a sent request', async ({
  page,
}) => {
  await page.goto('/soporte/')
  await page.evaluate(() => {
    window.__supportOpened = []
    window.open = (...args) => {
      window.__supportOpened.push(args)
      return null
    }
  })
  await expect(page.getByLabel('¿Qué necesitas?')).toHaveValue(
    'No sé qué servicio necesito',
  )
  await page.getByRole('button', { name: 'Abrir consulta en WhatsApp' }).click()
  expect(await page.evaluate(() => window.__supportOpened)).toHaveLength(0)
  await page.getByLabel('Tu nombre').fill('Ana Pérez')
  await page.getByLabel('Tipo de equipo').selectOption('Laptop')
  await page
    .getByLabel('¿Qué problema presenta?')
    .fill('Se apaga después de diez minutos.')
  await page.getByRole('button', { name: 'Abrir consulta en WhatsApp' }).click()
  const [args] = await page.evaluate(() => window.__supportOpened)
  const url = new URL(args[0])
  expect(url.hostname).toBe('wa.me')
  expect(url.searchParams.get('text')).toContain('Ana Pérez')
  expect(url.searchParams.get('text')).toContain(
    'Se apaga después de diez minutos.',
  )
  expect(args[2]).toBe('noopener,noreferrer')
  await expect(page.getByRole('status')).toContainText('envíalo allí')
  await expect(
    page.getByRole('link', { name: 'Abrir WhatsApp con mi consulta' }),
  ).toHaveAttribute('href', args[0])
  await expect(page.getByLabel('Tu nombre')).toHaveValue('Ana Pérez')
})

for (const width of [360, 768, 1440]) {
  test(`support fits at ${width}px and mobile navigation handles keyboard`, async ({
    page,
  }) => {
    await page.setViewportSize({ width, height: 900 })
    await page.goto('/soporte/')
    if (width < 1100) {
      const toggle = page.getByRole('button', { name: 'Abrir menú de soporte' })
      await toggle.click()
      await expect(
        page.getByRole('navigation', { name: 'Navegación móvil de soporte' }),
      ).toBeVisible()
      await page.keyboard.press('Escape')
      await expect(toggle).toBeFocused()
      await toggle.click()
      await page
        .getByRole('navigation', { name: 'Navegación móvil de soporte' })
        .getByRole('link', { name: 'Servicios', exact: true })
        .click()
      await expect(page).toHaveURL(/#servicios$/)
      await expect(toggle).toHaveAttribute('aria-expanded', 'false')
    }
    await page.locator('.sp-more-services summary').click()
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= window.innerWidth,
      ),
    ).toBe(true)
    await page.locator('#contacto').scrollIntoViewIfNeeded()
    await expect(
      page.getByRole('button', { name: 'Abrir consulta en WhatsApp' }),
    ).toBeVisible()
  })
}

test('support content and questions work without JavaScript and respect reduced motion', async ({
  browser,
}) => {
  for (const options of [
    { javaScriptEnabled: false },
    { reducedMotion: 'reduce' },
  ]) {
    const context = await browser.newContext(options)
    try {
      const page = await context.newPage()
      await page.goto('http://127.0.0.1:4175/soporte/')
      await expect(page.getByRole('heading', { level: 1 })).toBeVisible()
      await page.locator('.sp-more-services summary').click()
      await expect(
        page.locator('.sp-extra-services .sp-service').first(),
      ).toBeVisible()
      await page
        .getByText('¿Mis archivos se conservan?', { exact: true })
        .click()
      await expect(page.locator('.sp-faq details[open]')).toContainText(
        'no se promete rescatar todos los datos',
      )
      if (options.reducedMotion)
        await expect(page.locator('.sp-scan-line')).toHaveCSS(
          'animation-name',
          'none',
        )
      if (options.javaScriptEnabled === false) {
        await page.locator('#contacto').scrollIntoViewIfNeeded()
        await expect(page.locator('.sp-contact-form-fallback')).toBeVisible()
        await expect(page.locator('.sp-contact-form')).toBeHidden()
      }
      await expect(
        page.locator('.sp-contact-info .sp-inline-link'),
      ).toHaveAttribute('href', /^https:\/\/wa.me\//)
    } finally {
      await context.close()
    }
  }
})
