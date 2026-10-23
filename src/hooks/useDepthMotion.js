import { useEffect } from 'react'

const selectors = '.pt-process-window, .pt-project-image, .pt-featured-art, .sp-laptop-scene'
const properties = ['--depth-rotation', '--depth-x', '--depth-y', '--glint-x', '--glint-y']

// Pointer-driven depth only runs while a surface moves. Touch stays native.
export default function useDepthMotion(container) {
  useEffect(() => {
    const root = container.current
    if (!root) return
    const preference = window.matchMedia('(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)')
    let dispose = () => {}
    const configure = () => {
      dispose()
      if (!preference.matches) return
      const cleanups = [...root.querySelectorAll(selectors)].map((surface) => {
        const glint = document.createElement('span')
        glint.className = 'motion-glint'
        glint.setAttribute('aria-hidden', 'true')
        surface.append(glint)
        surface.classList.add('motion-depth')
        let bounds
        let frame = 0
        let previous = 0
        let x = 0, y = 0, vx = 0, vy = 0, targetX = 0, targetY = 0
        const tick = (time) => {
          const dt = Math.min((time - previous) / 1000 || 1 / 60, 1 / 30)
          previous = time
          vx += ((targetX - x) * 150 - vx * 22) * dt
          vy += ((targetY - y) * 150 - vy * 22) * dt
          x += vx * dt
          y += vy * dt
          const moving = Math.abs(targetX - x) + Math.abs(targetY - y) + Math.abs(vx) + Math.abs(vy) > .002
          if (!moving) { x = targetX; y = targetY; vx = 0; vy = 0 }
          const angle = Math.hypot(x, y) * 3.5
          surface.style.setProperty('--depth-rotation', angle > .001 ? `${-y} ${x} 0 ${angle}deg` : '1 0 0 0deg')
          surface.style.setProperty('--depth-x', `${x * 9}px`)
          surface.style.setProperty('--depth-y', `${y * 9}px`)
          surface.style.setProperty('--glint-x', `${(x + 1) * 50}%`)
          surface.style.setProperty('--glint-y', `${(y + 1) * 50}%`)
          frame = moving ? requestAnimationFrame(tick) : 0
        }
        const schedule = () => {
          if (frame) return
          previous = performance.now()
          frame = requestAnimationFrame(tick)
        }
        const enter = () => { bounds = surface.getBoundingClientRect() }
        const move = (event) => {
          if (event.pointerType !== 'mouse') return
          bounds ??= surface.getBoundingClientRect()
          targetX = Math.max(-1, Math.min(1, (event.clientX - bounds.left) / bounds.width * 2 - 1))
          targetY = Math.max(-1, Math.min(1, (event.clientY - bounds.top) / bounds.height * 2 - 1))
          schedule()
        }
        const leave = () => {
          targetX = 0
          targetY = 0
          bounds = null
          if (x || y || vx || vy) schedule()
        }
        const stop = () => {
          cancelAnimationFrame(frame)
          frame = 0
          x = y = vx = vy = targetX = targetY = 0
          bounds = null
          properties.forEach((property) => surface.style.removeProperty(property))
        }
        const visibility = () => { if (document.hidden) stop() }
        surface.addEventListener('pointerenter', enter)
        surface.addEventListener('pointermove', move)
        surface.addEventListener('pointerleave', leave)
        window.addEventListener('blur', stop)
        window.addEventListener('scroll', leave, { passive: true })
        window.addEventListener('resize', leave)
        document.addEventListener('visibilitychange', visibility)
        return () => {
          stop()
          surface.removeEventListener('pointerenter', enter)
          surface.removeEventListener('pointermove', move)
          surface.removeEventListener('pointerleave', leave)
          window.removeEventListener('blur', stop)
          window.removeEventListener('scroll', leave)
          window.removeEventListener('resize', leave)
          document.removeEventListener('visibilitychange', visibility)
          surface.classList.remove('motion-depth')
          glint.remove()
        }
      })
      dispose = () => cleanups.forEach((cleanup) => cleanup())
    }
    configure()
    preference.addEventListener('change', configure)
    return () => {
      dispose()
      preference.removeEventListener('change', configure)
    }
  }, [container])
}
