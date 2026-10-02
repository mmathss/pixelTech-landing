import StudioNavbar from './StudioNavbar'
import StudioPixelRunner from './StudioPixelRunner'
import StudioHero from './StudioHero'
import StudioPillars from './StudioPillars'
import StudioServices from './StudioServices'
import StudioDeveloper from './StudioDeveloper'
import StudioTimeline from './StudioTimeline'
import StudioWhatsAppCTA from './StudioWhatsAppCTA'
import StudioQuoteForm from './StudioQuoteForm'
import StudioFooter from './StudioFooter'

export default function StudioLanding() {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-fixed">
      <StudioNavbar />
      <main className="w-full bg-surface">
        <div className="flex flex-col w-full">
          <StudioPixelRunner />
          <StudioHero />
          <StudioPillars />
          <StudioServices />
          <StudioDeveloper />
          <StudioTimeline />
          <StudioWhatsAppCTA />
          <StudioQuoteForm />
        </div>
      </main>
      <StudioFooter />
    </div>
  )
}
