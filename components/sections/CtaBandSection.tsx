import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import FadeIn from '@/components/common/FadeIn'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface CtaBandSectionProps {
  dict: Dict
}

export default function CtaBandSection({ dict }: CtaBandSectionProps) {
  const c = dict.cta_band
  return (
    <section className="cta-gradient py-24 overflow-hidden relative">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <FadeIn>
            <p className="label-tag">Empezar ahora</p>
            <h2 className="text-4xl md:text-5xl text-aracne-text leading-tight mb-8">
              {c.title}
            </h2>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contacto" className="btn-purple">
                {c.cta} <ArrowRight size={15} />
              </Link>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                WhatsApp
              </a>
            </div>
          </FadeIn>

          {/* Right */}
          <FadeIn delay={0.12}>
            <p className="text-aracne-body text-lg leading-relaxed">
              {c.subtitle}
            </p>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
