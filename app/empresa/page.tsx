import type { Metadata } from 'next'
import Image from 'next/image'
import { getDict } from '@/lib/i18n'
import PageHeader from '@/components/common/PageHeader'
import FadeIn from '@/components/common/FadeIn'
import SectionLabel from '@/components/common/SectionLabel'
import CtaBandSection from '@/components/sections/CtaBandSection'

export const metadata: Metadata = {
  title: 'Empresa',
  description:
    'Conoce Aracne Consulting: nuestra misión, valores y los partners tecnológicos con los que trabajamos.',
}

const partnerImages = [
  '/partners/anthropic.svg',
  '/partners/unelia.svg',
  '/partners/meta.svg',
]

export default async function EmpresaPage() {
  const dict = await getDict()
  const c = dict.company_page

  return (
    <>
      <PageHeader label={c.label} title={c.title + ' ' + c.title2} />

      {/* About */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
            <FadeIn>
              <p className="text-lg text-aracne-muted leading-relaxed">{c.description}</p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="rounded-2xl border border-aracne-border bg-aracne-card/50 p-8 space-y-4">
                <SectionLabel>{c.mission_label}</SectionLabel>
                <blockquote className="text-xl font-semibold text-aracne-text leading-relaxed border-l-4 border-aracne-emerald pl-5">
                  &ldquo;{c.mission}&rdquo;
                </blockquote>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-aracne-card/40 border-y border-aracne-border">
        <div className="container-narrow">
          <FadeIn>
            <SectionLabel>{c.values_label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-aracne-text mb-12">
              Lo que guía nuestro trabajo
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {c.values.map((v, i) => (
              <FadeIn key={v.title} delay={i * 0.08}>
                <div className="bg-white rounded-xl border border-aracne-border p-7 hover:border-aracne-emerald hover:shadow-card-hover transition-all duration-300">
                  <div className="w-8 h-8 rounded-lg bg-aracne-emerald flex items-center justify-center text-white font-bold text-sm mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 className="font-semibold text-aracne-text mb-2">{v.title}</h3>
                  <p className="text-sm text-aracne-muted leading-relaxed">{v.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding bg-white">
        <div className="container-narrow">
          <FadeIn>
            <SectionLabel>{c.partners_label}</SectionLabel>
            <h2 className="text-3xl md:text-4xl font-bold text-aracne-text mb-12">
              Tecnología de primer nivel
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {c.partners.map((p, i) => (
              <FadeIn key={p.name} delay={i * 0.1}>
                <div className="rounded-xl border border-aracne-border bg-aracne-card/50 p-8 hover:border-aracne-emerald hover:shadow-card transition-all duration-300 text-center">
                  <div className="flex justify-center mb-5">
                    <Image
                      src={partnerImages[i]}
                      alt={p.name}
                      width={120}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </div>
                  <p className="text-sm text-aracne-muted leading-relaxed">{p.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CtaBandSection dict={dict} />
    </>
  )
}
