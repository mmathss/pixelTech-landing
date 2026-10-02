export function generateEmailHtml({
  clientName,
  clientEmail,
  clientPhone,
  solutionType,
  urgency,
  projectDesc,
}) {
  const sanitizedDesc = projectDesc
    ? projectDesc.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/\n/g, '<br/>')
    : '<em>No se especificaron detalles adicionales.</em>'

  const cleanPhone = clientPhone ? clientPhone.replace(/[^0-9+]/g, '') : ''
  const whatsappUrl = cleanPhone
    ? `https://wa.me/${cleanPhone.replace('+', '')}?text=${encodeURIComponent(`Hola ${clientName}, te escribo desde PixelTech Studio respecto a tu solicitud de cotización.`)}`
    : null

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nueva Cotización - PixelTech Studio</title>
</head>
<body style="margin: 0; padding: 0; background-color: #e2e8f0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #e2e8f0; padding: 30px 10px;">
    <tr>
      <td align="center">
        <!-- Main Card -->
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width: 620px; background-color: #ffffff; border: 2px solid #0f172a; box-shadow: 6px 6px 0px #0f172a; text-align: left; overflow: hidden;">
          
          <!-- Header Banner (Neo-Brutalist Cyber Dark) -->
          <tr>
            <td style="background-color: #0c0d14; padding: 24px 28px; border-bottom: 2px solid #004bd6;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #38bdf8; letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 6px;">
                      &gt; PIXELTECH STUDIO // BRIEF_DE_PROYECTO
                    </div>
                    <h1 style="margin: 0; font-size: 22px; font-weight: 800; color: #ffffff; letter-spacing: -0.5px; text-transform: uppercase;">
                      Nueva Solicitud de Cotización
                    </h1>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 28px;">

              <!-- Key Info Table -->
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse: collapse; margin-bottom: 24px;">
                <tr>
                  <td style="padding: 10px 12px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; width: 140px; background-color: #f8fafc;">
                    Cliente / Empresa
                  </td>
                  <td style="padding: 10px 12px; font-size: 15px; font-weight: 700; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                    ${clientName}
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                    Correo de Contacto
                  </td>
                  <td style="padding: 10px 12px; font-size: 15px; font-weight: 600; border-bottom: 1px solid #e2e8f0;">
                    <a href="mailto:${clientEmail}" style="color: #004bd6; text-decoration: underline; font-weight: bold;">
                      ${clientEmail}
                    </a>
                  </td>
                </tr>
                ${
                  clientPhone
                    ? `
                <tr>
                  <td style="padding: 10px 12px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                    Teléfono / WhatsApp
                  </td>
                  <td style="padding: 10px 12px; font-size: 15px; font-weight: 600; color: #0f172a; border-bottom: 1px solid #e2e8f0;">
                    ${clientPhone}
                  </td>
                </tr>
                `
                    : ''
                }
                <tr>
                  <td style="padding: 10px 12px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; border-bottom: 1px solid #e2e8f0; background-color: #f8fafc;">
                    Solución Solicitada
                  </td>
                  <td style="padding: 10px 12px; font-size: 14px; font-weight: 700; color: #0369a1; border-bottom: 1px solid #e2e8f0;">
                    <span style="display: inline-block; background-color: #e0f2fe; color: #0369a1; padding: 4px 10px; border: 1px solid #bae6fd; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold;">
                      ${solutionType || 'Desarrollo de Software'}
                    </span>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 10px 12px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; color: #64748b; text-transform: uppercase; background-color: #f8fafc;">
                    Plazo Estimado
                  </td>
                  <td style="padding: 10px 12px; font-size: 14px; font-weight: 600; color: #334155;">
                    ${urgency || 'Plazo regular'}
                  </td>
                </tr>
              </table>

              <!-- Project Description Block -->
              <div style="margin-bottom: 26px;">
                <div style="font-family: 'Courier New', Courier, monospace; font-size: 11px; font-weight: bold; color: #0f172a; text-transform: uppercase; margin-bottom: 8px;">
                  &gt; DETALLE DEL REQUERIMIENTO TÉCNICO:
                </div>
                <div style="background-color: #f8fafc; border: 2px solid #cbd5e1; border-left: 5px solid #004bd6; padding: 16px 18px; font-size: 14px; line-height: 1.6; color: #1e293b;">
                  ${sanitizedDesc}
                </div>
              </div>

              <!-- Quick Action Buttons -->
              <table role="presentation" cellspacing="0" cellpadding="0" border="0" style="margin-top: 10px; margin-bottom: 10px;">
                <tr>
                  <td style="padding-right: 12px;">
                    <a href="mailto:${clientEmail}?subject=${encodeURIComponent(`Respuesta Cotización - PixelTech Studio: ${solutionType}`)}" 
                       style="display: inline-block; background-color: #004bd6; color: #ffffff; text-decoration: none; padding: 12px 20px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; border: 2px solid #000000; box-shadow: 3px 3px 0px #000000;">
                      ✉️ Responder por Correo
                    </a>
                  </td>
                  ${
                    whatsappUrl
                      ? `
                  <td>
                    <a href="${whatsappUrl}" target="_blank"
                       style="display: inline-block; background-color: #16a34a; color: #ffffff; text-decoration: none; padding: 12px 20px; font-family: 'Courier New', Courier, monospace; font-size: 12px; font-weight: bold; text-transform: uppercase; border: 2px solid #000000; box-shadow: 3px 3px 0px #000000;">
                      💬 Abrir WhatsApp
                    </a>
                  </td>
                  `
                      : ''
                  }
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f1f5f9; padding: 16px 28px; border-top: 2px solid #0f172a; font-family: 'Courier New', Courier, monospace; font-size: 11px; color: #64748b; line-height: 1.5;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
                <tr>
                  <td>
                    <div><strong>PIXELTECH STUDIO</strong> &bull; dmarevalo-pixeltech@outlook.com</div>
                    <div style="color: #94a3b8; font-size: 10px; margin-top: 4px;">Este correo se generó automáticamente desde el formulario web de pixeltech.pe</div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}
