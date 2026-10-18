# PixelTech — Consultoría y software

Landing de una consultoría nueva liderada por Diego Arévalo. Conserva la identidad retro de PixelTech, muestra proyectos propios verificables y separa soporte técnico de la oferta de software.

## Desarrollo

Requiere Node.js compatible con Vite 8 y npm.

```sh
npm install
npm run dev
npm test
npm run build
npm run test:e2e
```

Las pruebas de navegador usan Google Chrome instalado. `npm run build` compila cliente y renderizador, y genera HTML con contenido, metadatos, sitemap y robots.txt. `.prerender/` es un resultado temporal ignorado por Git. Para revisar producción: `npm run preview`.

## Rutas

| Ruta                     | Contenido                                                    |
| ------------------------ | ------------------------------------------------------------ |
| `/`                      | Consultoría, proyectos, oferta, proceso, líder y diagnóstico |
| `/soporte/`              | Soporte técnico en Huacho                                    |
| `/proyectos/inventario/` | Demo de stock y movimientos                                  |
| `/proyectos/reservas/`   | Demo de disponibilidad y citas                               |
| `/proyectos/pedidos/`    | Demo de seguimiento de pedidos                               |
| `/ideas/`                | Guías vinculadas a las demos                                 |
| `/privacidad/`           | Datos de consulta, demos y medición                          |

Se conservan enlaces antiguos `?view=studio`, `?view=hub`, `?view=soporte` y anclas de cotización/respaldo/FAQ. La sección “Nuestro equipo” está en `/#equipo`; los enlaces anteriores `#lider` y `#respaldo` se actualizan automáticamente a esa dirección.

## Personalización

- Datos de Diego y enlaces: `src/data/site.js`. Los enlaces de GitHub y LinkedIn se conservaron de la referencia original.
- Demos, alcances y rutas: `src/data/projects.js`. Nuvora destacado: `StudioFeaturedProject.jsx`.
- Guías originales de captación: `src/data/articles.js`.
- Metadatos: `src/data/pages.js` y `scripts/metadata.js`.
- Marca y responsive: `src/studio.css`; interfaces de producto: `src/demos.css`.
- Foto principal: `src/assets/studio/developer_profile.png`. Logos originales en `src/assets/brand/`; la navegación combina el símbolo optimizado con nombre y descriptor en HTML para mantener la nitidez. Los favicons SVG y PNG se generan desde ese mismo símbolo con `npm run assets:optimize`.
- Nuvora: proyecto destacado actualmente en desarrollo, con recursos originales en `src/assets/nuvora/`. No se presenta como demo funcional ni enlaza a repositorios privados. La demo básica de inventario permanece independiente en el laboratorio.
- Capturas y social cards: `npm run assets:previews` con un servidor en el puerto 4173. Ver [documentación de demos](src/components/demos/README.md).
- Exportaciones web: `npm run assets:optimize` usa Sharp para generar los WebP desde los originales, sin sobrescribirlos. El símbolo de Nuvora tiene variantes de 640 y 960 px (15–25 KiB), y empieza a descargarse antes de llegar a la sección. Los WebP se incluyen en el repositorio; no hace falta regenerarlos en cada compilación.
- Hero: `StudioProcessDiagram.jsx` presenta un recorrido de procesos con texto HTML y conexiones SVG. La animación se reproduce una vez al entrar en pantalla; con movimiento reducido o sin JavaScript, el diagrama permanece estático y legible.

## Correo

Copiar `.env.example` como configuración local y definir `RESEND_API_KEY`, `CONTACT_EMAIL` y `FROM_EMAIL`. No versionar secretos. En producción configurar las mismas variables en Vercel. El remitente debe estar autorizado por Resend; `onboarding@resend.dev` es un remitente de prueba con restricciones.

`/api/send-email` usa el mismo manejador en desarrollo y producción: valida nombre, correo, consulta y honeypot; escapa el contenido del correo y solo confirma éxito cuando Resend devuelve un identificador. Si falta configuración o el proveedor falla, el visitante conserva sus datos y dispone de correo y WhatsApp como alternativa. Las pruebas usan un proveedor simulado; no envían mensajes reales.

## Publicación y SEO

`dist/` contiene diez páginas prerenderizadas y `404.html`. Vercel ejecuta `npm run build` y sirve `dist/`, con funciones en `api/`. `vercel.json` conserva rutas con barra final. Si cambias de dominio, configurar `VITE_SITE_URL` y reconstruir. No se ha cambiado el dominio ni publicado estos cambios automáticamente.

El HTML de cada ruta incluye título, descripción, canonical, Open Graph y contenido visible antes de JavaScript. Los proyectos no exponen enlaces a repositorios privados; las demos enlazan a guías públicas dentro de la web. El perfil profesional de GitHub se mantiene como enlace de contacto.

## Analítica y seguimiento comercial

La integración de Vercel Web Analytics está instalada. Activar Web Analytics en el panel del proyecto y volver a desplegar. Los eventos personalizados requieren un plan compatible; ver [activación](https://vercel.com/docs/analytics/quickstart) y [eventos personalizados](https://vercel.com/docs/analytics/custom-events).

La aplicación emite además `pixeltech:analytics` como evento de navegador, útil para comprobar la instrumentación o conectar otro proveedor. El evento no constituye un almacenamiento persistente de métricas. No se recogen nombres, correos ni descripciones de consultas en eventos personalizados.

Ver [plan de captación y métricas](docs/marketing.md) y [seguimiento de los 34 puntos](docs/implementation-checklist.md).
