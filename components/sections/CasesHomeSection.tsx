import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface CasesHomeSectionProps {
  dict: Dict
}

/* Placeholder abstract image for each case */
function CasePlaceholder({ index }: { index: number }) {
  const gradients = [
    ['#6832C5', '#A78BFA'],
    ['#8B5CF6', '#C4B5FD'],
    ['#7C3AED', '#DDD6FE'],
  ]
  const [from, to] = gradients[index % gradients.length]
  return (
    <div
      className="w-full h-full rounded-2xl flex items-center justify-center"
      style={{ background: `linear-gradient(135deg, ${from}22 0%, ${to}33 100%)` }}
    >
      <svg viewBox="0 0 200 200" className="w-2/3 h-2/3 opacity-40" fill="none">
        <circle cx="100" cy="100" r="80" stroke={from} strokeWidth="1.5" strokeDasharray="6 4"/>
        <circle cx="100" cy="100" r="55" fill={from} fillOpacity="0.15"/>
        <circle cx="100" cy="100" r="28" fill={from} fillOpacity="0.3"/>
        <circle cx="100" cy="100" r="10" fill={from} fillOpacity="0.7"/>
      </svg>
    </div>
  )
}

export default function CasesHomeSection({ dict }: CasesHomeSectionProps) {
  const c = dict.cases_home
  return (
    <section className="section-padding bg-aracne-dark overflow-hidden">
      <div className="container-narrow">
        {/* Header */}
        <FadeIn>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
            <div>
              <p className="label-tag text-aracne-purple/80">{c.label}</p>
              <h2 className="text-4xl md:text-5xl text-white leading-tight">
                {c.title}{' '}
                <span className="text-gradient">{c.title2}</span>
              </h2>
            </div>
            <Link
              href="/casos"
              className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white hover:gap-3 transition-all flex-shrink-0"
            >
              {c.cta} <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>

        {/* Alternating feature cards */}
        <div className="space-y-6">
          {c.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.08}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-0 rounded-2xl overflow-hidden border border-white/10 ${i % 2 === 1 ? 'direction-rtl' : ''}`}>
                {/* Image */}
                <div className={`h-56 md:h-64 ${i % 2 === 1 ? 'md:order-last' : ''}`}>
                  <CasePlaceholder index={i} />
                </div>

                {/* Content */}
                <div className="bg-white/5 p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-aracne-purple bg-aracne-purple/10 border border-aracne-purple/20 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-xs text-white/30">{item.sector}</span>
                  </div>
                  <h3 className="text-xl text-white mb-3 leading-snug">{item.title}</h3>
                  <p className="text-sm text-white/50 leading-relaxed mb-5">{item.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-aracne-purple/80">{item.result}</span>
                    <Link
                      href="/casos"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-aracne-purple hover:gap-3 transition-all"
                    >
                      Ver caso <ArrowRight size={13} />
                    </Link>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
