export const inventorySeed = [
  {
    id: 'PRD-001',
    name: 'Cuaderno A5',
    category: 'Papelería',
    stock: 24,
    min: 10,
    price: 18,
  },
  {
    id: 'PRD-002',
    name: 'Taza de cerámica',
    category: 'Hogar',
    stock: 5,
    min: 8,
    price: 32,
  },
  {
    id: 'PRD-003',
    name: 'Bolsa de tela',
    category: 'Accesorios',
    stock: 18,
    min: 6,
    price: 25,
  },
  {
    id: 'PRD-004',
    name: 'Botella térmica',
    category: 'Accesorios',
    stock: 3,
    min: 5,
    price: 65,
  },
  {
    id: 'PRD-005',
    name: 'Set de lapiceros',
    category: 'Papelería',
    stock: 36,
    min: 12,
    price: 14,
  },
]
export function moveStock(products, productId, quantity, direction) {
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > 10000)
    throw new Error('Ingresa una cantidad entera entre 1 y 10 000.')
  if (!['entrada', 'salida'].includes(direction))
    throw new Error('Selecciona un tipo de movimiento válido.')
  const product = products.find((item) => item.id === productId)
  if (!product) throw new Error('Selecciona un producto.')
  if (direction === 'salida' && quantity > product.stock)
    throw new Error('No hay suficientes unidades para esta salida.')
  return products.map((item) =>
    item.id === productId
      ? {
          ...item,
          stock: item.stock + (direction === 'entrada' ? quantity : -quantity),
        }
      : item,
  )
}
export function localDate(date = new Date()) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`
}
export function tomorrow() {
  const date = new Date()
  date.setDate(date.getDate() + 1)
  return localDate(date)
}
export const slots = [
  '09:00',
  '10:00',
  '11:00',
  '12:00',
  '14:00',
  '15:00',
  '16:00',
  '17:00',
]
export const bookingServices = [
  'Asesoría inicial',
  'Sesión de seguimiento',
  'Revisión de proyecto',
]
export function reserveSlot(bookings, booking, now = new Date()) {
  if (
    !/^\d{4}-\d{2}-\d{2}$/.test(booking.date) ||
    !slots.includes(booking.time) ||
    !bookingServices.includes(booking.service)
  )
    throw new Error('Selecciona una fecha, un servicio y un horario válidos.')
  const date = new Date(`${booking.date}T${booking.time}:00`)
  if (
    !Number.isFinite(date.getTime()) ||
    localDate(date) !== booking.date ||
    date <= now
  )
    throw new Error('Elige un horario futuro.')
  if (
    bookings.some(
      (item) => item.date === booking.date && item.time === booking.time,
    )
  )
    throw new Error('Ese horario ya está reservado. Elige otro.')
  return [...bookings, booking]
}
export const orderStates = ['Recibido', 'En preparación', 'Listo', 'Entregado']
export const orderSeed = [
  {
    id: 'PED-1084',
    customer: 'Cliente demo A',
    status: 'Recibido',
    items: [
      { name: 'Cuaderno A5', quantity: 4, price: 18 },
      { name: 'Set de lapiceros', quantity: 2, price: 14 },
    ],
    history: ['Pedido recibido'],
  },
  {
    id: 'PED-1085',
    customer: 'Cliente demo B',
    status: 'En preparación',
    items: [{ name: 'Taza de cerámica', quantity: 6, price: 32 }],
    history: ['Pedido recibido', 'Preparación iniciada'],
  },
  {
    id: 'PED-1086',
    customer: 'Cliente demo C',
    status: 'Listo',
    items: [{ name: 'Bolsa de tela', quantity: 3, price: 25 }],
    history: ['Pedido recibido', 'Preparación iniciada', 'Listo para entregar'],
  },
]
export function advanceOrder(orders, id) {
  const order = orders.find((item) => item.id === id)
  if (!order) throw new Error('El pedido no existe.')
  const current = orderStates.indexOf(order.status)
  if (current < 0 || current === orderStates.length - 1)
    throw new Error('El pedido ya se entregó o su estado no es válido.')
  return orders.map((item) =>
    item.id === id
      ? {
          ...item,
          status: orderStates[current + 1],
          history: [
            ...item.history,
            `Estado actualizado: ${orderStates[current + 1]}`,
          ],
        }
      : item,
  )
}
export const money = (value) =>
  new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    maximumFractionDigits: 2,
  }).format(value)
