import Link from 'next/link'
import { ArrowRight, MessageCircle } from 'lucide-react'
import type { getDict } from '@/lib/i18n'

type Dict = Awaited<ReturnType<typeof getDict>>

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface HeroSectionProps {
  dict: Dict
}

/* SVG abstract 3-D shape inspired by Neurai's organic forms */
function AbstractShape() {
  return (
    <svg
      viewBox="0 0 520 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="orb1" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#6832C5" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#6832C5" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orb2" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#A78BFA" stopOpacity="0.12" />
          <stop offset="100%" stopColor="#A78BFA" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="sphere" cx="40%" cy="35%" r="60%">
          <stop offset="0%" stopColor="#E5D8FF" />
          <stop offset="45%" stopColor="#C4A8F0" />
          <stop offset="100%" stopColor="#6832C5" />
        </radialGradient>
        <radialGradient id="sphere2" cx="35%" cy="30%" r="55%">
          <stop offset="0%" stopColor="#F0E8FF" />
          <stop offset="50%" stopColor="#DDD0FF" />
          <stop offset="100%" stopColor="#B8A0E8" />
        </radialGradient>
        <filter id="soft-blur">
          <feGaussianBlur stdDeviation="8" />
        </filter>
        <filter id="drop">
          <feDropShadow dx="0" dy="20" stdDeviation="30" floodColor="#6832C5" floodOpacity="0.15"/>
        </filter>
      </defs>

      {/* Background orbs */}
      <ellipse cx="300" cy="220" rx="220" ry="200" fill="url(#orb1)" />
      <ellipse cx="180" cy="320" rx="160" ry="140" fill="url(#orb2)" />

      {/* Main glass sphere */}
      <ellipse cx="310" cy="210" rx="130" ry="130" fill="url(#sphere)" filter="url(#drop)" opacity="0.9"/>

      {/* Highlight on sphere */}
      <ellipse cx="272" cy="168" rx="38" ry="28" fill="white" opacity="0.35" transform="rotate(-20 272 168)" />

      {/* Secondary sphere */}
      <ellipse cx="168" cy="310" rx="72" ry="72" fill="url(#sphere2)" opacity="0.8" />
      <ellipse cx="150" cy="292" rx="18" ry="14" fill="white" opacity="0.4" transform="rotate(-15 150 292)" />

      {/* Small accent circles */}
      <circle cx="430" cy="120" r="28" fill="#6832C5" opacity="0.12" />
      <circle cx="430" cy="120" r="14" fill="#6832C5" opacity="0.18" />
      <circle cx="430" cy="120" r="6" fill="#6832C5" opacity="0.5" />

      <circle cx="80" cy="160" r="20" fill="#A78BFA" opacity="0.15" />
      <circle cx="80" cy="160" r="10" fill="#A78BFA" opacity="0.2" />

      <circle cx="460" cy="340" r="36" fill="#6832C5" opacity="0.08" />
      <circle cx="460" cy="340" r="18" fill="#6832C5" opacity="0.12" />

      {/* Floating stat card */}
      <g transform="translate(52, 190)">
        <rect width="140" height="64" rx="14" fill="white" stroke="#E8E8E8" strokeWidth="1" filter="url(#drop)" opacity="0.95"/>
        <circle cx="24" cy="32" r="16" fill="#6832C5" opacity="0.12" />
        <circle cx="24" cy="32" r="8" fill="#6832C5" opacity="0.6" />
        <rect x="50" y="18" width="74" height="8" rx="4" fill="#141414" opacity="0.12" />
        <rect x="50" y="32" width="54" height="6" rx="3" fill="#9CA2A8" opacity="0.35" />
        <rect x="50" y="44" width="40" height="5" rx="2.5" fill="#6832C5" opacity="0.4" />
      </g>

      {/* Floating tag card */}
      <g transform="translate(350, 340)">
        <rect width="130" height="52" rx="12" fill="white" stroke="#E8E8E8" strokeWidth="1" filter="url(#drop)" opacity="0.95"/>
        <rect x="12" y="14" width="46" height="8" rx="4" fill="#6832C5" opacity="0.2" />
        <rect x="12" y="28" width="106" height="5" rx="2.5" fill="#9CA2A8" opacity="0.3" />
        <rect x="12" y="38" width="70" height="5" rx="2.5" fill="#9CA2A8" opacity="0.2" />
      </g>

      {/* Connection dots */}
      {[
        [200, 100], [380, 90], [490, 200], [140, 400],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r="4" fill="#6832C5" opacity="0.25" />
      ))}
    </svg>
  )
}

export default function HeroSection({ dict }: HeroSectionProps) {
  const h = dict.hero
  return (
    <section className="bg-aracne-bg section-padding overflow-hidden">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left: text */}
          <div className="space-y-8 max-w-xl">
            {/* Label */}
            <p className="label-tag">Bienvenidos a Aracne</p>

            {/* Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl leading-[1.15] tracking-tight text-aracne-text">
              {h.line1}{' '}
              <span className="text-gradient">{h.line2}</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-aracne-body leading-relaxed max-w-md">
              {h.subtitle}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/servicios" className="btn-purple">
                {h.cta_primary} <ArrowRight size={16} />
              </Link>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <MessageCircle size={16} className="text-[#25D366]" />
                {h.cta_secondary}
              </a>
            </div>

            {/* Trust signal */}
            <div className="flex items-center gap-3 pt-2">
              {/* Avatar stack */}
              <div className="flex -space-x-2">
                {['#6832C5','#8B5CF6','#A78BFA','#C4B5FD'].map((c, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center text-white text-xs font-medium"
                    style={{ backgroundColor: c, zIndex: 10 - i }}
                  >
                    {['R','U','M','P'][i]}
                  </div>
                ))}
              </div>
              <p className="text-sm text-aracne-muted">
                <span className="text-aracne-text font-medium">6+ clientes</span> confían en Aracne
              </p>
            </div>
          </div>

          {/* Right: abstract 3-D illustration */}
          <div className="relative w-full aspect-square lg:aspect-auto lg:h-[520px] flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-radial from-aracne-purple-light/60 to-transparent rounded-3xl" />
            <AbstractShape />
          </div>
        </div>
      </div>
    </section>
  )
}
