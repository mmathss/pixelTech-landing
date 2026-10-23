import { useEffect } from 'react'

// Content stays visible before enhancement and when motion is disabled.
export default function useScrollReveal(container, { prefix, selectors }) {
  useEffect(() => {
    const root = container.current
    if (!root || !('IntersectionObserver' in window)) return
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    const elements = [...root.querySelectorAll(selectors)]
    let observer
    const reset = () => {
      observer?.disconnect()
      elements.forEach((element) => {
        element.classList.remove(`${prefix}-reveal-pending`, `${prefix}-reveal-visible`)
        element.style.removeProperty(`--${prefix}-reveal-delay`)
        delete element.dataset.reveal
      })
    }
    const start = () => {
      reset()
      if (preference.matches) return
      observer = new IntersectionObserver((entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add(`${prefix}-reveal-visible`)
          observer.unobserve(entry.target)
        }
      }, { threshold: 0.08, rootMargin: '0px 0px -20px 0px' })
      for (const element of elements) {
        if (!element.getClientRects().length ||
          element.getBoundingClientRect().top < window.innerHeight - 24) continue
        const group = [...element.parentElement.children].filter((child) => child.matches(selectors))
        element.style.setProperty(`--${prefix}-reveal-delay`, `${Math.min(group.indexOf(element), 4) * 85}ms`)
        element.dataset.reveal = element.matches('.pt-project-image, .pt-leader-photo, .sp-record')
          ? 'left'
          : element.matches('.pt-project-copy, .pt-contact-card, .sp-contact-form')
            ? 'right'
            : element.matches('.pt-problems article, .sp-symptom, .sp-service') ? 'scale' : 'rise'
        element.classList.add(`${prefix}-reveal-pending`)
        observer.observe(element)
      }
    }
    start()
    preference.addEventListener('change', start)
    return () => {
      reset()
      preference.removeEventListener('change', start)
    }
  }, [container, prefix, selectors])
}
