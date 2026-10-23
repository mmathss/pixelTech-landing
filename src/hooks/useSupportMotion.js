import useScrollReveal from './useScrollReveal'

import useDepthMotion from './useDepthMotion'

const selectors = [
  '.sp-intro', '.sp-symptom', '.sp-service', '.sp-process li',
  '.sp-reception', '.sp-record', '.sp-care > div', '.sp-faq details',
  '.sp-contact-info', '.sp-contact-form',
].join(', ')

export default function useSupportMotion(container) {
  useScrollReveal(container, { prefix: 'sp', selectors })
  useDepthMotion(container)
}
