import { CheckCircle2, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface CrmHomeSectionProps {
  dict: Dict
}

/* Stats for this section */
const stats = [
  { value: '50+', label: 'Proyectos' },
  { value: '6', label: 'Clientes activos' },
  { value: '100%', label: 'Satisfacción' },
  { value: '24/7', label: 'Soporte IA' },
]

export default function CrmHomeSection({ dict }: CrmHomeSectionProps) {
  const c = dict.crm_home
  return (
    <>
      {/* Stats strip — light bg */}
      <section className="bg-aracne-bg py-16 border-t border-aracne-border">
        <div className="container-narrow">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl md:text-5xl text-aracne-text mb-2">{s.value}</p>
                <p className="text-sm text-aracne-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Enterprise — dark bg */}
      <section className="bg-aracne-dark section-padding overflow-hidden relative">
        {/* Subtle accent glow */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-aracne-purple/8 rounded-full blur-[80px] pointer-events-none" />

        <div className="relative container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <FadeIn>
              <div className="space-y-6">
                <p className="label-tag text-aracne-purple/70">{c.label}</p>
                <div>
                  <span className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-full mb-4">
                    ★ {c.badge}
                  </span>
                  <h2 className="text-4xl md:text-5xl text-white leading-tight">
                    {c.title}
                  </h2>
                </div>
                <p className="text-white/55 text-base leading-relaxed max-w-lg">
                  {c.description}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20quiero%20solicitar%20una%20demo%20del%20CRM%20Enterprise`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-purple inline-flex"
                >
                  {c.cta} <ArrowRight size={15} />
                </a>
              </div>
            </FadeIn>

            {/* Right: features card */}
            <FadeIn delay={0.15}>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
                <ul className="space-y-4">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <CheckCircle2 size={17} className="text-aracne-purple flex-shrink-0" />
                      <span className="text-white/75 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
