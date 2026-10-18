import { test, expect } from '@playwright/test'
test('consulting home presents projects, a real leader and clear demo claims', async ({
  page,
}) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Tu negocio avanza',
  )
  await expect(page.locator('#proyectos article')).toHaveCount(3)
  const profile = page.getByRole('img', {
    name: 'Diego Arévalo, líder técnico de PixelTech',
  })
  await profile.scrollIntoViewIfNeeded()
  await expect
    .poll(() =>
      profile.evaluate((image) => image.complete && image.naturalWidth > 0),
    )
    .toBe(true)
  await expect(
    page.locator('#lider a[href="https://linkedin.com/in/dmarevalo"]'),
  ).toBeVisible()
  await expect(page.locator('#lider')).toContainText(
    'no se presentan como clientes',
  )
  expect(errors).toEqual([])
})
for (const width of [360, 768, 1440]) {
  test(`layout fits viewport ${width}px and assets load`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 })
    for (const route of [
      '/',
      '/proyectos/inventario/',
      '/proyectos/reservas/',
      '/proyectos/pedidos/',
      '/ideas/',
      '/ideas/excel-o-sistema/',
      '/privacidad/',
    ]) {
      await page.goto(route)
      await page.locator('main').waitFor()
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth + 1,
        ),
        route,
      ).toBe(true)
      expect(
        await page
          .locator('img')
          .evaluateAll(
            (images) =>
              images.filter((image) => image.complete && !image.naturalWidth)
                .length,
          ),
        route,
      ).toBe(0)
    }
  })
}
test('mobile navigation opens, closes and supports Escape', async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const button = page.getByRole('button', { name: 'Abrir menú' })
  await button.click()
  await expect(
    page.getByRole('navigation', { name: 'Navegación móvil' }),
  ).toBeVisible()
  await page.keyboard.press('Escape')
  await expect(button).toBeFocused()
  await button.click()
  await page
    .getByRole('navigation', { name: 'Navegación móvil' })
    .getByRole('link', { name: 'Proyectos' })
    .click()
  await expect(page).toHaveURL(/#proyectos$/)
  await expect(
    page.getByRole('navigation', { name: 'Navegación móvil' }),
  ).toHaveCount(0)
})
test('inventory movement persists on reload, prevents overselling and resets', async ({
  page,
}) => {
  await page.goto('/proyectos/inventario/')
  await page.getByLabel('Cantidad', { exact: true }).fill('4')
  await page
    .getByRole('button', { name: 'Registrar movimiento', exact: true })
    .click()
  await expect(page.getByTestId('stock-PRD-001')).toHaveText('28')
  await page.reload()
  await expect(page.getByTestId('stock-PRD-001')).toHaveText('28')
  await page.getByLabel('Tipo de movimiento').selectOption('salida')
  await page.getByLabel('Cantidad', { exact: true }).fill('29')
  await page
    .getByRole('button', { name: 'Registrar movimiento', exact: true })
    .click()
  await expect(page.getByRole('alert')).toContainText('No hay suficientes')
  await page.getByLabel('Solo stock bajo').check()
  await expect(page.locator('tbody tr')).toHaveCount(2)
  await page.getByRole('button', { name: 'Restablecer demo' }).click()
  await expect(page.getByTestId('stock-PRD-001')).toHaveText('24')
})
test('reservation consumes availability and cancellation releases it', async ({
  page,
}) => {
  await page.goto('/proyectos/reservas/')
  await page.getByRole('button', { name: '09:00', exact: true }).click()
  await page.getByRole('button', { name: 'Confirmar reserva' }).click()
  await expect(
    page.getByRole('button', { name: '09:00, no disponible' }),
  ).toBeDisabled()
  await expect(page.getByRole('status')).toContainText('Reserva confirmada')
  await page
    .getByRole('button', { name: 'Cancelar reserva de las 09:00' })
    .click()
  await expect(
    page.getByRole('button', { name: '09:00', exact: true }),
  ).toBeEnabled()
})

test('invalid saved demo data falls back to a working initial scenario', async ({
  page,
}) => {
  const errors = []
  page.on('pageerror', (error) => errors.push(error.message))
  await page.goto('/')
  await page.evaluate(() => {
    sessionStorage.setItem(
      'pixeltech:demo:v1:inventario',
      JSON.stringify({ products: [null], history: [{}] }),
    )
    sessionStorage.setItem('pixeltech:demo:v1:reservas', '{invalid')
    sessionStorage.setItem('pixeltech:demo:v1:pedidos', JSON.stringify([null]))
  })
  for (const project of ['inventario', 'reservas', 'pedidos']) {
    await page.goto(`/proyectos/${project}/`)
    await expect(page.locator(`[data-demo="${project}"]`)).toBeVisible()
  }
  expect(errors).toEqual([])
})
test('orders move through the workflow and retain their history', async ({
  page,
}) => {
  await page.goto('/proyectos/pedidos/')
  for (const state of ['En preparación', 'Listo', 'Entregado'])
    await page.getByRole('button', { name: `Pasar a ${state}` }).click()
  await expect(
    page.getByRole('button', { name: 'Pedido entregado', exact: true }),
  ).toBeDisabled()
  await expect(page.locator('.demo-order-history li')).toHaveCount(4)
  await page.reload()
  await expect(
    page.getByRole('button', { name: 'Pedido entregado', exact: true }),
  ).toBeDisabled()
})
test('failed contact can be retried without losing text and only accepted delivery emits conversion', async ({
  page,
}) => {
  await page.goto('/')
  await page.evaluate(() => {
    window.__events = []
    window.addEventListener('pixeltech:analytics', (event) =>
      window.__events.push(event.detail),
    )
  })
  await page.route('**/api/send-email', (route) =>
    route.fulfill({
      status: 502,
      contentType: 'application/json',
      body: JSON.stringify({ error: 'Delivery unavailable' }),
    }),
  )
  await page
    .getByLabel('Tu nombre', { exact: true })
    .fill('Prueba de formulario')
  await page.getByLabel('Correo de contacto').fill('demo@example.com')
  await page
    .getByLabel('¿Qué te gustaría resolver?')
    .fill('Necesitamos ordenar el inventario y los pedidos.')
  await page
    .getByRole('button', { name: 'Solicitar diagnóstico de 20 minutos' })
    .click()
  await expect(page.getByRole('alert')).toContainText('No se pudo enviar')
  await expect(page.getByLabel('Tu nombre', { exact: true })).toHaveValue(
    'Prueba de formulario',
  )
  expect(
    await page.evaluate(() =>
      window.__events.some((e) => e.name === 'lead_submitted'),
    ),
  ).toBe(false)
  await page.route('**/api/send-email', (route) =>
    route.fulfill({
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify({ success: true }),
    }),
  )
  await page
    .getByRole('button', { name: 'Solicitar diagnóstico de 20 minutos' })
    .click()
  await expect(page.getByRole('status')).toContainText('Tu mensaje llegó')
  const events = await page.evaluate(() => window.__events)
  expect(events.some((e) => e.name === 'lead_submitted')).toBe(true)
  expect(JSON.stringify(events)).not.toMatch(
    /demo@example|Prueba de formulario|inventario y los pedidos/,
  )
})
test('legacy support link routes to the dedicated page', async ({ page }) => {
  await page.goto('/?view=soporte')
  await expect(page).toHaveURL('/soporte/')
  await expect(page).toHaveTitle(/Soporte técnico en Huacho/)
  await page.goto('/?view=studio')
  await expect(page).toHaveURL('/')
  await expect(page).toHaveTitle(/Consultoría y software/)
})
