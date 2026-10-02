import { Resend } from 'resend'
import { generateEmailHtml } from './emailTemplate.js'

export default async function handler(req, res) {
  // Configuración de CORS por si es invocado cross-origin
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )

  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Método no permitido. Solo se acepta POST.' })
  }

  const apiKey = process.env.RESEND_API_KEY

  if (!apiKey) {
    return res.status(500).json({
      error: 'La variable de entorno RESEND_API_KEY no está configurada en Vercel.',
    })
  }

  try {
    const { clientName, clientEmail, clientPhone, solutionType, urgency, projectDesc } = req.body || {}

    if (!clientName || !clientEmail) {
      return res.status(400).json({ error: 'El nombre y correo electrónico son obligatorios.' })
    }

    const resend = new Resend(apiKey)

    const toEmail = process.env.CONTACT_EMAIL || 'dmarevalo-pixeltech@outlook.com'
    const fromEmail = process.env.FROM_EMAIL || 'PixelTech Studio <onboarding@resend.dev>'

    const htmlContent = generateEmailHtml({
      clientName,
      clientEmail,
      clientPhone,
      solutionType,
      urgency,
      projectDesc,
    })

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: clientEmail,
      subject: `[Cotización Studio] ${solutionType || 'Software'} - ${clientName}`,
      html: htmlContent,
    })

    if (error) {
      console.error('Error devuelto por Resend API:', error)
      return res.status(400).json({ error: error.message || 'Error al enviar mediante Resend.' })
    }

    return res.status(200).json({ success: true, id: data?.id })
  } catch (err) {
    console.error('Excepción en /api/send-email:', err)
    return res.status(500).json({ error: err.message || 'Error interno del servidor al procesar el correo.' })
  }
}
