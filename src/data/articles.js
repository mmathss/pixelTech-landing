export const articles = [
  {
    id: 'excel-o-sistema',
    title: '¿Tu Excel necesita orden o necesitas un sistema?',
    category: 'Decisiones de tecnología',
    project: 'inventario',
    intro:
      'Una hoja de cálculo puede ser una buena herramienta. El punto de cambio aparece cuando sus límites afectan una operación que varias personas necesitan compartir.',
    sections: [
      [
        'Empieza por el proceso',
        'Anota qué información se registra, quién la modifica y qué decisiones dependen de ella. Si cada persona usa su propia copia, el problema puede estar en cómo se comparte el trabajo, no en Excel por sí solo.',
      ],
      [
        'Busca señales concretas',
        'Versiones contradictorias, fórmulas que solo entiende una persona, permisos difíciles de controlar o movimientos sin historial son señales para revisar la herramienta. Registra ejemplos reales antes de elegir una solución.',
      ],
      [
        'Compara tres caminos',
        'Puedes ordenar una hoja compartida, adoptar una herramienta existente o desarrollar un sistema. Compara costo de adopción, funciones, integraciones, permisos y mantenimiento; no solo el precio inicial.',
      ],
      [
        'Prueba un flujo pequeño',
        'Antes de migrar toda la operación, valida un recorrido: consultar un producto, registrar una salida y detectar una reposición. La demo de inventario muestra ese flujo con datos ficticios.',
      ],
    ],
  },
  {
    id: 'reservas-sin-cruces',
    title: 'Qué definir antes de digitalizar tus reservas',
    category: 'Operación de servicios',
    project: 'reservas',
    intro:
      'Una agenda digital necesita representar las reglas de tu negocio. Empezar por esas reglas permite evaluar herramientas y construir un flujo que tu equipo pueda usar.',
    sections: [
      [
        'Define la unidad de disponibilidad',
        '¿Se reserva a una persona, un ambiente o ambos? Define duración, descansos, anticipación y capacidad. Una agenda de un solo profesional no tiene las mismas reglas que varios ambientes en paralelo.',
      ],
      [
        'Aclara cambios y cancelaciones',
        'Decide quién puede reprogramar, hasta cuándo y cómo se comunica. El historial de una reserva debería permitir entender qué cambió y quién debe enterarse.',
      ],
      [
        'Separa lo esencial de las integraciones',
        'Primero valida seleccionar servicio, consultar disponibilidad y reservar sin duplicar el horario. Pagos, recordatorios y calendarios externos añaden costos y requisitos que conviene estimar aparte.',
      ],
      [
        'Haz una prueba con tu equipo',
        'Recorre situaciones frecuentes y excepciones antes de contratar. Nuestra demo usa sesiones de una hora y una sola agenda para mostrar el flujo, sin crear citas reales.',
      ],
    ],
  },
  {
    id: 'pedidos-con-seguimiento',
    title: 'Cómo dar seguimiento a pedidos sin perder el contexto',
    category: 'Procesos y atención',
    project: 'pedidos',
    intro:
      'Un tablero ayuda cuando todos comparten el significado de cada estado. Empieza por acordar qué debe pasar antes de que un pedido avance.',
    sections: [
      [
        'Usa estados que impliquen una acción',
        'Recibido, en preparación, listo y entregado pueden ser suficientes para una primera versión. Cada estado debe tener una condición de entrada y una persona responsable del siguiente paso.',
      ],
      [
        'Conserva el detalle junto al estado',
        'Productos, cantidades y cambios deben acompañar al pedido. Si el equipo necesita revisar varios chats para entenderlo, el tablero todavía no concentra el contexto necesario.',
      ],
      [
        'Distingue tablero interno y portal de clientes',
        'Una herramienta interna puede ser el primer paso. Dar acceso a clientes requiere autenticación, permisos y cuidado de qué información se expone. No es solo publicar el mismo tablero.',
      ],
      [
        'Conecta después de validar',
        'Las notificaciones y la facturación pueden integrarse cuando el flujo ya está claro. Explora el tablero de demostración para revisar un pedido y avanzar sus etapas, sin cobros ni envíos reales.',
      ],
    ],
  },
]
