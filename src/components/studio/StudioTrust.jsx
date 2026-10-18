import { ArrowUpRight, Check } from 'lucide-react'
import { FaGithub as Github, FaLinkedinIn as Linkedin } from 'react-icons/fa6'
import profile from '../../assets/studio/developer_profile.png'
import { site } from '../../data/site'
import { DiagnosticLink } from './StudioUI'
export default function StudioTrust() {
  return (
    <section id="lider" className="pt-section">
      <div className="pt-container pt-leader-grid">
        <div className="pt-leader-photo">
          <div className="pt-photo-label">
            <span className="pt-status-dot" />
            Detrás de PixelTech
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
            <span>{site.role}</span>
          </div>
        </div>
        <div className="pt-leader-copy">
          <span className="pt-eyebrow">
            05 / Tecnología con una persona al frente
          </span>
          <h2>
            Hola, soy Diego.
            <br />
            Hablemos de tu negocio.
          </h2>
          <p>
            En PixelTech trabajas directamente conmigo: desde entender lo que
            necesitas hasta revisar cómo funciona la solución. Te explico las
            decisiones técnicas en términos de tu operación.
          </p>
          <p>
            Mi experiencia previa incluye desarrollo y soporte en sistemas
            corporativos del sector asegurador en INDRA Perú, dentro del
            proyecto MAPFRE, y trabajo en consultoría tecnológica en Digital
            Compass.
          </p>
          <p className="pt-small-note">
            Esta es mi experiencia profesional previa. Las organizaciones
            mencionadas no se presentan como clientes de PixelTech.
          </p>
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
            <a href={site.linkedin} target="_blank" rel="noreferrer">
              <Linkedin size={18} />
              Mi trayectoria
              <ArrowUpRight size={15} />
            </a>
            <a href={site.github} target="_blank" rel="noreferrer">
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
