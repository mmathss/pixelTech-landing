const WA_BASE = 'https://wa.me/51937718698'

export function buildWhatsAppUrl({ nombre, tipo, servicio, descripcion }) {
  const hasData = nombre || tipo || servicio || descripcion
  if (!hasData) return WA_BASE

  const lines = [
    'Hola PixelTech! Necesito soporte técnico.',
    nombre      ? `\nNombre: ${nombre}` : '',
    tipo        ? `\nEquipo: ${tipo}` : '',
    servicio    ? `\nServicio: ${servicio}` : '',
    descripcion ? `\nProblema: ${descripcion}` : '',
  ]

  return `${WA_BASE}?text=${encodeURIComponent(lines.join(''))}`
}
