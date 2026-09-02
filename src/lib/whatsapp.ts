import { site } from '@/data/site'

/** Único lugar que arma links de WhatsApp — nunca construir el link a mano. */
export function buildWhatsAppLink(message?: string): string {
  const base = `https://wa.me/${site.contact.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}

export function whatsappOrderMessage(itemName?: string): string {
  if (itemName) {
    return `Hola Marhaba! Quiero pedir: ${itemName}`
  }
  return 'Hola Marhaba! Quiero hacer un pedido.'
}
