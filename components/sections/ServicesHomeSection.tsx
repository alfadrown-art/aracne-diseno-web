import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface ServicesHomeSectionProps {
  dict: Dict
}

const numbers = ['01.', '02.', '03.', '04.']

export default function ServicesHomeSection({ dict }: ServicesHomeSectionProps) {
  const s = dict.services_home
  return (
    <section className="section-padding bg-aracne-bg">
      <div className="container-narrow">
        {/* Header */}
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <SectionLabel>{s.label}</SectionLabel>
            <h2 className="text-4xl md:text-5xl text-aracne-text leading-tight mb-4">
              {s.title}{' '}
              <span className="text-aracne-purple">{s.title2}</span>
            </h2>
            <p className="text-aracne-body text-lg leading-relaxed">{s.subtitle}</p>
          </div>
        </FadeIn>

        {/* Numbered service rows */}
        <div className="space-y-4">
          {s.items.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.07}>
              <div className="group bg-aracne-card rounded-2xl border border-aracne-border hover:border-aracne-purple/30 hover:shadow-card transition-all duration-200 px-7 py-7">
                <div className="flex flex-col sm:flex-row sm:items-center gap-5">
                  {/* Number */}
                  <span className="text-2xl text-aracne-purple/40 font-medium flex-shrink-0 w-14">
                    {numbers[i]}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg text-aracne-text sm:w-64 flex-shrink-0 leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-aracne-body text-sm leading-relaxed flex-1">
                    {item.description}
                  </p>

                  {/* Link */}
                  <Link
                    href="/servicios"
                    className="inline-flex items-center gap-1.5 text-sm text-aracne-purple font-medium hover:gap-3 transition-all flex-shrink-0"
                  >
                    Ver más <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="text-center mt-10">
            <Link href="/servicios" className="btn-purple">
              {s.cta} <ArrowRight size={15} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
