import { AnimatePresence, motion } from 'motion/react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { navLinks } from '@/data/nav'
import { useLockScroll } from '@/hooks/useLockScroll'
import { SocialLinks } from './SocialLinks'

interface MobileNavProps {
  open: boolean
  onClose: () => void
  activeId?: string
}

export function MobileNav({ open, onClose, activeId }: MobileNavProps) {
  useLockScroll(open)

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex flex-col bg-charcoal md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="flex items-center justify-between px-6 py-4">
            <span className="font-display text-xl text-sand">Marhaba</span>
            <button
              type="button"
              aria-label="Cerrar menú"
              className="flex h-10 w-10 items-center justify-center text-sand"
              onClick={onClose}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <nav className="flex flex-1 flex-col items-center justify-center gap-8">
            {navLinks.map((link, i) => (
              <motion.div
                key={link.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 * i }}
              >
                <Link
                  to={link.href}
                  onClick={onClose}
                  className={clsx(
                    'font-display text-2xl',
                    activeId === link.id ? 'text-gold' : 'text-sand',
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex justify-center pb-10">
            <SocialLinks iconClassName="h-6 w-6 [&_svg]:h-6 [&_svg]:w-6" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
