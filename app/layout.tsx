import type { Metadata } from 'next'
import { Questrial } from 'next/font/google'
import { cookies } from 'next/headers'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'
import { Toaster } from '@/components/ui/toaster'
import { getDict, getLocaleFromCookie } from '@/lib/i18n'

const questrial = Questrial({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-questrial',
  display: 'swap',
})

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aracneconsulting.com'

export const metadata: Metadata = {
  title: {
    default: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    template: '%s | Aracne Consulting',
  },
  description:
    'Aracne Consulting — Asesoría de IA para empresas en Cataluña. Apps a medida, agentes WhatsApp, automatización y CRM Enterprise. Tarragona y toda España.',
  keywords: [
    'asesoría IA empresas Cataluña',
    'agente WhatsApp IA Barcelona',
    'automatización empresas Catalunya',
    'desarrollo apps IA España',
    'agentes inteligencia artificial',
    'automatización procesos empresas',
    'CRM enterprise IA',
    'marketing digital IA',
    'IA para empresas España',
    'consultoría IA Tarragona',
  ],
  authors: [{ name: 'Aracne Consulting' }],
  creator: 'Aracne Consulting',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: SITE_URL,
    siteName: 'Aracne Consulting',
    title: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    description:
      'Apps a medida, agentes WhatsApp con IA, automatización de procesos y CRM Enterprise para empresas en Cataluña y España.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aracne Consulting — IA para empresas en Cataluña',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    description:
      'Apps a medida, agentes WhatsApp IA, automatización y CRM Enterprise. Tarragona y toda España.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Aracne Consulting',
  description:
    'Asesoría de inteligencia artificial para empresas en Cataluña y España. Apps a medida, agentes WhatsApp IA, automatización de procesos y CRM Enterprise.',
  url: SITE_URL,
  telephone: '+34676269655',
  email: 'hola@aracneconsulting.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Tarragona',
    addressRegion: 'Cataluña',
    addressCountry: 'ES',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 41.1189,
    longitude: 1.2445,
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Cataluña' },
    { '@type': 'Country', name: 'España' },
  ],
  serviceType: [
    'Asesoría IA empresas',
    'Desarrollo apps con IA',
    'Agentes WhatsApp IA',
    'Automatización de procesos',
    'CRM Enterprise',
    'Marketing digital IA',
  ],
  sameAs: [
    'https://linkedin.com/company/aracne-consulting',
  ],
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const cookieStore = await cookies()
  const localeCookie = cookieStore.get('NEXT_LOCALE')?.value
  const locale = getLocaleFromCookie(localeCookie)
  const dict = await getDict()

  return (
    <html lang={locale} className={questrial.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* <!-- GSC_VERIFICATION_CODE --> */}
        {/* <!-- GA_MEASUREMENT_ID --> */}
        {/* <!-- META_PIXEL_CODE --> */}
      </head>
      <body>
        <Navbar locale={locale} />
        <main className="pt-16">{children}</main>
        <Footer dict={dict} />
        <WhatsAppButton />
        <Toaster />
      </body>
    </html>
  )
}
