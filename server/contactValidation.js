export function validateContact(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body))
    return { error: 'Solicitud no válida.' }
  const fields = [
    'clientName',
    'clientEmail',
    'projectDesc',
    'solutionType',
    'website',
  ]
  if (
    fields.some(
      (key) => body[key] !== undefined && typeof body[key] !== 'string',
    )
  )
    return { error: 'Los campos deben ser texto.' }
  if (body.website?.trim()) return { spam: true }
  const data = Object.fromEntries(
    fields.map((key) => [key, (body[key] || '').trim()]),
  )
  if (data.clientName.length < 2 || data.clientName.length > 100)
    return { error: 'Indica un nombre de entre 2 y 100 caracteres.' }
  if (
    data.clientEmail.length > 254 ||
    !/^[^\s<>"@]+@[^\s<>"@]+\.[^\s<>"@]+$/.test(data.clientEmail)
  )
    return { error: 'Indica un correo válido.' }
  if (data.projectDesc.length < 10 || data.projectDesc.length > 3000)
    return { error: 'Describe tu consulta en entre 10 y 3000 caracteres.' }
  if (data.solutionType.length > 100)
    return { error: 'La selección no es válida.' }
  return { data }
}
export const escapeHtml = (value) =>
  String(value ?? '').replace(
    /[&<>"']/g,
    (character) =>
      ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[
        character
      ],
  )
