import { useEffect } from 'react'

// Progressive enhancement: prerendered content remains visible without JS,
// IntersectionObserver, or when reduced motion is enabled.
export default function useLandingMotion(container) {
  useEffect(() => {
    const root = container.current
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!root || preference.matches || !('IntersectionObserver' in window))
      return

    const elements = [
      ...root.querySelectorAll(
        [
          '.pt-section-intro',
          '.pt-project',
          '.pt-featured-project',
          '.pt-problems article',
          '.pt-services article',
          '.pt-process li',
          '.pt-leader-photo',
          '.pt-leader-copy',
          '.pt-faq details',
          '.pt-contact-copy',
          '.pt-contact-card',
        ].join(', '),
      ),
    ]
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('pt-reveal-visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.08, rootMargin: '0px 0px -24px 0px' },
    )

    for (const element of elements) {
      if (element.getBoundingClientRect().top < window.innerHeight - 24)
        continue
      const siblings = [...element.parentElement.children]
      element.style.setProperty(
        '--pt-reveal-delay',
        `${Math.min(siblings.indexOf(element), 3) * 65}ms`,
      )
      element.classList.add('pt-reveal-pending')
      observer.observe(element)
    }

    const showAll = () => {
      if (!preference.matches) return
      observer.disconnect()
      elements.forEach((element) =>
        element.classList.remove('pt-reveal-pending'),
      )
    }
    preference.addEventListener('change', showAll)
    return () => {
      observer.disconnect()
      preference.removeEventListener('change', showAll)
      elements.forEach((element) => {
        element.classList.remove('pt-reveal-pending', 'pt-reveal-visible')
        element.style.removeProperty('--pt-reveal-delay')
      })
    }
  }, [container])
}
