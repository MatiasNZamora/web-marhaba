import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { Link, type LinkProps as RouterLinkProps } from 'react-router-dom'
import clsx from 'clsx'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-body text-sm font-semibold tracking-wide transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-gold'

const variants = {
  primary: 'bg-brick text-sand hover:bg-brick-deep',
  outline: 'border border-gold/60 text-sand hover:bg-gold/10',
  ghost: 'text-sand hover:text-gold',
}

interface CommonProps {
  variant?: keyof typeof variants
  children: ReactNode
  className?: string
}

type ButtonProps = CommonProps & ButtonHTMLAttributes<HTMLButtonElement>
type LinkProps = CommonProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }
type RouterButtonLinkProps = CommonProps & RouterLinkProps

export function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <button className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </button>
  )
}

/** Link externo (WhatsApp, mapas, redes) — usa <a> nativo. */
export function ButtonLink({ variant = 'primary', className, children, href, ...props }: LinkProps) {
  return (
    <a href={href} className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </a>
  )
}

/** Navegación interna (SPA) — usa react-router Link, evita recargar la página. */
export function RouterButtonLink({ variant = 'primary', className, children, ...props }: RouterButtonLinkProps) {
  return (
    <Link className={clsx(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  )
}
