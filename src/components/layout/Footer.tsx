import { site } from '@/data/site'
import { buildWhatsAppLink, whatsappOrderMessage } from '@/lib/whatsapp'

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold/20 bg-charcoal-soft py-14">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-16 opacity-10"
        style={{ backgroundImage: 'url(/patterns/brick.svg)', backgroundSize: '80px 40px' }}
      />
      <div className="mx-auto grid max-w-6xl gap-10 px-6 sm:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <img src="/logo-512.png" alt="Marhaba" className="h-10 w-10 object-contain" />
            <span className="font-display text-xl text-sand">Marhaba</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-sand-dim">{site.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-gold">Contacto</h3>
          <ul className="mt-3 space-y-2 text-sm text-sand-dim">
            <li>{site.address.street}</li>
            <li>{site.address.city}</li>
            <li>
              <a
                href={buildWhatsAppLink(whatsappOrderMessage())}
                target="_blank"
                rel="noreferrer"
                className="hover:text-gold"
              >
                {site.contact.whatsappDisplay}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm uppercase tracking-widest text-gold">Seguinos</h3>
          <ul className="mt-3 space-y-2 text-sm text-sand-dim">
            <li>
              <a href={site.contact.instagram} target="_blank" rel="noreferrer" className="hover:text-gold">
                Instagram {site.contact.instagramHandle}
              </a>
            </li>
            <li>
              <a href={site.contact.facebook} target="_blank" rel="noreferrer" className="hover:text-gold">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl px-6 text-xs text-sand-dim/60">
        © {new Date().getFullYear()} Marhaba. Todos los derechos reservados.
      </p>
    </footer>
  )
}
