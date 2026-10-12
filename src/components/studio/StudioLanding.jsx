import StudioNavbar from './StudioNavbar'
import StudioPixelRunner from './StudioPixelRunner'
import StudioHero from './StudioHero'
import StudioProblems from './StudioProblems'
import StudioServices from './StudioServices'
import StudioProcess from './StudioProcess'
import StudioTrust from './StudioTrust'
import StudioFAQ from './StudioFAQ'
import StudioWhatsAppCTA from './StudioWhatsAppCTA'
import StudioQuoteForm from './StudioQuoteForm'
import StudioFooter from './StudioFooter'

export default function StudioLanding({ onSelectView }) {
  return (
    <div className="bg-surface font-body-md text-on-surface antialiased min-h-screen selection:bg-secondary-fixed selection:text-on-secondary-fixed overflow-x-hidden">
      <StudioNavbar onSelectView={onSelectView} />
      <main className="w-full bg-surface">
        <div className="flex flex-col w-full">
          <StudioPixelRunner />
          <StudioHero />
          <StudioProblems />
          <StudioServices />
          <StudioProcess />
          <StudioTrust />
          <StudioFAQ />
          <StudioWhatsAppCTA />
          <StudioQuoteForm />
        </div>
      </main>
      <StudioFooter onSelectView={onSelectView} />
    </div>
  )
}
