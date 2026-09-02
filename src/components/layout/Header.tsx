import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import clsx from 'clsx'
import { navLinks, homeSectionIds } from '@/data/nav'
import { useActiveSection } from '@/hooks/useActiveSection'
import { MobileNav } from './MobileNav'
import { SocialLinks } from './SocialLinks'

export function Header() {
  const location = useLocation()
  const isHome = location.pathname === '/'
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const active = useActiveSection(isHome ? homeSectionIds : [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isLinkActive = (link: (typeof navLinks)[number]) => {
    if (link.href === '/carta') return location.pathname === '/carta'
    return isHome && active === link.id
  }

  return (
    <header
      className={clsx(
        'fixed inset-x-0 top-0 z-40 transition-colors duration-300',
        scrolled ? 'bg-charcoal/90 backdrop-blur-sm shadow-lg shadow-black/20' : 'bg-transparent',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo-512.png" alt="Marhaba" className="h-14 w-14 object-contain" />
          <span className="font-display text-xl text-sand">Marhaba</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.href}
              className={clsx(
                'font-body text-sm uppercase tracking-wide transition-colors',
                isLinkActive(link) ? 'text-gold' : 'text-sand/80 hover:text-sand',
              )}
            >
              {link.label}
            </Link>
          ))}
          <SocialLinks className="border-l border-gold/20 pl-6" />
        </nav>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={mobileOpen}
          className="flex h-10 w-10 items-center justify-center text-sand md:hidden"
          onClick={() => setMobileOpen(true)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>

      <MobileNav
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        activeId={isHome ? active : undefined}
      />
    </header>
  )
}
