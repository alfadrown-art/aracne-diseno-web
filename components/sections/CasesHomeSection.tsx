import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface CasesHomeSectionProps {
  dict: Dict
}

const tagColors: Record<string, string> = {
  CRM: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  App: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  'Agente IA': 'bg-aracne-emerald/10 text-aracne-emerald border-aracne-emerald/20',
  'AI Agent': 'bg-aracne-emerald/10 text-aracne-emerald border-aracne-emerald/20',
}

export default function CasesHomeSection({ dict }: CasesHomeSectionProps) {
  const c = dict.cases_home
  return (
    <section className="section-padding bg-aracne-dark relative overflow-hidden">
      {/* Orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-aracne-emerald/4 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container-narrow">
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <SectionLabel>{c.label}</SectionLabel>
              <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                {c.title}{' '}
                <span className="text-gradient-static">{c.title2}</span>
              </h2>
            </div>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-sm font-semibold text-aracne-emerald hover:gap-3 transition-all flex-shrink-0"
            >
              {c.cta} <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {c.items.map((item, i) => {
            const tagClass = tagColors[item.tag] ?? 'bg-white/5 text-white/50 border-white/10'
            return (
              <FadeIn key={item.title} delay={i * 0.1}>
                <div className="group glass-card glass-card-hover p-7 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagClass}`}>
                      {item.tag}
                    </span>
                    <ArrowUpRight
                      size={16}
                      className="text-white/20 group-hover:text-aracne-emerald transition-colors"
                    />
                  </div>

                  {/* Placeholder image area */}
                  <div className="w-full h-36 bg-gradient-to-br from-white/5 to-aracne-emerald/5 rounded-lg mb-5 flex items-center justify-center border border-white/5">
                    <span className="text-xs font-semibold text-white/20 uppercase tracking-wider">
                      {item.sector}
                    </span>
                  </div>

                  <h3 className="font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Result */}
                  <div className="mt-5 pt-4 border-t border-white/10">
                    <span className="text-sm font-semibold text-aracne-emerald/80">
                      {item.result}
                    </span>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </div>
    </section>
  )
}
