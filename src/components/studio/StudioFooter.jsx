import { ArrowUpRight } from 'lucide-react'
import { FaGithub as Github, FaLinkedinIn as Linkedin } from 'react-icons/fa6'
import { site } from '../../data/site'
import { Brand } from './StudioUI'
import { trackEvent } from '../../utils/analytics'
const copyrightYear = new Date().getFullYear()
export default function StudioFooter() {
  return (
    <footer className="pt-footer">
      <div className="pt-container">
        <div className="pt-footer-grid">
          <div>
            <Brand inverse />
            <p>
              Consultoría y software para ordenar tu operación y construir el
              siguiente paso de tu negocio.
            </p>
            <span className="pt-eyebrow">Perú · Colaboración remota</span>
          </div>
          <div>
            <strong>Explora</strong>
            <a href="/#proyectos">Proyectos</a>
            <a href="/#soluciones">Soluciones</a>
            <a href="/ideas/">Ideas para tu negocio</a>
            <a href="/#preguntas">Preguntas frecuentes</a>
          </div>
          <div>
            <strong>Hablemos</strong>
            <a className="pt-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() =>
                trackEvent('whatsapp_click', { placement: 'footer' })
              }
            >
              {site.phone}
            </a>
            <div className="pt-footer-social">
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn de Diego Arévalo"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub de Diego Arévalo"
              >
                <Github size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-footer-bottom">
          <span>© {copyrightYear} PixelTech · Diego Arévalo</span>
          <a href="/soporte/">
            ¿Buscas soporte para tu computadora?
            <ArrowUpRight size={15} />
          </a>
          <a href="/privacidad/">Privacidad</a>
        </div>
      </div>
    </footer>
  )
}
