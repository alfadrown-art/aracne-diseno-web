import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

interface CtaBandSectionProps {
  dict: Dict
}

export default function CtaBandSection({ dict }: CtaBandSectionProps) {
  const c = dict.cta_band
  return (
    <section className="relative bg-aracne-bg py-24 overflow-hidden">
      {/* Grid */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Orbs */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[600px] h-[400px] bg-aracne-emerald/8 rounded-full blur-[100px] animate-pulse-glow" />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 bg-aracne-cyan/6 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative container-narrow text-center">
        <FadeIn direction="none">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-aracne-emerald bg-aracne-emerald/10 border border-aracne-emerald/20 px-4 py-2 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-aracne-emerald animate-pulse" />
            Sin compromiso · Respuesta en 24h
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
            {c.title}
          </h2>
          <p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">{c.subtitle}</p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-bold text-base px-8 py-3.5 rounded-xl transition-all glow-emerald shadow-lg"
          >
            {c.cta} <ArrowRight size={16} />
          </Link>
        </FadeIn>
      </div>
    </section>
  )
}
