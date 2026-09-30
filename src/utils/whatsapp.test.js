import { describe, it, expect } from 'vitest'
import { buildWhatsAppUrl } from './whatsapp'

describe('buildWhatsAppUrl', () => {
  it('encodes all fields into wa.me URL', () => {
    const url = buildWhatsAppUrl({
      nombre: 'Juan Pérez',
      tipo: 'Laptop/Notebook',
      servicio: 'Formateo',
      descripcion: 'No enciende',
    })
    expect(url).toContain('https://wa.me/51937718698')
    expect(url).toContain('Juan')
    expect(url).toContain('Laptop')
    expect(url).toContain('Formateo')
    expect(decodeURIComponent(url)).toContain('No enciende')
  })

  it('returns base URL when all fields empty', () => {
    const url = buildWhatsAppUrl({ nombre: '', tipo: '', servicio: '', descripcion: '' })
    expect(url).toBe('https://wa.me/51937718698')
  })
})
