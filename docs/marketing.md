# Captación y seguimiento de PixelTech

## Público inicial

Negocios de comercio y servicios con inventario, reservas o pedidos distribuidos entre hojas de cálculo y mensajes. Esta es una hipótesis de enfoque, no una afirmación sobre clientes existentes. Ajustarla con las conversaciones reales que reciba Diego.

## Oferta de entrada

Conversación inicial de 20 minutos sin costo. Entender contexto, problema y próximo paso. No se presenta como auditoría completa ni compromiso de resolver el caso en la llamada. Un diagnóstico profundo tiene propuesta propia.

## Contenido ya incluido

| Guía                    | Problema                                     | Demo       | Siguiente paso |
| ----------------------- | -------------------------------------------- | ---------- | -------------- |
| Excel o sistema         | Stock distribuido, movimientos sin historial | Inventario | Diagnóstico    |
| Reservas sin cruces     | Reglas de agenda y disponibilidad            | Reservas   | Diagnóstico    |
| Pedidos con seguimiento | Estado y contexto dispersos                  | Pedidos    | Diagnóstico    |

Cada guía incluye criterios de decisión y un enlace a una demostración identificada como propia. Para compartir: publicar una captura o recorrido corto, explicar una sola decisión y enlazar a la guía o demo. No afirmar ahorros, ventas o experiencia con clientes sin medición o autorización.

## Secuencia sugerida de publicación

1. Presentar a Diego, el problema que busca resolver PixelTech y la primera demo.
2. Mostrar un recorrido de inventario: consulta, movimiento y reposición. Compartir la guía de Excel.
3. Mostrar cómo una reserva ocupa un horario y cómo se libera al cancelar. Compartir las reglas antes de digitalizar.
4. Mostrar cómo un pedido conserva su detalle al cambiar de estado. Compartir la guía de seguimiento.
5. Explicar una decisión técnica en GitHub y su consecuencia para el negocio en LinkedIn.

Estos materiales están preparados en el repositorio. No se han publicado mensajes ni contactado a terceros.

## Eventos instrumentados

| Evento             | Qué mide                           | Propiedades permitidas |
| ------------------ | ---------------------------------- | ---------------------- |
| `diagnostic_click` | Interés en iniciar conversación    | placement              |
| `whatsapp_click`   | Salida hacia WhatsApp              | placement              |
| `project_open`     | Acceso a una demo                  | project, placement     |
| `demo_action`      | Interacción útil dentro de la demo | project, action        |
| `source_click`     | Interés en código y documentación  | project                |
| `article_open`     | Lectura desde el listado de ideas  | article                |
| `lead_submitted`   | Proveedor aceptó el correo         | placement              |
| `lead_error`       | Falló el envío                     | placement              |

No se considera que hacer clic en WhatsApp sea una reunión ni que aceptar el correo sea una consulta calificada. Los eventos de visita y formularios deben contrastarse con el seguimiento comercial.

## Configuración externa pendiente

Vercel Analytics debe habilitarse en el panel del proyecto. Su componente está integrado; los eventos personalizados requieren un plan compatible. No se contrató ningún plan ni se modificaron cuentas externas. Un proveedor alternativo puede escuchar `pixeltech:analytics` e implementar el mismo catálogo de eventos. La activación y plan deben verificarse antes de usar los datos para decisiones.

## Seguimiento fuera de la web

Llevar un registro privado de consultas con fecha, fuente, problema, etapa y siguiente acción. Etapas: recibida → revisada → reunión coordinada → consulta calificada → propuesta enviada → aceptada / no continuó. No almacenar información de clientes en este repositorio público.

Una consulta se califica cuando hay un problema concreto, encaje con la oferta y disposición para acordar un próximo paso. Medir reuniones realizadas y propuestas aceptadas con el registro comercial; la web no puede observarlas por sí sola.

Revisar periódicamente qué demos generan conversaciones pertinentes, dónde falla el formulario y por qué las propuestas avanzan o se detienen. Cambiar mensaje y enfoque con evidencia; no convertir las métricas de ejemplo de las demos en resultados comerciales.
