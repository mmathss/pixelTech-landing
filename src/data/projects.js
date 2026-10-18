import { site } from './site.js'
export const projects = [
  {
    id: 'inventario',
    number: '01',
    name: 'Stock en orden',
    category: 'Comercio e inventario',
    headline: 'Del stock disperso a una sola vista.',
    problem:
      'Cuando las existencias se llevan en archivos separados, es difícil saber qué reponer y registrar cada movimiento.',
    audience: 'Negocios que gestionan productos y reposición.',
    solution:
      'Un panel para consultar productos, detectar stock bajo y registrar entradas o salidas con trazabilidad.',
    actions: [
      'Busca un producto',
      'Filtra el stock bajo',
      'Registra una entrada o salida',
    ],
    capabilities: [
      'Inventario consultable',
      'Alertas de reposición',
      'Historial de movimientos',
    ],
    limitation:
      'No incluye facturación, lector de códigos ni sincronización entre usuarios.',
    color: 'blue',
  },
  {
    id: 'reservas',
    number: '02',
    name: 'Agenda sin cruces',
    category: 'Negocios de servicios',
    headline: 'Una agenda que tu equipo puede entender.',
    problem:
      'Las reservas recibidas por distintos canales pueden terminar en horarios duplicados o difíciles de consultar.',
    audience: 'Consultorios, estudios y negocios que trabajan con citas.',
    solution:
      'Un flujo para elegir servicio, fecha y hora, consultar la agenda y cancelar una cita.',
    actions: [
      'Elige un servicio',
      'Reserva un horario',
      'Consulta o cancela tu cita',
    ],
    capabilities: [
      'Reserva guiada',
      'Control de disponibilidad',
      'Agenda por fecha',
    ],
    limitation:
      'No envía recordatorios, no procesa pagos y no sincroniza calendarios externos.',
    color: 'lime',
  },
  {
    id: 'pedidos',
    number: '03',
    name: 'Pedidos a la vista',
    category: 'Atención al cliente',
    headline: 'Cada pedido, con un siguiente paso claro.',
    problem:
      'Cuando el estado de un pedido depende de mensajes sueltos, el equipo pierde contexto y el cliente debe volver a preguntar.',
    audience: 'Equipos que reciben y preparan pedidos por encargo.',
    solution:
      'Un tablero para buscar pedidos, revisar su detalle y actualizar su avance por etapas.',
    actions: ['Busca un pedido', 'Revisa sus productos', 'Actualiza su estado'],
    capabilities: [
      'Tablero de seguimiento',
      'Detalle de pedidos',
      'Registro de avances',
    ],
    limitation:
      'No incluye portal autenticado de clientes, cobros ni notificaciones externas.',
    color: 'ink',
  },
].map((project) => ({
  ...project,
  preview: `/projects/${project.id}.png`,
  path: `/proyectos/${project.id}`,
  source: `${site.repository}/tree/main/src/components/demos#${project.id}`,
}))
