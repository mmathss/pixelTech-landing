import { Monitor, HardDrive, Package, Wind, Wrench, Zap, Database, Star } from 'lucide-react'

export const SERVICES = [
  {
    id: 1,
    tag: 'Sistemas OS',
    title: 'Formateo e Instalación de Sistemas',
    description: 'Instalación limpia de Windows con drivers originales y programas esenciales. Tu equipo como nuevo.',
    Icon: Monitor,
  },
  {
    id: 2,
    tag: 'Data Rescue',
    title: 'Recuperación de Información',
    description: 'Rescate de archivos y fotos tras fallo del sistema, formateo accidental o daño físico.',
    Icon: HardDrive,
  },
  {
    id: 3,
    tag: 'Software & Apps',
    title: 'Instalación de Programas',
    description: 'Office, navegadores, antivirus y herramientas de trabajo instaladas y configuradas.',
    Icon: Package,
  },
  {
    id: 4,
    tag: 'Mantenimiento',
    title: 'Limpieza Interna y Externa',
    description: 'Mantenimiento preventivo: remoción de polvo, cambio de pasta térmica, limpieza de componentes.',
    Icon: Wind,
  },
  {
    id: 5,
    tag: 'Hardware Fix',
    title: 'Diagnóstico y Reparación de Hardware',
    description: 'Diagnóstico de placas, fuentes, pantallas y conectores. Reemplazo de piezas con garantía.',
    Icon: Wrench,
  },
  {
    id: 6,
    tag: 'Upgrade Speed',
    title: 'Repotenciación de Equipos',
    description: 'Ampliación de RAM, instalación de SSD NVMe y mejoras de procesador para máximo rendimiento.',
    Icon: Zap,
  },
  {
    id: 7,
    tag: 'Storage Health',
    title: 'Diagnóstico de HDD / SSD',
    description: 'Análisis de salud del disco, sectores dañados, velocidades y clonado a nuevo almacenamiento.',
    Icon: Database,
  },
  {
    id: 8,
    tag: 'Custom Fix',
    title: 'Servicio Personalizado',
    description: 'Atención adaptada a tu presupuesto y necesidad. Sin tecnicismos confusos, con resultados reales.',
    Icon: Star,
  },
]
