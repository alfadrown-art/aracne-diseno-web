import Link from 'next/link'
import { Code2, Bot, TrendingUp, Brain, ArrowRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const iconMap: Record<string, React.ElementType> = { Code2, Bot, TrendingUp, Brain }

interface ServicesHomeSectionProps {
  dict: Dict
}

export default function ServicesHomeSection({ dict }: ServicesHomeSectionProps) {
  const s = dict.services_home
  return (
    <section className="section-padding bg-aracne-bg relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none opacity-60" />
      {/* Accent orb */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-aracne-cyan/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container-narrow">
        <FadeIn>
          <div className="max-w-2xl mb-14">
            <SectionLabel>{s.label}</SectionLabel>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              {s.title}{' '}
              <span className="text-gradient-static">{s.title2}</span>
            </h2>
            <p className="text-white/50 text-lg leading-relaxed">{s.subtitle}</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {s.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2
            return (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="group glass-card glass-card-hover p-7 h-full">
                  <div className="w-10 h-10 rounded-lg bg-aracne-emerald/10 border border-aracne-emerald/20 flex items-center justify-center mb-5 group-hover:bg-aracne-emerald/20 group-hover:border-aracne-emerald/40 transition-all">
                    <Icon size={20} className="text-aracne-emerald" />
                  </div>
                  <h3 className="font-semibold text-white mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-white/50 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </FadeIn>
            )
          })}
        </div>

        <FadeIn delay={0.3}>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-aracne-emerald hover:gap-3 transition-all"
          >
            {s.cta} <ArrowRight size={15} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
