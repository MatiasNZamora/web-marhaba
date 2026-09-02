import { useEffect } from 'react'

/** Bloquea el scroll del body mientras `locked` sea true (overlays, lightbox, menú móvil). */
export function useLockScroll(locked: boolean) {
  useEffect(() => {
    if (!locked) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original
    }
  }, [locked])
}
