import { describe, expect, it } from 'vitest'
import {
  advanceOrder,
  inventorySeed,
  moveStock,
  orderSeed,
  reserveSlot,
} from './model'
describe('inventory', () => {
  it('applies entries and exits without mutating the original inventory', () => {
    const increased = moveStock(inventorySeed, 'PRD-001', 5, 'entrada')
    expect(increased[0].stock).toBe(29)
    expect(inventorySeed[0].stock).toBe(24)
    expect(moveStock(increased, 'PRD-001', 29, 'salida')[0].stock).toBe(0)
  })
  it('prevents negative inventory and malformed movements', () => {
    expect(() => moveStock(inventorySeed, 'PRD-002', 6, 'salida')).toThrow(
      'suficientes',
    )
    for (const qty of [-1, 0, 1.5, NaN, Infinity])
      expect(() =>
        moveStock(inventorySeed, 'PRD-001', qty, 'entrada'),
      ).toThrow()
    expect(() => moveStock(inventorySeed, 'missing', 1, 'entrada')).toThrow()
  })
})
describe('reservations', () => {
  const now = new Date('2030-01-01T08:00:00')
  const booking = {
    id: 'test',
    date: '2030-01-02',
    time: '09:00',
    service: 'Asesoría inicial',
  }
  it('prevents double booking across different services', () => {
    const bookings = reserveSlot([], booking, now)
    expect(() =>
      reserveSlot(
        bookings,
        { ...booking, service: 'Revisión de proyecto' },
        now,
      ),
    ).toThrow('ya está reservado')
    expect(
      reserveSlot(bookings, { ...booking, time: '10:00' }, now),
    ).toHaveLength(2)
  })
  it('rejects past dates, impossible dates and invalid slots', () => {
    for (const invalid of [
      { ...booking, date: '2029-12-31' },
      { ...booking, date: '2030-02-31' },
      { ...booking, time: '03:00' },
    ])
      expect(() => reserveSlot([], invalid, now)).toThrow()
  })
})
describe('orders', () => {
  it('advances sequentially, records progress, and protects the terminal state', () => {
    let orders = orderSeed
    for (const expected of ['En preparación', 'Listo', 'Entregado']) {
      orders = advanceOrder(orders, 'PED-1084')
      expect(orders[0].status).toBe(expected)
    }
    expect(orders[0].history).toHaveLength(4)
    expect(orderSeed[0].status).toBe('Recibido')
    expect(() => advanceOrder(orders, 'PED-1084')).toThrow('entregó')
  })
})
