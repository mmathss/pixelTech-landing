import { Resend } from 'resend'
import { generateEmailHtml } from './emailTemplate.js'
import { validateContact } from './contactValidation.js'

export async function handleContact(req, res, options = {}) {
  res.setHeader('Cache-Control', 'no-store')
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Método no permitido.' })
  }
  const validated = validateContact(req.body)
  if (validated.spam) return res.status(200).json({ success: true })
  if (validated.error) return res.status(400).json({ error: validated.error })
  const env = options.env || process.env
  if (!env.RESEND_API_KEY && !options.send)
    return res.status(503).json({
      error:
        'El envío no está disponible. Puedes contactarnos por correo o WhatsApp.',
    })
  const { data } = validated
  try {
    const send =
      options.send ||
      ((message) => new Resend(env.RESEND_API_KEY).emails.send(message))
    const result = await send({
      from: env.FROM_EMAIL || 'PixelTech <onboarding@resend.dev>',
      to: [env.CONTACT_EMAIL || 'dmarevalo-pixeltech@outlook.com'],
      replyTo: data.clientEmail,
      subject: `[Diagnóstico PixelTech] ${data.clientName.replace(/[\r\n]/g, ' ')}`,
      html: generateEmailHtml(data),
    })
    if (result.error || !result.data?.id)
      return res.status(502).json({
        error:
          'No pudimos enviar tu consulta. Intenta nuevamente o usa el contacto directo.',
      })
    return res.status(200).json({ success: true })
  } catch {
    return res.status(502).json({
      error:
        'No pudimos enviar tu consulta. Intenta nuevamente o usa el contacto directo.',
    })
  }
}
export default handleContact
