import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'motion/react'
import { useLockScroll } from '@/hooks/useLockScroll'
import { useMotionPreset } from '@/hooks/useMotionPreset'

const MIN_VISIBLE_MS = 700
const MAX_VISIBLE_MS = 2500
/** Duración de la simulación de carga al re-visitar el home (ya no hay assets reales que esperar). */
const REVISIT_DURATION_MS = 900

/** Splash con el logo — se muestra en la carga inicial y cada vez que se vuelve al home. */
export function Loader() {
  const { pathname } = useLocation()
  const [visible, setVisible] = useState(false)
  const [progress, setProgress] = useState(0)
  const { reduce } = useMotionPreset()
  const hasLoadedOnce = useRef(false)
  useLockScroll(visible)

  useEffect(() => {
    if (pathname !== '/') return

    const isFirstRun = !hasLoadedOnce.current
    hasLoadedOnce.current = true

    let cancelled = false
    const timers: number[] = []
    const start = performance.now()

    setVisible(true)
    setProgress(0)

    const progressInterval = window.setInterval(() => {
      if (cancelled) return
      setProgress((p) => (p < 90 ? p + (90 - p) * 0.15 : p))
    }, 100)

    const finish = () => {
      if (cancelled) return
      setProgress(100)
      timers.push(window.setTimeout(() => !cancelled && setVisible(false), 250))
    }

    const scheduleFinish = (afterMs: number) => {
      const elapsed = performance.now() - start
      timers.push(window.setTimeout(finish, Math.max(0, afterMs - elapsed)))
    }

    if (isFirstRun) {
      const onLoad = () => scheduleFinish(MIN_VISIBLE_MS)
      if (document.readyState === 'complete') onLoad()
      else window.addEventListener('load', onLoad, { once: true })
      timers.push(window.setTimeout(finish, MAX_VISIBLE_MS))

      return () => {
        cancelled = true
        window.removeEventListener('load', onLoad)
        window.clearInterval(progressInterval)
        timers.forEach(window.clearTimeout)
      }
    }

    scheduleFinish(REVISIT_DURATION_MS)
    return () => {
      cancelled = true
      window.clearInterval(progressInterval)
      timers.forEach(window.clearTimeout)
    }
  }, [pathname])

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-5 bg-charcoal"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduce ? 0.15 : 0.5, ease: 'easeInOut' }}
          role="status"
          aria-label="Cargando"
        >
          <motion.img
            src="/logo-512.png"
            alt="Marhaba"
            className="h-40 w-40 object-contain sm:h-56 sm:w-56"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={
              reduce ? { opacity: 1, scale: 1 } : { opacity: 1, scale: [0.92, 1.04, 0.92] }
            }
            transition={
              reduce
                ? { duration: 0.3 }
                : { scale: { duration: 1.6, repeat: Infinity, ease: 'easeInOut' }, opacity: { duration: 0.4 } }
            }
          />

          <motion.p
            className="font-arabic text-2xl text-gold"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.4 }}
          >
            مرحبا
          </motion.p>

          <motion.p
            className="-mt-2 font-display text-sm uppercase tracking-[0.3em] text-sand-dim"
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            Bienvenidos
          </motion.p>

          <div className="h-1 w-40 overflow-hidden rounded-full bg-sand/10 sm:w-48">
            <motion.div
              className="h-full rounded-full bg-gold"
              animate={{ width: `${progress}%` }}
              transition={{ duration: reduce ? 0 : 0.25, ease: 'easeOut' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
