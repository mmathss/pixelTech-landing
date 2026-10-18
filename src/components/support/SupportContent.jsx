import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ClipboardList,
  Cpu,
  Fan,
  HardDrive,
  Laptop,
  MapPin,
  Monitor,
  Plus,
  ShieldCheck,
  Wrench,
} from 'lucide-react'
import SupportLaptop from './SupportLaptop'
import { services } from '../../data/services'
import { site } from '../../data/site'
import BrandArtwork from '../studio/BrandArtwork'
import { SupportIntro, SupportLink } from './SupportUI'
import { buildSupportInquiryUrl as supportUrl } from '../../utils/whatsapp'

export function SupportHero() {
  return (
    <section id="inicio" className="sp-hero">
      <div className="sp-container sp-hero-grid">
        <div className="sp-hero-copy">
          <span className="sp-eyebrow">
            <MapPin size={14} aria-hidden="true" /> Soporte técnico en Huacho,
            Lima
          </span>
          <h1>
            ¿Tu equipo tiene un problema?
            <br />
            <span>Nosotros lo resolvemos.</span>
          </h1>
          <p className="sp-hero-lead">
            ¿Tu laptop está lenta, se calienta o no enciende?
          </p>
          <p>
            Diagnóstico, mantenimiento y mejora de computadoras y laptops. Te
            explicamos qué necesita tu equipo y acordamos el presupuesto antes
            de repararlo.
          </p>
          <div className="sp-actions">
            <SupportLink placement="support_hero">
              Cuéntanos qué ocurre
            </SupportLink>
            <a className="sp-text-link" href="#servicios">
              Ver servicios y tarifas{' '}
              <ArrowRight size={17} aria-hidden="true" />
            </a>
          </div>
          <p className="sp-hero-note">
            <Check size={16} aria-hidden="true" /> Atención en taller, con
            coordinación previa.
          </p>
        </div>
        <SupportLaptop />
      </div>
      <div className="sp-hero-strip">
        <div className="sp-container">
          <span>Presupuesto previo</span>
          <span>Recepción documentada</span>
          <span>Pruebas de entrega</span>
        </div>
      </div>
    </section>
  )
}

const symptoms = [
  [Laptop, 'Está lenta', 'Tarda en iniciar o abrir programas.'],
  [Fan, 'Se calienta', 'El ventilador suena o el equipo se apaga.'],
  [Monitor, 'No enciende', 'No inicia o la pantalla queda en negro.'],
  [HardDrive, 'Necesito mis archivos', 'Hay documentos o fotos que recuperar.'],
]
export function SupportSymptoms() {
  return (
    <section id="problemas" className="sp-section sp-light">
      <div className="sp-container">
        <SupportIntro
          eyebrow="01 / Empecemos por lo que notas"
          title="No necesitas saber de reparaciones."
        >
          Cuéntanos el síntoma. La causa se determina al revisar el equipo, no
          con una promesa por chat.
        </SupportIntro>
        <div className="sp-symptom-grid">
          {symptoms.map(([Icon, title, text]) => (
            <a
              key={title}
              href={supportUrl(
                `Hola PixelTech, necesito soporte técnico en Huacho. Mi consulta: ${title}. ¿Podemos coordinar una revisión?`,
              )}
              target="_blank"
              rel="noreferrer"
              className="sp-symptom"
            >
              <Icon size={25} aria-hidden="true" />
              <h3>{title}</h3>
              <p>{text}</p>
              <span>
                Consultar por WhatsApp{' '}
                <ArrowUpRight size={15} aria-hidden="true" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

const icons = {
  mantenimiento: Fan,
  diagnostico: Wrench,
  mejora: Cpu,
  sistema: Monitor,
  archivos: HardDrive,
  programas: Laptop,
  disco: HardDrive,
  ensamble: Cpu,
}
function ServiceCard({ service }) {
  const Icon = icons[service.id]
  return (
    <article className="sp-service">
      <div className="sp-service-top">
        <Icon size={26} aria-hidden="true" />
        <span>{service.priceRef}</span>
      </div>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <p className="sp-service-scope">{service.scope}</p>
      <SupportLink
        className="sp-service-link"
        placement={`support_service_${service.id}`}
        message={`Hola PixelTech, me interesa ${service.title}. Quisiera conocer el alcance, costo y disponibilidad para mi equipo.`}
        aria-label={`Consultar ${service.title} por WhatsApp`}
      >
        Consultar este servicio
      </SupportLink>
    </article>
  )
}
export function SupportServices() {
  return (
    <section id="servicios" className="sp-section sp-paper">
      <div className="sp-container">
        <SupportIntro
          eyebrow="02 / Servicios y tarifas"
          title="Una solución según tu equipo."
        >
          Precios de entrada referenciales. El modelo, la falla y el trabajo
          necesario determinan el presupuesto final, que se acuerda antes de
          intervenir.
        </SupportIntro>
        <div className="sp-service-grid">
          {services
            .filter((s) => s.featured)
            .map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
        </div>
        <details className="sp-more-services">
          <summary>
            Ver otros servicios <span>5 opciones más</span>
            <Plus size={20} aria-hidden="true" />
          </summary>
          <div className="sp-extra-services">
            {services
              .filter((s) => !s.featured)
              .map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
          </div>
        </details>
        <p className="sp-price-note">
          Antes de dejar tu equipo, consulta el costo de evaluación si decides
          no reparar. Los repuestos, capacidades y tareas adicionales se
          detallan en la propuesta; no se realizan trabajos adicionales sin tu
          autorización.
        </p>
      </div>
    </section>
  )
}

const steps = [
  [
    'Coordinamos',
    'Cuéntanos la falla por WhatsApp. Confirmamos disponibilidad, ubicación y condiciones del diagnóstico antes de la entrega.',
  ],
  [
    'Recibimos y revisamos',
    'Registramos equipo, accesorios y estado de ingreso. Evaluamos la falla y te explicamos las opciones.',
  ],
  [
    'Tú autorizas',
    'Recibes presupuesto y plazo estimado. La reparación y los repuestos se aprueban antes de continuar.',
  ],
  [
    'Probamos y entregamos',
    'Verificamos el funcionamiento contigo y documentamos el servicio y las condiciones de garantía.',
  ],
]
export function SupportProcess() {
  return (
    <section id="proceso" className="sp-section sp-blue">
      <div className="sp-container">
        <span id="por-que-elegirnos" className="sp-anchor" />
        <SupportIntro
          eyebrow="03 / De la consulta a la entrega"
          title="Sabes qué pasa en cada etapa."
        >
          Tu equipo es una herramienta de trabajo o estudio. El proceso debe ser
          tan claro como la reparación.
        </SupportIntro>
        <ol className="sp-process">
          {steps.map(([title, text], i) => (
            <li key={title}>
              <span className="sp-step">0{i + 1}</span>
              <h3>{title}</h3>
              <p>{text}</p>
            </li>
          ))}
        </ol>
        <div className="sp-reception">
          <div>
            <MapPin size={25} aria-hidden="true" />
            <h3>¿Cómo llevar tu equipo?</h3>
            <p>
              Atención en taller en Huacho, Lima, con coordinación previa.
              Escríbenos para recibir la ubicación y confirmar una hora antes de
              trasladarte.
            </p>
          </div>
          <div>
            <ClipboardList size={25} aria-hidden="true" />
            <h3>¿Qué debes llevar?</h3>
            <p>
              Tu equipo y, si es una laptop, su cargador. Indica qué accesorios
              dejas y si tienes archivos importantes que debamos considerar
              antes del servicio.
            </p>
          </div>
          <SupportLink
            placement="support_reception"
            message="Hola PixelTech, quisiera coordinar la recepción de mi equipo. ¿Me comparten la ubicación, disponibilidad y condiciones del diagnóstico?"
          >
            Coordinar entrega del equipo
          </SupportLink>
        </div>
      </div>
    </section>
  )
}

export function SupportTrust() {
  return (
    <section id="garantia" className="sp-section sp-light">
      <div className="sp-container">
        <SupportIntro
          eyebrow="04 / Confianza con responsabilidad"
          title="El cuidado también está en los detalles."
        >
          Registro de ingreso, autorización y pruebas. Una forma concreta de
          cuidar tu equipo y mantenerte informado.
        </SupportIntro>
        <div className="sp-trust-grid">
          <div className="sp-record">
            <div className="sp-record-head">
              <ClipboardList size={21} aria-hidden="true" />
              <span>Ficha de recepción</span>
              <small>MODELO ILUSTRATIVO</small>
            </div>
            <p>
              Esto es lo que se registra al recibir un equipo. No corresponde a
              un servicio de cliente.
            </p>
            <dl>
              <div>
                <dt>Identificación</dt>
                <dd>Marca, modelo y número de serie</dd>
              </div>
              <div>
                <dt>Estado de ingreso</dt>
                <dd>Falla reportada y condición exterior</dd>
              </div>
              <div>
                <dt>Accesorios</dt>
                <dd>Cargador y elementos entregados</dd>
              </div>
              <div>
                <dt>Autorización</dt>
                <dd>Evaluación y condiciones acordadas</dd>
              </div>
            </dl>
            <span className="sp-record-foot">
              <Check size={16} aria-hidden="true" /> Un punto de partida
              compartido
            </span>
          </div>
          <div className="sp-care">
            <div>
              <ShieldCheck size={25} aria-hidden="true" />
              <h3>Tu información requiere cuidado</h3>
              <p>
                Si hay archivos importantes, avísanos al ingresar. Antes de
                formatear o migrar, acordamos el respaldo y su alcance. La
                posibilidad de recuperar datos depende del estado de la unidad.
              </p>
            </div>
            <div>
              <Wrench size={25} aria-hidden="true" />
              <h3>Garantía escrita de 30 días</h3>
              <p>
                Sobre el servicio técnico y la mano de obra realizados. La
                constancia detalla el trabajo cubierto y sus condiciones. Los
                repuestos tienen las condiciones indicadas en el presupuesto;
                las fallas distintas al trabajo realizado requieren evaluación.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const faqs = [
  [
    '¿Cuánto cuesta el diagnóstico?',
    'Si aceptas la reparación, el diagnóstico no tiene costo. Si decides no continuar, el importe de evaluación se acuerda antes de recibir el equipo. Consulta las condiciones de tu caso por WhatsApp antes de trasladarte.',
  ],
  [
    '¿Cuánto demora la reparación?',
    'El plazo se estima después de evaluar el equipo y depende de la falla, la disponibilidad de repuestos y la carga del taller. Te comunicamos una estimación con el presupuesto y coordinamos cualquier cambio. No se garantiza entrega el mismo día.',
  ],
  [
    '¿Puedo llevar el equipo sin coordinar?',
    'La atención es en taller en Huacho y se coordina previamente por WhatsApp. Allí te compartimos la ubicación y confirmamos la disponibilidad para recibir tu equipo.',
  ],
  [
    '¿Qué incluyen los precios “desde”?',
    'Son tarifas de entrada referenciales para el servicio descrito. El presupuesto confirma alcance, mano de obra, repuestos y tareas adicionales según el modelo y el estado del equipo. Las licencias comerciales no están incluidas en la instalación de programas o del sistema.',
  ],
  [
    '¿Mis archivos se conservan?',
    'Coméntanos qué información es importante antes de dejar el equipo. Si se necesita formateo o migración, acordamos el respaldo antes de intervenir. La conservación y recuperación dependen del estado del almacenamiento; no se promete rescatar todos los datos.',
  ],
  [
    '¿Qué pasa si necesita repuestos?',
    'Se revisa compatibilidad y disponibilidad. Recibes el detalle de la pieza, su precio, el costo de instalación y sus condiciones de garantía antes de aprobar el cambio.',
  ],
  [
    '¿Qué cubre la garantía de 30 días?',
    'Cubre el servicio técnico y la mano de obra realizados, según la constancia de entrega. Las condiciones de los repuestos se indican en el presupuesto. Si aparece un problema, comunícalo para revisar si corresponde al trabajo cubierto; una falla distinta requiere evaluación.',
  ],
  [
    '¿Y si no tiene reparación o no acepto el presupuesto?',
    'Te explicamos lo encontrado y las alternativas viables. Puedes decidir no reparar. El costo de evaluación aplicable se acuerda antes del ingreso, y la devolución del equipo se coordina contigo.',
  ],
]
export function SupportFAQ() {
  return (
    <section id="preguntas" className="sp-section sp-paper">
      <div className="sp-container sp-faq-layout">
        <SupportIntro
          eyebrow="05 / Antes de traerlo"
          title="Resolvamos tus dudas."
        >
          Consulta las condiciones antes de dejar tu equipo. Si tu caso necesita
          algo distinto, lo conversamos.
        </SupportIntro>
        <div className="sp-faq">
          {faqs.map(([q, a]) => (
            <details key={q}>
              <summary>
                {q}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <div className="sp-faq-answer">
                <p>{a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function SupportFooter() {
  return (
    <footer className="sp-footer">
      <div className="sp-container">
        <div className="sp-footer-grid">
          <div>
            <a
              className="sp-brand"
              href="#inicio"
              aria-label="PixelTech, soporte técnico, inicio"
            >
              <BrandArtwork className="sp-brand-icon" />
              <span>
                <strong>
                  PixelTech<span>.</span>
                </strong>
                <small>Soporte técnico</small>
              </span>
            </a>
            <p>
              Diagnóstico, mantenimiento y mejora de computadoras y laptops en
              Huacho, Lima.
            </p>
          </div>
          <nav aria-label="Enlaces de soporte">
            <a href="#servicios">Servicios y tarifas</a>
            <a href="#proceso">Proceso y recepción</a>
            <a href="#preguntas">Preguntas frecuentes</a>
            <a href="/privacidad/">Privacidad</a>
          </nav>
          <div>
            <span className="sp-eyebrow">Hablemos de tu equipo</span>
            <a
              className="sp-footer-phone"
              href={supportUrl(
                'Hola PixelTech, necesito soporte técnico en Huacho.',
              )}
              target="_blank"
              rel="noreferrer"
            >
              {site.phone}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <p>Atención en taller con coordinación previa.</p>
          </div>
        </div>
        <div className="sp-footer-bottom">
          <span>© 2026 PixelTech · Soporte técnico</span>
          <a href="/">
            Consultoría y software <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}
