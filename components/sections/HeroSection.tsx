import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface HeroSectionProps {
  dict: Dict
}

function NeuralNetwork() {
  return (
    <svg
      viewBox="0 0 560 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="node-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#22C55E" stopOpacity="0.4"/>
          <stop offset="100%" stopColor="#22C55E" stopOpacity="0"/>
        </radialGradient>
        <radialGradient id="node-glow-cyan" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#06B6D4" stopOpacity="0.3"/>
          <stop offset="100%" stopColor="#06B6D4" stopOpacity="0"/>
        </radialGradient>
        <filter id="glow-filter">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central hub glow */}
      <circle cx="280" cy="240" r="80" fill="url(#node-glow)" />

      {/* Central hub */}
      <circle cx="280" cy="240" r="42" fill="#22C55E" fillOpacity="0.08" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.4"/>
      <circle cx="280" cy="240" r="26" fill="#22C55E" fillOpacity="0.12" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.6"/>
      <circle cx="280" cy="240" r="12" fill="#22C55E" filter="url(#glow-filter)"/>

      {/* Spoke nodes */}
      {[
        { cx: 160, cy: 140 },
        { cx: 400, cy: 130 },
        { cx: 430, cy: 290 },
        { cx: 320, cy: 360 },
        { cx: 150, cy: 320 },
        { cx: 95, cy: 215 },
      ].map((n, i) => (
        <g key={i}>
          <line
            x1="280" y1="240" x2={n.cx} y2={n.cy}
            stroke="#22C55E" strokeWidth="1" strokeOpacity="0.25" strokeDasharray="4 4"
          />
          <circle cx={n.cx} cy={n.cy} r="30" fill="url(#node-glow)" />
          <circle cx={n.cx} cy={n.cy} r="8" fill="#22C55E" fillOpacity="0.1" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.5"/>
          <circle cx={n.cx} cy={n.cy} r="3.5" fill="#22C55E" filter="url(#glow-filter)"/>
        </g>
      ))}

      {/* Satellite nodes */}
      {[
        { cx: 100, cy: 100, c: '#06B6D4' },
        { cx: 200, cy: 80, c: '#22C55E' },
        { cx: 460, cy: 80, c: '#06B6D4' },
        { cx: 490, cy: 190, c: '#22C55E' },
        { cx: 490, cy: 380, c: '#06B6D4' },
        { cx: 370, cy: 420, c: '#22C55E' },
        { cx: 200, cy: 400, c: '#06B6D4' },
        { cx: 80, cy: 380, c: '#22C55E' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.cx} cy={n.cy} r="20" fill={n.c} fillOpacity="0.06" />
          <circle cx={n.cx} cy={n.cy} r="4" fill={n.c} fillOpacity="0.5" stroke={n.c} strokeWidth="1" strokeOpacity="0.4"/>
        </g>
      ))}

      {/* Connection arcs */}
      <path d="M160 140 Q130 90 100 100" stroke="#22C55E" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
      <path d="M400 130 Q430 90 460 80" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
      <path d="M430 290 Q475 335 490 380" stroke="#22C55E" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>
      <path d="M150 320 Q120 360 80 380" stroke="#06B6D4" strokeWidth="0.8" strokeOpacity="0.2" fill="none"/>

      {/* Floating glass card — top right */}
      <g transform="translate(390, 55)">
        <rect width="136" height="58" rx="10" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <rect x="12" y="14" width="36" height="6" rx="3" fill="#22C55E" fillOpacity="0.5"/>
        <rect x="12" y="26" width="110" height="3" rx="1.5" fill="white" fillOpacity="0.1"/>
        <rect x="12" y="35" width="80" height="3" rx="1.5" fill="white" fillOpacity="0.07"/>
        <circle cx="114" cy="20" r="8" fill="#22C55E" fillOpacity="0.2"/>
        <circle cx="114" cy="20" r="4" fill="#22C55E" filter="url(#glow-filter)"/>
      </g>

      {/* Floating glass card — bottom left */}
      <g transform="translate(55, 338)">
        <rect width="124" height="54" rx="10" fill="white" fillOpacity="0.05" stroke="white" strokeOpacity="0.12" strokeWidth="1"/>
        <rect x="12" y="12" width="100" height="5" rx="2.5" fill="white" fillOpacity="0.12"/>
        <rect x="12" y="24" width="72" height="4" rx="2" fill="white" fillOpacity="0.07"/>
        <rect x="12" y="34" width="57" height="4" rx="2" fill="#06B6D4" fillOpacity="0.4"/>
      </g>

      {/* Stat badge */}
      <g transform="translate(428, 328)">
        <rect width="100" height="46" rx="23" fill="#22C55E" fillOpacity="0.08" stroke="#22C55E" strokeWidth="1" strokeOpacity="0.3"/>
        <text x="50" y="20" textAnchor="middle" fill="#22C55E" fontFamily="Inter, sans-serif" fontWeight="700" fontSize="13">+40%</text>
        <text x="50" y="34" textAnchor="middle" fill="#22C55E" fontFamily="Inter, sans-serif" fontSize="9" fillOpacity="0.6">conversión</text>
      </g>
    </svg>
  )
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const h = dict.hero
  return (
    <section className="relative bg-aracne-bg section-padding overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 grid-bg pointer-events-none" />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-aracne-emerald/8 rounded-full blur-[120px] pointer-events-none animate-orb-drift" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-aracne-cyan/6 rounded-full blur-[100px] pointer-events-none animate-orb-drift-reverse" />

      <div className="relative container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: text */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-aracne-emerald bg-aracne-emerald/10 border border-aracne-emerald/20 px-4 py-2 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-aracne-emerald animate-pulse" />
              Asesoría de IA · Cataluña y España
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
                <span className="text-white block">{h.line1}</span>
                <span className="text-gradient block">{h.line2}</span>
              </h1>
              <p className="text-lg text-white/50 max-w-md leading-relaxed">
                {h.subtitle}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold text-base h-12 px-7 glow-emerald-sm transition-all"
              >
                <Link href="/servicios">
                  {h.cta_primary} <ArrowRight size={16} className="ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/15 bg-white/5 text-white hover:bg-white/10 hover:border-white/25 text-base h-12 px-7 backdrop-blur-sm"
              >
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle size={16} className="mr-2 text-[#25D366]" />
                  {h.cta_secondary}
                </a>
              </Button>
            </div>

            {/* Trust signal */}
            <p className="text-xs text-white/30 flex items-center gap-2">
              <span className="inline-block w-6 h-px bg-aracne-emerald/50" />
              Powered by Claude AI · WhatsApp Business API · Unelia CRM
            </p>
          </div>

          {/* Right: neural network illustration */}
          <div className="relative w-full aspect-[7/6] lg:aspect-auto lg:h-[460px]">
            {/* Glow behind illustration */}
            <div className="absolute inset-0 bg-aracne-emerald/5 rounded-2xl blur-xl" />
            <NeuralNetwork />
          </div>
        </div>
      </div>
    </section>
  )
}
