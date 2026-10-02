import { useState, useEffect } from 'react'
import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import WhatsAppCTA from './components/WhatsAppCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'
import StudioLanding from './components/studio/StudioLanding'
import HubLanding from './components/hub/HubLanding'
import PageToggle from './components/PageToggle'

export default function App() {
  const [currentView, setCurrentView] = useState(() => {
    // Si viene explícitamente en el URL (?view=studio o ?view=soporte), respetarlo
    const params = new URLSearchParams(window.location.search)
    const viewParam = params.get('view')
    if (viewParam === 'soporte' || viewParam === 'studio') {
      return viewParam
    }
    // De lo contrario, SIEMPRE abrir el Hub como primera bienvenida
    return 'hub'
  })

  useEffect(() => {
    if (currentView === 'studio') {
      document.title = 'PixelTech Studio - Desarrollo de Software a Medida'
      document.body.style.backgroundColor = '#f9f9ff'
      document.body.style.color = '#191b23'
    } else if (currentView === 'soporte') {
      document.title = 'PixelTech Pro - Soporte Técnico en Computadoras y Laptops'
      document.body.style.backgroundColor = '#004BD6'
      document.body.style.color = '#ffffff'
    } else {
      document.title = 'PixelTech - Servicios Tecnológicos | Soporte & Desarrollo'
      document.body.style.backgroundColor = '#004BD6'
      document.body.style.color = '#ffffff'
    }

    // Sincronizar el parámetro en la URL sin recargar la página
    const url = new URL(window.location.href)
    if (currentView === 'hub') {
      url.searchParams.delete('view')
    } else {
      url.searchParams.set('view', currentView)
    }
    window.history.replaceState({}, '', url)
  }, [currentView])

  const handleViewChange = (view) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      {currentView !== 'hub' && (
        <PageToggle currentView={currentView} onViewChange={handleViewChange} />
      )}

      {currentView === 'hub' && (
        <HubLanding onSelectView={handleViewChange} />
      )}

      {currentView === 'studio' && (
        <StudioLanding onSelectView={handleViewChange} />
      )}

      {currentView === 'soporte' && (
        <div className="bg-brand-blue min-h-screen text-white font-sans">
          <Marquee />
          <Navbar onSelectView={handleViewChange} />
          <main>
            <Hero />
            <Features />
            <Services />
            <WhyUs />
            <WhatsAppCTA />
            <Contact />
          </main>
          <Footer />
        </div>
      )}
    </>
  )
}
