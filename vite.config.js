import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import { handleContact } from './server/contact.js'
import { pages, resolvePath } from './src/data/pages.js'
import { applyMetadata } from './scripts/metadata.js'
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      react(),
      {
        name: 'pixeltech-pages-and-contact',
        transformIndexHtml: {
          order: 'pre',
          handler(html, ctx) {
            return applyMetadata(
              html,
              resolvePath(ctx.originalUrl || '/'),
              pages,
              env.VITE_SITE_URL,
            )
          },
        },
        configureServer(server) {
          server.middlewares.use('/api/send-email', (req, res) => {
            let body = ''
            let tooLarge = false
            req.on('data', (chunk) => {
              if (tooLarge) return
              body += chunk
              if (Buffer.byteLength(body) > 16000) {
                tooLarge = true
                res.statusCode = 413
                res.end(
                  JSON.stringify({ error: 'Solicitud demasiado grande.' }),
                )
              }
            })
            req.on('end', async () => {
              if (tooLarge) return
              res.setHeader('Content-Type', 'application/json')
              const adapter = {
                setHeader: (...args) => res.setHeader(...args),
                status(code) {
                  res.statusCode = code
                  return this
                },
                json(data) {
                  res.end(JSON.stringify(data))
                  return this
                },
              }
              try {
                req.body = JSON.parse(body || '{}')
              } catch {
                return adapter
                  .status(400)
                  .json({ error: 'Solicitud no válida.' })
              }
              await handleContact(req, adapter, {
                env: { ...process.env, ...env },
              })
            })
          })
        },
      },
    ],
    test: { include: ['src/**/*.test.js', 'server/**/*.test.js'] },
  }
})
