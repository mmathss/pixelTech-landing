import Marquee from './components/Marquee'
import Navbar from './components/Navbar'

export default function App() {
  return (
    <div className="bg-bg-primary min-h-screen">
      <Marquee />
      <Navbar />
      <div style={{ height: '200vh' }} />
    </div>
  )
}
