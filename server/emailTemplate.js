import { escapeHtml } from './contactValidation.js'
export function generateEmailHtml({
  clientName,
  clientEmail,
  projectDesc,
  solutionType,
}) {
  return `<!doctype html><html lang="es"><head><meta charset="utf-8"><title>Solicitud de diagnóstico</title></head><body style="background:#f0f1eb;font-family:Arial,sans-serif;color:#171b25;padding:24px"><main style="max-width:620px;margin:auto;background:white;border:2px solid #171b25"><header style="padding:24px;background:#004bd6;color:white"><small>PIXELTECH / NUEVA CONVERSACIÓN</small><h1 style="font-size:24px">Solicitud de diagnóstico inicial</h1></header><div style="padding:24px"><p><strong>Nombre:</strong> ${escapeHtml(clientName)}</p><p><strong>Correo:</strong> ${escapeHtml(clientEmail)}</p><p><strong>Contexto:</strong> ${escapeHtml(solutionType || 'No especificado')}</p><h2 style="font-size:17px">Qué necesita resolver</h2><p style="white-space:pre-wrap;line-height:1.7">${escapeHtml(projectDesc)}</p><hr><p style="font-size:12px;color:#515660">Responder a este mensaje contacta al correo indicado. Consulta enviada desde el formulario de PixelTech.</p></div></main></body></html>`
}
