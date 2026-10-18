import { useEffect } from 'react'

const selectors = [
  '.sp-intro',
  '.sp-symptom',
  '.sp-service',
  '.sp-process li',
  '.sp-reception',
  '.sp-record',
  '.sp-care > div',
  '.sp-faq details',
  '.sp-contact-info',
  '.sp-contact-form',
].join(', ')

export default function useSupportMotion(container) {
  useEffect(() => {
    const root = container.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!root || preference.matches || !('IntersectionObserver' in window))
      return

    const elements = [...root.querySelectorAll(selectors)]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('sp-reveal-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.06, rootMargin: '0px 0px -24px 0px' },
    )

    for (const element of elements) {
      // Leave the first screen and collapsed content visible by default.
      if (
        !element.getClientRects().length ||
        element.getBoundingClientRect().top < window.innerHeight - 24
      )
        continue
      const siblings = [...element.parentElement.children]
      element.style.setProperty(
        '--sp-reveal-delay',
        `${Math.min(siblings.indexOf(element), 3) * 65}ms`,
      )
      element.classList.add('sp-reveal-pending')
      observer.observe(element)
    }

    const showAll = () => {
      if (!preference.matches) return
      observer.disconnect()
      elements.forEach((element) =>
        element.classList.remove('sp-reveal-pending'),
      )
    }
    preference.addEventListener('change', showAll)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', showAll)
      elements.forEach((element) => {
        element.classList.remove('sp-reveal-pending', 'sp-reveal-visible')
        element.style.removeProperty('--sp-reveal-delay')
      })
    }
  }, [container])
}
