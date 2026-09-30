import Marquee     from './components/Marquee'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import Features    from './components/Features'
import Services    from './components/Services'
import WhatsAppCTA from './components/WhatsAppCTA'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Marquee />
      <Navbar />
      <Hero />
      <Features />
      <Services />
      <WhatsAppCTA />
      <Contact />
      <Footer />
    </div>
  )
}
