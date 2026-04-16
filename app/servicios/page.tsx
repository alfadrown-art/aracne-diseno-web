import type { Metadata } from 'next'
import { Code2, Bot, TrendingUp, Brain, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { getDict } from '@/lib/i18n'
import PageHeader from '@/components/common/PageHeader'
import FadeIn from '@/components/common/FadeIn'
import CtaBandSection from '@/components/sections/CtaBandSection'

export const metadata: Metadata = {
  title: 'Servicios',
  description:
    'Apps a medida, agentes IA 24/7, marketing inteligente y análisis de datos con IA para empresas en España.',
}

const iconMap: Record<string, React.ElementType> = { Code2, Bot, TrendingUp, Brain }

export default async function ServiciosPage() {
  const dict = await getDict()
  const s = dict.services_page

  return (
    <>
      <PageHeader title={s.title} subtitle={s.subtitle} />

      <section className="section-padding bg-white">
        <div className="container-narrow space-y-16">
          {s.items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Code2
            const isEven = i % 2 === 0
            return (
              <FadeIn key={item.title} delay={0.05}>
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${!isEven ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Text */}
                  <div className="space-y-5">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-aracne-emerald/10">
                      <Icon size={22} className="text-aracne-emerald" />
                    </div>
                    <h2 className="text-3xl font-bold text-aracne-text">{item.title}</h2>
                    <p className="text-aracne-muted leading-relaxed">{item.description}</p>

                    <ul className="space-y-2.5 pt-2">
                      {item.benefits.map((b) => (
                        <li key={b} className="flex items-start gap-2.5">
                          <CheckCircle2
                            size={16}
                            className="text-aracne-emerald flex-shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-aracne-text">{b}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contacto"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-aracne-emerald hover:gap-3 transition-all"
                    >
                      Solicitar información <ArrowRight size={14} />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className="rounded-2xl border border-aracne-border bg-aracne-card/60 aspect-[4/3] flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-16 h-16 rounded-2xl bg-aracne-emerald/10 flex items-center justify-center mx-auto mb-4">
                        <Icon size={30} className="text-aracne-emerald" />
                      </div>
                      <p className="text-sm font-semibold text-aracne-text">{item.title}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )
          })}
        </div>
      </section>

      <CtaBandSection dict={dict} />
    </>
  )
}
