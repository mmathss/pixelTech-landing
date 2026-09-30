import Marquee from './components/Marquee'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Marquee />
      <Navbar />
      <Hero />
    </div>
  )
}
