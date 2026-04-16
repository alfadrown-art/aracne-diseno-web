import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface ClientsSectionProps {
  dict: Dict
}

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
    <section className="border-y border-white/5 bg-aracne-dark/60 py-10">
      <div className="container-narrow">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/30 text-center mb-8">
          {dict.clients.label}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-5">
          {clients.map((name) => (
            <span
              key={name}
              className="text-sm font-semibold text-white/25 tracking-wide hover:text-white/50 transition-colors"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
