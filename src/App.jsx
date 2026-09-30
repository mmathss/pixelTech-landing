import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import WhatsAppCTA from './components/WhatsAppCTA'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="bg-brand-blue min-h-screen">
      <Marquee />
      <Navbar />
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
  )
}
