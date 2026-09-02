import { useEffect } from 'react'
import clsx from 'clsx'
import { menu } from '@/data/menu'
import { formatPrice } from '@/lib/format'
import { buildWhatsAppLink, whatsappOrderMessage } from '@/lib/whatsapp'
import { useActiveSection } from '@/hooks/useActiveSection'
import { Reveal, RevealItem } from '@/components/ui/Reveal'
import { ButtonLink } from '@/components/ui/Button'

const categoryIds = menu.map((c) => c.id)

export function Carta() {
  const active = useActiveSection(categoryIds)

  useEffect(() => {
    document.title = 'Carta · Marhaba'
  }, [])

  return (
    <main className="min-h-screen bg-charcoal pb-24 pt-28">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal className="text-center">
          <p className="font-arabic text-xl text-gold">قائمة الطعام</p>
          <h1 className="mt-2 font-display text-4xl text-sand">Nuestra carta</h1>
          <p className="mt-3 text-sand-dim">
            Precios para llevar y en salón. Pedí directo por WhatsApp tocando cualquier plato.
          </p>
        </Reveal>

        <nav className="sticky top-16 z-20 -mx-6 mt-8 overflow-x-auto bg-charcoal/95 px-6 py-3 backdrop-blur-sm">
          <div className="flex w-max gap-2 sm:w-full sm:justify-center">
            {menu.map((cat) => (
              <a
                key={cat.id}
                href={`#${cat.id}`}
                className={clsx(
                  'whitespace-nowrap rounded-full border px-4 py-1.5 text-sm transition-colors',
                  active === cat.id
                    ? 'border-gold bg-gold/10 text-gold'
                    : 'border-gold/20 text-sand-dim hover:text-sand',
                )}
              >
                {cat.title}
              </a>
            ))}
          </div>
        </nav>

        <div className="mt-10 space-y-16">
          {menu.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-32">
              <Reveal>
                <div className="mb-6 flex items-end justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl text-gold">{cat.title}</h2>
                    {cat.subtitle && <p className="mt-1 text-sm text-sand-dim">{cat.subtitle}</p>}
                  </div>
                  <ButtonLink
                    href={buildWhatsAppLink(whatsappOrderMessage(cat.title))}
                    target="_blank"
                    rel="noreferrer"
                    variant="outline"
                    className="hidden shrink-0 sm:inline-flex"
                  >
                    Pedir {cat.title}
                  </ButtonLink>
                </div>

                <Reveal stagger className="divide-y divide-gold/10 rounded-2xl border border-gold/15">
                  {cat.items.map((item) => (
                    <RevealItem
                      key={item.id}
                      className="flex flex-col gap-2 p-4 sm:flex-row sm:items-center sm:justify-between"
                    >
                      <div>
                        <p className="text-sand">{item.name}</p>
                        {item.description && <p className="text-sm text-sand-dim">{item.description}</p>}
                        {item.note && <p className="text-xs text-gold/80">{item.note}</p>}
                      </div>

                      <div className="flex shrink-0 items-center gap-4 text-sm">
                        {item.price !== undefined && (
                          <span className="font-display text-gold">{formatPrice(item.price)}</span>
                        )}
                        {item.priceTakeaway !== undefined && (
                          <span className="text-sand-dim">
                            Para llevar <span className="text-sand">{formatPrice(item.priceTakeaway)}</span>
                          </span>
                        )}
                        {item.priceDineIn !== undefined && (
                          <span className="text-sand-dim">
                            Salón <span className="text-sand">{formatPrice(item.priceDineIn)}</span>
                          </span>
                        )}
                      </div>
                    </RevealItem>
                  ))}
                </Reveal>
              </Reveal>
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
