import { useState } from 'react'
export default function useDemoState(key, initial, validate) {
  const storageKey = `pixeltech:demo:v1:${key}`
  const [state, setState] = useState(() => {
    try {
      const saved = JSON.parse(sessionStorage.getItem(storageKey))
      return saved && validate(saved) ? saved : structuredClone(initial)
    } catch {
      return structuredClone(initial)
    }
  })
  const update = (next) => {
    setState(next)
    try {
      sessionStorage.setItem(storageKey, JSON.stringify(next))
    } catch {
      /* Storage can be disabled; the demo still works in memory. */
    }
  }
  return [state, update, () => update(structuredClone(initial))]
}
