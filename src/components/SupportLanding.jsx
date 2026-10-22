import { useRef } from 'react'
import useSupportMotion from '../hooks/useSupportMotion'
import SupportHeader from './support/SupportHeader'
import {
  SupportHero,
  SupportSymptoms,
  SupportServices,
  SupportProcess,
  SupportTrust,
  SupportFAQ,
  SupportFooter,
} from './support/SupportContent'
import SupportContact from './support/SupportContact'
import '../support.css'
export default function SupportLanding() {
  const main = useRef(null)
  useSupportMotion(main)
  return (
    <div className="support-site">
      <SupportHeader />
      <main id="contenido" ref={main}>
        <SupportHero />
        <SupportSymptoms />
        <SupportServices />
        <SupportProcess />
        <SupportTrust />
        <SupportFAQ />
        <SupportContact />
      </main>
      <SupportFooter />
    </div>
  )
}
