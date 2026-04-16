'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/servicios', labelEs: 'Servicios', labelEn: 'Services' },
  { href: '/casos', labelEs: 'Casos', labelEn: 'Cases' },
  { href: '/blog', labelEs: 'Blog', labelEn: 'Blog' },
  { href: '/empresa', labelEs: 'Empresa', labelEn: 'Company' },
  { href: '/contacto', labelEs: 'Contacto', labelEn: 'Contact' },
]

const WA_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? '34676269655'

interface NavbarProps {
  locale: 'es' | 'en'
}

export default function Navbar({ locale }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 8)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const setLocale = (l: 'es' | 'en') => {
    document.cookie = `NEXT_LOCALE=${l};path=/;max-age=31536000`
    window.location.reload()
  }

  const label = (link: (typeof navLinks)[0]) =>
    locale === 'en' ? link.labelEn : link.labelEs

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-aracne-bg/95 backdrop-blur-md border-b border-white/10 shadow-[0_1px_20px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-white/5',
      )}
    >
      <nav className="container-narrow flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Aracne Consulting"
            width={190}
            height={38}
            priority
            className="brightness-0 invert"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const active = pathname === link.href || pathname.startsWith(link.href + '/')
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm font-medium rounded-md transition-colors',
                    active
                      ? 'text-aracne-emerald'
                      : 'text-white/50 hover:text-white',
                  )}
                >
                  {label(link)}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Desktop right */}
        <div className="hidden md:flex items-center gap-3">
          {/* Language toggle */}
          <div className="flex items-center gap-0.5 text-xs text-white/40">
            <button
              onClick={() => setLocale('es')}
              className={cn(
                'px-2 py-1 rounded transition-colors font-medium',
                locale === 'es' ? 'text-aracne-emerald' : 'hover:text-white/70',
              )}
            >
              ES
            </button>
            <span className="text-white/20">|</span>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                'px-2 py-1 rounded transition-colors font-medium',
                locale === 'en' ? 'text-aracne-emerald' : 'hover:text-white/70',
              )}
            >
              EN
            </button>
          </div>

          <Button
            asChild
            size="sm"
            className="bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold glow-emerald-sm"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {locale === 'en' ? 'Talk to us' : 'Hablar con nosotros'}
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-white/70 hover:text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-aracne-bg/98 backdrop-blur-md border-b border-white/10 px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const active = pathname === link.href
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block px-3 py-2.5 rounded-md text-sm font-medium transition-colors',
                      active
                        ? 'text-aracne-emerald bg-aracne-emerald/10'
                        : 'text-white/50 hover:text-white hover:bg-white/5',
                    )}
                  >
                    {label(link)}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3 mb-4 pt-2 border-t border-white/10">
            <button
              onClick={() => setLocale('es')}
              className={cn(
                'text-sm px-3 py-1.5 rounded border font-medium',
                locale === 'es'
                  ? 'border-aracne-emerald text-aracne-emerald bg-aracne-emerald/10'
                  : 'border-white/20 text-white/50',
              )}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                'text-sm px-3 py-1.5 rounded border font-medium',
                locale === 'en'
                  ? 'border-aracne-emerald text-aracne-emerald bg-aracne-emerald/10'
                  : 'border-white/20 text-white/50',
              )}
            >
              EN
            </button>
          </div>
          <Button
            asChild
            className="w-full bg-aracne-emerald hover:bg-aracne-emerald/90 text-white font-semibold"
          >
            <a
              href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
            >
              {locale === 'en' ? 'Talk to us' : 'Hablar con nosotros'}
            </a>
          </Button>
        </div>
      )}
    </header>
  )
}
