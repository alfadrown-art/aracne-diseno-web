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
            <p className="text-aracne-body text-lg leading-relaxed mb-6">
              {c.subtitle}
            </p>
            {/* Trust row */}
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                {['#6832C5','#8B5CF6','#A78BFA','#C4B5FD'].map((color, i) => (
                  <div
                    key={i}
                    className="w-9 h-9 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: color, zIndex: 10 - i }}
                  >
                    {['R','U','M','P'][i]}
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-aracne-text">6+ empresas activas</p>
                <p className="text-xs text-aracne-muted">Red Lab, Unelia, By Mumo y más</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  )
}
