import useScrollReveal from './useScrollReveal'

const selectors = [
  '.pt-section-intro', '.pt-project-image', '.pt-project-copy',
  '.pt-featured-project', '.pt-problems article', '.pt-solution-selector',
  '.pt-process li', '.pt-leader-photo', '.pt-leader-copy', '.pt-faq details',
  '.pt-contact-copy', '.pt-contact-card',
].join(', ')

export default function useLandingMotion(container) {
  useScrollReveal(container, { prefix: 'pt', selectors })
}
