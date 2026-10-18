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
export default function StudioLanding() {
  return (
    <div className="pt-site">
      <StudioNavbar />
      <main id="contenido">
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
    </div>
  )
}
