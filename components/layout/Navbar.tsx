'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', labelEs: 'Inicio', labelEn: 'Home' },
  { href: '/empresa', labelEs: 'Nosotros', labelEn: 'About' },
  { href: '/servicios', labelEs: 'Servicios', labelEn: 'Services' },
  { href: '/casos', labelEs: 'Casos', labelEn: 'Cases' },
  { href: '/blog', labelEs: 'Blog', labelEn: 'Blog' },
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
        'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
        scrolled ? 'shadow-[0_1px_12px_rgba(0,0,0,0.06)]' : 'border-b border-aracne-border',
      )}
    >
      <nav className="container-narrow flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.svg"
            alt="Aracne Consulting"
            width={160}
            height={32}
            priority
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const active = link.href === '/'
              ? pathname === '/'
              : pathname.startsWith(link.href)
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'px-4 py-2 text-sm transition-colors rounded-lg',
                    active
                      ? 'text-aracne-purple font-medium'
                      : 'text-aracne-body hover:text-aracne-text',
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
          <div className="flex items-center gap-0.5 text-xs text-aracne-muted">
            <button
              onClick={() => setLocale('es')}
              className={cn(
                'px-2 py-1 rounded transition-colors font-medium',
                locale === 'es' ? 'text-aracne-purple' : 'hover:text-aracne-text',
              )}
            >
              ES
            </button>
            <span className="text-aracne-border">|</span>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                'px-2 py-1 rounded transition-colors font-medium',
                locale === 'en' ? 'text-aracne-purple' : 'hover:text-aracne-text',
              )}
            >
              EN
            </button>
          </div>

          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-purple text-sm py-2.5 px-5"
          >
            {locale === 'en' ? 'Get Started' : 'Empezar'}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-aracne-body hover:text-aracne-text"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-b border-aracne-border px-4 pb-6 pt-2">
          <ul className="flex flex-col gap-1 mb-4">
            {navLinks.map((link) => {
              const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href)
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className={cn(
                      'block px-3 py-2.5 rounded-lg text-sm transition-colors',
                      active
                        ? 'text-aracne-purple bg-aracne-purple-light font-medium'
                        : 'text-aracne-body hover:text-aracne-text hover:bg-aracne-surface',
                    )}
                  >
                    {label(link)}
                  </Link>
                </li>
              )
            })}
          </ul>
          <div className="flex items-center gap-3 mb-4 pt-3 border-t border-aracne-border">
            <button
              onClick={() => setLocale('es')}
              className={cn(
                'text-sm px-3 py-1.5 rounded-full border font-medium',
                locale === 'es'
                  ? 'border-aracne-purple text-aracne-purple bg-aracne-purple-light'
                  : 'border-aracne-border text-aracne-muted',
              )}
            >
              ES
            </button>
            <button
              onClick={() => setLocale('en')}
              className={cn(
                'text-sm px-3 py-1.5 rounded-full border font-medium',
                locale === 'en'
                  ? 'border-aracne-purple text-aracne-purple bg-aracne-purple-light'
                  : 'border-aracne-border text-aracne-muted',
              )}
            >
              EN
            </button>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=Hola%2C%20he%20visto%20vuestra%20web%20y%20me%20interesa%20saber%20m%C3%A1s%20sobre%20vuestros%20servicios%20de%20IA`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMenuOpen(false)}
            className="btn-purple w-full justify-center text-sm"
          >
            {locale === 'en' ? 'Get Started' : 'Empezar ahora'}
          </a>
        </div>
      )}
    </header>
  )
}
