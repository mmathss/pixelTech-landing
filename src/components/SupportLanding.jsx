import Marquee from './Marquee'
import Navbar from './Navbar'
import Hero from './Hero'
import Features from './Features'
import Services from './Services'
import WhyUs from './WhyUs'
import WhatsAppCTA from './WhatsAppCTA'
import Contact from './Contact'
import Footer from './Footer'
export default function SupportLanding() {
  const goHome = () => window.location.assign('/')
  return (
    <div className="bg-brand-blue min-h-screen text-white font-sans">
      <Marquee />
      <Navbar onSelectView={goHome} />
      <main id="contenido">
        <Hero />
        <Features />
        <Services />
        <WhyUs />
        <WhatsAppCTA />
        <Contact />
      </main>
      <Footer onSelectView={goHome} />
    </div>
  )
}
