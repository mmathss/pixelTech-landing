import { ArrowUpRight, Check } from 'lucide-react'
import { FaGithub as Github, FaLinkedinIn as Linkedin } from 'react-icons/fa6'
import profile from '../../assets/studio/developer_profile.png'
import { site } from '../../data/site'
import { DiagnosticLink } from './StudioUI'
export default function StudioTrust() {
  return (
    <section id="equipo" className="pt-section">
      <div className="pt-container pt-leader-grid">
        <div className="pt-leader-photo">
          <div className="pt-photo-label">
            <span className="pt-status-dot" />
            Dirección de PixelTech
          </div>
          <img
            src={profile}
            alt="Diego Arévalo, AI Software Engineer en PixelTech"
            width="408"
            height="512"
            loading="lazy"
          />
          <div className="pt-photo-caption">
            <strong>{site.leader}</strong>
            <span>{site.role} · Dirección técnica</span>
          </div>
        </div>
        <div className="pt-leader-copy">
          <span className="pt-eyebrow">05 / Nuestro equipo</span>
          <h2>
            Un equipo ágil.
            <br />
            Una dirección clara.
          </h2>
          <p>
            Diego Arévalo dirige PixelTech como AI Software Engineer.
            Trabaja directamente contigo, desde la idea hasta la entrega.
          </p>
          <details className="pt-team-details">
            <summary>Conoce la experiencia detrás de PixelTech</summary>
            <p>
              Combinamos dirección técnica y desarrollo asistido por IA, con
              revisión de código y pruebas en cada etapa.
            </p>
            <p>
              Su experiencia profesional incluye desarrollo y soporte en sistemas
              corporativos del sector asegurador en INDRA Perú, dentro del
              proyecto MAPFRE, y trabajo en consultoría tecnológica en Digital
              Compass.
            </p>
            <p className="pt-small-note">
              Esta es la experiencia profesional de Diego. Las organizaciones
              mencionadas no se presentan como clientes de PixelTech.
            </p>
          </details>
          <div className="pt-leader-commitments">
            <span>
              <Check size={17} />
              Alcance y entregables por escrito
            </span>
            <span>
              <Check size={17} />
              Avances que puedes revisar
            </span>
            <span>
              <Check size={17} />
              Documentación y entrega acordadas
            </span>
          </div>
          <div className="pt-leader-social">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="Trayectoria profesional de Diego Arévalo en LinkedIn"
            >
              <Linkedin size={18} />
              Ver trayectoria
              <ArrowUpRight size={15} />
            </a>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              aria-label="Perfil de Diego Arévalo en GitHub"
            >
              <Github size={18} />
              GitHub
              <ArrowUpRight size={15} />
            </a>
          </div>
          <DiagnosticLink placement="leader">
            Conversemos de tu proyecto
          </DiagnosticLink>
        </div>
      </div>
    </section>
  )
}
