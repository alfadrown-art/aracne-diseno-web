import { CheckCircle2, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import FadeIn from '@/components/common/FadeIn'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface CrmHomeSectionProps {
  dict: Dict
}

export default function CrmHomeSection({ dict }: CrmHomeSectionProps) {
  const c = dict.crm_home
  return (
    <section className="bg-aracne-surface section-padding overflow-hidden relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />
      {/* Orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-aracne-emerald/8 rounded-full blur-[80px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-aracne-cyan/5 rounded-full blur-[60px] pointer-events-none" />

      <div className="relative container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <FadeIn>
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-aracne-emerald/80">
                  {c.label}
                </span>
              </div>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-bold text-yellow-400 bg-yellow-400/10 border border-yellow-400/20 px-3 py-1.5 rounded-full mb-5">
                  ★ {c.badge}
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  {c.title}
                </h2>
              </div>
              <p className="text-white/60 text-base leading-relaxed max-w-lg">
                {c.description}
              </p>
              <Button
                asChild
                size="lg"
                className="bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold"
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hola,%20quiero%20solicitar%20una%20demo%20del%20CRM%20Enterprise`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {c.cta} <ArrowRight size={15} className="ml-2" />
                </a>
              </Button>
            </div>
          </FadeIn>

          {/* Right: features */}
          <FadeIn delay={0.15}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <ul className="space-y-4">
                {c.features.map((f) => (
                  <li key={f} className="flex items-center gap-3">
                    <CheckCircle2 size={17} className="text-aracne-emerald flex-shrink-0" />
                    <span className="text-white/80 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
