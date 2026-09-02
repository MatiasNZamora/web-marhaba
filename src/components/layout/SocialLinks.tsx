import clsx from 'clsx'
import { site } from '@/data/site'
import { buildWhatsAppLink, whatsappOrderMessage } from '@/lib/whatsapp'

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M13.5 21v-7.9h2.65l.4-3.08h-3.05V8.05c0-.89.25-1.5 1.52-1.5h1.63V3.8c-.28-.04-1.25-.12-2.38-.12-2.35 0-3.97 1.44-3.97 4.07v2.27H7.65v3.08h2.65V21h3.2Z" />
    </svg>
  )
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.77.46 3.45 1.35 4.95L2 22l5.31-1.39a9.9 9.9 0 0 0 4.73 1.2h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.83 14.02c-.25.7-1.24 1.28-2.02 1.44-.54.11-1.24.2-3.6-.77-2.98-1.24-4.9-4.24-5.05-4.44-.15-.2-1.2-1.6-1.2-3.06 0-1.46.76-2.17 1.03-2.47.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.86 2.06.93 2.21.07.15.12.33.02.53-.1.2-.15.32-.3.49-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.31 2.36 1.46.3.15.47.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.77.83 2.07.99.3.15.5.22.57.35.07.13.07.75-.18 1.45Z" />
    </svg>
  )
}

interface SocialLinksProps {
  className?: string
  iconClassName?: string
}

export function SocialLinks({ className, iconClassName }: SocialLinksProps) {
  const links = [
    { label: 'Instagram', href: site.contact.instagram, Icon: InstagramIcon },
    { label: 'Facebook', href: site.contact.facebook, Icon: FacebookIcon },
    { label: 'WhatsApp', href: buildWhatsAppLink(whatsappOrderMessage()), Icon: WhatsAppIcon },
  ]

  return (
    <div className={clsx('flex items-center gap-4', className)}>
      {links.map(({ label, href, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className={clsx('text-sand/70 transition-colors hover:text-gold', iconClassName)}
        >
          <Icon />
        </a>
      ))}
    </div>
  )
}
