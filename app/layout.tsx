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

export const metadata: Metadata = {
  title: {
    default: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    template: '%s | Aracne Consulting',
  },
  description:
    'Asesoría de IA para empresas en Cataluña y España. Apps a medida, agentes WhatsApp IA, automatización de procesos y marketing inteligente.',
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
  ],
  authors: [{ name: 'Aracne Consulting' }],
  creator: 'Aracne Consulting',
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? 'https://aracneconsulting.com',
  ),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    alternateLocale: 'en_US',
    url: '/',
    siteName: 'Aracne Consulting',
    title: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    description:
      'Asesoría de IA para empresas en Cataluña y España. Apps, agentes WhatsApp IA, automatización y marketing inteligente.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Aracne Consulting' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aracne Consulting — Asesoría de IA para empresas en Cataluña',
    description: 'Asesoría IA empresas Cataluña: agentes WhatsApp, automatización y apps a medida.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
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
      {/* <!-- GSC_VERIFICATION_CODE --> */}
      {/* <!-- GA_MEASUREMENT_ID --> */}
      {/* <!-- META_PIXEL_CODE --> */}
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
