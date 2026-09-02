import { RouterButtonLink } from '@/components/ui/Button'

export function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-charcoal px-6 text-center">
      <p className="font-arabic text-2xl text-gold">عذرا</p>
      <h1 className="font-display text-4xl text-sand">Página no encontrada</h1>
      <p className="max-w-md text-sand-dim">
        Esta página no existe, pero podés volver al inicio o ver nuestra carta completa.
      </p>
      <div className="flex gap-4">
        <RouterButtonLink to="/" variant="primary">
          Ir al inicio
        </RouterButtonLink>
        <RouterButtonLink to="/carta" variant="outline">
          Ver carta
        </RouterButtonLink>
      </div>
    </main>
  )
}
