import { describe, expect, it, vi } from 'vitest'
import { handleContact } from './contact.js'
import { generateEmailHtml } from './emailTemplate.js'
const payload = {
  clientName: 'Persona de prueba',
  clientEmail: 'prueba@example.com',
  projectDesc: 'Necesito ordenar los pedidos de mi negocio.',
  solutionType: 'No sé qué solución necesito',
}
const response = () => ({
  code: null,
  data: null,
  setHeader: vi.fn(),
  status(code) {
    this.code = code
    return this
  },
  json(data) {
    this.data = data
    return this
  },
})
describe('contact delivery', () => {
  it('does not report delivery success without a configured provider', async () => {
    const res = response()
    await handleContact({ method: 'POST', body: payload }, res, { env: {} })
    expect(res.code).toBe(503)
    expect(res.data.success).toBeUndefined()
  })
  it('validates field types and length before contacting the provider', async () => {
    const send = vi.fn()
    for (const body of [
      { ...payload, clientEmail: 'invalid' },
      { ...payload, clientName: {} },
      { ...payload, projectDesc: 'x'.repeat(3001) },
      { ...payload, clientEmail: 'prueba@example.com\nBcc:otra@example.com' },
    ]) {
      const res = response()
      await handleContact({ method: 'POST', body }, res, { send })
      expect(res.code).toBe(400)
    }
    expect(send).not.toHaveBeenCalled()
  })
  it('reports success only when the provider accepts the message', async () => {
    const send = vi
      .fn()
      .mockResolvedValue({ data: { id: 'test-delivery' }, error: null })
    const res = response()
    await handleContact({ method: 'POST', body: payload }, res, {
      send,
      env: {},
    })
    expect(res.code).toBe(200)
    expect(res.data).toEqual({ success: true })
    expect(send).toHaveBeenCalledWith(
      expect.objectContaining({
        replyTo: payload.clientEmail,
        to: ['dmarevalo-pixeltech@outlook.com'],
      }),
    )
  })
  it('propagates delivery failure without exposing provider errors', async () => {
    const res = response()
    await handleContact({ method: 'POST', body: payload }, res, {
      send: vi
        .fn()
        .mockResolvedValue({ error: { message: 'private-provider-details' } }),
    })
    expect(res.code).toBe(502)
    expect(JSON.stringify(res.data)).not.toContain('private-provider-details')
  })
  it('rejects unsupported methods and ignores honeypot submissions', async () => {
    const send = vi.fn()
    const res = response()
    await handleContact({ method: 'GET' }, res, { send })
    expect(res.code).toBe(405)
    await handleContact(
      { method: 'POST', body: { ...payload, website: 'spam' } },
      response(),
      { send },
    )
    expect(send).not.toHaveBeenCalled()
  })
  it('escapes every user-controlled value in email markup', () => {
    const html = generateEmailHtml({
      clientName: '<img src=x onerror=alert(1)>',
      clientEmail: 'a&b@example.com',
      projectDesc: '<script>unsafe</script>',
      solutionType: '"<b>',
    })
    expect(html).not.toContain('<script>')
    expect(html).not.toContain('<img')
    expect(html).toContain('&lt;script&gt;')
    expect(html).toContain('a&amp;b@example.com')
    expect(html).toContain('&quot;&lt;b&gt;')
  })
})
