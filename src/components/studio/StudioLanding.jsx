import { useRef } from 'react'
import useLandingMotion from '../../hooks/useLandingMotion'
import StudioNavbar from './StudioNavbar'
import StudioHero from './StudioHero'
import StudioProjects from './StudioProjects'
import StudioProblems from './StudioProblems'
import StudioServices from './StudioServices'
import StudioProcess from './StudioProcess'
import StudioTrust from './StudioTrust'
import StudioFAQ from './StudioFAQ'
import StudioQuoteForm from './StudioQuoteForm'
import StudioFooter from './StudioFooter'
import ScrollMascot from '../mascot/ScrollMascot'
export default function StudioLanding() {
  const main = useRef(null)
  useLandingMotion(main)
  return (
    <div className="pt-site">
      <StudioNavbar />
      <main id="contenido" ref={main}>
        <StudioHero />
        <StudioProjects />
        <StudioProblems />
        <StudioServices />
        <StudioProcess />
        <StudioTrust />
        <StudioFAQ />
        <StudioQuoteForm />
      </main>
      <StudioFooter />
      <ScrollMascot variant="studio" />
    </div>
  )
}
