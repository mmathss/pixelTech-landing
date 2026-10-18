import { track } from '@vercel/analytics'
const allowedEvents = new Set([
  'diagnostic_click',
  'whatsapp_click',
  'project_open',
  'demo_action',
  'source_click',
  'lead_submitted',
  'lead_error',
  'article_open',
])
export function trackEvent(name, properties = {}) {
  if (!allowedEvents.has(name)) return
  const safe = Object.fromEntries(
    Object.entries(properties).filter(
      ([key, value]) =>
        ['project', 'action', 'placement', 'article'].includes(key) &&
        typeof value === 'string' &&
        value.length <= 60,
    ),
  )
  track(name, safe)
  window.dispatchEvent(
    new CustomEvent('pixeltech:analytics', {
      detail: { name, properties: safe },
    }),
  )
}
