const WA_NUMBER = '51937718698'
const WA_BASE = `https://wa.me/${WA_NUMBER}`

export function buildWhatsAppUrl({ nombre, tipo, servicio, descripcion }) {
  if (!nombre && !tipo && !servicio && !descripcion) return WA_BASE

  const message =
    `Hola PixelTech, mi nombre es ${nombre}.` +
    `\n\n*Tipo de Equipo:* ${tipo}` +
    `\n*Servicio solicitado:* ${servicio}` +
    `\n*Detalle del problema:* ${descripcion}` +
    `\n\nSolicito diagnóstico o cotización. ¡Gracias!`

  return `${WA_BASE}?text=${encodeURIComponent(message)}`
}
