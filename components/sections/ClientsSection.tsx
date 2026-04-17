import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface ClientsSectionProps {
  dict: Dict
}

/* Real Aracne clients */
const clients = [
  'Red Lab',
  'Unelia',
  'By Mumo',
  'El Racó del Carnívor',
  'Pointer Legal',
  'Mundialito',
]

export default function ClientsSection({ dict }: ClientsSectionProps) {
  return (
    <section className="bg-aracne-dark py-12">
      <div className="container-narrow">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/40 text-center mb-8">
          {dict.clients.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-medium text-white/30 tracking-wide hover:text-white/60 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
