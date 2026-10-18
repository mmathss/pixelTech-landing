// Published starting prices retained from the existing support offering.
// Storage upgrades and diagnosis require a quote; no hardware capacity or fee is assumed.
export const services = [
  {
    id: 'mantenimiento',
    title: 'Limpieza y mantenimiento',
    description:
      'Limpieza interna y cambio de pasta térmica para revisar problemas de temperatura y acumulación de polvo.',
    priceRef: 'Desde S/ 45',
    scope:
      'Servicio de limpieza y cambio de pasta térmica. Reparaciones y piezas adicionales se presupuestan aparte.',
    featured: true,
  },
  {
    id: 'diagnostico',
    title: 'Diagnóstico de hardware',
    description:
      'Revisión de equipos que no encienden, se apagan o presentan fallas que necesitan evaluación en taller.',
    priceRef: 'Consultar evaluación',
    scope:
      'Sin costo de diagnóstico si aceptas la reparación. Si no continúas, el importe se acuerda antes de recibir el equipo.',
    featured: true,
  },
  {
    id: 'mejora',
    title: 'Mejora con SSD y RAM',
    description:
      'Evaluación de compatibilidad para mejorar el almacenamiento o la memoria según el uso de tu equipo.',
    priceRef: 'Cotización según equipo',
    scope:
      'La propuesta especifica capacidad, modelo, repuestos y mano de obra. Migración o respaldo se acuerdan según el estado del disco.',
    featured: true,
  },
  {
    id: 'sistema',
    title: 'Instalación del sistema',
    description:
      'Instalación limpia del sistema operativo y controladores compatibles. El respaldo se coordina antes de intervenir.',
    priceRef: 'Desde S/ 35',
    scope:
      'Instalación del sistema y controladores. Licencias, respaldo y programas adicionales se cotizan según necesidad.',
  },
  {
    id: 'archivos',
    title: 'Recuperación de archivos',
    description:
      'Evaluación de la posibilidad de recuperar documentos y fotos de una unidad con problemas de lectura.',
    priceRef: 'Previa evaluación',
    scope:
      'La viabilidad, el alcance y el costo dependen del estado de la unidad. No se garantiza la recuperación de todos los archivos.',
  },
  {
    id: 'programas',
    title: 'Instalación de programas',
    description:
      'Configuración de herramientas de oficina, trabajo y utilitarios compatibles con tu computadora.',
    priceRef: 'Desde S/ 25',
    scope:
      'Instalación y configuración acordadas. Las licencias comerciales no están incluidas.',
  },
  {
    id: 'disco',
    title: 'Revisión y clonación de disco',
    description:
      'Revisión de la unidad y evaluación de una migración a otro disco, según su estado y compatibilidad.',
    priceRef: 'Desde S/ 30',
    scope:
      'El alcance y la tarifa final se confirman según estado y capacidad. El disco de destino se cotiza aparte.',
  },
  {
    id: 'ensamble',
    title: 'Ensamble y optimización de PC',
    description:
      'Armado, organización de cables y pruebas de funcionamiento para computadoras de escritorio.',
    priceRef: 'Desde S/ 60',
    scope:
      'Mano de obra según configuración. Componentes y servicios adicionales se cotizan aparte.',
  },
]
