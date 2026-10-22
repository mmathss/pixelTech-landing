import { useEffect, useRef, useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import sprites from '../../assets/mascot/robot-crt-sprites.webp'
import './ScrollMascot.css'

const guides = {
  studio: {
    inicio: ['¡Hola! Soy tu guía Pixel.', 'Baja y te acompaño a conocer lo que podemos crear para tu negocio.'],
    proyectos: ['Ideas que ya funcionan', 'Explora los proyectos y prueba las demos para verlos en acción.'],
    problemas: ['¿Te suena familiar?', 'Datos dispersos y tareas repetidas: el primer paso es entender tu operación.'],
    soluciones: ['Cada negocio tiene su camino', 'Podemos crear una herramienta, conectar aplicaciones o mejorar tu sistema actual.'],
    proceso: ['Paso a paso, contigo', 'Primero entendemos el problema; después definimos cómo construir la solución.'],
    equipo: ['Conoce a quien lo construye', 'Aquí puedes conocer a Diego y su forma de trabajar.'],
    preguntas: ['Resolvamos tus dudas', 'Abre las preguntas para conocer más sobre plazos, alcance y acompañamiento.'],
    diagnostico: ['Cuéntanos tu idea', 'Describe qué quieres mejorar. También puedes iniciar la conversación por WhatsApp.'],
  },
  support: {
    inicio: ['¡Hola! Soy tu guía Pixel.', 'Te ayudo a recorrer nuestros servicios de soporte técnico en Huacho.'],
    problemas: ['Empecemos por el síntoma', 'No necesitas saber la causa. Cuéntanos qué notas en tu computadora o laptop.'],
    servicios: ['Encuentra el servicio', 'Revisa las opciones y consulta el alcance, costo y disponibilidad de cada una.'],
    proceso: ['Así cuidamos tu equipo', 'Revisa cómo recibimos, diagnosticamos y probamos tu equipo antes de entregarlo.'],
    garantia: ['Todo claro desde el inicio', 'Aquí explicamos las condiciones del servicio y la recepción de tu equipo.'],
    preguntas: ['¿Tienes alguna duda?', 'Abre las preguntas frecuentes para conocer cómo coordinamos la atención.'],
    contacto: ['Preparemos tu consulta', 'Completa los datos de tu equipo y abre el mensaje en WhatsApp para enviarlo.'],
  },
}

export default function ScrollMascot({ variant }) {
  const messages = guides[variant]
  const root = useRef(null)
  const [section, setSection] = useState('inicio')
  const [hidden, setHidden] = useState(false)
  const [bubble, setBubble] = useState(true)
  const [walking, setWalking] = useState(false)
  const [greeting, setGreeting] = useState(true)
  const [editing, setEditing] = useState(false)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      try { setHidden(sessionStorage.getItem('pixel-mascot-hidden') === 'true') } catch { /* Storage is optional. */ }
    })
    return () => cancelAnimationFrame(frame)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setGreeting(false), 1800)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!bubble) return
    const timer = setTimeout(() => setBubble(false), 8500)
    return () => clearTimeout(timer)
  }, [bubble, section])

  useEffect(() => {
    if (hidden) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    let frame = 0
    let stopTimer
    let previousY = window.scrollY
    let currentSection = ''
    const sections = Object.keys(messages).map((id) => document.getElementById(id)).filter(Boolean)
    const update = (moved = false) => {
      const y = window.scrollY
      const distance = document.documentElement.scrollHeight - window.innerHeight
      const progress = distance > 0 ? Math.min(1, Math.max(0, y / distance)) : 0
      const travel = Math.max(0, Math.min(window.innerWidth < 600 ? 48 : 160, window.innerWidth - 300))
      root.current?.style.setProperty('--mascot-travel', `${preference.matches ? 0 : progress * travel}px`)
      if (moved && y !== previousY && !preference.matches) {
        root.current?.style.setProperty('--mascot-direction', y > previousY ? 1 : -1)
        setWalking(true)
        clearTimeout(stopTimer)
        stopTimer = setTimeout(() => setWalking(false), 180)
      }
      previousY = y
      const active = sections.filter((element) => element.getBoundingClientRect().top <= window.innerHeight * 0.42).at(-1) ?? sections[0]
      if (active && active.id !== currentSection) {
        currentSection = active.id
        setSection(active.id)
        setBubble(true)
      }
    }
    const scroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => update(true))
    }
    const resize = () => update()
    const motionChanged = () => { setWalking(false); update() }
    const focusChanged = (event) => setEditing(Boolean(event.target.closest?.('input, textarea, select')))
    const focusLeft = () => setEditing(false)
    update()
    window.addEventListener('scroll', scroll, { passive: true })
    window.addEventListener('resize', resize)
    document.addEventListener('focusin', focusChanged)
    document.addEventListener('focusout', focusLeft)
    preference.addEventListener('change', motionChanged)
    return () => {
      cancelAnimationFrame(frame)
      clearTimeout(stopTimer)
      window.removeEventListener('scroll', scroll)
      window.removeEventListener('resize', resize)
      document.removeEventListener('focusin', focusChanged)
      document.removeEventListener('focusout', focusLeft)
      preference.removeEventListener('change', motionChanged)
    }
  }, [messages, hidden])

  const toggleHidden = (value) => {
    setHidden(value)
    setWalking(false)
    setEditing(false)
    setBubble(true)
    try { sessionStorage.setItem('pixel-mascot-hidden', String(value)) } catch { /* Storage is optional. */ }
  }
  const expanded = bubble && !editing
  const animation = walking ? 'walk' : greeting ? 'greet' : expanded ? 'explain' : 'idle'
  const [title, message] = messages[section]

  if (hidden) return (
    <button className="pixel-mascot-restore" onClick={() => toggleHidden(false)} aria-label="Mostrar mascota">
      <MessageCircle size={18} aria-hidden="true" /> <span>Pixel</span>
    </button>
  )

  return (
    <aside ref={root} className={`pixel-mascot${editing ? ' pixel-mascot-editing' : ''}`} aria-label="Pixel, tu mascota guía" style={{ '--mascot-sheet': `url("${sprites}")` }}>
      <div id="pixel-mascot-message" className="pixel-mascot-bubble" hidden={!expanded}>
        <span className="pixel-mascot-eyebrow">PIXEL / TU GUÍA</span>
        <strong>{title}</strong>
        <p>{message}</p>
        <button className="pixel-mascot-dismiss" onClick={() => setBubble(false)} aria-label="Cerrar mensaje de Pixel"><X size={16} aria-hidden="true" /></button>
      </div>
      <div className="pixel-mascot-controls">
        <button className="pixel-mascot-character" onClick={() => { setEditing(false); setBubble(!expanded) }} aria-label={expanded ? 'Cerrar consejo de Pixel' : 'Ver consejo de Pixel'} aria-expanded={expanded} aria-controls="pixel-mascot-message">
          <span className={`pixel-mascot-sprite pixel-mascot-${animation}`} aria-hidden="true" />
        </button>
        <button className="pixel-mascot-hide" onClick={() => toggleHidden(true)} aria-label="Ocultar mascota"><X size={14} aria-hidden="true" /></button>
      </div>
    </aside>
  )
}
