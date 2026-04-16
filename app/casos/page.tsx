import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import { getDict } from '@/lib/i18n'
import PageHeader from '@/components/common/PageHeader'
import FadeIn from '@/components/common/FadeIn'
import CtaBandSection from '@/components/sections/CtaBandSection'

export const metadata: Metadata = {
  title: 'Casos de éxito',
  description:
    'Casos reales de transformación digital con IA: CRM, apps, agentes inteligentes y marketing digital para empresas en España.',
}

const tagColors: Record<string, string> = {
  CRM: 'bg-blue-50 text-blue-700 border-blue-100',
  App: 'bg-purple-50 text-purple-700 border-purple-100',
  'Agente IA': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  'AI Agent': 'bg-emerald-50 text-emerald-700 border-emerald-100',
  Portal: 'bg-indigo-50 text-indigo-700 border-indigo-100',
  'Integración': 'bg-orange-50 text-orange-700 border-orange-100',
  Integration: 'bg-orange-50 text-orange-700 border-orange-100',
  'Marketing IA': 'bg-pink-50 text-pink-700 border-pink-100',
  'AI Marketing': 'bg-pink-50 text-pink-700 border-pink-100',
}

export default async function CasosPage() {
  const dict = await getDict()
  const c = dict.cases_page

  return (
    <>
      <PageHeader title={c.title} subtitle={c.subtitle} />

      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {c.items.map((item, i) => {
              const tagClass =
                tagColors[item.tag] ?? 'bg-gray-50 text-gray-700 border-gray-100'
              return (
                <FadeIn key={item.title} delay={i * 0.07}>
                  <div className="group rounded-2xl border border-aracne-border bg-white hover:border-aracne-emerald hover:shadow-card-hover transition-all duration-300 overflow-hidden h-full flex flex-col">
                    {/* Top placeholder image */}
                    <div className="h-40 bg-gradient-to-br from-aracne-card to-aracne-emerald/8 flex items-center justify-between px-6">
                      <span
                        className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${tagClass}`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-xs font-semibold text-aracne-muted/50 uppercase tracking-wider">
                        {item.sector}
                      </span>
                    </div>

                    <div className="p-7 flex flex-col flex-1">
                      <h2 className="text-xl font-bold text-aracne-text mb-3 leading-snug">
                        {item.title}
                      </h2>
                      <p className="text-sm text-aracne-muted leading-relaxed mb-5 flex-1">
                        {item.description}
                      </p>

                      {/* Solution tag */}
                      <p className="text-xs font-semibold uppercase tracking-wider text-aracne-muted mb-3">
                        Solución: <span className="text-aracne-text normal-case tracking-normal">{item.solution}</span>
                      </p>

                      {/* Results */}
                      <ul className="space-y-1.5 pt-4 border-t border-aracne-border">
                        {item.results.map((r) => (
                          <li key={r} className="flex items-center gap-2">
                            <CheckCircle2 size={13} className="text-aracne-emerald flex-shrink-0" />
                            <span className="text-sm font-semibold text-aracne-emerald">{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA inline */}
      <section className="py-16 bg-aracne-card/40 border-t border-aracne-border">
        <div className="container-narrow text-center">
          <p className="text-aracne-muted text-lg mb-4">
            ¿Tienes un proyecto similar en mente?
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 bg-aracne-emerald text-white font-semibold px-7 py-3 rounded-lg hover:bg-aracne-emerald/90 transition-colors"
          >
            Hablar con nosotros <ArrowRight size={15} />
          </Link>
        </div>
      </section>

      <CtaBandSection dict={dict} />
    </>
  )
}
