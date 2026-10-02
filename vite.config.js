import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { Resend } from 'resend'
import { generateEmailHtml } from './api/emailTemplate.js'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [
      react(),
      {
        name: 'local-api-send-email-middleware',
        configureServer(server) {
          server.middlewares.use('/api/send-email', async (req, res) => {
            if (req.method !== 'POST') {
              res.statusCode = 405
              res.setHeader('Content-Type', 'application/json')
              res.end(JSON.stringify({ error: 'Method not allowed' }))
              return
            }

            let body = ''
            req.on('data', (chunk) => {
              body += chunk
            })
            req.on('end', async () => {
              try {
                const data = JSON.parse(body || '{}')
                const apiKey = env.RESEND_API_KEY || process.env.RESEND_API_KEY

                if (!apiKey) {
                  console.log('\n[Vite Dev Mock] Solicitud recibida en desarrollo local:')
                  console.log(data)
                  console.log(
                    '[Vite Dev Mock] RESEND_API_KEY no detectada en .env local. Simulando respuesta exitosa...\n'
                  )
                  res.setHeader('Content-Type', 'application/json')
                  res.statusCode = 200
                  res.end(JSON.stringify({ success: true, mocked: true }))
                  return
                }

                const resend = new Resend(apiKey)
                const htmlContent = generateEmailHtml(data)

                const result = await resend.emails.send({
                  from: 'PixelTech Studio <onboarding@resend.dev>',
                  to: ['dmarevalo-pixeltech@outlook.com'],
                  replyTo: data.clientEmail,
                  subject: `[Cotización Studio] ${data.solutionType || 'Software'} - ${data.clientName}`,
                  html: htmlContent,
                })

                res.setHeader('Content-Type', 'application/json')
                res.statusCode = 200
                res.end(JSON.stringify(result))
              } catch (err) {
                res.setHeader('Content-Type', 'application/json')
                res.statusCode = 500
                res.end(JSON.stringify({ error: err.message }))
              }
            })
          })
        },
      },
    ],
  }
})
